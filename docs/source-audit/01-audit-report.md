# 01 — Audit Report: tula-wellness.co (Phase 1)

| | |
|---|---|
| Site | https://www.tula-wellness.co/ (TULA Wellness by The Amala, Seminyak, Bali) |
| Audit date | 2026-10-27 |
| Phase | 1, research only. No redesign, code, config change, push or deploy. |
| Workspace state at start | `D:\tulawellness46` was **empty** (no project files, no prior evidence, not a git repo). |

## 1. Method

1. **Discovery:** robots.txt, `wp-sitemap.xml` (posts, pages, products, categories, users), header menu (expanded), footer, in-content links, WP REST API (`/wp-json/wp/v2/{pages,posts,media,categories,users}`), WooCommerce Store API, Amelia public `entities` endpoint, probes (404, search, pagination, footer `#` links).
2. **Rendered crawl:** headless Chrome 155 (Playwright-core, run from a temp folder outside the project) loaded 56 URLs, 118 page loads in total, at 1440×900 (all), 768×1024 (navigation pages) and 390×844 (pages and posts). For each it captured status, final URL, metadata, JSON-LD, section structure, headings with computed typography, paragraphs, links, buttons with computed styles, forms, images (natural vs displayed size, alt, lazy), background images, videos, iframes, scripts, third-party hosts, network asset sizes, colour/font frequency, horizontal-overflow checks, and screenshots (fold + full page).
3. **Viewport scroll captures** for all 19 navigation pages at 1440 and 390. These are needed because stitched full-page captures cannot render the site's fixed background video.
4. **Interaction tests:** promo popup (open/close), hamburger menu and all submenu accordions (3 widths), header on scroll, primary-button hover state, contact-form empty-submit validation, booking widget step 1.
5. **Content extraction:** verbatim page/post content from the REST API, converted to Markdown; brochure PDFs downloaded and text-extracted; Amelia service catalogue exported to CSV.
6. **Asset collection:** every upload, theme image, font and video actually requested by the crawled pages was downloaded once (156 files, ≈24 MB) to `original-assets/`, plus 5 brochure PDFs (≈36 MB). The 69 unused media-library items were **not** downloaded (listed in `evidence/media-library-unused.json`).

## 2. Coverage

| Category | Count | Coverage |
|---|---|---|
| Published pages (WP) | 29 | All inspected (1440 + 390; 19 nav pages also at 768) |
| Blog posts | 13 | All inspected (1440 + 390); full text saved |
| Woo product | 1 | Inspected |
| Category archives | 6 | Inspected at 1440 (all render "No posts found") |
| Author archives | 3 | Inspected at 1440 |
| Utility probes | 404, search, blog page 2, `/#` | Inspected |
| Booking flow (Amelia) | 3–4 steps | **Partial:** step 1 and service catalogue verified; date/time, customer info, payment **not tested** (no bookings made) |
| Woo cart/checkout | 2 | Pages render empty; checkout redirects to cart; payment gateways **unknown** |
| Contact form | 1 | Validation verified; delivery **unverified** |
| D-EDGE retreat booking | 2 links | Links resolve (200); availability/rates not inspected |
| External PDFs | 5 | Downloaded and extracted |
| `/wp-admin/` | — | Not accessed (out of scope) |

**Pages inspected only partially:** `/booking/` (beyond step 1), `/checkout/` (requires cart contents), `/my-account/` (login only).
**Discovered but inaccessible:** none of the public routes; admin area intentionally not accessed.
**Broken or unavailable:** see 08 §C. No 5xx errors; every sitemap URL returns 200.
**Interactive states not verified:** Amelia steps 2+, Woo payment, CF7 email delivery, popup frequency rules, carousel behaviour on resize, iOS video autoplay, Safari/Firefox rendering, keyboard/screen-reader behaviour.

## 3. Website overview (verified)

