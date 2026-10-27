# 07 — Responsive Observations

Tested viewports (Chrome 155 via Playwright, device scale 1):

| Label | Size | Emulation | Pages |
|---|---|---|---|
| Desktop | 1440×900 | desktop UA | all 56 URLs |
| Tablet | 768×1024 | touch | 19 navigation/booking pages |
| Mobile | 390×844 | iPhone UA, `isMobile`, touch | all pages and posts (except archives/utility probes) |

Evidence: `screenshots/full-page/*__{1440,768,390}__{fold,full}.jpg`; `screenshots/scroll-views/*__{1440,390}__scrollNN.jpg` (viewport-by-viewport, which render the fixed video correctly); `screenshots/interactions/*` (menu/popup at all three widths); `evidence/crawl-data/*.json` (computed sizes, overflow checks).

Limitations: no real devices; Safari/Firefox not tested; landscape orientations and widths between breakpoints not systematically tested; video autoplay on real iOS (low-power mode) unverified; stitched full-page images show blank/white areas where the fixed background video should be (capture artefact, not a site bug, verified with scroll-views).

## 1. Breakpoints in the theme CSS (VERIFIED)

`min-width` media queries in `app.css`: 393, 480, 600, **768** (12 rules), **1024** (12 rules), 1280, 1440. WooCommerce small-screen CSS ≤768. Tailwind defaults `sm 640 / md 768 / lg 1024 / xl 1280` are in use.

## 2. Global behaviour

| Aspect | Desktop 1440 | Tablet 768 | Mobile 390 |
|---|---|---|---|
| Header | Fixed, transparent; hamburger 20px from left/top, "Book Now" right. No logo. | Same | Same; **"Book Now" overlays headings and text when scrolling** (e.g. "Day 1 \| Arriving and Grounding" on Detox, form fields on Get in Touch). White hamburger becomes nearly invisible over light sage panels. |
| Menu panel | 384px left drawer (`sm:max-w-sm`), backdrop blur | 384px | Full-width (390px) overlay |
| Horizontal overflow | None (scrollWidth = clientWidth on every page) | None | None. Carousel slides extend off-screen but are clipped by `overflow-hidden`. |
| Background video | Fixed full-screen, `object-cover`; 848×432 source upscaled to 1440×900 (soft/blurry) | Same | Same (portrait crop of a landscape clip) |
| Inner-page "hero band" | ~340px of empty video before the first panel | same | same; on mobile it pushes the H1 below the fold on some pages |
| Content width | Panels ≈ max-w-6xl/7xl centred; text columns max-w-2xl/42rem | ~24px gutters (buttons nearly touch the left edge on retreat pages) | ~32–56px gutters on cards; 16–32px elsewhere |
| Footer | Centred stack, ~400px tall | same | Address wraps over 3 lines because of very wide letter-spacing; otherwise compact |

## 3. Typography scaling (VERIFIED computed values)

| Element | 390 | 768 | 1440 |
|---|---|---|---|
| H1 | 31px / 37.2 | **60px / 72** | 60px / 72 |
| H2 (section) | 25px / 37.2 | 48px / 72 | 48px / 72 |
| H2 (program pages "Choice of Programs") | 36px / 40 | 36px / 40 | 36px / 40 |
| H2 (Massages rows) | 38px / 53.2 | 38px / 53.2 | 38px |
| H3 (itinerary/cards) | 20px / 28 | 20px / 28 | 20px / 28 |
| H3 ("Book Now" band, FAQ title) | 36px / 37.2 | 36–39px / 46.8 | 39px |
| Body p | 18px / 32.4 | 18px | 18px |
| Didot paragraphs | 16px | 16px | 16px |

Observations: H1 jumps abruptly from 31px to 60px at 768 (no intermediate step), so on tablet long H1s ("HALF DAY PURIFICATION JOURNEY & SOUND HEALING EXPERIENCE", "DETOX RETREAT IN BALI") wrap to 2–3 lines. H2/H3 sizes are inconsistent between equivalent components across templates (36 vs 38 vs 48px).

## 4. Page-level layout changes

| Page | Desktop | Tablet | Mobile | Height 1440 / 768 / 390 |
|---|---|---|---|---|
| Home | Treatment cards 3×2; team 2-up; posts carousel 3-up with side arrows | Cards 2-col; posts 2-up | Cards 1-col (circle image + text + button); team 1-up carousel; posts 1-up with arrows overlapping card edges | 7,038 / 8,297 / 8,872 |
| Day programme pages (Full/Half/FDP/Daily) | H1 + landscape + portrait photo side by side; "Choice of Programs" = photo column left + 2×2 text grid | Photos stack; text grid 2-col | All stacked; photos full width | ~3,100–4,100 / 3,800–4,700 / 3,700–5,500 |
| Retreat pages | 2-column (intro left, day itinerary right) | Single column | Single column; long italic Didot paragraphs | 2,126–3,708 / 2,416–3,885 / 3,176–5,641 |
| More of Tula | Alternating image/text rows | 2-col rows | Stacked, very long | 3,915 / 3,529 / 6,009 |
| Massages | Text + image rows | Similar | Stacked | 2,434 / 2,203 / 2,983 |
| Blog | 2-col cards | 2-col cards | 1-col cards | 3,637 / 2,889 / 4,905 |
| Get in Touch | Info left, form right; map full width; boutique photo full width | 2-col retained | Stacked: info → form → map → boutique | 3,496 / 3,553 / 3,515 |
| Booking (Amelia) | Card with left step sidebar | Card | Sidebar collapses ("Collapse menu") | 1,362 / 1,221 / 1,250 |

## 5. Interactive components across widths

- **Menu:** identical tree at all widths (verified). Accordions are tap-friendly (52px rows). The close button is grey (#9CA3AF) on #F0F0F0, which is low contrast.
- **Promo popup:** 800×400 desktop; scales to viewport width on tablet/mobile (image text becomes very small at 390px).
- **Carousels:** Alpine recalculates slides on load only (`window.innerWidth` in `x-data`), so rotating or resizing a device won't recompute (inferred from code; not tested).
- **FAQ `<details>`:** full width at all sizes.
- **Booking widget:** Amelia's own responsive layout; uses Roboto.

## 6. Image cropping / positioning

- Treatment thumbnails: 150px source shown at 121px circles (all widths).
- Program portraits: 1439×2159 sources shown at 285×427 (desktop) or ~326px wide (mobile), which is heavily oversized.
- Team photos: 403×334 sources stretched to 448×371 (desktop, upscaled).
- Post card images: 4:3 / 3:2 `object-cover`; `Tray-1.jpg` (580px) shown at 896px on post pages (upscaled/soft).
- Accommodation: `theamala` image at 1,000px tall with a dark overlay; on mobile the crop shows only the centre.

## 7. Implications for Phase 2

1. Header needs a background/contrast state and must not cover content; reserve space or use a solid bar on scroll.
2. Define a fluid type scale (clamp) instead of the 31→60px jump; enforce consistent heading sizes per component.
3. Replace the 340px empty video band on inner pages with a deliberate page header.
4. Size images to their display slots (see 04 manifest "oversized/upscaled" notes).
5. Keep single-column mobile layouts but shorten long pages (More of Tula 6,000px, retreats 5,600px) via concise copy or disclosure.
6. Test the booking embed/link at 390px.
