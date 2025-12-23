import Link from "next/link";
import { reminders } from "@/data/reminders";
import ReminderSquarePreview from "./ShareSquare";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const shell = "mx-auto w-full max-w-6xl px-4 sm:px-6";

export default async function ReminderDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug: rawSlug } = await params;
  const slug = decodeURIComponent(rawSlug).trim().toLowerCase();
  const index = reminders.findIndex((r) => (r.slug || "").trim().toLowerCase() === slug);
  const reminder = index >= 0 ? reminders[index] : undefined;
  const prev = index > 0 ? reminders[index - 1] : null;
  const next = index >= 0 && index < reminders.length - 1 ? reminders[index + 1] : null;

  if (!reminder) {
    return (
      <div className="min-h-screen bg-black text-white">
        <main className={`${shell} py-10`}>
          <p className="text-zinc-400 text-lg">Reminder not found.</p>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <main className={`${shell} py-14 space-y-8`}>
        <div className="flex justify-start">
          <Link
            href="/reminders"
            className="inline-flex items-center gap-2 text-sm text-orange-200 hover:text-orange-100 px-3 py-2 rounded-lg border border-zinc-800 bg-zinc-900/60 transition-colors"
          >
            <span className="text-lg">←</span>
            <span>Back to reminders</span>
          </Link>
        </div>

        <ReminderSquarePreview body={reminder.body}>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-8 sm:p-10 space-y-5">
            <div className="flex items-start justify-between gap-3">
              <div className="text-xs uppercase tracking-[0.2em] text-orange-200">
                Reminder to myself
              </div>
              <div className="text-sm uppercase tracking-[0.18em] text-zinc-500">
                {reminder.date}
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
              {reminder.title}
            </h1>

            <div className="space-y-4">
              <div className="space-y-3">
                <div className="text-lg sm:text-xl text-zinc-100 leading-relaxed whitespace-pre-line">
                  {reminder.body}
                </div>
              </div>
            </div>
          </div>
        </ReminderSquarePreview>

        <div className="flex justify-between items-center pt-2">
          <div className="flex-1">
            {prev ? (
              <Link
                href={`/reminders/${prev.slug}`}
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
                href={`/reminders/${next.slug}`}
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
