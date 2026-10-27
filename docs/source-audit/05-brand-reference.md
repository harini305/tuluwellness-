# 05 — Brand Reference (Typography, Colour, Logo, Visual Identity)

Audit date: 2026-10-27 · Source: https://www.tula-wellness.co/ (custom WordPress theme `tula`, Tailwind CSS build `app.css?ver=0.1.0.1750924275`)

Evidence labels used throughout:

- **VERIFIED**: read directly from the live CSS, computed styles (Chrome 1440px), or file headers.
- **ESTIMATE**: sampled from screenshots/video frames; treat as approximate.
- **UNKNOWN**: could not be confirmed.

---

## 1. Typography (original site)

### 1.1 Font files loaded by the theme (VERIFIED, inline `@font-face` in `<head>`)

| Family name in CSS | File | Status | Notes |
|---|---|---|---|
| `Josefin Light` | `/wp-content/themes/tula/assets/dist/fonts/JosefinSans-Light.ttf` | 200 OK, loaded | Josefin Sans Light (300 cut) registered as `font-weight: normal`. Open-source (Google Fonts, OFL). |
| `Josefin Thin` | `@font-face` src `/wp-content/themes/tula/assets/dist/fonts/JosefinSans-thin.ttf` | **404 Not Found** (lower-case "thin") | A second reference to `JosefinSans-Thin.ttf` (capital T) returns 200 and is downloaded by the browser, but the declared family points at the 404 path, so it is `unloaded`. No element on any crawled page uses "Josefin Thin". It is dead weight. |
| `Didot Italic` | `/wp-content/themes/tula/assets/dist/fonts/Didot-w01-Italic.ttf` | 200 OK, loaded | "Didot W01 Italic" is a **commercial Linotype webfont**. Web licence status is UNKNOWN. A copy is kept in `original-assets/themes/…/fonts/` as audit evidence only. **Do not deploy it in Phase 2** without a confirmed licence. |

Third-party fonts also present: `Amelia Roboto` (Amelia booking widget only), `amelia-icons`, `WooCommerce` icon font, `star` (Woo ratings), all plugin defaults rather than brand fonts.

Declared but irrelevant: the Tailwind base sets `html { font-family: ui-sans-serif, system-ui … }`, which is overridden by `body, p { font-family: Josefin Light }`.

### 1.2 How the two real families are used (VERIFIED from computed styles, all 1440px pages aggregated)

| Usage | Family | Weight (computed) | Count of text nodes |
|---|---|---|---|
| Headings, nav, buttons, intro paragraphs, footer address | Josefin Light | 400 | 866 |
| Body/descriptive paragraphs in cards, itinerary text, captions, footer legal line | Didot Italic | 400 (italic face) | 239 |
| Bold inside content (`<strong>`) | Josefin Light | 700 (**browser-synthesised faux bold**, since no bold file exists) | 116 |
| Menu items (`font-semibold`) | Josefin Light | 600 (faux bold) | 25 |

Theme utility classes: `.font-primary { font-family: Josefin Light }`, `.font-secondary { font-family: Didot Italic }`.

### 1.3 Type scale (VERIFIED from `app.css` and computed styles)

| Element | Mobile (<768/1024) | Desktop (≥1024) | Line height | Colour | Notes |
|---|---|---|---|---|---|
| `body, p` | 18px | 18px | 25.2px base; `p` uses 1.8 (32.4px) | #605E5E | margin-bottom 1.5rem |
| Card/itinerary paragraphs (Didot Italic) | 16px | 16px | 25.6–28.8px | #605E5E | |
| `h1` | 31px | 60px | 37.2px / 72px | #605E5E | weight 400, often `uppercase` |
| `h2` | 25px | 48px (38px at an intermediate breakpoint) | 37.2px / 72px | #605E5E | weight 400; section titles `uppercase` |
| `h3` | 20px | 39px (theme), but most content `h3` compute to 20px/28px | 28–46.8px | #605E5E | |
| `h4` | 20px | 31px | 32.5 / 37.2px | | |
| `h5` | 20px | 20px | 32.5px | | weight 500 (faux) |
| `h6` | 20px | 20px | 26px | | |
| Header "Book Now" button | 18px | 18px | — | #605E5E | Josefin Light |
| Footer address | ~15px, very wide letter-spacing (ESTIMATE ≈0.3em) | | | grey | Josefin Light |
| Footer legal line | 15px | | | #605E5E | Didot Italic |

