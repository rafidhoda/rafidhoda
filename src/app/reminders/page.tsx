"use client";

import Link from "next/link";
import { reminders } from "@/data/reminders";

const shell = "mx-auto w-full max-w-6xl px-4 sm:px-6";

export default function RemindersPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className={`${shell} py-10 space-y-8`}>
        <div className="space-y-2">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">Reminders</h1>
          <p className="text-zinc-400 max-w-3xl">
            A collection of short reminders to myself. Click any reminder to view it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reminders.map((reminder) => (
            <Link
              key={reminder.slug}
              href={`/reminders/${reminder.slug}`}
              className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-4 hover:border-orange-500/40 transition-colors"
            >
              <div className="flex items-center justify-between gap-3 mb-2">
                <div className="text-sm uppercase tracking-[0.18em] text-zinc-500">
                  {reminder.date}
                </div>
              </div>
              <h2 className="text-xl font-semibold text-white mb-2">{reminder.title}</h2>
              <p className="text-sm text-zinc-300 line-clamp-3 whitespace-pre-line">{reminder.body}</p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

