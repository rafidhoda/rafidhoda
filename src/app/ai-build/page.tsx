export default function AiBuildPage() {
  const shell = "mx-auto w-full max-w-6xl px-4 sm:px-6";

  return (
    <div className="min-h-screen bg-black text-white">
      <main className={`${shell} py-16 sm:py-24`}>
        <section className="space-y-6 sm:space-y-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-400/50 bg-orange-500/10 px-3 py-1 text-[13px] font-semibold uppercase tracking-[0.18em] text-orange-100 shadow-[0_10px_30px_rgba(255,138,76,0.08)]">
            A hands-on session, not a course
          </span>
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight max-w-5xl">
              Build a working <br></br>first version of your idea<br></br> in 90 minutes
            </h1>
            <p className="text-[22px] sm:text-2xl text-zinc-200 leading-relaxed max-w-4xl">
              AI is powerful when you know how to guide it. In a private 90-minute session, we’ll take your idea, shape it, and build a simple working version together. You’ll see how I think, make decisions, and use AI in practice, so you leave with something real and a clear sense of what to do next.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="mailto:hello@rafidhoda.com?subject=AI%20Build%20Session"
              className="inline-flex items-center justify-center rounded-2xl bg-white text-black px-6 sm:px-8 py-4 sm:py-5 text-base sm:text-lg font-semibold shadow-sm hover:opacity-90 transition"
            >
              Book 90-minute session
            </a>
          </div>

          <section className="pt-10 sm:pt-12 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">What we can build together</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "Landing page", desc: "A real, publishable page for your product, idea, or waitlist." },
                { title: "Web app", desc: "A simple working app with real functionality and data." },
                { title: "Mobile app", desc: "A first version to test an idea quickly using modern tools." },
                { title: "Payments", desc: "Stripe setup, pricing logic, and a working checkout." },
                { title: "Integrations", desc: "APIs, databases, authentication, or third-party services." },
                { title: "Technical direction", desc: "Clear decisions on stack, tools, and next steps." },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 sm:p-5 shadow-sm hover:border-zinc-700 transition-colors"
                >
                  <p className="text-base sm:text-lg font-semibold text-white">{item.title}</p>
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mt-2">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-sm sm:text-base text-zinc-400">Not listed? Bring it anyway. We’ll figure it out.</p>
          </section>

          <section className="pt-14 sm:pt-16 mt-4 border-t border-zinc-900/70 space-y-5 max-w-4xl text-zinc-200 text-[22px] sm:text-2xl leading-relaxed">
            <p>
              Whether you’re thinking about entering the tech industry, hiring an agency to build your app, or looking for a technical co-founder, the landscape has changed dramatically over the last couple of years.
            </p>
            <p>
              I designed this session to demystify what building with AI actually looks like in practice. We don’t talk about tools in the abstract. We take your idea and build something real together. I use the same tools and approaches I use in my own work, and I explain how I think about trade-offs and decisions as we go.
            </p>
            <p>
              Courses can be useful. But there’s a big difference between watching someone explain things and <span className="font-semibold text-white">sitting next to an experienced builder while something real gets made.</span>
            </p>
          </section>

          <section className="pt-16 sm:pt-20 space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-semibold text-white">How the 90 minutes works</h2>
              <p className="text-sm text-zinc-500">No prep required. No long-term commitment.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {[
                { title: "Before the session", desc: "You bring an idea or a question. No preparation required. If you don’t have one yet, bring your curiosity—we can brainstorm at the start." },
                { title: "During the session", desc: "We build together using AI. I explain how I think, choose tools, and make decisions as we go." },
                { title: "By the end", desc: "You have a working first version and a clear understanding of what’s possible right now." },
                { title: "After the session", desc: "You receive the full recording and transcript to revisit anytime." },
              ].map((item, idx) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 sm:p-5 shadow-sm hover:border-zinc-700 transition-colors space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-zinc-500">Step {idx + 1}</span>
                  </div>
                  <p className="text-base sm:text-lg font-semibold text-white">{item.title}</p>
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}

