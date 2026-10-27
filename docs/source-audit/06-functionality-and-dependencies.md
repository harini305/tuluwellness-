# 06 — Functionality, Integrations and Technical Dependencies

Audit date: 2026-10-27. Status vocabulary:

- **Observed**: visible on the site.
- **Interaction tested**: the UI interaction was exercised.
- **Functionality verified**: the intended outcome was confirmed end-to-end.
- **Partially verified**: some behaviour was confirmed, important details unknown.
- **Unverified**: not testable or not tested.

No booking, payment, enquiry or account action was submitted during this audit. The only form submission was an empty Contact Form 7 submit (rejected by validation, so no message was sent).

## 1. Platform stack (VERIFIED from HTML headers/markup)

| Layer | Detail |
|---|---|
| CMS | WordPress 7.1.3 (`<meta name="generator">`) |
| Theme | Custom theme `tula` v0.1.0, Tailwind CSS + **Alpine.js** (bundled in `assets/dist/js/app.js`, 132 KB). Page templates: `template-fullwidth.php`, default, `template-soon.php`. Content built in the Gutenberg block editor (columns, cover, buttons, details) plus theme shortcodes/blocks (team carousel, blog carousel, program cards). |
| Commerce | WooCommerce 9.8.7. One product only: "Appointment" (ID 264, price IDR 0, simple). Shop/cart/checkout/my-account pages exist; used as Amelia's payment layer (inferred). |
| Booking | **Amelia Booking** plugin v8.3.2 (`/wp-content/plugins/ameliabooking/v3/`), Vue step-by-step form ("sbsNew") on `/booking/`. |
| Forms | Contact Form 7 v6.0.6 (Get in Touch page). |
| Popups | Popup Builder v4.4.2 (`sgpb`), popup ID 15857 = Oct–Dec 2026 promotion image. |
| Hosting/CDN | Cloudflare (proxy, email obfuscation `email-decode.min.js`, Cloudflare Insights beacon) + LiteSpeed server/cache (`x-litespeed-cache: hit`). |
| Analytics/ads | Google Tag Manager **GTM-W6K7BRG2**; network calls to analytics.google.com, googleads.g.doubleclick.net, ad.doubleclick.net (Google Ads remarketing/conversion), www.google.com. WooCommerce order attribution (sourcebuster.js). |
| jQuery | 3.7.1 (WordPress core), used by WooCommerce/CF7/Popup Builder. |
| REST API | `/wp-json/` publicly readable (pages, posts, media, users list with 4 users). |

## 2. Feature inventory

