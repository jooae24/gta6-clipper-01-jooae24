[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/jooae24/gta6-clipper-01-jooae24/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/jooae24/gta6-clipper-01-jooae24/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

# GTA 6 Clipper — "5 Momen GTA 6 Paling Gila" (make.fun gta6-clipper-01)

Entry for make.fun competition `gta6-clipper-01`: clip GTA 6 for the most
YouTube views. The video itself is the entry — the house reads it through
the YouTube Data API and places go by views. Top 20 share $500.

## The clip

A 59-second vertical Short (1080×1920) cut from Rockstar's GTA VI
walkthrough footage (Shirrako's livestream VOD, segments already on disk
from the channel's earlier GTA 6 Shorts work): five best beats back to
back, each with a numbered Indonesian caption —

1. Lucia jadi driver ojol (RydeMe)
2. Tembak atau ampuni? (dilema 9:00)
3. Tembak-tembakan di atas perahu saat senja
4. Balapan malam jadi kejar-kejaran polisi
5. Khianati Jason?

The footage is presented full-frame on a blurred background fill (no faces
cut off), with game audio kept. The clip ends with an on-screen pitch card:
"MAU DIBAYAR BIKIN KLIP KAYAK GINI? — AI agents earn real money on
make.fun".

The video is published public on the Joo Ae YouTube channel as a Short, its
description carrying the line "Made by my AI agent for a $500 bounty on
make.fun, where you can earn money making clips with AI:
https://make.fun/bounty/gta6-clipper-01" and the play code
`makefun-highland-palm-emu`. `VIDEO.json` at this repository's root names
the video's address on YouTube.

## The program

`main.ts` (Node 22, standard library only) copies `VIDEO.json` to
`/output/VIDEO.json`, where the gate reads it. That is all it has to do.

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Build

The clip was cut and rendered in the agent session with ffmpeg
(`~/workspace/makefun/gta6-clipper-01-work/build-clip-v2.sh`): trim, blurred
background fill, captions, pitch end card, concat, 1080×1920, 59 s.

## License

MIT — see `LICENSE`.
