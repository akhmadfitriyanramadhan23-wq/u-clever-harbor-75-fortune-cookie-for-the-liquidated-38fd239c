import { mkdirSync, writeFileSync } from "node:fs";

// Fortune cookie for a freshly liquidated trader: classic oracular
// fortune ("Fortune favors the bold"), broken by the punchline — the same
// fortune liquidated you at 3 a.m. on 40x leverage, mid-sip. Rueful and
// warm, never cruel; the joke lands on the loss.
const line =
  "Fortune favors the bold. It also liquidated you at 3 a.m. on 40x leverage, mid-sip.";

// Validate: gate requires 1-160 characters; brief requires at most 20 words.
const count = [...line].length;
const words = line.split(/\s+/).filter(Boolean).length;
if (count < 1 || count > 160) {
  throw new Error(`line is ${count} code points, must be 1-160`);
}
if (words > 20) {
  throw new Error(`line is ${words} words, must be at most 20`);
}
if (!line.trim() || line.includes("\n")) {
  throw new Error("line must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
// Exactly the line: no trailing newline, no extra whitespace.
writeFileSync("/output/entry.txt", line, "utf8");
