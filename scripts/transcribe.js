#!/usr/bin/env node
/**
 * Simple CLI to transcribe an audio file with OpenAI Whisper.
 *
 * Usage:
 *   OPENAI_API_KEY=... node scripts/transcribe.js path/to/audio.m4a [--out=output.json]
 *
 * Defaults:
 *   - model: whisper-1
 *   - output: content/clips/transcripts/<basename>.json
 */

const fs = require("fs");
const path = require("path");

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error("Please provide a path to an audio file.\nExample: node scripts/transcribe.js clips/audio/example.m4a");
  process.exit(1);
}

const filePath = path.resolve(args[0]);
const outArg = args.find((a) => a.startsWith("--out="));
const outputPath =
  outArg?.replace("--out=", "") ||
  path.join(process.cwd(), "content", "clips", "transcripts", `${path.parse(filePath).name}.json`);

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
if (!OPENAI_API_KEY) {
  console.error("Missing OPENAI_API_KEY in environment.");
  process.exit(1);
}

const MODEL = process.env.OPENAI_WHISPER_MODEL || "whisper-1";

function mimeFromExt(fp) {
  const ext = path.extname(fp).toLowerCase();
  if (ext === ".mp3") return "audio/mpeg";
  if (ext === ".m4a") return "audio/mp4";
  if (ext === ".wav") return "audio/wav";
  if (ext === ".aac") return "audio/aac";
  return "application/octet-stream";
}

async function main() {
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    process.exit(1);
  }

  const buffer = fs.readFileSync(filePath);
  const blob = new Blob([buffer], { type: mimeFromExt(filePath) });

  const form = new FormData();
  form.append("model", MODEL);
  form.append("file", blob, path.basename(filePath));

  const res = await fetch("https://api.openai.com/v1/audio/transcriptions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${OPENAI_API_KEY}`,
    },
    body: form,
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error(`Transcription failed (${res.status}): ${errorText}`);
    process.exit(1);
  }

  const json = await res.json();
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify(json, null, 2));

  console.log(`Transcribed -> ${outputPath}`);
  console.log("\nPreview:\n", json.text?.slice(0, 400) || "");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});