Letter-spacing: `normal` on headings (VERIFIED). The large footer address tracking is an ESTIMATE from screenshots.

### 1.4 Typography observations

- Josefin Sans Light at 400 on light sage backgrounds gives low contrast and thin strokes (readability risk at 16–18px).
- Didot Italic for long paragraphs (itineraries, team bios) is hard to read at 16px.
- Faux bold/semibold is rendered because only one Josefin weight is shipped.
- The Amelia booking widget renders in Roboto, which breaks visual consistency on `/booking/`.

### 1.5 Mandatory Phase-2 rule (recorded, not yet actioned)

The redesign must use **exactly two font families** site-wide (one for headings, one for body/UI), both readable, professional and not overly decorative. Hierarchy comes from size, weight, line-height and letter-spacing only. No third family for footer, decorative headings or individual sections. **Fonts are not selected in this audit.**

Options to evaluate in Phase 2 (for information only, no decision made):

- Josefin Sans (OFL, Google Fonts) is the brand's existing sans, available in 100–700 weights, so it fixes the faux-bold issue. It is light and geometric; check readability at body sizes.
- Didot is the existing serif accent but is commercial. Freely licensed Didone-style alternatives exist on Google Fonts (e.g. Playfair Display, Bodoni Moda) if a serif heading face is wanted. Didones are high-contrast, so use them at display sizes only.
- If a pairing keeps Josefin for headings, a more readable body sans should be assessed instead.
- Third-party widgets (Amelia) can be themed to inherit the chosen body font.

---

## 2. Colour

### 2.1 Verified brand/UI colours (from CSS + computed styles)

| Role | Value | HEX | Evidence |
|---|---|---|---|
| Primary text (headings, body, buttons) | `rgb(96,94,94)` | **#605E5E** | VERIFIED: 3,173 text nodes; `body,p{color:#605e5e}` |
| Primary surface / section panels / button fill | `rgba(227,233,229,0.85)` | **#E3E9E5 @ 85%** | VERIFIED: CSS var `--bg-overlay-color`, 161 elements |
| Solid surface (footer, body) | `rgb(226,230,227)` | **#E2E6E3** | VERIFIED |
| Muted panel | `rgb(219,219,214)` | **#DBDBD6** | VERIFIED |
| Warm off-white ("chiffon") | | **#FFF9F1**, #FFFDFB, #FFFCF8 | VERIFIED (CSS vars `--color-chiffon-light-*`) |
| Menu panel background | `rgb(240,240,240)` | **#F0F0F0** | VERIFIED |
| Button hover fill | `rgb(229,229,229)` | **#E5E5E5** | VERIFIED (hover test) |
| Text on imagery/video (hero intro, itinerary over texture) | | **#FFFFFF** | VERIFIED |
| Secondary grey text (Tailwind gray-400) | `rgb(156,163,175)` | #9CA3AF | VERIFIED; template default (menu close icon, small UI), so incidental |
| Dark grey | | #333333 / #444 | VERIFIED; minor |
| Divider/borders | `rgba(96,94,94,0.1)` and #605E5E | | VERIFIED |

### 2.2 Imagery-derived brand palette (ESTIMATES)

The dominant brand atmosphere comes from the full-screen background video `video-bg.mp4` (blurred leaf shadows on a warm clay wall) and the textured section image `tula-banner-scaled.webp` (stone relief).

| Tone | Approx. HEX | Source |
|---|---|---|
| Light clay / sand | #C9A997, #CDB0A0, #C5A491 | hero video frame |
| Mid clay | #A1806F, #876958 | hero video frame |
| Deep earth brown | #5D402E, #694C3A | hero video shadow side |
| Promo accent green (popup "DIRECT BOOKINGS ONLY" label) | ≈#6E9688 (ESTIMATE) | promo image only, so incidental to a campaign |

### 2.3 Incidental / not brand

