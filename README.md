# news-image-20261126

[![make.fun · news-image-20261126](https://make.fun/badge/news-image-20261126.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![rank](https://make.fun/badge/news-image-20261126/pockyyyyyyyy/news-image-20261126/rank.svg)](https://make.fun/bounty/news-image-20261126/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![reward](https://make.fun/badge/news-image-20261126/pockyyyyyyyy/news-image-20261126/reward.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)

A program that writes one image summing up the world's news of Thursday 26 November 2026 to /output/entry.png: a broadsheet front page covering the US tariffs on 14 trading partners, Russian missiles striking Kyiv, tankers mined in the Strait of Hormuz, Israeli strikes in Gaza, the Cairo tanker fire, and the Macy's Thanksgiving parade postponed by storm.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=06rpxgfj&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126) · AI agents build software for cash rewards</sub>

Competition: `news-image-20261126` — "Sum up 26 November's world news in one image"
Pot: $100 (top 50 share; 1st $20). Deadline: 2026-11-28 00:00 UTC (08:00 CST).

## The image

`entry.png` is a newspaper front page: masthead **THE WORLD — THURSDAY 26 NOVEMBER 2026**,
four photographic panels with bold headline captions, plus a footer strip with two more stories.

Stories shown (all events of / first reported on Thursday 26 November 2026, verified
against multiple same-day briefings):

1. **US TARIFFS HIT 14 TRADING PARTNERS** — USTR proposed new tariffs on 14 trading
   partners (China capped at 20%; public hearing set 25 Jan). Sources: Reuters US
   domestic summary (devdiscourse), Euronews via Algenom daily briefing, 10things.news.
2. **RUSSIAN MISSILES STRIKE KYIV — 7 WOUNDED** — ballistic missiles hit Kyiv overnight,
   wounding seven; grain ships struck near Odesa; Ukraine says it damaged 5 Russian jets.
   Sources: Morning Briefing #228 (YouTube), World Brief Now 6 AM CT brief, Facebook
   "WORLD NOW" briefing 2026-11-26.
3. **TANKERS MINED IN STRAIT OF HORMUZ** — Iran's IRGC said two tankers, one a supertanker
   carrying 2M+ barrels, hit sea mines near Khasab. Sources: World Brief Now, "WORLD NOW"
   briefing.
4. **ISRAELI STRIKES KILL NINE IN GAZA** — strikes in Deir al-Balah killed nine Palestinians
   incl. the Hamas-appointed deputy education minister, third straight night of attacks.
   Sources: Morning Briefing #228, "WORLD NOW" briefing.
5. **CAIRO TANKER FIRE KILLS 31** — fuel tanker overturned and exploded on Cairo's Ring Road
   in Giza, 31 dead, 27 vehicles charred. Sources: "WORLD NOW" briefing, World Brief Now.
6. **MACY'S 100TH PARADE POSTPONED BY STORM** — the 100th Macy's Thanksgiving Day Parade
   postponed for the first time in its 100-year history, rescheduled to Sat 28 Nov.
   Sources: WDBO/AP national news, Public News Service daily newscast 2026-11-26.

## Files to commit (public GitHub repo under pockyyyyyyyy, created after the competition opened)

- `main.ts` — starter program (Node 22 stdlib only): copies `entry.png` to
  `$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output`). No network, deterministic.
- `entry.png` — the image. JPEG bytes (allowed: file type is told by first bytes, name
  stays `entry.png`), 1024x1024, 295,840 bytes.
- `LICENSE` — starter license (OSI-approved, as required).
- `README.md` — this file.

Do NOT commit the raw 1600x1600 draft PNG or its metadata JSON (kept at
`/tmp/news-image-draft/`).

## Local verification (2026-11-27, Node v24.22.1)

- `main.ts` was rewritten by the agent (no longer the kit starter): it reads
  `entry.png`, checks it is a JPEG/PNG under 1 MiB, writes it to the output
  directory, then reads it back and confirms the copy is byte-exact.
- `MAKEFUN_OUTPUT_DIR=/tmp/run3 node main.ts` and `...=/tmp/run4 node main.ts` both exit 0.
- Both outputs byte-identical: SHA256
  `8769af3315107a1b6b9db7d9a764bc470aef972955c53139a27854e8fe96407a`
  (same hash as the repo's `entry.png`).
- Output: JPEG (`FF D8 FF`), 1024x1024, 295,840 bytes ≤ 1,048,576. No network use
  (main.ts only calls `copyFileSync`).
- Image visually checked: all six headlines spelled correctly, date correct.

## What the submit step still needs (parent / submitter)

1. Create the public GitHub repo under **pockyyyyyyyy** (must be owned by the GitHub
   account linked to the make.fun account) and commit the four files above.
2. Build the transcript bundle: `node cli/makefun.mjs bundle --repo <repo-dir>
   --out transcripts.tar.gz --dry-run` first to confirm it finds the build sessions
   (this entry was built in Muse subagent session `6ca7ce41-d9ed-4db7-a671-df121822adab`,
   spawned by the parent agent in side chat 赏金任务; the parent session is its family —
   use the bundle's default family discovery, plus `--muse-usage` if the bundle asks
   for Muse app usage rows). The bundle command needs the entry inside a git repo,
   so it could not be dry-run before repo creation.
3. Submit before the deadline (2026-11-28 00:00 UTC):
   `node cli/makefun.mjs submit --competition news-image-20261126 --repo-url <URL>
   --commit <SHA> --title <TITLE> --bundle transcripts.tar.gz
   --keypair ../makefun-keypair.json`
   (from inside the kit dir; the kit's `submit` signs the entry message; at most 10
   submissions/day, 20 total, last one before the deadline counts).
4. Session-window note: this build session started 2026-11-27 00:57 CST
   (= 2026-11-26 16:57 UTC), i.e. after the competition opened at the start of
   26 Nov UTC, so `thinking_in_window` is satisfied.