| # | Feature | Where | Status | Details / dependency | Phase-2 consideration |
|---|---|---|---|---|---|
| F1 | Fixed header: hamburger (left) + "Book Now" (right) | All pages | Interaction tested | `header.fixed inset-x-0 top-0 z-50`, transparent; nav row 48px at 20px inset; stays fixed on scroll with no background change (Alpine `x-data="{open:false}"`). | Keep a persistent Book CTA; add a solid/legible state on scroll. |
| F2 | Slide-out menu (all breakpoints) | All pages | Interaction tested | Opens from left with 300ms translate/opacity transition; backdrop blur. Panel 384px wide (desktop/tablet), full-width on 390px mobile; background #F0F0F0; black logo + close (X). There is **no horizontal desktop nav**. | Decide whether desktop gets a visible nav. |
| F3 | Accordion submenus inside menu | Menu | Interaction tested | 3 parents with chevron toggles (rotate-180): Day Experiences (4 children), Wellness Retreat (4), More of Tula (2). Clicking the parent text navigates; the chevron toggles. | Full menu tree in 02-page-inventory. |
| F4 | Promotional popup | Home page only (popup markup absent from all other crawled pages) | Interaction tested | Popup Builder theme 3, 800×400 image `Promo-Oct-Dec-2026-1-scaled.jpg` (2560×1275), dark overlay, close button `close.png`. No link/CTA inside popup. Content: 10% off selected spa treatments; 15% off half-day & full-day retreat packages; Oct 20th – Dec 10th 2026; "Direct bookings only". Frequency/cookie rules UNKNOWN. | Campaign content is time-bound; treat as CMS-managed announcement, not hard-coded. Image-only text is inaccessible. |
| F5 | Hero background video | Home and most pages (fixed, `-z-10`) | Observed | `video-bg.mp4` (848×432, 1.19 MB) autoplay/loop/muted, `object-cover`, fixed behind content. Home also has a 430px cover block with `C0252.mp4` (1920×1080, 4.8 MB, autoplay loop muted, no poster). | Use poster images, compressed/short clips, respect `prefers-reduced-motion`. |
| F6 | Team carousel ("Meet the Team") | Home | Observed (Alpine) | Alpine `currentSlide`, slides computed by width (3 per view ≥1024, 2 ≥768, 1 mobile). 2 members, so arrows effectively inert on desktop; 1-per-view on mobile. | Simple 2-card layout suffices. |
| F7 | Featured posts carousel | Home | Observed; arrows visible | 5 posts, 3 per view desktop, prev/next round arrow buttons at edges. | Optional; blog is low priority. |
| F8 | FAQ accordions | Detox Retreat, De-Stress Retreat, Wellness Family Stay | Observed | Native `<details>/<summary>` (Gutenberg Details block), 5 items each, uppercase summaries, ▸ marker. | Content is duplicated/mislabelled (see 08). |
| F9 | Booking widget (Amelia) | `/booking/`; every "Reserve Your Experience"/"Book Now" on internal pages points here | Partially verified | 3 steps: Service Selection → Date & Time → Your Information (payment step may follow, UNKNOWN). Sidebar shows "Get in Touch +6281818738866 / info@tula-wellness.co". Service dropdown lists visible services from the Amelia catalogue (68 services in 15 categories, 55 shown in widget; see `data/booking-services.csv`). Data loads via `admin-ajax.php?action=wpamelia_api&call=/entities…`. The automated dropdown click failed (element not visible to the automation), so date/time availability, customer fields and payment were **not tested**. | **Backend dependency.** A Next.js frontend cannot replace Amelia without a booking backend. Options: embed/link to the existing WP booking page, or integrate Amelia's API. Needs a decision. |
| F10 | WooCommerce cart/checkout | `/cart/`, `/checkout/`, `/my-account/`, `/shop/`, `/product/appointment/` | Observed (pages render) | Block-based Cart/Checkout. Payment gateways UNKNOWN (no checkout performed). Currency IDR (Rp, no decimals). | Likely only reached via Amelia. Not public navigation. |
| F11 | External hotel booking (D-EDGE) | De-Stress Retreat and Detox Retreat "Reserve"/"Book Now" | Observed (link opens, 200) | `secure-hotel-booking.com/d-edge/THE-AMALA-BOUTIQUE-RETREAT/JL29/...` with **hard-coded past dates** (Detox: 2025-08-19→23; De-Stress: 2025-08-15→19) and specific rateId/roomId. | Retreat packages are sold as hotel rate plans of The Amala. Confirm current rate/room IDs; remove fixed dates. |
| F12 | Contact form (CF7) | `/get-in-touch/` | Interaction tested (validation only) | Fields: First name (label typo "Fisrt name", required), Last name (required), Email* (required), Your message (optional, textarea), Submit. Empty submit gives "Please fill out this field." ×3 and "One or more fields have an error. Please check and try again." Delivery of real messages is **unverified**. | Needs a form endpoint in Phase 2 (keep CF7 via REST, or another provider). |
| F13 | Google Map embed | `/get-in-touch/` | Observed | iframe `google.com/maps/embed?pb=…TULA Wellness by The Amala` (−8.6894, 115.1691). | Lazy-load or static map image + link. |
| F14 | WhatsApp click-to-chat | Footer | Observed | `https://wa.me/6281818738866`. | Keep. |
| F15 | Social links | Footer, Get in Touch | Observed | Facebook `facebook.com/tulawellnessbali/` (200); TripAdvisor attraction review page (403 to automated requests, so UNVERIFIED but URL well-formed); Instagram on Get in Touch = `#` (broken), JSON-LD lists `instagram.com/tula.wellness/` (200). | Use the verified Instagram URL after business confirmation. |
| F16 | Brochure downloads ("Discover More") | Day Experiences, Full Day Experiences, FDP Journey, Half Day, Half Day Purification, Daily Group Class | Functionality verified (links resolve) | Google Drive PDFs (5 files, 2–16 MB). Copies saved in `original-assets/documents/`. | Host optimised PDFs locally or keep Drive links. Large files. |
| F17 | Blog listing + posts | `/blog/` (8 per page, pagination to `/blog/page/2/`), 13 posts | Observed | Card grid (2 cols), image, title, excerpt, "x min read", "Read Now". Categories/authors archives exist. | Low priority; ≤10 images on initial blog view (Phase-2 rule). |
| F18 | Footer legal links | Footer, all pages | Observed (broken) | "Terms & Conditions" → `/#`, "Disclaimer" → `/#`. A T&C page exists at `/term-and-conditions/` but is not linked. No Disclaimer or Privacy page exists. | Fix destinations; privacy policy content missing. |
| F19 | Site search | — | Not present in UI | `/?s=retreat` returns WP search results template (see 02). | Not needed. |
| F20 | Cookie banner / consent | — | Not observed | GTM + Google Ads load without visible consent UI. | Legal review (out of scope). |
| F21 | Translation / language switch | — | Not present | `lang="en-US"`. | — |
| F22 | Login/account | `/my-account/` | Observed | Woo login form. | Not part of public nav. |
| F23 | Scroll animations | — | Not observed | No GSAP/AOS; only CSS transitions (menu, buttons, Alpine x-transition). | Phase 2 plans GSAP/ScrollTrigger; keep motion subtle. |

