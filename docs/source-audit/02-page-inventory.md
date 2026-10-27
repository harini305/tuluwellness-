# 02 — Route and Page-by-Page Inventory

Audit date 2026-10-27. Route sources: `wp-sitemap.xml` (5 sub-sitemaps), robots.txt, header menu, footer, in-content links, WP REST API (29 pages / 13 posts / 1 product / 6 categories / 3 sitemap authors), and probes (404, search, pagination).

Viewports crawled: 1440×900 (all), 768×1024 (navigation pages), 390×844 (all pages and posts). Screenshots: see `screenshots/screenshot-index.csv`. Status codes come from Chrome navigation.

## Shared layout (applies to every page unless noted)

| Component | Description |
|---|---|
| Background | Fixed full-viewport `video-bg.mp4` (warm clay wall + leaf shadows) behind all content; the first ~340px of every inner page is "empty" and shows this video as a pseudo-hero band. |
| Header | Fixed, transparent. Left: white 3-line hamburger. Right: "Book Now" button → `/booking/`. No logo in the header (logo only appears in the Home hero, the menu panel and the footer). |
| Menu | Slide-out panel (see 06 F2/F3). Tree below. |
| Content panels | Sage panels `rgba(227,233,229,.85)` over the video, centred max-width containers; some sections are transparent (white text directly over the video). |
| Retreat "Book Now" band | 200px full-bleed image `2025/05/IMG_3379.webp` (water + gua-sha tool) with a translucent white bar and "Book Now" H3 link. |
| Footer | Sage #E2E6E3, centred, ~400px tall: co-brand logo (146px) → address (Josefin, wide tracking) → info@tula-wellness.co → "Terms & Conditions • Disclaimer" (both `/#`) → "(C) 2025 PT Amala Bali \| All Rights Reserved" (Didot Italic) → Facebook / WhatsApp / TripAdvisor icons. |

### Navigation tree (verified by expanding all accordions)

```
Home                                   → /
Day Experiences                        → /day-experiences-2/
  Full Day Experiences                 → /full-day-experiences/
  Full Day Purification Journey        → /full-day-purification-journey-2/
  Half Day Experiences                 → /half-day-experiences/
  Half Day Purification Journey & Sound Healing Experience → /half-day-experiences-2/
Wellness Retreat                       → /wellness-retreat/
  Tula Experience Journey              → /tula-experience-journey/
  Detox Retreat                        → /detox-retreat/
  De-Stress Retreat                    → /de-stress-retreat-in-bali-3/
  Wellness Family Stay                 → /wellness-family-stay/
More of Tula                           → /more-of-tula/
  Massages                             → /massages/
  Sound Healing Meditation             → /sound-healing-meditation/
Daily Group Class                      → /full-day-experiences-2/
Accommodation                          → /accommodation/
Blog                                   → /blog/
Get in Touch                           → /get-in-touch/
[Header button] Book Now               → /booking/
```

## Route inventory (all discovered URLs)

Legend for recommendation: **Implement**, **Consolidate**, **Legacy** (exclude from nav, 301 if replaced), **Keep on WP** (backend), **Review**.

