# 09 — Phase 2 Recommendations and Mandatory Redesign Requirements

Status: **Recommendations only. Nothing in this document has been implemented.** Phase 2 starts only after explicit approval.

Target stack (as briefed): Next.js (App Router), JavaScript, React, GSAP + ScrollTrigger, responsive frontend.

---

## A. Mandatory design rules (record of requirements, all must be met)

### A1. Typography

- [ ] **Exactly two font families across the entire website.** One for headings; one for body text, navigation, buttons, forms, cards, footer and all other UI.
- [ ] Both fonts must be readable, professional and not overly fancy.
- [ ] No third family for decorative headings, special sections, the footer or individual components. Third-party widgets (e.g. Amelia booking) should be themed to inherit the body family where technically possible.
- [ ] Hierarchy comes from weight, size, line height and letter spacing only.
- [ ] A controlled, responsive type scale with consistent sizes for equivalent components across all routes.
- [ ] Fonts are **not yet selected**. See 05-brand-reference §1.5 for options, licence notes (Didot is commercial), and the readability issues with the originals.

### A2. Visual design

- [ ] Professional, human-designed appearance; avoid repetitive AI-looking or generic template layouts.
- [ ] Intentional image/text alignment; consistent content widths, margins and spacing.
- [ ] No unnecessary decorative numbering (the original's "1/2/3", "Program 1"), eyebrow text, random symbols, floating badges or ornaments.
- [ ] Visual effects only with a clear purpose. GSAP/ScrollTrigger motion should be subtle and respect `prefers-reduced-motion`.

### A3. Content

- [ ] Concise, focused pages; no repeated paragraphs or unnecessary sections; avoid excessive length.
- [ ] Preserve meaningful facts (prices, durations, inclusions, contact details, itineraries, team bios).
- [ ] Do not invent claims, testimonials, FAQs, prices or blog posts. (No testimonials exist on the original site.)
- [ ] Unresolved conflicts in 08-issues-gaps-questions.md need business answers before copy is finalised.

### A4. Footer

- [ ] Compact and content-driven; only verified information (logo lock-up, address, phone/WhatsApp, email, opening hours once confirmed, social links, legal links that actually resolve, copyright).
- [ ] No excessive padding, needless columns, duplicate content or oversized layout.
- [ ] Final content section fully visible above the footer; natural transition; no overlap, clipping, excess blank space or fixed-footer interference.

### A5. Images and performance

- [ ] Prefer the original assets (see 04-assets-manifest.csv and `original-assets/`). No unrelated stock, no AI-generated substitutes where originals exist.
- [ ] Local resizing/compression; modern formats (WebP/AVIF) where practical; sensible intrinsic dimensions; responsive `sizes`; lazy-load below the fold; avoid duplicate copies.
- [ ] **Next.js config:** avoid the default Vercel Image Optimization quota by adding `images: { unoptimized: true }` (or equivalent), **merged into the existing `next.config` rather than replacing unrelated settings.** The project config has not been touched in Phase 1.
- [ ] Videos: provide poster frames, compress (the 4.8 MB `C0252.mp4` and the upscaled 848×432 `video-bg.mp4`), avoid autoplaying multiple videos, honour reduced motion.

### A6. Blog

- [ ] Lower priority. Real posts exist (13). If a blog page is built, the initial view uses **≤10 images** unless the client asks otherwise. No fabricated posts. Don't overbuild (archives/tags optional).

---

## B. Recommended information architecture (proposal for review, not final)

Current menu (8 top-level items, 3 accordions) mixes products and formats; several routes have legacy slugs (`-2`, `-3`). Proposed consolidation:

| Proposed section | Source routes (original) | Notes |
|---|---|---|
| Home | `/` | Hero (logo + video), brief intro, offerings overview, story, team, CTA. |
| Day Experiences (overview) | `/day-experiences-2/` | Overview hub; resolve duplication with `/full-day-experiences/` (near-identical text). |
| Full Day Experience | `/full-day-experiences/` (+ duplicate `/day-experiences-2/`) | 3 programme variants + prices from Amelia. |
| Full Day Purification Journey | `/full-day-purification-journey-2/` (legacy draft `/contoh/`, `/page-baru/`) | |
| Half Day Experiences | `/half-day-experiences/` | 4 variants. |
| Half Day Purification & Sound Healing | `/half-day-experiences-2/` | |
| Retreats (overview) | `/wellness-retreat/` (and test page `/15258-2/`) | Links to 4 retreats; fix the "Family Retreat" button. |
| Tula Experience Journey (3D2N) | `/tula-experience-journey/` | |
| Detox Retreat (5D4N) | `/detox-retreat/` | Fix copied Day 1 text; FAQ. |
| De-Stress Retreat (5D4N) | `/de-stress-retreat-in-bali-3/` | |
| Wellness Family Stay (6D5N) | `/wellness-family-stay/` | FAQ is wrong (copied). |
| Treatments: Massages, Sound Healing, Other Offerings | `/massages/`, `/sound-healing-meditation/`, `/more-of-tula/` | Could be one "Treatments" page with sections, using Amelia catalogue for prices. |
| Daily Group Class | `/full-day-experiences-2/` | Slug is misleading; consider `/daily-group-class`. Schedule conflict to resolve. |
| Accommodation / Stay | `/accommodation/` | Very thin (image + Amala logo + link). Merge into a "Stay at The Amala" block or keep as a short page. |
| Journal (Blog) | `/blog/` + 13 posts | Low priority. |
| Contact | `/get-in-touch/` | Address, phone, WhatsApp, email, hours, map, form, boutique. |
| Book | `/booking/` → existing Amelia flow | Keep backend; see §C. |
| Terms & Conditions | `/term-and-conditions/` | Link from footer (currently broken). |

Legacy/utility routes to **exclude from navigation** (redirect or leave on WP): `/home-2/`, `/contoh/`, `/page-baru/`, `/15258-2/`, `/comming-soon/`, `/shop/`, `/cart/`, `/checkout/`, `/my-account/`, `/product/appointment/`, category and author archives. If slugs change, add **301 redirects** from every old public URL to preserve SEO.

## C. Integration decisions needed before build

1. **Booking:** keep Amelia on WordPress (link out or iframe) vs. headless API integration vs. new provider. Recommendation: link/embed the existing working flow first; do not fake it.
2. **Retreat booking:** confirm whether D-EDGE links (The Amala hotel engine) remain the channel, and get current URLs without fixed dates.
3. **Contact form endpoint** (CF7 REST vs. alternative).
4. **Content source:** static import from `docs/source-audit/content/` vs. build-time fetch from WP REST.
5. **Analytics/consent:** keep GTM-W6K7BRG2? Consent banner?
6. **Promotions:** how the Oct–Dec 2026 promo should appear (banner vs. popup), and an end date.
7. **Domain/hosting:** whether WP stays at the same domain (subdomain for booking?) once Next.js is deployed.

## D. Content priorities per page type (summary)

- **Essential:** what the offering is, duration, inclusions, price (from Amelia), who leads it, how to book, location/contact.
- **Concise candidates:** long SEO FAQ blocks repeated on 3 retreat pages (~1,500 words each, largely identical). Consolidate to one short, accurate FAQ per retreat after business review.
- **Low priority:** blog carousel on home, "Visit Our Boutique" block, legacy brochure text duplicates.
- **Missing:** privacy policy, disclaimer page, retreat prices, accommodation details, testimonials (none exist, so do not invent them).

## E. SEO carry-over

- Most pages lack meta descriptions and OG tags (see 02 and 08), so they need writing from verified facts in Phase 2 (business approval needed for marketing copy).
- Preserve DaySpa JSON-LD (fix image URL 404, align opening hours, add Instagram only once confirmed).
- Keep canonical URLs or 301 old slugs.

## F. Accessibility baseline

- #605E5E on #E3E9E5 ≈ 5.2:1 (passes AA). **White text over the light clay video ≈ 2.2:1 (fails).** Add overlays or switch text colour.
- Images mostly lack alt text (e.g., home treatment thumbnails, program photos). Write descriptive alts in Phase 2.
- Promo popup is image-only text.
- The menu is a dialog; ensure focus trap/escape/aria-expanded in the rebuild.
