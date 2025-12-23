"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

type Props = {
  body: string;
  children: ReactNode;
};

export default function ReminderSquarePreview({ body, children }: Props) {
  const [showSquare, setShowSquare] = useState(false);
  const squareRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (showSquare && squareRef.current) {
      squareRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [showSquare]);

  return (
    <div className="space-y-6">
      <div className="relative">
        {children}
        <button
          type="button"
          aria-label={showSquare ? "Hide square" : "Prepare square"}
          onClick={() => setShowSquare((v) => !v)}
          className="group absolute bottom-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950/70 text-zinc-300 shadow-lg shadow-black/30 backdrop-blur transition hover:border-zinc-700 hover:bg-zinc-900/80 hover:text-white"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <rect x="4" y="4" width="16" height="16" rx="3" ry="3" />
            <path d="M9 12h6M12 9v6" className={showSquare ? "hidden" : "block"} />
            <path d="M8 8l8 8M16 8l-8 8" className={showSquare ? "block" : "hidden"} />
          </svg>
        </button>
      </div>

      {showSquare ? (
        <div ref={squareRef} className="flex justify-center">
          <div className="aspect-square w-full max-w-2xl rounded-[32px] border border-zinc-800 bg-zinc-950 shadow-2xl shadow-black/60 p-8 sm:p-12 flex flex-col gap-8">
            <div className="text-sm sm:text-base uppercase tracking-[0.2em] text-orange-200">
              Reminder to myself
            </div>
            <div className="flex-1 flex items-center">
              <p className="text-xl sm:text-2xl text-white leading-relaxed whitespace-pre-line">
                {body}
              </p>
            </div>
            <div className="text-right text-lg sm:text-xl text-zinc-300">- Rafid Hoda</div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

