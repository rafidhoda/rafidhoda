export default function AiBuildPage() {
  const shell = "mx-auto w-full max-w-6xl px-4 sm:px-6";

  return (
    <div className="min-h-screen bg-black text-white">
      <main className={`${shell} py-16 sm:py-24`}>
        <section className="space-y-6 sm:space-y-8">
          <p className="text-xs uppercase tracking-[0.22em] text-orange-200/80">How people actually build with AI</p>
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
              Build a working version of your idea in 90 minutes.
            </h1>
            <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed">
              AI is powerful—when you know how to guide it. In a live 90-minute session, we&apos;ll take your idea, shape it, and
              build a simple working version together. You&apos;ll see how I think, decide, and use AI in practice, without the
              hype.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="mailto:hello@rafidhoda.com?subject=AI%20Build%20Session"
              className="inline-flex items-center justify-center rounded-xl bg-white text-black px-5 py-3 text-sm font-semibold shadow-sm hover:opacity-90 transition"
            >
              Book a 90-minute session
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/60 px-5 py-3 text-sm font-semibold text-white hover:border-zinc-700 transition"
            >
              How this works
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-4xl pt-4">
            {[
              {
                title: "Real process",
                desc: "See the thinking, trade-offs, and prompts that make AI useful.",
              },
              {
                title: "Real output",
                desc: "Leave with a working, shareable version plus recording and transcript.",
              },
              {
                title: "Real next steps",
                desc: "Clarity on whether to hire, learn, or keep building yourself.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/50 px-4 py-5 space-y-2"
              >
                <p className="text-sm font-semibold text-white">{item.title}</p>
                <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

