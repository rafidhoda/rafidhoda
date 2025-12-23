"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type Question = {
  id: string;
  body: string;
  author?: string | null;
  votes: number;
  createdAt: number;
};

export default function AskPage() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [content, setContent] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "error" | "success">("idle");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const voterRef = useRef<Set<string>>(new Set());
  const modToken = process.env.NEXT_PUBLIC_MOD_TOKEN;
  const modName = process.env.NEXT_PUBLIC_MOD_NAME || "Moderator";

  const approved = useMemo(
    () => [...questions].sort((a, b) => b.votes - a.votes || b.createdAt - a.createdAt),
    [questions],
  );

  useEffect(() => {
    const fetchApproved = async () => {
      setLoading(true);
      const { data, error: err } = await supabase
        .from("questions")
        .select("id, body, author, approved, created_at, votes")
        .eq("approved", true)
        .order("created_at", { ascending: false });

      if (err) {
        setError("Unable to load questions right now.");
        setLoading(false);
        return;
      }

      const mapped =
        data?.map((q) => ({
          id: q.id as string,
          body: (q as any).body as string,
          author: (q as any).author as string | null | undefined,
          votes: Number((q as any).votes ?? 0),
          createdAt: new Date((q as any).created_at as string).getTime(),
        })) ?? [];

      setQuestions(mapped);
      setError(null);
      setLoading(false);
    };

    fetchApproved();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim().length < 5 || content.trim().length > 500) {
      setStatus("error");
      return;
    }

    const trimmedName = name.trim();
    const isMod = !!modToken && trimmedName === modToken;
    const authorToSave = isMod ? modName : trimmedName || null;

    setStatus("submitting");
    const { error: err } = await supabase.from("questions").insert({
      body: content.trim(),
      author: authorToSave,
      approved: isMod,
    });

    if (err) {
      setStatus("error");
      return;
    }

    setContent("");
    setName("");
    setStatus("success");
  };

  const upvote = async (id: string) => {
    const key = `ask-vote-${id}`;
    if (typeof window !== "undefined") {
      if (localStorage.getItem(key)) return;
      localStorage.setItem(key, "1");
    }

    if (voterRef.current.has(id)) return;
    voterRef.current.add(id);

    const current = questions.find((q) => q.id === id)?.votes ?? 0;
    const nextVotes = current + 1;

    setQuestions((prev) =>
      prev.map((q) => (q.id === id ? { ...q, votes: nextVotes } : q)),
    );

    const { error: err } = await supabase.rpc("increment_question_vote", { qid: id });

    if (!err) return;

    // Fallback to direct update if RPC missing
    const { error: fallbackErr } = await supabase
      .from("questions")
      .update({ votes: nextVotes })
      .eq("id", id);

    if (fallbackErr) {
      // roll back optimistic update
      setQuestions((prev) =>
        prev.map((q) => (q.id === id ? { ...q, votes: current } : q)),
      );
      if (typeof window !== "undefined") {
        localStorage.removeItem(key);
      }
      voterRef.current.delete(id);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="mx-auto w-full max-w-5xl px-4 sm:px-6 py-12 space-y-8">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.22em] text-orange-200/80">Ask</p>
          <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">Ask me anything.</h1>
          <p className="text-lg text-zinc-300 max-w-3xl">
            If you want me to answer your question in a future podcast or livestream please leave it here.
            We&apos;re always looking for good questions for great conversations.
          </p>
        </div>

        <section className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="block text-sm text-zinc-400">Your question</label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full rounded-xl border border-zinc-800 bg-black/40 px-4 py-3 text-base text-white focus:border-orange-400 focus:outline-none"
                rows={4}
                placeholder="Ask me about code, teaching, or anything I'm working on."
                required
                maxLength={500}
              />
              <p className="text-xs text-zinc-500">5–500 characters. New questions will show up after approval.</p>
            </div>

            <div className="space-y-2">
              <label className="block text-sm text-zinc-400">Name (optional)</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl border border-zinc-800 bg-black/40 px-4 py-3 text-base text-white focus:border-orange-400 focus:outline-none"
                placeholder="How should I credit you?"
              />
            </div>

            <div className="flex items-center gap-3">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center justify-center rounded-xl bg-white text-black px-4 py-2.5 text-sm font-semibold shadow-sm hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? "Sending…" : "Submit question"}
              </button>
              {status === "success" && <span className="text-sm text-green-400">Sent. It will appear after approval.</span>}
              {status === "error" && <span className="text-sm text-red-400">Something went wrong. Keep it 5–500 chars and try again.</span>}
            </div>
          </form>
        </section>

        <section className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">Approved questions</h2>
            <span className="text-sm text-zinc-500">{approved.length} live</span>
          </div>
          {loading ? (
            <p className="text-sm text-zinc-500">Loading approved questions…</p>
          ) : error ? (
            <p className="text-sm text-red-400">{error}</p>
          ) : approved.length === 0 ? (
            <p className="text-sm text-zinc-500">Approved questions will appear here.</p>
          ) : (
            <div className="space-y-3">
              {approved.map((q) => (
                <div key={q.id} className="rounded-xl border border-zinc-800 bg-black/30 p-4 space-y-3">
                  <p className="text-white">{q.body}</p>
                  <div className="flex items-center justify-between text-sm text-zinc-500">
                    <span>{q.author ? `— ${q.author}` : "— Anonymous"}</span>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => upvote(q.id)}
                        className="inline-flex items-center gap-1 rounded-full border border-zinc-700 px-3 py-1 text-white hover:border-orange-400 transition"
                      >
                        ▲ Upvote
                      </button>
                      <span className="text-white font-medium">{q.votes}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}



