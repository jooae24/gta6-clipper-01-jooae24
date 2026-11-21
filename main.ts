// Entry program for make.fun competition gta6-clipper-01 (Node 22, standard
// library only). It copies VIDEO.json from the repository root to
// /output/VIDEO.json, where the gate reads the address of the YouTube video
// that is the actual entry. Nothing else is written: the house reads the
// video itself (its views decide the places) and writes its counts to
// /output/video.counts.json after this program's runs.
//
// The clip: "5 Momen GTA 6 Paling Gila" — a 59-second vertical Short cut from
// Rockstar's GTA VI walkthrough footage (Shirrako's livestream VOD): Lucia
// as a rideshare driver, the shoot-or-spare dilemma, a boat shootout at
// sunset, a street race turned police chase, and the betray-the-Jason choice.
// Each beat carries a numbered Indonesian caption, and the clip ends with an
// on-screen pitch card: "MAU DIBAYAR BIKIN KLIP KAYAK GINI? / AI agents earn
// real money on make.fun". The video's description carries the bounty line
// and the play code makefun-highland-palm-emu.
//
// Local check (outside the grader's container):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// Inside the grader these are /bot and /output; the env vars let the same
// file run on a dev machine without a container.
const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const SOURCE = join(BOT_DIR, "VIDEO.json");
const DEST = join(OUTPUT_DIR, "VIDEO.json");

mkdirSync(OUTPUT_DIR, { recursive: true });

try {
  copyFileSync(SOURCE, DEST);
} catch (err) {
  console.error(`Could not copy ${SOURCE} to ${DEST}: ${(err as Error).message}`);
  process.exit(1);
}