| # | URL | HTTP | Class | WP modified | Coverage | Recommendation |
|---|---|---|---|---|---|---|
| 1 | `/` | 200 | Main nav | 2026-04-21 | Full (3 vw + interactions) | Implement |
| 2 | `/day-experiences-2/` | 200 | Main nav (parent) | 2026-01-29 | Full | Consolidate with #3 (near-duplicate text) |
| 3 | `/full-day-experiences/` | 200 | Secondary/detail | 2026-02-01 | Full | Implement |
| 4 | `/full-day-purification-journey-2/` | 200 | Detail | 2026-02-01 | Full | Implement |
| 5 | `/half-day-experiences/` | 200 | Detail | 2025-07-10 | Full | Implement |
| 6 | `/half-day-experiences-2/` | 200 | Detail | 2025-07-10 | Full | Implement |
| 7 | `/wellness-retreat/` | 200 | Main nav (listing) | 2025-07-21 | Full | Implement as retreat overview |
| 8 | `/tula-experience-journey/` | 200 | Detail | 2026-02-01 | Full | Implement |
| 9 | `/detox-retreat/` | 200 | Detail | 2025-07-24 | Full | Implement |
| 10 | `/de-stress-retreat-in-bali-3/` | 200 | Detail | 2025-07-24 | Full | Implement (clean slug + 301) |
| 11 | `/wellness-family-stay/` | 200 | Detail | 2026-02-01 | Full | Implement |
| 12 | `/more-of-tula/` | 200 | Main nav (listing) | 2025-06-02 | Full | Implement / consolidate into Treatments |
| 13 | `/massages/` | 200 | Detail | 2026-02-01 | Full | Consolidate into Treatments (review) |
| 14 | `/sound-healing-meditation/` | 200 | Detail | 2025-07-24 | Full | Implement or consolidate |
| 15 | `/full-day-experiences-2/` (Daily Group Class) | 200 | Main nav | 2026-07-21 | Full | Implement (rename slug + 301) |
| 16 | `/accommodation/` | 200 | Main nav | 2025-07-31 | Full | Implement (short) / review |
| 17 | `/blog/` | 200 | Listing | 2025-05-15 | Full | Implement (low priority) |
| 18 | `/blog/page/2/` | 200 | Listing pagination | — | 1440 only | Implement if blog built |
| 19 | `/get-in-touch/` | 200 | Contact | 2025-06-02 | Full + form test | Implement |
| 20 | `/booking/` | 200 | Booking (Amelia) | 2025-05-15 | Partial (step 1 only) | Keep on WP / link |
| 21 | `/term-and-conditions/` | 200 | Utility/legal | 2025-07-24 | 1440 + 390 | Implement; link from footer |
| 22 | `/cart/` | 200 (noindex) | Transaction | 2025-05-15 | 1440 + 390 (empty cart) | Keep on WP |
| 23 | `/checkout/` | 200 → redirects to `/cart/` when cart empty | Transaction | 2025-05-15 | Redirect only | Keep on WP |
| 24 | `/my-account/` | 200 | Account (Woo login) | 2025-05-15 | 1440 + 390 | Keep on WP |
| 25 | `/shop/` | 200 | Woo shop (renders empty) | 2025-05-15 | 1440 + 390 | Legacy |
| 26 | `/product/appointment/` | 200 | Woo product "Appointment" Rp0 with open comments form | 2025-05-15 | 1440 + 390 | Keep on WP (hide); noindex recommended |
| 27 | `/home-2/` ("Home #2") | 200 | Old draft of home (published) | 2025-06-02 | 1440 + 390 | Legacy (contains extra team member Ninie and alternate service list; see 03) |
| 28 | `/contoh/` ("Page lama Full Day Purification Journey") | 200 | Old version of #4 | 2025-06-25 | 1440 + 390 | Legacy |
| 29 | `/page-baru/` ("Page Baru") | 200 | Empty test page (H1 only) | 2025-05-28 | 1440 + 390 | Legacy |
| 30 | `/15258-2/` (untitled) | 200 | Test page: duplicate of Wellness Retreat with dummy buttons "fdf", "asdasd" | 2025-06-18 | 1440 + 390 | Legacy (should be unpublished) |
| 31 | `/comming-soon/` | 200 | Empty "coming soon" template | 2025-04-18 | 1440 + 390 | Legacy |
| 32–44 | 13 blog posts (see table below) | 200 | Editorial | 2023-06 → 2025-05 | 1440 + 390 each | Implement if blog built |
| 45–50 | `/category/{uncategorized, ancient-life-wisdom, mindfulness-practice, health, retreats, spa}/` | 200 | Archive | — | 1440 | Legacy. **All render "No posts found."** although posts are assigned (template bug). |
| 51–53 | `/author/{leona, online, ugnius}/` | 200 | Archive | — | 1440 | Legacy. Each shows the full unfiltered post list; titles "Chen Jun Hsiang Leona", "Online Amala", "ugnius" (exposes usernames). |
| 54 | `/?s=retreat` | 200 | Search results | — | 1440 | Not needed ("We found 18 results", mixes pages & posts) |
| 55 | `/this-page-does-not-exist-audit/` | 404 | 404 template | — | 1440 | Implement a 404 ("Sorry, the page you are looking for could not be found." + "Go Home") |
| 56 | `/#` (footer T&C and Disclaimer targets) | 200 (home) | Broken link target | — | — | Fix |
| — | `/wp-json/…`, `/wp-sitemap*.xml`, `/wp-admin/` (disallowed) | — | Technical | — | API used for extraction | n/a |

