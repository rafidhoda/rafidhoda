"use client";

import { useEffect, useRef, useState } from "react";

type ButtonVariant = "primary" | "subtle" | "ghost";
type BadgeTone = "accent" | "muted";

const accent = "from-orange-400 to-orange-500";
const accentSolid = "bg-orange-500";

const Section = ({
  title,
  children,
  subdued = false,
}: {
  title: string;
  children: React.ReactNode;
  subdued?: boolean;
}) => (
  <section
    className={`rounded-2xl border border-zinc-800 ${subdued ? "bg-zinc-950" : "bg-zinc-900"} p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)]`}
  >
    <div className="flex items-center justify-between gap-3 mb-6">
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-orange-400" />
        <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">{title}</h2>
      </div>
      <span className="h-px flex-1 bg-zinc-800" />
    </div>
    {children}
  </section>
);

const Button = ({
  children,
  variant = "primary",
  className = "",
}: {
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
}) => {
  const base =
    "inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-semibold transition-colors";
  const styles: Record<ButtonVariant, string> = {
    primary: `${accentSolid} text-white hover:bg-orange-400`,
    subtle: "bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-700",
    ghost: "text-zinc-300 hover:text-white border border-transparent hover:border-zinc-700",
  };
  return <button className={`${base} ${styles[variant]} ${className}`}>{children}</button>;
};

