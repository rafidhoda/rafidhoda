"use client";

import React from "react";
import Link from "next/link";
import { ClipPlayer } from "@/components/ClipPlayer";
import type { Clip } from "@/data/clips";

const shell = "mx-auto w-full max-w-6xl px-4 sm:px-6";

type Neighbor = Pick<Clip, "slug" | "title"> | null;

export default function ClipDetailClient({
  clip,
  prev,
  next,
}: {
  clip: Clip;
  prev: Neighbor;
  next: Neighbor;
}) {
  const [showTranscript, setShowTranscript] = React.useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <main className={`${shell} py-14 space-y-8`}>
        <div className="flex justify-start">
          <Link
            href="/clips"
            className="inline-flex items-center gap-2 text-sm text-orange-200 hover:text-orange-100 px-3 py-2 rounded-lg border border-zinc-800 bg-zinc-900/60 transition-colors"
          >
            <span className="text-lg">←</span>
            <span>Back to clips</span>
          </Link>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-8 sm:p-10 space-y-6">
          <div className="flex items-start justify-between gap-3">
            <div className="text-xs uppercase tracking-[0.2em] text-orange-200">Clip</div>
            <div className="flex items-center gap-3 text-sm uppercase tracking-[0.18em] text-zinc-500">
              <span>{clip.date}</span>
              {clip.duration ? <span className="text-zinc-400">• {clip.duration}</span> : null}
            </div>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">{clip.title}</h1>
            {clip.summary ? <p className="text-lg text-zinc-200 leading-relaxed">{clip.summary}</p> : null}
          </div>

          {clip.audioUrl ? (
            <ClipPlayer
              title={`Listen: ${clip.title}`}
              src={clip.audioUrl}
              links={[
                ...(clip.spotifyUrl ? [{ label: "Spotify", href: clip.spotifyUrl }] : []),
                ...(clip.youtubeUrl ? [{ label: "YouTube", href: clip.youtubeUrl }] : []),
              ]}
              transcriptAvailable={!!(clip.transcriptText || clip.transcriptUrl)}
              onTranscriptToggle={() => setShowTranscript((v) => !v)}
              transcriptVisible={showTranscript}
            />
          ) : (
            <p className="text-sm text-zinc-400">Audio coming soon.</p>
          )}

          {clip.article ? (
            <div className="pt-2 space-y-3">
              <div className="text-lg sm:text-xl text-zinc-100 leading-relaxed whitespace-pre-line">{clip.article}</div>
            </div>
          ) : null}

          {showTranscript ? (
            <div className="pt-4 space-y-3">
              <h2 className="text-lg font-semibold text-white">Transcript</h2>
              {clip.transcriptText ? (
                <div className="text-zinc-200 leading-relaxed whitespace-pre-line">{clip.transcriptText}</div>
              ) : clip.transcriptUrl ? (
                <Link
                  href={clip.transcriptUrl}
                  className="text-sm text-orange-200 hover:text-orange-100 underline underline-offset-4"
                  target="_blank"
                  rel="noreferrer"
                >
                  View transcript JSON
                </Link>
              ) : (
                <p className="text-sm text-zinc-400">Transcript coming soon.</p>
              )}
            </div>
          ) : null}
        </div>

        <div className="flex justify-between items-center pt-2">
          <div className="flex-1">
            {prev ? (
              <Link
                href={`/clips/${prev.slug}`}
                className="inline-flex items-center gap-2 text-sm text-orange-200 hover:text-orange-100 px-3 py-2 rounded-lg border border-zinc-800 bg-zinc-900/60 transition-colors"
              >
                <span className="text-lg">←</span>
                <span>{prev.title}</span>
              </Link>
            ) : (
              <span />
            )}
          </div>
          <div className="flex-1 text-right">
            {next ? (
              <Link
                href={`/clips/${next.slug}`}
                className="inline-flex items-center gap-2 text-sm text-orange-200 hover:text-orange-100 px-3 py-2 rounded-lg border border-zinc-800 bg-zinc-900/60 transition-colors"
              >
                <span>{next.title}</span>
                <span className="text-lg">→</span>
              </Link>
            ) : (
              <span />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

