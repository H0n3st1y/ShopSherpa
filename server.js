const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

const PORT = 8080;

// Load .env file manually (no extra dependencies)
try {
  const env = fs.readFileSync(path.join(__dirname, '.env'), 'utf8');
  env.split('\n').forEach(line => {
    const [k, ...v] = line.split('=');
    if (k && v.length) process.env[k.trim()] = v.join('=').trim();
  });
} catch (_) {}

const CLAUDE_KEY = process.env.CLAUDE_KEY;

const MIME = {
  '.html': 'text/html',
  '.js':   'application/javascript',
  '.css':  'text/css',
  '.json': 'application/json',
  '.png':  'image/png',
  '.svg':  'image/svg+xml',
  '.ico':  'image/x-icon',
  '.webp': 'image/webp',
};

function serveFile(res, filePath, contentType) {
  fs.readFile(filePath, (err, data) => {
    if (err) { res.writeHead(404); res.end('Not found'); return; }
    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': contentType.includes('javascript') || contentType.includes('json')
        ? 'no-cache' : 'public, max-age=3600',
      'Service-Worker-Allowed': '/'
    });
    res.end(data);
  });
}

function callClaude(imageBase64, callback) {
  const prompt = 'You are ShopSherpa AI fraud detection. Analyze this image and ALWAYS make your best guess at what the product is, even if blurry. Never refuse. Return ONLY raw JSON, no markdown, no backticks: {"productName":"best guess product name","brand":"brand or best guess","emoji":"one emoji","estimatedPrice":"$X-$Y","score":82,"verdict":"safe","checks":[{"s":"pass","t":"Reviews Authentic","d":"specific insight"},{"s":"pass","t":"Brand Verified","d":"specific insight"},{"s":"warn","t":"Price Check","d":"specific insight"},{"s":"pass","t":"Fraud Risk","d":"specific insight"}],"summary":"one sentence buying recommendation"}. Score: 90+=trusted brand, 70-89=safe, 50-69=caution, 30-49=risky, <30=likely fake. verdict=safe if >=70, warn if 40-69, danger if <40. If unclear, still guess and use score 60 verdict warn.';

  const body = JSON.stringify({
    model: 'claude-haiku-4-5',
    max_tokens: 600,
    messages: [{
      role: 'user',
      content: [
        { type: 'image', source: { type: 'base64', media_type: 'image/jpeg', data: imageBase64 } },
        { type: 'text', text: prompt }
      ]
    }]
  });

  const options = {
    hostname: 'api.anthropic.com',
    path: '/v1/messages',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': CLAUDE_KEY,
      'anthropic-version': '2023-06-01',
      'Content-Length': Buffer.byteLength(body)
    }
  };

  const req = https.request(options, (apiRes) => {
    let data = '';
    apiRes.on('data', (chunk) => data += chunk);
    apiRes.on('end', () => {
      if (apiRes.statusCode !== 200) {
        callback(new Error('Claude API error ' + apiRes.statusCode + ': ' + data.slice(0, 200)), null);
        return;
      }
      try {
        const parsed = JSON.parse(data);
        const text = parsed.content[0].text;
        const cleaned = text.replace(/```json/gi, '').replace(/```/g, '').trim();
        const match = cleaned.match(/\{[\s\S]*\}/);
        if (!match) { callback(new Error('No JSON in response'), null); return; }
        callback(null, JSON.parse(match[0]));
      } catch (e) {
        callback(new Error('Parse error: ' + e.message), null);
      }
    });
  });

  req.on('error', (e) => callback(new Error('Network error: ' + e.message), null));
  req.write(body);
  req.end();
}

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') { res.writeHead(204); res.end(); return; }

  if (req.method === 'POST' && req.url === '/api/scan') {
    let body = '';
    req.on('data', (chunk) => body += chunk);
    req.on('end', () => {
      try {
        const { image } = JSON.parse(body);
        if (!image) { res.writeHead(400); res.end(JSON.stringify({ error: 'No image' })); return; }
        callClaude(image, (err, result) => {
          if (err) {
            console.error('[scan error]', err.message);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: err.message }));
            return;
          }
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(result));
        });
      } catch (e) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Bad request: ' + e.message }));
      }
    });
    return;
  }

  const cleanUrl = req.url.split('?')[0];
  let filePath;

  // Named PWA file routes
  if (cleanUrl === '/' || cleanUrl === '/index.html') {
    filePath = path.join(__dirname, 'app.html');
  } else if (cleanUrl === '/sw.js') {
    filePath = path.join(__dirname, 'sw.js');
  } else if (cleanUrl === '/manifest.json') {
    filePath = path.join(__dirname, 'manifest.json');
  } else if (cleanUrl === '/icon.svg') {
    filePath = path.join(__dirname, 'icon.svg');
  } else {
    filePath = path.join(__dirname, cleanUrl);
  }

  const ext = path.extname(filePath) || '.html';
  serveFile(res, filePath, MIME[ext] || 'text/plain');
});

// Bind to 0.0.0.0 so your phone can reach it over WiFi
server.listen(PORT, '0.0.0.0', () => {
  const { networkInterfaces } = require('os');
  const nets = networkInterfaces();
  let localIP = 'YOUR_COMPUTER_IP';
  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      if (net.family === 'IPv4' && !net.internal) { localIP = net.address; break; }
    }
  }
  console.log('\n✅  ShopSherpa PWA is running!\n');
  console.log('💻  On this computer:  http://localhost:' + PORT);
  console.log('📱  On your iPhone:    http://' + localIP + ':' + PORT);
  console.log('\n📲  To install on iPhone:');
  console.log('    1. Open Safari on your iPhone');
  console.log('    2. Go to http://' + localIP + ':' + PORT);
  console.log('    3. Tap the Share button (box with arrow)');
  console.log('    4. Tap "Add to Home Screen"');
  console.log('    5. Tap Add — done!\n');
});