const Badge = ({
  children,
  tone = "muted",
}: {
  children: React.ReactNode;
  tone?: BadgeTone;
}) => {
  const styles: Record<BadgeTone, string> = {
    accent: "bg-orange-500/15 text-orange-200 border border-orange-500/30",
    muted: "bg-zinc-800 text-zinc-200 border border-zinc-700",
  };
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${styles[tone]}`}>
      {children}
    </span>
  );
};

const formatTime = (seconds: number) => {
  if (!isFinite(seconds)) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");
  return `${m}:${s}`;
};

const AudioPlayer = ({
  title,
  src,
  links = [],
}: {
  title: string;
  src: string;
  links?: { label: string; href: string }[];
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onLoaded = () => setDuration(audio.duration || 0);
    const onEnded = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("ended", onEnded);
    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    const ratio = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1);
    const newTime = ratio * duration;
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const progress = duration ? Math.min(currentTime / duration, 1) : 0;

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/80 p-4 sm:p-5 flex flex-col gap-3">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-1">Audio player</p>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={togglePlay}
          className="h-10 w-10 rounded-full bg-zinc-800 text-white flex items-center justify-center hover:bg-zinc-700 transition-colors"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <span className="inline-block h-4 w-4 border-l-2 border-r-2 border-white" />
          ) : (
            <span className="ml-0.5 inline-block h-0 w-0 border-y-[7px] border-y-transparent border-l-[10px] border-l-white" />
          )}
        </button>
        <div className="flex-1 space-y-1">
          <div
            className="h-3 rounded-full bg-zinc-800 overflow-hidden cursor-pointer"
            onClick={handleSeek}
          >
            <div
              className="h-full bg-indigo-500"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-zinc-500">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration || 0)}</span>
          </div>
        </div>
      </div>

      {links.length > 0 && (
        <div className="flex items-center gap-3 text-sm text-zinc-400">
          {links.map((link, idx) => (
            <div key={link.label} className="flex items-center gap-3">
              <a className="hover:text-white transition-colors" href={link.href}>
                {link.label}
              </a>
              {idx < links.length - 1 && <span className="text-zinc-700">•</span>}
            </div>
          ))}
        </div>
      )}

      <audio ref={audioRef} src={src} preload="metadata" className="hidden" />
    </div>
  );
};

const Card = ({
  title,
  meta,
  children,
}: {
  title: string;
  meta?: string;
  children: React.ReactNode;
}) => (
  <div className="rounded-xl border border-zinc-800 bg-zinc-900/80 p-4 sm:p-5 flex flex-col gap-3 relative overflow-hidden">
    <span className="absolute top-0 left-0 h-1 w-full bg-orange-500/70" />
    <div>
      <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">{meta}</p>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
    </div>
    <div className="text-sm text-zinc-300 leading-relaxed">{children}</div>
  </div>
);

const TextArea = ({ label }: { label: string }) => (
  <label className="flex flex-col gap-2">
    <span className="text-sm text-zinc-400">{label}</span>
    <textarea
      className="rounded-lg border border-zinc-800 bg-zinc-900 text-sm text-white px-3 py-2 min-h-[120px] focus:outline-none focus:border-indigo-500"
      defaultValue=""
    />
  </label>
);

export default function Playground() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-10">
        <section className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-6 sm:p-10 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
          <div className="space-y-6 max-w-3xl">
            <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-xs uppercase tracking-[0.25em] text-orange-200/80">
              Public brain · Internal system
            </p>
            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight tracking-tight">
              Building a calm operating system for ideas, reminders, and execution.
            </h1>
            <p className="text-lg text-zinc-300 leading-relaxed">
              This page is a playground: public content components, audio-first ideas, internal admin tooling, and
              future content-machine outputs. Everything is mock data, optimized for clarity and calm.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary">Listen to an idea</Button>
              <Button variant="subtle">Write a note</Button>
              <Button variant="ghost">Explore system</Button>
            </div>
          </div>
        </section>

        <Section title="Typography">
          <div className="space-y-6">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-zinc-500 mb-2">Title</p>
              <h2 className="text-3xl font-semibold text-white tracking-tight">
                The operating system for technical clarity
              </h2>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-zinc-500 mb-2">Meta</p>
              <p className="text-sm text-zinc-400">
                Updated 2 hours ago · Audio-first notes · Systems thinking · Calm execution
              </p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-zinc-500 mb-2">Body</p>
              <p className="text-base text-zinc-300 leading-relaxed max-w-3xl">
                I build systems for people who sell, support, and ship software. This space is both a public brain and
                an internal workbench: ideas, reminders, guides, and the tooling to publish them everywhere without
                chaos.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge tone="accent">Systems</Badge>
              <Badge>Audio-first</Badge>
              <Badge>Guides</Badge>
              <Badge>Agency</Badge>
              <Badge>Learning</Badge>
            </div>
          </div>
        </Section>

        <Section title="Buttons & UI primitives" subdued>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Button variant="primary" className="w-full">
              Primary
            </Button>
            <Button variant="subtle" className="w-full">
              Subtle
            </Button>
            <Button variant="ghost" className="w-full">
              Ghost
            </Button>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            <Badge tone="accent">Badge / Accent</Badge>
            <Badge>Badge / Muted</Badge>
          </div>
        </Section>

        <Section title="Public content cards">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card title="Idea: Ship audio before slides" meta="Audio-first">
              A 3-minute voice note beats a 30-slide deck. Clarity without overhead. Record, share, move on.
            </Card>
            <Card title="Reminder: Atomic thought" meta="Reminder">
              Reduce every idea to a single, testable action. If it can’t be executed, rewrite until it can.
            </Card>
            <Card title="Guide: The executable framework" meta="Guide">
              Input → Process → Output. Remove friction. Add defaults. Publish everywhere with one pipeline.
            </Card>
          </div>
        </Section>

        <Section title="Idea page components" subdued>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <AudioPlayer
                title="Listen: Systems in 3 minutes"
                src="/mock/idea.mp3"
                links={[
                  { label: "Spotify", href: "#" },
                  { label: "YouTube", href: "#" },
                ]}
              />
              <Card title="Summary" meta="Snapshot">
                <ul className="list-disc list-inside space-y-1 text-zinc-300">
                  <li>Ship audio-first to reduce friction.</li>
                  <li>Short loops: think, record, publish.</li>
                  <li>Keep a single source of truth.</li>
                </ul>
              </Card>
            </div>
            <div className="space-y-4">
              <Card title="Takeaways" meta="List">
                <ul className="space-y-2 text-zinc-300 text-sm">
                  <li>• Audio aligns faster than slides.</li>
                  <li>• Atomic reminders keep teams moving.</li>
                  <li>• One pipeline feeds every channel.</li>
                </ul>
              </Card>
              <Card title="Transcript" meta="Collapsible">
                <details className="rounded-lg border border-zinc-800 bg-zinc-900/70 p-3">
                  <summary className="cursor-pointer text-sm text-zinc-200">Open transcript</summary>
                  <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                    Today I’m thinking about an operating system for content: voice-first, low friction, and ready to
                    publish everywhere. It should feel calm, serious, and executable.
                  </p>
                </details>
              </Card>
            </div>
          </div>
        </Section>

        <Section title="Internal admin UI · Playground">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <label className="flex flex-col gap-2">
                <span className="text-sm text-zinc-400">Title</span>
                <input
                  className="rounded-lg border border-zinc-800 bg-zinc-900 text-sm text-white px-3 py-2 focus:outline-none focus:border-indigo-500"
                  defaultValue="Systems > Audio-first > Publish"
                />
              </label>
              <TextArea label="Markdown" />
              <label className="flex flex-col gap-2">
                <span className="text-sm text-zinc-400">Tags</span>
                <input
                  className="rounded-lg border border-zinc-800 bg-zinc-900 text-sm text-white px-3 py-2 focus:outline-none focus:border-indigo-500"
                  defaultValue="systems, audio, publishing"
                />
              </label>
              <div className="flex gap-3">
                <Button variant="primary">Publish</Button>
                <Button variant="subtle">Save draft</Button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <Button variant="subtle" className="w-full">
                  LinkedIn draft
                </Button>
                <Button variant="subtle" className="w-full">
                  Instagram draft
                </Button>
                <Button variant="subtle" className="w-full">
                  Newsletter draft
                </Button>
              </div>
              <TextArea label="Draft output" />
              <div className="rounded-lg border border-zinc-800 bg-zinc-900 text-sm text-zinc-300 p-3 leading-relaxed">
                Preview: “Ship audio before decks. Publish the transcript. Let the system syndicate to every channel.
                Calm, repeatable, boringly consistent.”
              </div>
            </div>
          </div>
        </Section>

        <section className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-sm text-zinc-400">
                This is a playground for Rafid’s public brain and internal tools.
              </p>
              <p className="text-sm text-zinc-500">Dark, calm, editorial. No gimmicks.</p>
            </div>
            <div className="flex items-center gap-3 text-sm text-zinc-300">
              <a className="hover:text-white transition-colors" href="#">
                About
              </a>
              <span className="text-zinc-700">/</span>
              <a className="hover:text-white transition-colors" href="#">
                CV
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

