"use client";

import { useEffect, useRef, useState } from "react";

type Link = { label: string; href: string };

export function ClipPlayer({
  title,
  src,
  links = [],
  transcriptAvailable,
  onTranscriptToggle,
  transcriptVisible,
}: {
  title: string;
  src: string;
  links?: Link[];
  transcriptAvailable?: boolean;
  onTranscriptToggle?: () => void;
  transcriptVisible?: boolean;
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isSeeking, setIsSeeking] = useState(false);

  const seekFromClientX = (clientX: number, element: HTMLDivElement) => {
    const rect = element.getBoundingClientRect();
    const pct = Math.min(Math.max((clientX - rect.left) / rect.width, 0), 1);
    const audio = audioRef.current;
    if (!audio || !duration) return;
    audio.currentTime = pct * duration;
    setProgress(pct);
    setCurrentTime(audio.currentTime);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onLoaded = () => setDuration(audio.duration || 0);
    const onTime = () => {
      setCurrentTime(audio.currentTime);
      setProgress(audio.duration ? audio.currentTime / audio.duration : 0);
    };
    const onEnded = () => {
      setIsPlaying(false);
      setProgress(0);
      setCurrentTime(0);
    };

    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("ended", onEnded);
    return () => {
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  useEffect(() => {
    if (!isSeeking) return;
    const move = (e: PointerEvent) => {
      const bar = document.getElementById("clip-progress-bar");
      if (bar instanceof HTMLDivElement) {
        seekFromClientX(e.clientX, bar);
      }
    };
    const up = () => setIsSeeking(false);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, [isSeeking, duration]);

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

  const formatTime = (sec: number) => {
    if (!Number.isFinite(sec)) return "0:00";
    const minutes = Math.floor(sec / 60);
    const seconds = Math.floor(sec % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

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
            id="clip-progress-bar"
            className="h-3 rounded-full bg-zinc-800 overflow-hidden cursor-pointer select-none"
            onPointerDown={(e) => {
              const bar = e.currentTarget;
              seekFromClientX(e.clientX, bar);
              setIsSeeking(true);
            }}
          >
            <div className="h-full bg-orange-500" style={{ width: `${progress * 100}%` }} />
          </div>
          <div className="flex justify-between text-xs text-zinc-500">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration || 0)}</span>
          </div>
        </div>
      </div>

      {links.length > 0 && (
        <div className="flex items-center gap-3 text-sm text-zinc-400 flex-wrap">
          {links.map((link, idx) => (
            <div key={link.label} className="flex items-center gap-3">
              <a className="hover:text-white transition-colors" href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
              {idx < links.length - 1 && <span className="text-zinc-700">•</span>}
            </div>
          ))}
          {transcriptAvailable && onTranscriptToggle ? (
            <>
              {links.length > 0 && <span className="text-zinc-700">•</span>}
              <button
                type="button"
                onClick={onTranscriptToggle}
                className="text-sm text-zinc-400 hover:text-white underline underline-offset-4 transition-colors"
              >
                {transcriptVisible ? "Hide transcript" : "Transcript"}
              </button>
            </>
          ) : null}
        </div>
      )}

      <audio ref={audioRef} src={src} preload="metadata" className="hidden" />
    </div>
  );
}

