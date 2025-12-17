"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type ClientMovie = {
  rank: number;
  title: string;
  year: number | string;
  overview: string | null;
  poster: string | null;
};

const shell = "mx-auto w-full max-w-6xl px-4 sm:px-6";
const LS_KEY = "rafid_movies_seen";

export default function MoviesClient({ movies }: { movies: ClientMovie[] }) {
  const [seen, setSeen] = useState<Set<number>>(new Set());
  const [hideSeen, setHideSeen] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) return;
    try {
      const parsed = JSON.parse(raw) as number[];
      setSeen(new Set(parsed));
    } catch {
      /* noop */
    }
  }, []);

  const persistSeen = (next: Set<number>) => {
    if (typeof window === "undefined") return;
    localStorage.setItem(LS_KEY, JSON.stringify(Array.from(next)));
  };

  const toggleSeen = (rank: number) => {
    setSeen((prev) => {
      const next = new Set(prev);
      if (next.has(rank)) {
        next.delete(rank);
      } else {
        next.add(rank);
      }
      persistSeen(next);
      return next;
    });
  };

  const filtered = useMemo(
    () => (hideSeen ? movies.filter((m) => !seen.has(m.rank)) : movies),
    [hideSeen, movies, seen]
  );

  const unseenCount = movies.length - seen.size;

  return (
    <div className="min-h-screen bg-black text-white py-10">
      <div className={`${shell} space-y-8`}>
        <header className="flex flex-col gap-3">
          <div className="flex items-center gap-2 text-sm text-orange-200/80">
            <span className="h-2 w-2 rounded-full bg-orange-400" />
            <span>rafidhoda.com · Movies</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">I Love Movies</h1>
          <p className="text-lg text-zinc-300 max-w-3xl">
            It's no secret that I'm a movie lover. I've seen thousands of films, but this is my top 100 ranked list.
            These movies have shaped my life and helped me through some tough times.
          </p>
          <p className="text-sm text-zinc-400 max-w-3xl">
            If you're looking for recommendations, tap the movies you've already seen. We'll hide those and leave you
            with the ones I love that you haven't watched yet.
          </p>
          <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-300">
            <button
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/70 px-3 py-2 hover:border-orange-400 transition-colors cursor-pointer"
              onClick={() => setHideSeen((v) => !v)}
            >
              {hideSeen ? "Showing unseen only" : "Showing all"}
            </button>
            <span className="text-zinc-500">Unseen: {unseenCount} · Seen: {seen.size}</span>
            <button
              className="text-orange-200 hover:text-orange-100 text-sm underline underline-offset-4 cursor-pointer"
              onClick={() => {
                const next = new Set<number>();
                setSeen(next);
                persistSeen(next);
              }}
            >
              Reset seen
            </button>
          </div>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((movie) => (
            <div
              key={movie.rank}
              onClick={() => toggleSeen(movie.rank)}
              className="rounded-xl border border-zinc-800 bg-zinc-900/80 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.35)] flex flex-col cursor-pointer transition-colors hover:border-orange-400/50"
            >
              {movie.poster ? (
                <div className="relative aspect-[2/3] w-full">
                  <Image
                    src={movie.poster}
                    alt={movie.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={movie.rank <= 12}
                  />
                  <div className="absolute top-2 left-2 bg-black/70 text-white text-sm md:text-base px-2.5 py-1 rounded-full border border-zinc-800 font-semibold">
                    #{movie.rank}
                  </div>
                </div>
              ) : (
                <div className="aspect-[2/3] w-full bg-zinc-800 flex items-center justify-center text-zinc-600 text-sm relative">
                  <span className="absolute top-2 left-2 bg-black/70 text-white text-sm md:text-base px-2.5 py-1 rounded-full border border-zinc-800 font-semibold">
                    #{movie.rank}
                  </span>
                  No poster
                </div>
              )}

              <div className="p-4 flex flex-col gap-3 flex-1">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">{movie.year}</p>
                    <h3 className="text-lg font-semibold text-white leading-tight">{movie.title}</h3>
                  </div>
                  {seen.has(movie.rank) && (
                    <span className="text-xs font-semibold text-green-300 bg-green-900/40 border border-green-800 px-2 py-1 rounded-full">
                      Seen
                    </span>
                  )}
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed line-clamp-4">
                  {movie.overview || "Overview pending TMDB lookup."}
                </p>
                <p className="text-xs text-zinc-500">Tap to toggle seen</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

