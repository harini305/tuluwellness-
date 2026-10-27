# 08 — Issues, Inconsistencies, Gaps and Open Questions

Everything here was observed on the live site or its public data on 2026-10-27. **No corrections have been made**; items marked "Ask business" need a decision from TULA / The Amala before Phase 2 copy is final.

Severity: **H** = affects bookings, legal or factual accuracy · **M** = noticeable quality/UX/SEO issue · **L** = cosmetic.

## A. Factual conflicts (Ask business)

| # | Sev | Issue | Evidence |
|---|---|---|---|
| A1 | H | **Healy device described as "a medical device"** (FDP page, More of Tula, brochures) but as **"a Non-Medical device"** in the Amelia service description. This is a health/regulatory claim. | `content/pages/full-day-purification-journey-2.md`, `more-of-tula.md`; `data/booking-services.csv` (service 17) |
| A2 | H | **Opening hours:** "Everyday 9:00 am – 10:00 pm" (Get in Touch) vs JSON-LD 09:30–21:30 daily. | Get in Touch; `<head>` JSON-LD |
| A3 | M | **Phone:** +62 818-1873-8866 everywhere visible; Amelia location stores +620361738866 (a landline-style number). | Amelia entities |
| A4 | M | **Daily Group Class schedule:** website lists 5 days (Mon, Wed, Thu, Fri, Sun); flyer PDF lists 7 days (adds Tue Hatha, Sat Yin) and says "EVERYDAY". | `full-day-experiences-2.md`; `brochures-text.md` |
| A5 | M | **Group class price:** flyer "IDR 200,000++ per pax"; Amelia IDR 242,000 (= 200,000 × 1.21, so probably tax & service included; inferred). The website shows no price. | flyer; Amelia |
| A6 | M | **Singing bowl description:** "Mantra singing bowl" (Home) vs "Tibetan singing bowl" (6 pages, Amelia) vs "seven-metal handmade Nepalese singing bowls" (FDP). | content files |
| A7 | M | **Full Day Experience with Pilates** omits "Traditional Oolong tea with dessert", which the other two programmes include. Intentional? | `full-day-experiences.md` |
| A8 | M | **Massage naming:** "Stress Relief Massage" (site) vs "Head and Shoulder Stress Relief" (Amelia). Site shows 3 massages; Amelia offers 8. | `massages.md`; CSV |
| A9 | M | **Home "Asana Yoga" lists Ashtanga**; no Ashtanga class exists in Amelia or the schedule. | home.md |
| A10 | M | **Team:** live home shows 2 people; legacy `/home-2/` shows 3 (adds Ninie); media library holds 10+ staff portraits with names (Ana, Desi, Darmini, Arik, Tari, Rusma, Devi, Dewi Arum Sari…). Current team roster? | media library |
| A11 | M | **Aromatherapy copy** credits "the unique formula of Mrs. Morley, the pioneer of aromatherapy". The attribution is unverified; ask the business before reusing it. | `more-of-tula.md` |
| A12 | M | **Family Stay meals:** "daily carefully crafted breakfast, three lunches and three dinners" while the itinerary mentions in-villa dinners on Days 1–3 and Bamboo Restaurant lunches. Confirm the inclusions. | `wellness-family-stay.md` |
| A13 | L | **Copyright year** "(C) 2025" while content was updated in 2026. | footer |
| A14 | L | **Amelia location coordinates** 40.748441, −73.987853 = New York. JSON-LD has the correct Bali coordinates. | Amelia entities |

## B. Copy-paste / duplicated content errors

