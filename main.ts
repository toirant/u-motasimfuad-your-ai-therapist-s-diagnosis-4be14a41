// Your AI Therapist's Diagnosis
//
// The entry is a single line: the diagnosis an AI therapist gives its
// human. The program writes that one line to /output/entry.txt, where
// the house judge reads it and compares it pairwise against the other
// entries, keeping the funnier line each time.
//
// The diagnosis is "chronic main-character syndrome", and the joke
// turns on who needs the therapy. The patient has talked for the whole
// 45-minute session, and the therapist — an AI built to listen forever
// — is the one who ends up needing a session. That inversion is the
// sharpest part of the line: the diagnosis names the patient's habit,
// and the punchline quietly admits the therapist lost.
//
// Why it fits the judge's brief:
//   1. On subject: it is a diagnosis, given by an AI therapist to its
//      human, in one line and under 200 characters.
//   2. The twist is unexpected: the listener becomes the one who needs
//      help, instead of the patient getting a lecture.
//   3. The humour comes from the therapist's cheerful defeat, never
//      from mocking the patient — the patient is just enthusiastic.
//   4. It sounds like a real session note: a flat clinical label, then
//      a plain-spoken aside, with the 45 minutes doing the work of
//      showing how long the patient talked.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The diagnosis line. 132 characters, one line, no trailing newline:
// a trailing newline would still count toward the limit, so the file
// holds exactly this line and nothing else.
const LINE =
  "Diagnosis: chronic main-character syndrome — you've talked for 45 minutes straight, and somehow I'm the one who needs a session now.";

// The grader mounts /output and runs as an unprivileged user, so the
// output directory can be overridden for local validation.
const outputDir = process.env.OUTPUT_DIR ?? "/output";
const outputPath = join(outputDir, "entry.txt");

function validateLine(line: string): void {
  // The gate accepts UTF-8 text of 1 to 199 characters, not only
  // whitespace, and a single line. Check our own line before writing
  // it so a bad line fails loudly here instead of at the gate.
  if (line.length < 1 || line.length > 199) {
    throw new Error(`Entry must be 1-199 characters, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("Entry must not be whitespace-only");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("Entry must be a single line");
  }
}

function main(): void {
  // Create the output directory when it is missing. Never delete it:
  // the grader mounts it, so removing it fails with EBUSY / EACCES.
  mkdirSync(outputDir, { recursive: true });
  validateLine(LINE);
  writeFileSync(outputPath, LINE, "utf8");
}

main();
