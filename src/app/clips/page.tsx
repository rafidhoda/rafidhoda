import Link from "next/link";
import { clips } from "@/data/clips";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const shell = "mx-auto w-full max-w-6xl px-4 sm:px-6";

export default function ClipsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className={`${shell} py-10 space-y-8`}>
        <div className="space-y-2">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">Clips</h1>
          <p className="text-zinc-400 max-w-3xl">
            Short, punchy insights. Listen to the clip or read the take.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {clips.map((clip) => (
            <Link
              key={clip.slug}
              href={`/clips/${clip.slug}`}
              className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-4 hover:border-orange-500/40 transition-colors"
            >
              <div className="flex items-center justify-between gap-3 mb-2">
                <div className="text-sm uppercase tracking-[0.18em] text-zinc-500">{clip.date}</div>
                {clip.duration ? (
                  <div className="text-xs font-medium text-zinc-400 bg-zinc-800/60 rounded-full px-2 py-1">
                    {clip.duration}
                  </div>
                ) : (
                  <div />
                )}
              </div>
              <h2 className="text-2xl font-semibold text-white mb-1 leading-tight">{clip.title}</h2>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

