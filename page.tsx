import { WaitlistForm } from "@/components/WaitlistForm";
import { PreorderButton } from "@/components/PreorderButton";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1f2d] pb-20">
      {/* SECTION 1 — HERO (deep teal block) */}
      <section className="bg-[#2e6273] text-white relative overflow-hidden">
        {/* Top nav */}
        <header className="relative z-20 px-6 md:px-10 py-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Logo />
            <span className="font-semibold text-lg tracking-tight">ShopSherpa</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#manifesto" className="hover:text-white transition">Manifesto</a>
            <a href="#founder" className="hover:text-white transition">Founder</a>
            <a href="#stories" className="hover:text-white transition">Stories</a>
            <a href="#plus" className="hover:text-white transition">Plus</a>
          </nav>
          <a
            href="#preorder"
            className="text-sm font-medium px-5 py-2.5 rounded-full bg-black text-white hover:bg-black/80 transition flex items-center gap-2"
          >
            <span className="size-1.5 rounded-full bg-[#1d9e75]" />
            Pre-order
          </a>
        </header>

        {/* Hero content */}
        <div className="relative z-10 px-6 md:px-10 pt-16 pb-32 md:pt-24 md:pb-48 text-center">
          <h1 className="text-[4rem] md:text-[8rem] leading-[0.95] font-medium tracking-tighter max-w-5xl mx-auto">
            Shopping security,<br />redesigned.
          </h1>
          <p className="mt-8 text-base md:text-lg max-w-md mx-auto text-white/70 leading-relaxed">
            We're building the safety layer of online shopping. For families, for individuals, for everyone who still feels nervous at checkout.
          </p>
        </div>

        {/* Floating shapes */}
        <FloatingHeroShapes />
      </section>

      {/* SECTION 2 — Manifesto (dark navy block) */}
      <section id="manifesto" className="bg-[#0d1f2d] text-white px-6 md:px-10 py-32 md:py-48 relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 relative">
          <div>
            <h2 className="text-5xl md:text-7xl font-medium tracking-tighter leading-[0.95]">
              We're building the future of safe shopping.
            </h2>

            {/* Center cube + sphere */}
            <div className="mt-16 md:mt-24 hidden md:block">
              <CubeSphereGraphic />
            </div>
          </div>

          <div className="space-y-16 md:pt-16">
            <div>
              <h3 className="text-xl font-medium mb-4 text-white">Focus on you.</h3>
              <p className="text-white/60 leading-relaxed text-sm">
                You shop differently than everyone else. ShopSherpa adapts to that. We learn what you trust, what you don't, and we get out of the way unless something feels wrong. No nagging. No theater. Just protection that fits your patterns.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4 text-white">Private by design.</h3>
              <p className="text-white/60 leading-relaxed text-sm">
                Your shopping is personal. Your inbox is personal. We built ShopSherpa with end-to-end encryption from day one. We can't sell what we never see, and we don't see your data. Safety should never cost you privacy.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile cube */}
        <div className="md:hidden mt-16 flex justify-center">
          <CubeSphereGraphic />
        </div>
      </section>

      {/* SECTION 3 — Founder (warm linen block) */}
      <section id="founder" className="bg-[#F4F0E8] text-[#1a1a1a] px-6 md:px-10 py-32 md:py-48">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl md:text-8xl font-medium tracking-tighter text-[#2e6273] mb-16 md:mb-24">
            Founder
          </h2>

          <div className="grid md:grid-cols-[1fr_auto_1.5fr] gap-12 md:gap-16 items-start">
            {/* Left: name */}
            <div className="border-b-2 border-[#2e6273] pb-3">
              <p className="text-2xl font-medium">Anghelo Araujo</p>
            </div>

            {/* Center: photo placeholder */}
            <div className="size-48 md:size-56 rounded-full bg-[#e8dfc8] flex items-center justify-center text-[#2e6273] font-mono text-sm overflow-hidden border border-[#2e6273]/10">
              {/* Replace with actual photo via next/image */}
              <span className="opacity-50">photo</span>
            </div>

            {/* Right: bio */}
            <div>
              <p className="text-xs uppercase tracking-wider text-[#2e6273] mb-3 font-mono">About</p>
              <p className="text-[#1a1a1a]/80 leading-relaxed text-sm">
                Anghelo is a high school sophomore at Nashua South building ShopSherpa from his bedroom. He's been obsessed with online fraud since middle school, when his mom almost lost $400 to a fake delivery email. He's been quietly building, talking to users, and shipping ever since. ShopSherpa has 2,000 beta users and has stopped $14,000 in scams across its first four months.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — Stories (dark navy block) */}
      <section id="stories" className="bg-[#0d1f2d] text-white px-6 md:px-10 py-32 md:py-48 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl md:text-8xl font-medium tracking-tighter text-[#1d9e75] mb-16 md:mb-24 text-center">
            Real saves,<br />real money.
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <StoryCard
              source="Last Tuesday"
              title="Maria almost paid $312 for a package she didn't order."
            />
            <StoryCard
              source="Two weeks ago"
              title="Devin caught a fake Amazon page with a $3 markup on a $200 order."
            />
          </div>

          {/* Mailbox-style decoration */}
          <div className="mt-24 flex justify-center">
            <MailboxGraphic />
          </div>
        </div>
      </section>

      {/* SECTION 5 — What's coming (warm linen block) */}
      <section id="plus" className="bg-[#F4F0E8] text-[#1a1a1a] px-6 md:px-10 py-32 md:py-48">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl md:text-8xl font-medium tracking-tighter text-[#2e6273] mb-4 max-w-3xl">
            Building Plus<br />this summer.
          </h2>
          <p className="text-[#1a1a1a]/60 max-w-md mb-16 md:mb-24">
            We're extending ShopSherpa beyond shopping. Into your inbox. Into your saved logins. Into every checkout you'll ever make.
          </p>

          <div className="grid md:grid-cols-[1.5fr_2fr] gap-12 md:gap-16 items-start">
            {/* Left: benefits list */}
            <div>
              <p className="text-xs uppercase tracking-wider text-[#2e6273] mb-6 font-mono">Coming in Plus</p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3"><Dot /><span>Phishing shield for Gmail and Outlook</span></li>
                <li className="flex items-start gap-3"><Dot /><span>Password vault with breach alerts</span></li>
                <li className="flex items-start gap-3"><Dot /><span>Masked card numbers per merchant</span></li>
                <li className="flex items-start gap-3"><Dot /><span>Unlimited scans across every site</span></li>
                <li className="flex items-start gap-3"><Dot /><span>Priority support</span></li>
                <li className="flex items-start gap-3"><Dot /><span>Beta access starts July 2026</span></li>
              </ul>
            </div>

            {/* Right: pricing rows */}
            <div className="space-y-3">
              <RoleRow
                title="Plus — Lifetime"
                price="$9.99"
                note="One-time. First 500 only. 184 left."
              />
              <RoleRow
                title="Plus — Monthly"
                price="$14.99/mo"
                note="At launch."
                muted
              />

              <div id="preorder" className="pt-4">
                <PreorderButton />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — CTA (green block) */}
      <section className="bg-[#1d9e75] text-white px-6 md:px-10 py-32 md:py-48 relative overflow-hidden">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-6xl md:text-8xl font-medium tracking-tighter leading-[0.95]">
            Be the first<br />to know.
          </h2>
          <p className="mt-8 mb-12 text-white/80 max-w-md mx-auto">
            One email when Plus launches. One if the lifetime tier is about to sell out. Nothing else.
          </p>

          <div className="max-w-md mx-auto">
            <WaitlistForm />
          </div>

          <p className="mt-8 text-xs text-white/60 font-mono">
            Definitely don't press this big green button.
          </p>
        </div>

        {/* Decorative shape */}
        <div className="absolute -bottom-32 -right-32 size-96 rounded-full bg-white/5" />
        <div className="absolute -top-24 -left-24 size-72 rounded-full bg-white/5" />
      </section>

      {/* Sticky bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-black text-white px-6 py-3 flex items-center justify-between text-xs">
        <div className="flex items-center gap-6 text-white/70">
          <a href="https://twitter.com/shopsherpa" className="hover:text-white transition">Twitter</a>
          <a href="#preorder" className="hover:text-white transition">Pre-order</a>
          <a href="/privacy" className="hover:text-white transition hidden sm:inline">Privacy</a>
        </div>
        <div className="flex items-center gap-2">
          <Logo small />
          <span className="font-medium">ShopSherpa</span>
        </div>
        <div className="text-white/50 text-xs hidden sm:block">© 2026</div>
      </div>
    </main>
  );
}

/* ─────── COMPONENTS ─────── */

function Logo({ small }: { small?: boolean }) {
  return (
    <div
      className={`${
        small ? "size-6 text-xs" : "size-8 text-sm"
      } rounded-lg bg-white text-[#2e6273] flex items-center justify-center font-serif font-semibold`}
    >
      SS
    </div>
  );
}

function Dot() {
  return <span className="size-1.5 rounded-full bg-[#2e6273] mt-2 shrink-0" />;
}

function StoryCard({ source, title }: { source: string; title: string }) {
  return (
    <div className="bg-[#142736] border border-white/10 rounded-2xl p-8">
      <p className="text-xs uppercase tracking-wider text-white/40 font-mono mb-4">{source}</p>
      <p className="text-xl md:text-2xl leading-snug font-medium">{title}</p>
      <button className="mt-6 inline-flex items-center gap-2 text-xs px-4 py-2 rounded-full bg-[#1d9e75] text-white hover:bg-[#167a5a] transition">
        Read more →
      </button>
    </div>
  );
}

function RoleRow({
  title,
  price,
  note,
  muted,
}: {
  title: string;
  price: string;
  note: string;
  muted?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between p-5 rounded-xl bg-white border border-[#2e6273]/10 ${
        muted ? "opacity-60" : ""
      }`}
    >
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-xs text-[#1a1a1a]/60 mt-1">{note}</p>
      </div>
      <p className="font-mono font-medium text-[#2e6273]">{price}</p>
    </div>
  );
}

function FloatingHeroShapes() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none opacity-90"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      {/* Shopping bag */}
      <g transform="translate(180 140) rotate(-8)">
        <rect x="0" y="40" width="100" height="120" rx="10" fill="#F4F0E8" stroke="white" strokeWidth="2" />
        <path d="M28 40 Q28 12 50 12 Q72 12 72 40" stroke="white" strokeWidth="3" fill="none" />
      </g>
      {/* Padlock */}
      <g transform="translate(950 120) rotate(12)">
        <rect x="0" y="40" width="80" height="68" rx="8" fill="#1d9e75" />
        <path d="M16 40 V24 Q16 4 40 4 Q64 4 64 24 V40" stroke="#1d9e75" strokeWidth="6" fill="none" />
        <circle cx="40" cy="74" r="5" fill="white" />
      </g>
      {/* Envelope */}
      <g transform="translate(880 540) rotate(-15)">
        <rect x="0" y="0" width="120" height="80" rx="6" fill="#1f4a58" stroke="white" strokeWidth="2" />
        <path d="M0 0 L60 50 L120 0" stroke="white" strokeWidth="2" fill="none" />
      </g>
      {/* Card */}
      <g transform="translate(120 540) rotate(8)">
        <rect x="0" y="0" width="140" height="90" rx="10" fill="#0d1f2d" stroke="white" strokeWidth="2" />
        <rect x="14" y="62" width="60" height="6" rx="2" fill="white" opacity="0.6" />
        <circle cx="118" cy="20" r="6" fill="#1d9e75" />
      </g>
      {/* Magnifier */}
      <g transform="translate(560 80) rotate(-20)">
        <circle cx="40" cy="40" r="36" stroke="white" strokeWidth="4" fill="#2e6273" />
        <line x1="68" y1="68" x2="100" y2="100" stroke="white" strokeWidth="6" strokeLinecap="round" />
      </g>
      {/* Shield */}
      <g transform="translate(560 600) rotate(6)">
        <path
          d="M0 0 L80 0 L80 50 Q80 90 40 110 Q0 90 0 50 Z"
          fill="#F4F0E8"
          stroke="white"
          strokeWidth="2"
        />
        <path d="M22 50 L36 64 L60 38" stroke="#1d9e75" strokeWidth="6" strokeLinecap="round" fill="none" />
      </g>
    </svg>
  );
}

function CubeSphereGraphic() {
  return (
    <svg viewBox="0 0 300 200" className="w-full max-w-sm">
      {/* Cube */}
      <g transform="translate(80 40)">
        <polygon points="0,40 60,10 120,40 60,70" fill="#2e6273" />
        <polygon points="0,40 0,120 60,150 60,70" fill="#1f4a58" />
        <polygon points="120,40 120,120 60,150 60,70" fill="#3a7a8c" />
      </g>
      {/* Sphere */}
      <circle cx="220" cy="140" r="32" fill="#1d9e75" />
      <ellipse cx="212" cy="130" rx="10" ry="6" fill="#2dbf8f" opacity="0.6" />
    </svg>
  );
}

function MailboxGraphic() {
  return (
    <svg viewBox="0 0 200 240" className="w-32 md:w-48 opacity-90">
      {/* Pole */}
      <rect x="92" y="120" width="16" height="120" fill="#F4F0E8" />
      {/* Box */}
      <path
        d="M30 60 Q30 30 60 30 L140 30 Q170 30 170 60 L170 130 L30 130 Z"
        fill="#F4F0E8"
        stroke="white"
        strokeWidth="2"
      />
      {/* Door */}
      <rect x="50" y="70" width="60" height="50" rx="4" fill="#0d1f2d" stroke="white" strokeWidth="1.5" />
      {/* Flag */}
      <rect x="170" y="50" width="20" height="14" fill="#1d9e75" />
    </svg>
  );
}