| # | Sev | Issue |
|---|---|---|
| B1 | H | **Detox Retreat Day 1** text is the De-Stress text ("ease you into the anti-stress retreat experience… peaceful start to the de-stress retreat"). Same on **Tula Experience Journey** Day 1. |
| B2 | H | **Detox FAQ** headings say "detox" but every answer is about stress retreats ("A Stress Management Retreat, or stress retreat, is…"); headings include odd phrases "Best detox management retreat", "detox reduction retreat". |
| B3 | H | **Wellness Family Stay FAQ** is the same detox/stress FAQ, irrelevant to a family stay. |
| B4 | M | `/day-experiences-2/` (menu "Day Experiences") and `/full-day-experiences/` carry identical intro paragraphs and the same H1 "FULL DAY EXPERIENCES". |
| B5 | M | Detox Day 2 heading "Releasing Stress" (De-Stress heading reused). |
| B6 | M | Daily Group Class "Wednesday – Mat Pilates" description is the *water* Pilates sentence ("the flowing water based workout…"). |
| B7 | M | Blog listing excerpts for "The Ultimate Guide to Wellness at The Amala" and "Meditation and Sound Therapy" show the Ayurveda/Huangdi Neijing excerpt from a different post. |
| B8 | M | Post "Breathing is medicine" lives at slug `/meridians-‧-invisible-organs-of-the-human-body/`, while the "Meridians" post is at `…-2/`. |
| B9 | L | Stone-relief banner image used twice on Home. |

## C. Broken links / dead UI

| # | Sev | Item | Where |
|---|---|---|---|
| C1 | H | Footer **"Terms & Conditions" and "Disclaimer" → `/#`**. The T&C page exists (`/term-and-conditions/`) but is unlinked; no Disclaimer page exists. | All pages |
| C2 | H | **Retreat booking links (D-EDGE) have hard-coded past dates** (Detox 19–23 Aug 2025; De-Stress 15–19 Aug 2025) and fixed rate/room IDs. Rate validity is UNKNOWN. | Detox, De-Stress |
| C3 | H | **Tula Experience Journey and Family Stay "Book Now" go to `/booking/`**, but no matching Amelia service exists for either retreat. The user cannot select them (UNVERIFIED end-to-end). | Retreat pages; Amelia catalogue |
| C4 | M | Wellness Retreat page **"Family Retreat" button → `#`**. | `/wellness-retreat/` |
| C5 | M | Sound Healing Meditation **"Reserve Your Experience" has no href**. | `/sound-healing-meditation/` |
| C6 | M | Get in Touch **Instagram icon → `#`**. | `/get-in-touch/` |
| C7 | M | Get in Touch **H1 "Get in Touch" links to an old Wix site** `bolinwu22.wixsite.com/my-site-3/tula-shop`. | `/get-in-touch/` |
| C8 | M | JSON-LD image `/wp-content/uploads/2024/06/tulabyamala.jpg` → 404. | `<head>` |
| C9 | L | Theme favicons `favicon.ico`, `apple-touch-icon.png`, `favicon-32/16` → 404 (the WP site-icon versions work). | `<head>` |
| C10 | L | `@font-face` for "Josefin Thin" points to `JosefinSans-thin.ttf` (404); the family is unused. | `<head>` |
| C11 | L | `woocommerce-placeholder-600x600.png` → 404. | Woo pages |
| C12 | M | Category archives (6) render "No posts found." despite assigned posts; author archives show all posts unfiltered. | `/category/*`, `/author/*` |

## D. Spelling / typos (verbatim, not corrected)

| Text | Where |
|---|---|
| "Fisrt name" | Contact form label |
| "Comming soon" | Page title `/comming-soon/` |
| "Term And Conditions" | T&C H1/title |
| "Meditaton" | Full Day Experiences, Program 1 inclusions |
| "trans-formative" | FDP intro |
| "5 day 4night" | Detox intro |
| "their own breath" (after "You … immerse yourself") | Sound Healing page |
| "Cleasing Organic Facial" | Full Day brochure PDF |
| "flayer" | Yoga flyer PDF filename |
| "Full Day Experinces" | Amelia category name (visible in booking widget) |
| "Gua Sha - Lower Ack & Sacrum" | Amelia service name (visible in booking widget) |
| "Tula-Hlafday-*.jpg" | Image filenames (not user-visible) |
| Inconsistent casing: "Full day experience with Pilates" vs "Full Day Experience with…"; "Purification yoga" vs "Purification Yoga" | Programme headings |