## 3. Booking catalogue facts (VERIFIED from Amelia public entities endpoint)

Full table: [`data/booking-services.csv`](data/booking-services.csv) (68 services; prices IDR; durations in minutes; capacity; whether shown in the widget; full descriptions).

Key public prices (IDR, as stored in Amelia; likely inclusive of 21% tax & service, since flyer "IDR 200,000++" equals 242,000 in Amelia, an inference to confirm):

| Offering | Service (Amelia) | Price IDR | Duration |
|---|---|---|---|
| Daily Group Class | Group Class Ticket | 242,000 | 60 min, max 10 |
| Full Day Experience | FDP with Sound Healing Meditation / Pilates–Water Pilates / Yoga Class | 4,313,650 / 4,265,250 / 4,132,150 | 360 min, 1–2 pax |
| Full Day Purification Journey | Full Day Purification Journey | 4,241,050 | 360 min |
| Half Day Experience | HDP with Yoga / Sound Healing / Mat–Water Pilates / Purification Yoga | 2,087,250 / 2,268,750 / 2,220,350 / 2,389,750 | 240 min |
| Half Day Purification & Sound Healing | — | 2,196,150 | 240 min |
| Massages | Back Relief 544,500 (30m); Foot Reflexology 641,300; Head & Shoulder Stress Relief 877,250; Balinese 60m 961,950 / 90m 1,197,900; Purification Massage with Ear Candle 961,950; Lymphatic Drainage 1,040,600; Amala Holistic Signature 1,197,900 (90m) | | |
| Sound Healing Meditation | Private 847,000 (1–2 pax); Group 677,600 (3–4 pax, hidden) | | 60 min |
| Healy Information Field Analysis | 726,000 | | 60 min |
| Traditional Taiwan Tea Ceremony | 665,500 | | 90 min, 2–6 pax |
| Private Yoga | 665,500 (60m) / 907,500 (90m) | | |

Amelia location record: "Tula Wellness", Jl. Kunti I No.108, Seminyak, phone +620361738866. **Its stored coordinates (40.748441, −73.987853) point to New York, which is a data error.** Employees: "Daily Group Yoga Class", "TULA - SPA Therapist", "TULA Wellness Practitioner 1", "TULA Wellness Practitioner 2" (resource placeholders, not people). Packages: none. Taxes: none configured. Custom fields: none.

Security/privacy check: the public entities response contained `customers: []` (empty) and employee records without email/phone, so **no personal data was exposed** at audit time.

Retreat packages (Detox, De-Stress, Tula Experience Journey, Family Stay) have **no prices on the website or in Amelia**. Pricing presumably lives in D-EDGE (hotel engine). UNKNOWN.

## 4. Third-party requests per page (Home, 1440px)

`www.googletagmanager.com`, `analytics.google.com`, `googleads.g.doubleclick.net`, `ad.doubleclick.net`, `www.google.com`, `www.google.co.in`, `static.cloudflareinsights.com`. Get in Touch adds `www.google.com/maps` (iframe) assets. Booking adds the Amelia bundles (stepForm ≈200 KB+ JS/CSS, amelia-icons font).

## 5. Implementation implications for Next.js (Phase 2)

1. **Booking is the core conversion and is backend-bound.** Keep WordPress + Amelia (and D-EDGE for multi-night retreats) as the system of record unless the business commissions a migration. The Next.js site should deep-link (or embed) to the working booking flow. Do not mock a booking flow that cannot complete.
2. **Contact form** needs a real endpoint (CF7 REST endpoint `/wp-json/contact-form-7/v1/contact-forms/<id>/feedback`, or a new service). Not verified in this audit.
3. **Promotions popup** should become CMS/config-driven with an accessible text alternative and an end date.
4. **Analytics** (GTM-W6K7BRG2) must be carried over if the business wants continuity. Consent handling to be decided.
5. **Content source:** the WP REST API is public. Phase 2 can either import static content (this audit's `content/` folder) or fetch at build time. Decide before building.
6. **Images:** Next.js `images: { unoptimized: true }` (merged into existing config) per the mandatory rule; pre-size/compress locally.