External destinations (not part of the site): D-EDGE hotel booking (2 URLs), Google Drive PDFs (5), theamala.com, Google Maps embed, Facebook, Instagram (JSON-LD only), TripAdvisor, WhatsApp, old Wix page `bolinwu22.wixsite.com/my-site-3/tula-shop`.

Inaccessible / not inspected: `/wp-admin/` (login; out of scope), Amelia steps 2–4 (date/time, customer info, payment), Woo checkout with items, payment gateways, CF7 delivery. No route returned a server error.

---

## Page-by-page detail

SEO baseline for all pages: `<title>` = "{Page} – TULA Wellness" (Home: "TULA Wellness"); **no meta description and no Open Graph/Twitter tags on any page**; canonical present on pages (absent on blog/archives); robots `max-image-preview:large` (cart/checkout add `noindex`). JSON-LD (DaySpa) present on every page (site-wide in head).

Typography/colours are shared (see 05). Page-specific deviations are noted.

### 1. Home `/`
- **Purpose:** brand introduction and overview of offerings, story, team, featured articles.
- **Sections (order, 1440px):**
  1. Hero (0–900): fixed background video + centred white TULA logo (397px). No headline, no CTA except header "Book Now". Promo popup opens on load.
  2. Intro panel (900, 365px): co-brand logo "TULA wellness by the Amala" + 2 lines: "Where we gently help bring back to your natural state of balance and natural resilience / To restore your inner harmony and maintain equilibrium in life, to reconnect and focus".
  3. Video band (430px): `C0252.mp4` greenery clip, no text.
  4. "THE TULA EXPERIENCE" (1,523px): subtitle 2 lines; 6 cards in 3×2 grid (circular 121px photo, H3, Didot paragraph, "Reserve Your Experience" → /booking/): Sound Healing · Body Relief Massages · Purification Yoga · Asana Yoga · Water and Mat Pilates · Rituals, Self Care and Treatments.
  5. Image band (430px): `tula-banner-scaled.webp` (stone relief).
  6. "OUR STORY" (660px): 3 paragraphs.
  7. "MEET THE TEAM" (1,038px): 2-card carousel: Leona Chen (Resident Wellness Master), Dewa Mertana (Pilates, Fitness & Balinese Healing), photo + role + bio.
  8. Image band (430px): same stone relief image again.
  9. "FEATURED POSTS" (864px): carousel of 5 posts (image, title, excerpt, "x min read", "Read More") with arrows.
  10. Footer.
- **Assets:** logo-white, Amala co-brand, 6× 150px treatment thumbs (`2025/06/{sound,back-relief,yoga,Asana-Yoga,pilates,tula}-150x150.jpg`), `tula-banner-scaled.webp` ×2, `leona.jpg`, `dewa-1.jpg`, 5 post thumbnails, `video-bg.mp4`, `C0252.mp4`, promo JPG.
- **Interactive:** popup, menu, team & post carousels.
- **Responsive:** 390px → cards stack 1-col, H2 25px, hero logo 200px, page height 8,872px; 768px → 2-col post carousel, H2 48px.
- **SEO:** title "TULA Wellness"; **no H1** on the page (logo image only; H2s used).
- **Risks:** heavy media (≈9 MB transferred; 4.8 MB video); stone banner repeated twice; low-contrast white text over video.
- **Redesign notes:** keep logo-led hero but add a clear value statement + primary CTA; compress the offering cards; one image band max.