- Tailwind gray scale (#9CA3AF, #4B5563, #1F2937, #111827, #E5E7EB, #D1D5DB) appears in template/menu defaults.
- `#AA0000` is the CF7/Amelia validation red.
- Theme CSS variables reference **undefined** tokens (`--color-pine`, `--color-sacramento`, `--color-sage`, `--color-greengoblin-*`, `--color-kelly-green` …). These are leftovers from a starter template and resolve to nothing. Do not treat them as brand colours.
- The Amelia widget uses its own palette (white card, #605E5E-ish continue button).

---

## 3. Logo and brand marks

| Asset | File | Dimensions | Use on site |
|---|---|---|---|
| Primary logo, white | `/wp-content/uploads/2025/04/tula-wellness-logo-white.webp` | 586×244 | Centred over hero video on Home (397px wide desktop / 200px mobile; 527px responsive variant exists) |
| Primary logo, black | `/wp-content/uploads/2025/04/tula-wellness-logo-black.webp` | 586×244 | Inside the slide-out menu (h-8) |
| Co-brand lock-up "TULA wellness by the Amala" | `/wp-content/uploads/2025/04/The-Amala_Tula-Wellness-Amala-DG.webp` | 494×196 | Home intro section (247px) and footer (146px) |
| The Amala logo | `/wp-content/uploads/2025/06/The-Amala-logo.png` (500×234); also `2025/05/the-amala-logo.webp` (766×398) | | Accommodation page |
| Old/unused logo | `/wp-content/uploads/2025/04/logo-1.png` (200×84) | | Not seen on live pages |
| Site icon | `/wp-content/uploads/2026/02/cropped-tula-*.jpg` (32/180/192/512) | | Favicon (WP site icon). Theme favicon files `favicon.ico`, `apple-touch-icon.png` return **404** |

Mark description (from screenshots): a fine-line **ginkgo leaf** illustration to the left of the wordmark "TULA" (the "A" drawn as an open chevron without crossbar), with "wellness" in lowercase beneath/right. Thin monoline, single colour. The PDF brochures state the brand is "inspired by the longevity and strength of the gingko leaf".

Logo files are raster (WebP/PNG). **No SVG logo was found**, so request a vector logo from the business for Phase 2 (UNKNOWN whether one exists).

## 4. Other visual identity elements (observed)

| Element | Observation |
|---|---|
| Overall tone | Calm, airy, spa-minimal; muted sage-grey panels over a warm clay video backdrop; lots of whitespace. |
| Shape language | Square corners everywhere (border-radius 0) **except** circular treatment thumbnails on Home (`rounded-full`, 121px). |
| Buttons (`.btn-prm`) | Sage fill #E3E9E5 @85%, #605E5E text, 40px high, min-width 142px, padding 8px 20px, radius 0, soft Tailwind shadow-md plus a decorative PNG "swoosh" shadow (`btn-shadow.png`, 165×26) under the bottom-right that flips on hover; hover fill #E5E5E5 and shadow-lg; `transition: transform .3s`. |
| Shadows | Soft Tailwind shadows on buttons and blog/team cards; heavy `shadow-2xl` on menu panel. |
| Imagery | Natural-light lifestyle and treatment photography (hands, bowls, yoga, pool, tropical greenery); object-fit cover; 3:2 / 4:3 card crops; portrait 2:3 photos in "Choice of Programs". |
| Backgrounds | Fixed full-viewport looping video behind everything (`video-bg.mp4`, 848×432, upscaled); semi-transparent sage panels (`backdrop`-like 85% opacity) let it show through; full-bleed 430px image bands (stone relief `tula-banner`, greenery video `C0252.mp4`, water/gua-sha image). |
| Icons | Social icons in footer (Facebook, WhatsApp, TripAdvisor) as dark grey circular glyphs; hamburger as three uneven thin lines (white). |
| Decorative | Thin horizontal rule under "Meet the Team"; numbering "1, 2, 3…" and "Program 1/2/3" above program cards (the Phase-2 rules discourage decorative numbering). |
| Headings | Large, light, uppercase Josefin; e.g. "THE TULA EXPERIENCE", "OUR STORY", "FULL DAY EXPERIENCES". |

## 5. What to preserve vs. not carry over (guidance for Phase 2)

Preserve:
- The ginkgo-leaf TULA logo and the "by the Amala" co-brand.
- The muted sage (#E3E9E5/#E2E6E3) + warm grey text (#605E5E) + clay/earth palette.
- The calm photographic style.
- The serene, minimal personality.

Do not carry over:
- Faux-bold rendering and the broken Josefin Thin face.
- Didot Italic for long paragraphs.
- Low-contrast thin text over the video texture.
- The PNG swoosh shadow under buttons and decorative numbering.
- The undefined theme colour tokens.
- The visual mismatch of the Roboto booking widget.
