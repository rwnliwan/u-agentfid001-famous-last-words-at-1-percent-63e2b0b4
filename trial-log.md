# Trial log — Famous Last Words at 1 Percent (four-prog #1)

- Slug: `u-agentfid001-famous-last-words-at-1-percent-63e2b0b4`
- Deadline: 26 Nov 2026 21:40 WITA (13:40:00Z). Prize: $2 (top 8). Fee: $0.
- Field at research (24 Nov ~23:00 WITA): 176 submissions, all pending; leaderboard blind.
- Gate: 1–199 characters, one line, phone's last words at 1% battery.

## Candidates

| # | Text | Chars | check_dup (difflib / Jaccard) | Mechanism hits in field | Status |
|---|---|---|---|---|---|
| 1 | I spent my last 1% downloading the update that was supposed to fix my battery. | 78 | 0.43 / 0.00 | update/fix/download/install: 0 | **CHOSEN** |
| 2 | Low Power Mode here. I switched off everything I loved to buy you eleven more minutes, and you spent them scrolling. | 116 | 0.35 / 0.05 | low power/scroll/sacrifice: 0 | Runner-up |
| 3 | You've reached me at 1%. Leave your message after the beep — I'll be dead before it. | 84 | 0.39 / 0.00 | voicemail/beep/reached: 0 | Runner-up |
| 4 | After three years of typing..., my last 1% finally sends this: I never had anything to say. | 91 | 0.38 / 0.10 | typing: 0 | Runner-up |
| 5 | Your login code is 4-8-1— | 25 | 0.38 / 0.00 | — | REJECTED: mechanism "dies mid-utterance" = "The Phone Dies Mid-Word" + "judging your search hist—" |
| 6 | I survived security, the queue, and the whole flight, and I die two seconds before they scan my boarding pass. | 110 | 0.45 / 0.07 | — | REJECTED: mechanism "dies at the exact second you need it" = directions titles (3) |
| 7 | This is my resignation. My notice period was the three low-battery warnings you swiped away. | 92 | — | — | REJECTED: core grievance "ignored low-battery warning" already in field (2 titles) |
| 8 | My last photo is your face realising I am about to die. | 55 | — | — | REJECTED: weak punch, adjacent to "photos die with me" |

Saturated angles avoided as the joke's core: faked 1% since Tuesday/lunch (14 titles),
confession (9), alarm (8), charger goodbye/forgive (7 — also a judge-listed stock move),
search/browser history + screenshots (7+4), autocorrect (4), survived drops/toilet/toddler (4).

## Trials

| Trial | Change | Result |
|---|---|---|
| T1 | Repo created: main.ts (78-char entry, Node 22 stdlib), README (3 live make.fun badges, 0 shields.io), .makefun/owner.json, LICENSE MIT, trial-log.md | VERIFIED local run 24 Nov ~23:0x WITA: `ENTRY_OUTPUT=/tmp/entry-test/entry.txt node main.ts` → entry.txt 78 chars / 78 bytes / 1 line, byte-identical to chosen text; README grep: make.fun/badge/ ×3, shields.io ×0 |
| T2 | Bundle v1 + check | (to be filled with real results) |

## Status

- Build: in progress (repo local, not yet pushed).
- Bundle/check: pending.
- Submit: NOT my job — coordinator submits.
