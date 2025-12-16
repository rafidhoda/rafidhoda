import Link from "next/link";
import { clips, type Clip } from "@/data/clips";
import { ClipPlayer } from "@/components/ClipPlayer";
import ClipDetailClient from "./client";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const shell = "mx-auto w-full max-w-6xl px-4 sm:px-6";

export default async function ClipDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug: rawSlug } = await params;
  const slug = decodeURIComponent(rawSlug).trim().toLowerCase();
  const index = clips.findIndex((c) => (c.slug || "").trim().toLowerCase() === slug);
  const clip = index >= 0 ? clips[index] : undefined;
  const prev = index > 0 ? clips[index - 1] : null;
  const next = index >= 0 && index < clips.length - 1 ? clips[index + 1] : null;

  if (!clip) {
    return (
      <div className="min-h-screen bg-black text-white">
        <main className={`${shell} py-10`}>
          <p className="text-zinc-400 text-lg">Clip not found.</p>
        </main>
      </div>
    );
  }

  return (
    <ClipDetailClient clip={clip} prev={prev} next={next} />
  );
}