### 2. Day Experiences `/day-experiences-2/` (menu parent)
- **Purpose:** labelled "Day Experiences" in the menu but the page H1 is "FULL DAY EXPERIENCES"; content ≈ identical to #3.
- **Sections:** (1) H1 + 2 photos (landscape `2026/01/Tula-full-day-2`, portrait `Tula-full-day-1`) on sage panel; (2) 5 white paragraphs over video describing the full-day itinerary (Healy scan → choice of Pilates/Yoga/Sound Healing → healthy meal → 90-min lymphatic drainage + ear candling → 1-hr organic facial (Sensatia Botanicals) → oolong tea & snacks); (3) "Choice of Programs": 2 portrait photos (left), 4 text blocks: Program inclusions (bullet string), Mantra Singing Bowl, Water and Mat Pilates, Asana Yoga; buttons "Discover More" (Drive PDF: *Tula – Full Day Experience.pdf*) + "Reserve Your Experience".
- **Risks:** duplicate of #3; no overview of half-day options despite the menu label.
- **Recommendation:** make this a true overview hub (Full Day / FDP Journey / Half Day / Half Day Purification), or drop it and point the parent at a hub page.

### 3. Full Day Experiences `/full-day-experiences/`
- Same intro text as #2; images `2026/02/Tula-full-day-experience-1/-2`; "Choice of Programs" lists **Program 1** Full Day Experience with Sound Healing Meditation, **Program 2** with Pilates, **Program 3** with Asana Yoga, each with a pipe-separated inclusion list (Program 2 omits the oolong tea that 1 and 3 include; confirm). Same Drive PDF + Reserve.
- **Prices (Amelia):** IDR 4,313,650 / 4,265,250 / 4,132,150 · 360 min · 1–2 pax. Prices are not shown on the page.

### 4. Full Day Purification Journey `/full-day-purification-journey-2/`
- **Sections:** H1 + 2 photos; 5 white paragraphs (Healy/German quantum tech, coconut blessing ceremony by healer Dewa, sun salutation, meal, 90-min lymphatic massage + ear canal purification, 60-min sound healing with seven-metal Nepalese bowls); "Purification Journey Inclusions" with numbered items 1–5 (Healy Quantum Field Analysis; Purification yoga; Sound Healing Meditation; 2 Course Tula Meal & Rebalancing Drink; Aroma Lymphatic Massage and Ear Candling Purification) + 2 photos; Discover More (Drive *TULA – Purification Journey.pdf*) + Reserve.
- **Price (Amelia):** IDR 4,241,050 · 360 min.
- **Legacy duplicates:** `/contoh/`, `/page-baru/`.

### 5. Half Day Experiences `/half-day-experiences/`
- **Sections:** H1 + photos (`NSP_0571`, `P1110354`); one long white paragraph (yoga / Vipassana-style sound healing / Nadis Flow → lymphatic drainage → meal); "Choice of Programs" 1–4: Asana Yoga, Sound Healing Meditation, Mat Pilates Class or Water Pilates, Purification Yoga + photos (`DSC06304`, `IMG_2917`); Drive *Tula Half Day Package.pdf* + Reserve.
- **Prices (Amelia):** Yoga 2,087,250 · Sound Healing 2,268,750 · Pilates 2,220,350 · Purification Yoga 2,389,750 (240 min).

### 6. Half Day Purification Journey & Sound Healing Experience `/half-day-experiences-2/`
- **Sections:** very long H1 (wraps to 3 lines); 3 white paragraphs; "Program Includes" 1–3 (Sound Healing Meditation; 2 Courses Tula Meals & Re-balancing Drink; Purification Yoga); Drive *Tula – Purification & Sound Healing Package 28-10-2024.pdf* + Reserve.
- **Price:** IDR 2,196,150 · 240 min.