- **Business:** TULA Wellness, a holistic wellness centre/day spa at The Amala boutique resort, Jl. Kunti I No.108, Seminyak, Bali. Operated under PT Amala Bali. Blends Balinese healing, TCM, Ayurveda and Western aromatherapy. Offers day programmes (full/half day), 4 multi-night retreats, a daily group class, massages, facials, rituals, TCM treatments, sound healing, Healy analysis, workshops and a tea ceremony.
- **Platform:** WordPress 7.1.3 + custom Tailwind/Alpine theme "tula"; WooCommerce 9.8.7; Amelia Booking 8.3.2; Contact Form 7; Popup Builder; Cloudflare + LiteSpeed; GTM-W6K7BRG2 with Google Ads.
- **Primary conversion:** "Book Now" / "Reserve Your Experience" → Amelia booking page (day programmes, treatments) or The Amala's D-EDGE hotel engine (Detox and De-Stress retreats).
- **Visual identity:** ginkgo-leaf TULA logo; muted sage panels (#E3E9E5 @85%, #E2E6E3) with warm-grey text #605E5E over a fixed clay-toned leaf-shadow video; Josefin Sans Light + Didot Italic; square corners; airy, calm.

## 4. Key findings (summary; details in 02–08)

### Content
- 42 pieces of content extracted verbatim (29 pages + 13 posts). Real facts: contact, address, team (2 on live home), story, 5 day programmes with inclusions, 4 retreat itineraries, T&C.
- **Prices exist only in the booking backend** (68 Amelia services, IDR 242,000 to 4,313,650). None are shown on pages. Retreat prices are not published anywhere.
- **Heavy duplication and copy-paste errors:** Detox and Tula Experience Day 1 are copied from De-Stress; the stress-retreat FAQ (~1,500 words) repeats on 3 pages with the wrong subject on 2; two Day Experience pages are identical.
- **Factual conflicts:** Healy "medical" vs "non-medical"; opening hours 9–22 vs 9:30–21:30; class schedule 5 vs 7 days; group-class price 200,000++ vs 242,000.
- No testimonials, reviews or page-specific FAQs exist.

### Assets
- 156 assets used on the live site, all saved locally with source URLs (`04-assets-manifest.csv`). Logos available only as raster (WebP/PNG).
- Many oversized photos (1439×2159 shown at 285×427; up to 1.1 MB), several upscaled images, 2 autoplay videos (4.8 MB + 1.2 MB, no posters), most images without alt text.
- 69 unused library items, including 10 large staff portraits and an unused stock video.

### Brand
- Fonts: Josefin Sans Light (OFL) and Didot W01 Italic (commercial, licence unknown); "Josefin Thin" declared but broken/unused. Bold weights are faux.
- Verified colours: #605E5E, rgba(227,233,229,.85), #E2E6E3, #DBDBD6, #FFF9F1, #F0F0F0; estimated clay palette #C9A997 → #5D402E from the video.
- Theme CSS references many undefined colour tokens (template leftovers), which are not brand colours.

### Functionality
- Booking depends on Amelia (WordPress) and D-EDGE. A Next.js frontend must link to or integrate these; it cannot replace them by itself.
- Broken: footer T&C/Disclaimer (`#`), Family Retreat button (`#`), Sound Healing Reserve (no href), Instagram (`#`), H1 link to an old Wix site, category archives, D-EDGE links with past dates.
- Menu is hamburger-only at every width (3 accordions).

### Responsive
- No horizontal overflow at 390/768/1440.
- Mobile: transparent fixed header overlaps content; white hamburger is invisible over light panels; H1 jumps 31 → 60px at 768; pages become long (up to 8,872px home, 6,009px More of Tula).

### Technical / SEO / security
- No meta descriptions or OG tags anywhere; Home lacks an H1; legacy/test pages are live and in the sitemap; JSON-LD image 404; favicons 404.
- REST API exposes usernames including the admin account. No cookie consent while ads tags load.

## 5. Verified vs estimated vs unknown

| Type | Examples |
|---|---|
| **Verified** | Routes & status codes; page content; CSS fonts/colours/type scale; computed styles; menu tree; popup content; form fields & validation messages; Amelia prices/durations; asset dimensions and file sizes; third-party hosts; overflow results |
| **Estimated** | Clay/earth colours sampled from video frames; footer letter-spacing; promo accent green; that Amelia prices include 21% tax/service |
| **Unknown** | Booking steps 2+ and payments; CF7 delivery; D-EDGE rates; retreat prices; Didot licence; popup display rules; vector logo existence; correct opening hours/schedule; real-device behaviour |

## 6. Limitations

- Headless Chromium only; no Safari/Firefox/real devices.
- No transactions submitted (by design).
- TripAdvisor blocks automated requests (403), so the link was not verified.
- Stitched full-page screenshots render the fixed background video as blank areas; use `screenshots/scroll-views/` as the visual reference.
- Content-length was unavailable for some responses, so page-weight totals are lower bounds.
- The live site may change after 2026-10-27 (the promo ends 2026-12-10).

## 7. Confirmation

- The mandatory Phase-2 rules (exactly two font families, visual/content/footer/image rules, Next.js `images: { unoptimized: true }` merged into existing config, ≤10 blog images) are recorded in [09-phase-2-recommendations.md](09-phase-2-recommendations.md) §A.
- **No redesign, UI component, page implementation, package installation in the project, configuration change, GitHub push or Vercel deployment was performed.** Only audit documentation and research evidence were created, all under `docs/source-audit/`. The research tooling (Playwright-core and scripts) lives in a temporary scratch folder outside the project.
