import Link from "next/link";

const shell = "mx-auto w-full max-w-6xl px-4 sm:px-6";

const socials = [
  { label: "X", href: "https://x.com/rafidhoda" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rafidhoda/" },
  { label: "YouTube", href: "https://www.youtube.com/@rafidhoda" },
  { label: "Instagram", href: "https://www.instagram.com/rafidhoda" },
  { label: "TikTok", href: "https://www.tiktok.com/@rafidhoda" },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className={`${shell} py-14 space-y-10`}>
        <section className="space-y-4">
          <p className="text-sm uppercase tracking-[0.22em] text-orange-200/80">Rafid Hoda</p>
          <h1 className="text-4xl sm:text-5xl font-semibold leading-tight tracking-tight">Welcome to my corner of the internet.</h1>
          <p className="text-lg text-zinc-300 leading-relaxed max-w-3xl">
            Here you'll find content I've been producing over the years.
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: "Clips", href: "/clips", desc: "Short, punchy insights." },
            { label: "Reminders", href: "/reminders", desc: "Notes to myself." },
            { label: "Movies", href: "/movies", desc: "My favorite 100 films." },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group rounded-xl border border-zinc-800 bg-zinc-900/70 p-5 hover:border-orange-500/40 transition-colors"
            >
              <div className="flex items-center justify-between gap-3 mb-2">
                <h2 className="text-xl font-semibold text-white">{item.label}</h2>
                <span className="text-zinc-500 group-hover:text-orange-300 transition-colors text-sm">→</span>
              </div>
              <p className="text-sm text-zinc-400">{item.desc}</p>
            </Link>
          ))}
        </section>

        <section className="flex flex-wrap items-center gap-3 text-sm text-zinc-300">
          <span className="text-zinc-500">Find me on</span>
          {socials.map((s, idx) => (
            <div key={s.label} className="flex items-center gap-2">
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-zinc-800 bg-zinc-900/70 px-3 py-1.5 hover:border-orange-400 hover:text-white transition-colors"
              >
                {s.label}
              </a>
              {idx < socials.length - 1 && <span className="text-zinc-700">/</span>}
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