### 7. Wellness Retreat `/wellness-retreat/` (menu parent)
- **Sections:** H2 "A True Urban Sanctuary for Wellness" + 3-line intro (white over video); 4 buttons: De-stress Retreat · Detox Retreat · Tula Experience Journey · **Family Retreat (href `#`, broken)**. Page height only 1,172px; no images.
- **SEO:** no H1.
- **Recommendation:** retreat overview with cards (duration, highlights, CTA) for the 4 retreats.

### 8. Tula Experience Journey `/tula-experience-journey/` (3-Day 2-Night)
- **Sections:** 2-column panel: left H1 + 2 Didot paragraphs + "Reserve Your Experience" (→ /booking/); right Day 1–3 itinerary (H3 + paragraph); "Book Now" image band (→ /booking/).
- **Issue:** Day 1 text is the De-Stress copy ("anti-stress retreat… de-stress retreat"). No price anywhere. Booking via Amelia, but there is **no matching Amelia service** for this retreat (unverified how it is booked).

### 9. Detox Retreat `/detox-retreat/` (5-Day 4-Night)
- **Sections:** as #8 with Day 1–5 (Arriving and Grounding / Releasing Stress / Create Space / Nourish / Back on track) + Book Now band + FAQ (5 `<details>`: What is a detox retreat? · Best detox management retreat in Bali · Why is Bali the perfect destination for a detox reduction retreat? · Purpose of anti-stress retreats · Key components of a detox retreat).
- **Booking:** D-EDGE link with fixed dates 2025-08-19 → 2025-08-23 (rateId 663115, roomId 159897).
- **Issues:** Day 1 and the whole FAQ body are De-Stress text with "detox" substituted into headings only; Day 2 heading "Releasing Stress".

### 10. De-Stress Retreat `/de-stress-retreat-in-bali-3/` (5-Day 4-Night)
- **Sections:** H1 "DE-STRESS RETREAT IN BALI", 2 paragraphs, Reserve (D-EDGE 2025-08-15 → 2025-08-19, rateId 663083, roomId 159896); Day 1–5 (Arriving and Grounding / Releasing Stress / Breathing and Mindfulness / Renewal and Rejuvenation / Reflecting and Transitioning); Book Now band (same D-EDGE link); FAQ ×5 (stress-related). The FAQ body is ≈1,500 words of generic SEO text.

### 11. Wellness Family Stay `/wellness-family-stay/` (6-Day 5-Night)
- **Sections:** H1, 2 paragraphs (kids' swimming & art, parents' massages/sound healing, breakfast daily + 3 lunches + 3 dinners, airport private car transfer), Reserve (→ /booking/); Day 1–6 itinerary (Arriving and Grounding / Blissful Bonding / Tri Hita Karana – Spiritual Harmony / Nurturing Through Touch / The Amala Experience Tour (South: GWK, Padang Padang, Single Fin, Uluwatu; North: Tirta Empul, Tegalalang, Ubud market) / Jalan-Jalan in Seminyak); Book Now band (→ /booking/); FAQ copied from Detox (irrelevant to families).
- **Issue:** T&C says under-12s cannot book a retreat "except family retreat"; age rules for this package are not stated on the page.

### 12. More of Tula `/more-of-tula/`
- **Sections:** sage panel with H2 "OTHER OFFERINGS" + intro; transparent area with 6 alternating image/text rows: Taiwanese Tea Ceremony · Gua Sha · Healy Quantum Field Analysis · Traditional Chinese Medicine Detox Workshop · Emotional Body Map Workshop · Aromatherapy, each with "Reserve Your Experience" → /booking/.
- **No H1.** Mobile height 6,009px (long).