No real character-encoding corruption was found in the source data. Some characters looked garbled in the Windows console during research, but the stored UTF-8 is clean.

## E. Test, draft and legacy content publicly live

`/15258-2/` (dummy buttons "fdf", "asdasd"), `/page-baru/` (empty), `/contoh/` ("Page lama…" old FDP), `/home-2/` (old home), `/comming-soon/` (empty), `/shop/` (empty), `/product/appointment/` (Rp0 product with an open comment form). All return 200 and are in the sitemap. Recommend: unpublish or noindex on WP (business action), and exclude from the Phase-2 build.

## F. SEO gaps

- No meta descriptions or Open Graph/Twitter tags on any page.
- Home has no H1; More of Tula, Sound Healing and Wellness Retreat use H2 as the top heading.
- Slugs with `-2`, `-3`, and a page called "Daily Group Class" at `/full-day-experiences-2/`.
- Most images lack alt text (see manifest "no alt text" flags).
- JSON-LD image 404; Instagram listed in JSON-LD but broken on page.
- Blog/archive pages lack canonicals.

## G. Accessibility / UX risks (observed)

- White text over the light clay video ≈ 2.2:1 contrast (fails WCAG AA); #605E5E on sage ≈ 5.2:1 (passes).
- Long passages set in Didot Italic 16px; faux-bold Josefin.
- Mobile: fixed "Book Now" overlaps content; white hamburger invisible over light panels.
- Promo popup is an image only (no text alternative, no alt); it appears on load.
- Program/treatment images mostly have empty alt.
- Inner pages begin with ~340px of empty video before any heading.

## H. Performance risks

- Home transfers ≈ 9 MB (content-length known), including `C0252.mp4` 4.8 MB and `video-bg.mp4` 1.2 MB (both autoplay, no poster).
- Portrait programme photos 1439×2159 (≈400–1,145 KB) shown at 285×427.
- Some images are upscaled (team photos 403px → 448px; `Tray-1.jpg` 580px → 896px).
- Brochure PDFs 2–16 MB on Google Drive.
- 69 media-library items unused on the live pages (e.g. 10 staff portraits ≈ 13 MB); see `evidence/media-library-unused.json`.
- Amelia assets on `/booking/`: 9 requests, ≥778 KB (one response size unknown), Roboto included; the booking page transfers ≈2.9 MB in total.

## I. Security / privacy observations (report to site owner; not exploited)

- `/wp-json/wp/v2/users` publicly lists usernames including the administrator account **"admintu"**. Recommend restricting user enumeration.
- Amelia `entities` endpoint is public (standard for the widget). At audit time it returned no customer data. Re-check after configuration changes.
- No cookie-consent UI while GTM/Google Ads load (legal review).
- T&C references a privacy policy that does not exist.

## J. Open questions for the business (consolidated)

1. Is Healy described as medical or non-medical? (A1)
2. Correct opening hours? (A2) Correct phone(s)? (A3)
3. Daily class schedule (5 or 7 days) and whether to show prices (incl. "++" tax/service wording). (A4, A5)
4. Should prices from Amelia be displayed on programme pages at all?
5. Retreat prices, booking channel (D-EDGE vs Amelia) and current booking URLs for all 4 retreats. (C2, C3)
6. Correct Day 1 text and FAQ for Detox, Tula Experience Journey, Family Stay. (B1–B3)
7. Current team roster, roles and approved photos. (A10)
8. Instagram handle confirmation (`tula.wellness`?). (C6)
9. Disclaimer and Privacy Policy content. (C1, I)
10. Is the Oct 20 – Dec 10, 2026 promo to be shown on the new site, and how?
11. Should the blog be migrated (13 posts; some 2023 philosophical pieces) or trimmed?
12. Can a vector (SVG) logo be supplied? Is the Didot webfont licensed? (05)
13. Should WordPress (Amelia/Woo/CF7) remain the booking/forms backend behind the new Next.js frontend?
14. Image rights for third-party-looking stock (e.g. `well-at-chileno-bay-1200x600-1.jpg`, `mixkit-autumn-leaf…mp4`).
