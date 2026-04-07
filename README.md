shopsherpa

basically an ai fraud detector for when ur shopping online. you just point your camera at stuff and it checks like 1800 different fraud signals and gives u a score so u dont get scammed. built this with claude ai and node js.

what is does
camera scanning: scan products in real-time
fraud scores: gives u a rating + analysis from claude
seller risk: tells u if the seller is sketchy or not
scam feed: shows u what new scams are going around
pro version: theres a freemium thing where u can pay for unlimited scans (its free just dont steal)

how to run it

1. clone the repo
2. get an api key from anthropic
3. make a .env file and put CLAUDE_KEY=your_api_key_here in it  (Yea I know claude)
4. run npm install then node server.js
5. go to http://localhost:8080 (Larp final boss)

note: the camera only works on localhost, it wont work if u just double click the html file.

tech stuff

frontend: just  html/css/js
backend: node.js (didnt feel like using a framework)
ai: claude haiku (its buns ngl)

license

ask me 