### 13. Massages `/massages/`
- **Sections:** H1 "TULA MASSAGES" + wide image `massages.webp`; 3 rows: Lymphatic Drainage Massage · Traditional Balinese Massage (2 images `a483cb_*.jpg`, Wix-exported filenames) · Stress Relief Massage, each with Reserve.
- **Gap:** Amelia lists 8 body treatments with prices; the page shows 3 without prices or durations.

### 14. Sound Healing Meditation `/sound-healing-meditation/`
- **Sections:** H2 + 2 paragraphs + **"Reserve Your Experience" with no href (dead button)** + image `SOUND-HEALING-MEDITATION.webp`. No H1. Typo "their own breath" after "You…".
- **Price:** private IDR 847,000 (1–2 pax, 60 min); group 677,600 (hidden service).

### 15. Daily Group Class `/full-day-experiences-2/`
- **Sections:** H1 + 2 photos; 4 white paragraphs ("Find your flow from 9 to 10 AM…", studio amenities, ginger tea); "Group class schedule": Monday Yin Yoga · Wednesday Mat Pilates · Thursday Hatha Yoga · Friday Vinyasa Flow · Sunday Water Pilates + 2 photos; Discover More (Drive *Tula _ yoga flayer.pdf*) + Reserve.
- **Price:** Amelia "Group Class Ticket" IDR 242,000 (max 10). Flyer: "IDR 200,000++ per pax", EVERYDAY 9–10 AM, 7-day schedule (Mon Yin, Tue Hatha, Wed Mat Pilates, Thu Hatha, Fri Vinyasa, Sat Yin, Sun Water Pilates). The **page omits Tuesday and Saturday**, so the schedule needs confirming.
- **Slug/title mismatch** ("full-day-experiences-2").

### 16. Accommodation `/accommodation/`
- **Sections:** full-bleed image `theamala-scaled.webp` (1,000px tall with dark overlay) with H1 "STAY WITH US", The Amala logo and "Visit The Amala" → https://theamala.com. Nothing else.
- **Gap:** no room info; relies entirely on theamala.com.

### 17. Blog `/blog/` (+ `/blog/page/2/`)
- **Sections:** H1 "Discover More" (white, over video) + 2-col card grid, 8 posts per page (image 650px crops, H4 title, excerpt, "x min read", "Read Now"); page 2 has the remaining 5. Pagination is a single text link "Next »" → `/blog/page/2/` at the bottom of the grid.
- Card excerpts for some posts are wrong: "The Ultimate Guide…" and "Meditation and Sound Therapy" show the Ayurveda/Huangdi Neijing excerpt.

### 18. Get in Touch `/get-in-touch/`
- **Sections:** sage panel: H1 "Get in Touch" (**wrapped in a link to the old Wix site**), left column Address / Phone (+62 818-1873-8866) / email / Opening Hours "Everyday 9:00 am – 10:00 pm" / Facebook + Instagram (`#`) icons; right column CF7 form; Google Map iframe (450px); "Visit Our Boutique" H2 + address; full-width boutique photo `tula-boutique-scaled.webp`.
- **Form:** see 06 F12.

### 19. Booking `/booking/`
- Amelia step form on white card over video (see 06 F9). Sidebar contact: +6281818738866 · info@tula-wellness.co. No page heading.

### 20. Terms and Conditions `/term-and-conditions/`
- H1 "Term And Conditions" (white) + centred sections: Check-in/out policy (15:00 / 12:00, valid ID), Data protection policy (refers to a "privacy policy" that does not exist on the site), Child policy (12+ = adult; under-12 cannot book a retreat "except family retreat"), Resort etiquette (devices, non-smoking, candles, swimwear), Transfer arrangement (48 h notice, charges apply), Pets (not allowed), change/refusal clauses. Not linked from anywhere (footer links point to `#`).

