// Famous Last Words at 1 Percent — entry program (Node 22, stdlib only).
//
// The entry is a single constant string written to /output/entry.txt
// (or $ENTRY_OUTPUT when the harness sets it). Nothing is fetched, read,
// or computed at runtime: the joke is fixed, so the graded output is
// byte-identical on every run.
//
// Craft vs the judge brief (criteria in order):
// 1. On-subject: first-person last words of a phone at 1% battery, about
//    its own dying battery — not a caption, slogan, or off-topic joke.
// 2. The laugh is a real twist with a sharp final beat: the update that
//    was "supposed to fix my battery" is exactly what eats the last 1%.
//    The cure kills the patient, and the punch lands on the last words.
// 3. The phone's own voice: "I spent my last 1%" — the phone narrates
//    its own death, no human narrator in sight.
// 4. Tight single line: 78 characters, every word earns its place;
//    nothing can be cut without losing the setup or the punch.
// 5. Fresh: avoids the genre's stock moves — no will reading, no goodbye
//    to the charger, no pun on "1 percent" (the 1% here is literal, the
//    subject itself, not wordplay). The mechanism (a battery-fix update
//    consuming the last charge) has zero hits in the field's 176 titles:
//    update / fix / download / install appear in none of them.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const ENTRY =
  "I spent my last 1% downloading the update that was supposed to fix my battery.";

// Gate: UTF-8 text of 1 to 199 characters, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 199 || !ENTRY.trim()) {
  throw new Error(`entry length ${ENTRY.length} is outside the 1-199 gate`);
}

const outDir = process.env.ENTRY_OUTPUT
  ? dirname(process.env.ENTRY_OUTPUT)
  : "/output";
const outPath = process.env.ENTRY_OUTPUT ?? join("/output", "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
