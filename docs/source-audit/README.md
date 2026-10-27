# Source Audit — tula-wellness.co (Phase 1)

Research-only audit of https://www.tula-wellness.co/ carried out on **2026-10-27**, to prepare a redesigned Next.js frontend (Phase 2, not started).

## Documents

| File | Contents |
|---|---|
| [01-audit-report.md](01-audit-report.md) | Method, coverage, key findings, verified/estimated/unknown, limitations, confirmation of no implementation |
| [02-page-inventory.md](02-page-inventory.md) | Navigation tree, all 56 discovered routes with status & recommendation, page-by-page sections, 13 blog posts |
| [03-content-inventory.md](03-content-inventory.md) | Business facts, story, team, offerings + prices, CTAs, policies, promo, priority & duplication map |
| [04-assets-manifest.csv](04-assets-manifest.csv) | 156 assets used on live pages: original URL, local path, pages/sections, intrinsic vs displayed size, KB, alt, performance notes |
| [05-brand-reference.md](05-brand-reference.md) | Fonts (files, usage, scale), verified and estimated colours, logos, visual language |
| [06-functionality-and-dependencies.md](06-functionality-and-dependencies.md) | Stack, feature inventory with verification status, booking catalogue, integrations, Phase-2 implications |
| [07-responsive-observations.md](07-responsive-observations.md) | 1440 / 768 / 390 behaviour, breakpoints, type scaling, layout changes |
| [08-issues-gaps-questions.md](08-issues-gaps-questions.md) | Conflicts, copy-paste errors, broken links, typos, legacy pages, SEO, a11y, performance, security, questions for the business |
| [09-phase-2-recommendations.md](09-phase-2-recommendations.md) | **Mandatory redesign rules** (two-font rule, footer, images, `unoptimized: true`), proposed IA, decisions needed |

## Supporting folders

| Folder | Contents |
|---|---|
| `content/pages/`, `content/posts/` | Verbatim content of all 29 pages and 13 posts (Markdown, from WP REST API) + `content-index.json` |
| `content/brochures-text.md` | Text extracted from the 5 Google Drive brochure PDFs |
| `data/booking-services.csv` | Amelia catalogue: 68 services, category, price (IDR), duration, capacity, visibility, description |
| `original-assets/uploads/…` | Local copies of every upload used on live pages (mirrors `/wp-content/uploads/` paths) |
| `original-assets/themes/…` | Theme fonts and `btn-shadow.png` (the Didot font is kept as evidence only; licence unknown) |
| `original-assets/documents/` | 5 brochure PDFs (Full Day, Purification Journey, Half Day, Purification & Sound Healing, Yoga flyer) |
| `screenshots/scroll-views/` | **Most reliable visuals:** viewport-by-viewport captures, 19 nav pages at 1440 & 390 |
| `screenshots/full-page/` | Fold + stitched full-page captures for every URL/viewport (the fixed video shows as blank) |
| `screenshots/interactions/` | Popup, menu (open/expanded), header on scroll, button hover, form validation, at 1440/768/390 |
| `screenshots/booking/` | Amelia booking step 1 at 1440 and 390 |
| `screenshots/screenshot-index.csv` | Every screenshot → page URL, viewport, what it shows |
| `evidence/crawl-data/` | Raw per-page JSON from the rendered crawl (DOM, computed styles, links, images, network) |
| `evidence/crawl-digest.txt` | Human-readable digest of the crawl data |
| `evidence/wp-api/` | Raw REST responses (pages, posts, media, categories, Woo product, Amelia entities) |
| `evidence/interactions.json`, `booking-log__*.json` | Interaction and booking-probe results |
| `evidence/media-library-unused.json` | 69 media-library items not used on any crawled page (not downloaded) |

Total size ≈ 103 MB (PDFs 36 MB, used site assets 24 MB, screenshots 35 MB, crawl evidence 8 MB).

## Status

Phase 1 is complete. **Phase 2 has not started.** No code, redesign, config change, push or deploy has been done. Open business questions are listed in 08 §J.