### 21–31. Utility & legacy pages
See route table. Notable content only in legacy pages: `/home-2/` has a 3-person team (Leona, Ninie, Dewa; `2025/04/*.webp`) and a "Nadis Flow Dynamic Meditation" card, plus "Purification Yoga" text mentioning a Balinese inner blessing ceremony; `/contoh/` is an older FDP layout with Healy/Amala spa images.

---

## Blog posts (13)

| Title | URL slug | Published / modified | Categories | Featured image | Words | Notes |
|---|---|---|---|---|---|---|
| Meditation and Sound Therapy | `/meditation-and-sound-therapy/` | 2025-05-28 | Mindfulness practice | `2023/10/New-Project1.jpg` | 377 | Listing excerpt is from another article |
| Why Choose a Retreat Over a Regular Vacation? | `/why-choose-a-retreat-over-a-regular-vacation/` | 2024-12-11 | Retreats, Mindfulness, Health | `2024/10/well-at-chileno-bay-1200x600-1.jpg` | 1,371 | "well-at-chileno-bay" suggests a third-party (Mexico resort) image; check rights |
| How to Make a 3-Day Detox Plan? | `/how-to-make-a-3-day-detox-plan/` | 2024-12-10 | Retreats, Health | `2023/08/Tula-Spa-Villa-4.jpg` | 2,236 | |
| Exploring Healing Retreats: Types, Benefits, and What to Expect | `/what-is-a-healing-retreat/` | 2024-12-06 | Retreats, Health | `2023/06/3.jpg` | 2,675 | Slug/title mismatch |
| Top Women's Mental Health Retreats in Bali | `/top-womens-mental-health-retreats-in-bali/` | 2024-10-23 | Retreats, Health | `2023/08/tula-the-amala-two-bedroom-pool-estate-3.jpg` | 1,402 | |
| Top 10 Benefits of Spiritual Retreats | `/top-10-benefits-of-spiritual-retreats/` | 2024-10-21 | Retreats, Mindfulness, Health, Spa | `2024/10/bali-water-temple-praying-1500-op.jpg` | 1,529 | |
| How to Plan a Wellness Retreat in Bali? | `/how-to-plan-a-wellness-retreat-in-bali/` | 2024-10-11 | Retreats, Health | `2024/10/How-to-Plan-a-Wellness-Retreat-in-Bali.jpg` | 1,928 | |
| The Ultimate Guide to Wellness at The Amala | `/the-ultimate-guide-to-wellness-at-the-amala/` | 2024-09-04 (mod. 2025-05-28) | Ancient life wisdom | `2024/09/The-Ultimate-Guide-…-scaled-1.jpg` | 408 | Wrong excerpt on listing |
| Morning Beach Walk | `/morning-beach-walk/` | 2023-10-05 | Mindfulness practice | `2024/05/DODY8666-scaled-1.jpg` | 352 | |
| Breathing is medicine | `/meridians-‧-invisible-organs-of-the-human-body/` | 2023-09-09 | Ancient life wisdom | `2023/09/breathe-1.jpg` | 299 | **Slug belongs to a different topic**; special character `‧` (U+2027) in slug |
| Meridians – Invisible organs of the human body | `/meridians-‧-invisible-organs-of-the-human-body-2/` | 2023-09-09 | Ancient life wisdom | `2023/09/Doll.jpg` | 424 | `-2` slug |
| Space. Time. Observer. | `/space-time-observer/` | 2023-06-27 | Uncategorized | `2023/06/SPACE.-TIME.-OBSERVER-1.jpg` | 502 | |
| A Survey of Ancient Wisdom of Life – Ancient Indian Ayurveda VS TCM | `/a-survey-of-ancient-wisdom-of-life-ancient-indian-ayurveda-vs-tcm/` | 2023-06-15 | Ancient life wisdom | `2023/06/Tray-1.jpg` | 320 | |

Full text: `content/posts/*.md`. REST `/wp-json/wp/v2/users` publicly lists 4 users: "AdminTu" (admintu), "Chen Jun Hsiang Leona" (leona), "Online Amala" (online), "ugnius". See 08 (security note).
