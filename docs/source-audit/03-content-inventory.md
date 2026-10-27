# 03 — Content Inventory (Preservation Reference)

Verbatim source text is saved per page/post in [`content/pages/`](content/pages/) and [`content/posts/`](content/posts/) (from the WP REST API `content.rendered`, unedited, spelling preserved). An index with word counts and modified dates is in [`content/content-index.json`](content/content-index.json). Brochure PDF text is in [`content/brochures-text.md`](content/brochures-text.md). The bookable-service catalogue with prices is in [`data/booking-services.csv`](data/booking-services.csv).

This file lists the **facts and key copy that must survive the redesign**, with their source. Conflicts are flagged with ⚠ and detailed in 08. Nothing here is rewritten or corrected.

## 1. Business identity and contact

| Fact | Value (as published) | Source |
|---|---|---|
| Brand name | TULA Wellness; co-brand "TULA Wellness by The Amala" | Logo files; JSON-LD `name` |
| Legal entity (copyright) | "(C) 2025 PT Amala Bali \| All Rights Reserved" | Footer, all pages |
| Business type | Day spa / wellness centre (JSON-LD `DaySpa`) | `<head>` JSON-LD |
| Address | Jl. Kunti I No.108, Seminyak, Kec. Kuta, Kabupaten Badung, Bali 80361 | Footer; Get in Touch; Amelia location; JSON-LD |
| Phone / WhatsApp | +62 818-1873-8866 (displayed), +6281818738866 (tel/wa.me/JSON-LD) | Get in Touch "Phone"; footer WhatsApp; booking sidebar |
| ⚠ Alternate phone | +620361738866 | Amelia location record only (not displayed) |
| Email | info@tula-wellness.co | Footer; Get in Touch; booking sidebar; brochures |
| ⚠ Opening hours | "Everyday 9:00 am – 10:00 pm" (Get in Touch) vs JSON-LD Mon–Sun 09:30–21:30 | Get in Touch; JSON-LD |
| Geo | −8.6894475, 115.1716604 (JSON-LD); map embed at −8.68945, 115.16909 | JSON-LD; Google Maps iframe |
| Facebook | https://www.facebook.com/tulawellnessbali/ | Footer; Get in Touch |
| Instagram | https://www.instagram.com/tula.wellness/ (JSON-LD only); Get in Touch icon links to `#` | JSON-LD |
| TripAdvisor | "TULA Wellness at The Amala – Seminyak" attraction review page | Footer |
| Partner/accommodation | The Amala (https://theamala.com), "The Amala Boutique Wellness Retreat – Luxury Resort in Seminyak, Bali" | Accommodation page |
| Venue facilities mentioned | Bamboo Restaurant; air-conditioned yoga studio; soundproof healing room; mini gym; main pool; locker room with steam shower; Wi-Fi; boutique (Visit Our Boutique) | Retreat pages, Daily Group Class, FDP page, brochures |

## 2. Brand story (Home → "OUR STORY")

Verbatim (keep meaning; may be shortened in Phase 2 only with approval):

> TULA interweaves Western and Eastern health philosophies, strengthening the connection between your physical, mental and emotional health, to help you achieve a calmer, healthier & happier state of being
>
> TULA is an ancient Sanskrit word that means "Balance". Resilience formed by nature, it is the existence of our true nature being stable and relaxed, allowing us to stay calm regardless of the myriad of changes in the world around us
>
> At TULA we gently bring back to your natural state, a state of balance & natural resilience. A personalized experience designed with a fusion of Western aromatherapy philosophies, Eastern traditional Chinese medicine and Ayurveda techniques, TULA Wellness helps you restore your inner balance, refocus, reconnect & flourish

Brochure addition: "Inspired by the longevity and strength of the gingko leaf…" (explains the logo).

Home intro lines: "Where we gently help bring back to your natural state of balance and natural resilience" / "To restore your inner harmony and maintain equilibrium in life, to reconnect and focus".

Home "THE TULA EXPERIENCE" subtitle: "Committed to providing the highest level of support for physical, mental, and overall well-being" / "Discover and experience an extensive menu of programs and treatments".

## 3. Team

| Person | Role (as published) | Bio facts | Source | Photo |
|---|---|---|---|---|
| Leona Chen | Resident Wellness Master | 20+ years in holistic wellness; combines western physiology & aromatherapy with TCM, Ayurveda & yogic wisdom; leads workshops. Brochure: began at Orient Retreat (Taiwan); certified by British Bach Flower Essence Foundation 2003; lecturer with British International Aromatherapy Association after 2009; uses Healy since 2019. Full name on WP account: Chen Jun Hsiang Leona. | Home "Meet the Team"; brochures | `2025/06/leona.jpg` (403×334); larger `2025/06/leona-Tula.jpg` (1562×1850) unused |
| Dewa Mertana | Pilates, Fitness & Balinese Healing | Fitness passion since 1992; Physical Education background until 1998; professional fitness trainer; Pilates from 2010; Hatha yoga 2015; 200-hour YTT (SCB syllabus) at Wellness Center Surya Chandra Bhuana, 2024. Referred to as "healer Dewa"/"yoga healer Dewa" in Purification Yoga copy. | Home; FDP/Half-day pages | `2025/06/dewa-1.jpg`; `2025/06/Dewa.jpg` (1563×1850) unused |
| Ninie | Appears only on legacy `/home-2/` | (no current bio on live home) | `/home-2/` | `2025/06/ninie.jpg`, `2025/04/ninie.webp` |
| Additional staff portraits (no names/roles published) | — | Unused media: Ana, Desi, Darmini, Arik, Tari, Rusma, Ninie, Leona, Dewa, Devi (`2025/06/*-Tula.jpg`, ~1.2–1.5 MB each); Dewi Arum Sari / Tula-Dewi (`2026/01`, `2025/11`, attached to Home) | Media library | Do not publish names/roles without business confirmation |

## 4. Offerings (what must be findable)

Prices are from the Amelia catalogue (IDR, as stored); **none are displayed on the current website**. Whether to show prices is a business decision (see 08).

### 4.1 Day programmes

| Offering | Page | Duration | Inclusions (as published) | Price IDR (Amelia) |
|---|---|---|---|---|
| Full Day Experience: with Sound Healing / Pilates / Asana Yoga | `/full-day-experiences/` (+ `/day-experiences-2/`) | 360 min, 1–2 pax | 1 h Healy information field analysis · 1 h activity (Sound Healing / Water or Mat Pilates / Private yoga) · 1.5 h Lymphatic Drainage massage with ear candle · 1 h Organic Facial · two-course healthy meal + 1 healthy juice (90 min) · traditional oolong tea with dessert (listed for Sound Healing and Yoga, ⚠ not for Pilates). Brochure adds: complimentary transport within Seminyak, mini gym, main pool, locker room with steam shower, amenities, Wi-Fi. | 4,313,650 / 4,265,250 / 4,132,150 |
| Full Day Purification Journey | `/full-day-purification-journey-2/` | 360 min | Healy Quantum Field Analysis · Purification yoga (coconut blessing ceremony with healer Dewa) · Sound Healing Meditation (60 min, seven-metal Nepalese bowls) · 2-course Tula meal & rebalancing drink · Aroma lymphatic massage (90 min) & ear candling | 4,241,050 |
| Half Day Experience: Asana Yoga / Sound Healing / Mat or Water Pilates / Purification Yoga | `/half-day-experiences/` | 240 min, 1–2 pax | 1st hour chosen activity · full-body lymphatic drainage massage · organic meal | 2,087,250 / 2,268,750 / 2,220,350 / 2,389,750 |
| Half Day Purification Journey & Sound Healing Experience | `/half-day-experiences-2/` | 240 min | Purification yoga + water blessing · sound healing meditation (seven-metal mantra singing bowls) · two-course healthy meal + re-balancing drink | 2,196,150 |
| Daily Group Class | `/full-day-experiences-2/` | 9–10 AM daily, 60 min, max 10 | Hatha, Vinyasa, Yin, Pilates, Water Pilates rotation; air-conditioned studio; mats, bricks, pillows, towels, mineral water; ginger tea & energy snacks after class. ⚠ Page schedule: Mon Yin · Wed Mat Pilates · Thu Hatha · Fri Vinyasa · Sun Water Pilates; flyer: Mon Yin · Tue Hatha · Wed Mat Pilates · Thu Hatha · Fri Vinyasa · Sat Yin · Sun Water Pilates. Flyer: "IDR 200,000++ per pax, includes welcome drink, towel and shower access". | 242,000 |

### 4.2 Retreats (multi-night)

| Retreat | Page | Length | Booking channel | Price |
|---|---|---|---|---|
| Tula Experience Journey | `/tula-experience-journey/` | 3-Day 2-Night | `/booking/` (no matching Amelia service found) | Not published |
| Detox Retreat in Bali | `/detox-retreat/` | 5-day 4-night | D-EDGE (The Amala) link with fixed Aug 2025 dates | Not published |
| De-Stress Retreat in Bali | `/de-stress-retreat-in-bali-3/` | 5-Day 4-Night | D-EDGE link with fixed Aug 2025 dates | Not published |
| Wellness Family Stay | `/wellness-family-stay/` | six-day five-night | `/booking/` | Not published |

Day-by-day itineraries: verbatim in the page files. Key itinerary facts to preserve: airport pickup/transfer, Wellness Master consultation, Healy analysis, Nadis Flow, Emotional Body Map Workshop, Gua Sha full body massage, breathwork, beach walks (Detox: 6:30 AM walk, 8:30 AM juice cleanse, 10:00 AM TCM Yin Yoga), 150-min De-stress Rebalance Ritual / Detox Purification Ritual, 2-hour Amala Healing Ritual, Bamboo Restaurant meals; Family Stay: kids' swimming/yoga/art, rain stick making, Canang Sari offering, hand massage workshop, kids' spa, South/North island tours, Seminyak free day, noon check-out.

### 4.3 Treatments and other offerings (pages vs. catalogue)

| Shown on site | Page | Matching Amelia services (price IDR / min) |
|---|---|---|
| Sound Healing (Mantra/Tibetan singing bowl) | Home, `/sound-healing-meditation/` | Private 847,000 / 60 (1–2 pax); Group 677,600 (hidden) |
| Body Relief Massages | Home | Body Treatment category (8 services, 544,500–1,197,900) |
| Lymphatic Drainage Massage | `/massages/` | 1,040,600 / 60 |
| Traditional Balinese Massage | `/massages/` | 961,950 / 60 · 1,197,900 / 90 |
| Stress Relief Massage | `/massages/` | ⚠ named "Head and Shoulder Stress Relief" in Amelia: 877,250 / 60 |
| Purification Yoga | Home | Inside half/full-day packages |
| Asana Yoga (Hatha, Yin, Vinyasa, Ashtanga; group or private) | Home | Private Yoga 665,500 / 60 · 907,500 / 90; Semi-private 423,500 / 60 (min 2); Yin Yoga & TCM Meridian Energy Flow 665,500 |
| Water and Mat Pilates | Home | Water Pilates private 798,600; group/mat variants hidden |
| Rituals, Self Care and Treatments (facials, Gua Sha, Healy) | Home | Facials 1,040,600–1,512,500; Amala Rituals 1,391,500–3,448,500 (single/couple); Body Care add-ons 423,500–786,500 |
| Taiwanese Tea Ceremony | `/more-of-tula/` | Traditional Taiwan Tea Ceremony 665,500 / 90 (2–6 pax) |
| Gua Sha | `/more-of-tula/` | TCM category: 4 Gua Sha areas, 484,000 / 40 each |
| Healy Quantum Field Analysis | `/more-of-tula/` | Healy Information Field Analysis 726,000 / 60 |
| Traditional Chinese Medicine Detox Workshop | `/more-of-tula/` | No exact service (TCM: Intestinal Cleansing / Digestive Rejuvenation 877,250) |
| Emotional Body Map Workshop (Bach flower essences) | `/more-of-tula/` | No service found |
| Aromatherapy ("unique formula of Mrs. Morley") | `/more-of-tula/` | No service found |
| Moxa treatments | Not on site | 3 services, 484,000 / 40 |

## 5. Calls to action (labels as published)

| Label | Destination | Where |
|---|---|---|
| Book Now | `/booking/` | Header (all pages); retreat image band (Tula Experience, Family Stay) |
| Book Now | D-EDGE URL | Retreat band on Detox / De-Stress |
| Reserve Your Experience | `/booking/` | Home cards, day-programme pages, More of Tula, Massages, Tula Experience, Family Stay |
| Reserve Your Experience | D-EDGE URL | Detox, De-Stress |
| Reserve Your Experience | (no href) | Sound Healing Meditation |
| Discover More | Google Drive PDF | 6 day-programme pages |
| Read More / Read Now | Post | Home carousel / Blog |
| Visit The Amala | theamala.com | Accommodation |
| Submit | CF7 | Get in Touch |
| Go Home | `/` | 404 |

## 6. Policies (Terms and Conditions page, verbatim facts)

Check-in 15:00 / check-out 12:00; original valid ID/passport required · Personal data handled per "the privacy policy" (⚠ none published) · 12+ booked as adult; under-12 cannot book a retreat "except family retreat" · devices discouraged; The Amala is non-smoking (designated outdoor area); no candles/incense in rooms; appropriate swimwear · airport transfers by prior reservation, flight details ≥48 h in advance, charges apply · no pets · TULA may change programme with prior notice; TULA / The Amala may refuse service to guests who don't follow guidelines.

## 7. Time-bound promotion (Home popup image)

"ENJOY 10% DISCOUNT ON SELECTED SPA TREATMENTS · OCT 20TH – DEC 10TH, 2026 · DIRECT BOOKINGS ONLY" and "BEGIN YOUR WELLNESS JOURNEY 15% OFF ON HALF-DAY & FULL-DAY RETREAT PACKAGES · OCT 20TH – DEC 10TH, 2026 · DIRECT BOOKINGS ONLY". Footer of image: Jl. Kunti I No.108, Seminyak – Bali · www.tula-wellness.co · +62 818-1873-8866 · info@tula-wellness.co. (Read from the image; there is no text version.)

## 8. FAQs

FAQs exist only on Detox, De-Stress and Family Stay pages (5 `<details>` each). They are generic SEO copy about stress retreats, largely identical across the three pages, and mislabelled on Detox/Family Stay. **No page-specific, factual FAQ exists.** Do not invent replacements; ask the business.

## 9. Testimonials / reviews

**None on the site.** The only review-related item is the TripAdvisor footer link. Do not fabricate testimonials.

## 10. Content priority classification

| Priority | Content |
|---|---|
| Essential | Contact details, address/map, booking CTA, programme names + durations + inclusions (+ prices if approved), retreat itineraries (concise), team (Leona, Dewa), brand story (short), T&C link |
| Useful | Offering descriptions on More of Tula/Massages, Daily Group Class schedule, brochure PDFs, The Amala accommodation link, boutique |
| Low priority | Blog carousel, repeated stone-relief banner, "Visit Our Boutique" block, long SEO FAQ text |
| Remove/consolidate | Duplicated Day Experiences text (2 pages), repeated FAQ bodies, copied Day 1 itineraries, legacy/test pages, dummy buttons |
| Missing / needs business input | Retreat prices, privacy policy, disclaimer, accurate opening hours, Instagram URL, current D-EDGE links, Family Stay age rules, team roster |

## 11. Duplicated / repetitive content map

| Text | Appears on |
|---|---|
| Full-day itinerary paragraphs (5) | `/day-experiences-2/`, `/full-day-experiences/` (identical) |
| "Allow yourself to be immersed… Tibetan singing bowl…" | Home (as "Mantra singing bowl"), Day Exp, FDP, Half Day, Half Day 2, Sound Healing page, Amelia |
| Purification Yoga ceremony text | FDP, Half Day, Half Day 2, `/contoh/`, brochures |
| "The first day is designed to ease you into the anti-stress retreat…" | De-Stress, Detox, Tula Experience Journey |
| Stress-retreat FAQ (≈1,500 words) | De-Stress, Detox (headings swapped to "detox"), Family Stay |
| Pilates description | Home, Day Exp, Half Day, Daily Group Class (Mat Pilates entry uses the water-pilates sentence) |
| Healy "medical device" paragraph | FDP, More of Tula, `/contoh/` (⚠ Amelia: "Non-Medical device") |
