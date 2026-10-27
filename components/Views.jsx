import { preload } from 'react-dom';
import Img from './Img';
import AmbientVideo from './AmbientVideo';
import ContactForm from './ContactForm';
import TermsDialog from './TermsDialog';
import ExperienceExplorer from './views/ExperienceExplorer';
import ProgramPanels from './views/ProgramPanels';
import ClassWeek from './views/ClassWeek';
import RetreatExplorer from './views/RetreatExplorer';
import GalleryLightbox from './views/GalleryLightbox';
import OfferDialog from './views/OfferDialog';
import TeamCards from './views/TeamCards';
import { Facebook, Instagram, WhatsApp, TripAdvisor } from './Icons';
import faq from '@/content/destress-faq.json';
import { firstSentence } from '@/content/excerpt';
import {
  BLOG_URL,
  BOOKING_URL,
  contact,
  dayPrograms,
  experience,
  fullDayInclusions,
  gallery,
  groupClass,
  hero,
  massages,
  offerings,
  retreats,
  stay,
  story,
  team,
} from '@/content/site';
import s from './Views.module.css';

const ext = { target: '_blank', rel: 'noopener' };

function Title({ id, children, className = '' }) {
  return (
    <h2 id={id} className={`title ${s.title} ${className}`} data-anim="">
      {children}
    </h2>
  );
}

export function HomeView() {
  preload('/media/hero-leaves-poster.jpg', { as: 'image', fetchPriority: 'high' });
  return (
    <section className={s.hero} aria-label="Welcome">
      <div className={s.heroMedia}>
        <AmbientVideo src="/media/hero-leaves.mp4" poster="/media/hero-leaves-poster.jpg" eager className={s.cover} />
      </div>
      <div className={`container ${s.heroInner}`}>
        <h1 className={s.heroLogo} data-anim="">
          <img src="/images/logo-white.webp" width={586} height={244} alt="TULA Wellness" fetchPriority="high" />
        </h1>
        <p className={s.heroLine} data-anim="">
          {hero.lines[0]}
        </p>
        <div className={`actions ${s.heroActions}`} data-anim="">
          <a className="btn btn-light btn-solid" href="#contact">
            Book Now
          </a>
          <a className="btn btn-light" href="#about">
            Discover More
          </a>
        </div>
      </div>
      <div className={s.heroFoot} data-anim="">
        <OfferDialog />
      </div>
    </section>
  );
}

/* About: full-bleed garden video with the meaning of TULA, story beside it. */
export function AboutView() {
  return (
    <section className={`${s.view} bg-cream`} aria-labelledby="about-title">
      <div className={`container ${s.about}`}>
        <div className={s.aboutText}>
          <img className={s.cobrand} src="/images/logo-amala-tula.webp" width={494} height={196} alt="TULA Wellness by The Amala" data-anim="" />
          <Title id="about-title">{story.title}</Title>
          <p className="lead" data-anim="">
            {story.paragraphs[0]}
          </p>
          <div data-anim="">
            <TeamCards title={team.title} members={team.members} />
          </div>
        </div>

        <div className={s.mosaic}>
          <figure className={`frame ${s.tileTall}`} data-anim="">
            <Img name="g-prayer" alt="Guest with hands in prayer among greenery" sizes="(min-width: 900px) 22vw, 50vw" />
          </figure>
          <figure className={`frame ${s.tileWide}`} data-anim="">
            <Img name="story" alt="Guest meditating beside a stone wall among plants" sizes="(min-width: 900px) 36vw, 100vw" />
            <figcaption className={s.tileQuote}>{firstSentence(story.balance)}</figcaption>
          </figure>
          <div className={`frame ${s.tileVideo}`} data-anim="">
            <AmbientVideo src="/media/garden.mp4" poster="/media/garden-poster.jpg" className={s.cover} />
          </div>
          <a className={`frame ${s.tileAmala}`} href={stay.url} {...ext} data-anim="">
            <Img name="amala" alt="Open-air pavilion at The Amala beside the pool" sizes="(min-width: 900px) 18vw, 50vw" />
            <span className={s.tileAmalaLabel}>
              <img src="/images/logo-amala.png" width={500} height={234} alt="The Amala" loading="lazy" />
              <span>{stay.label}</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* Experiences: category switch with list, photo and description. */
export function ExperiencesView() {
  const categories = [
    {
      id: 'signature',
      label: experience.title,
      items: experience.items.map((i) => ({ title: i.title, image: i.preview, alt: i.alt, text: i.text })),
    },
    { id: 'massages', label: massages.title, items: massages.items.map((m) => ({ title: m.name, image: m.image, alt: m.alt, text: m.text })) },
    { id: 'offerings', label: offerings.title, items: offerings.items.map((o) => ({ title: o.name, image: o.image, alt: o.alt, text: o.text })) },
  ];
  return (
    <section className={`${s.view} bg-sage`} aria-labelledby="experiences-title">
      <div className="container">
        <header className={s.head}>
          <Title id="experiences-title">Experiences</Title>
          <p className={s.headIntro} data-anim="">
            {experience.lines[1]}
          </p>
        </header>
        <ExperienceExplorer categories={categories} />
      </div>
    </section>
  );
}

/* Programs: expanding photo panels. */
export function ProgramsView() {
  const programs = dayPrograms.map((p) => ({
    id: p.id,
    tab: p.tab,
    image: p.images[0].name,
    summary: firstSentence(p.intro[0]),
    listTitle: p.listTitle,
    includes: p.id === 'full-day' ? fullDayInclusions : p.details.map((d) => d.name),
    brochure: p.brochure,
  }));
  return (
    <section className={`${s.view} bg-cream`} aria-labelledby="programs-title">
      <div className="container">
        <header className={s.head}>
          <Title id="programs-title">Day Experiences</Title>
          <p className={s.headIntro} data-anim="">
            {experience.lines[0]}
          </p>
        </header>
        <ProgramPanels programs={programs} />
      </div>
    </section>
  );
}

/* Classes: text column with week strip, overlapping photo pair. */
export function ClassesView() {
  const f = groupClass.flyer;
  return (
    <section className={`${s.view} bg-neutral`} aria-labelledby="classes-title">
      <div className={`container ${s.classes}`}>
        <div className={s.classesBody}>
          <Title id="classes-title">{groupClass.title}</Title>
          <p className="lead" data-anim="">
            {groupClass.intro[0]}
          </p>
          <ul className={s.chips} data-anim="" aria-label="From the class flyer">
            {f.lines.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
          <div data-anim="">
            <ClassWeek schedule={groupClass.schedule} />
          </div>
          <div className="actions" data-anim="">
            <a className="btn btn-solid" href={BOOKING_URL} {...ext}>
              Reserve Your Experience
            </a>
            <a className="btn" href={groupClass.brochure.url} {...ext} aria-label="Discover More: Yoga, Pilates & Meditation flyer (PDF, opens in a new tab)">
              Discover More
            </a>
          </div>
        </div>
        <div className={s.overlap} data-anim="">
          <div className={`frame ${s.overlapBack}`}>
            <Img name="class-2" alt="Two guests reaching upward during class" sizes="(min-width: 900px) 30vw, 70vw" />
          </div>
          <div className={`frame ${s.overlapFront}`}>
            <Img name="class-1" alt="Group yoga class in the air-conditioned studio" sizes="(min-width: 900px) 26vw, 60vw" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* Retreats: dark photographic backdrop, list and itinerary card. */
export function RetreatsView() {
  return (
    <section className={`${s.view} ${s.dark}`} aria-labelledby="retreats-title">
      <div className={s.darkMedia} aria-hidden="true">
        <Img name="g-ceremony" alt="" sizes="100vw" className={s.cover} />
      </div>
      <div className="container">
        <RetreatExplorer retreats={retreats.items} faq={faq}>
          <Title id="retreats-title" className={s.retreatTitle}>
            {retreats.title}
          </Title>
          <p data-anim="">
            {retreats.intro[0]} {retreats.intro[2]}
          </p>
        </RetreatExplorer>
      </div>
    </section>
  );
}

/* Gallery: full-bleed filmstrip with lightbox. */
export function GalleryView() {
  return (
    <section className={`${s.view} ${s.galleryView} bg-cream`} aria-labelledby="gallery-title">
      <div className={`container ${s.galleryHead}`}>
        <Title id="gallery-title">Gallery</Title>
      </div>
      <div className={s.galleryStrip} data-anim="">
        <GalleryLightbox items={gallery} />
      </div>
    </section>
  );
}

/* Contact: map bleeding to the edge, details and form beside it. */
export function ContactView() {
  return (
    <section className={`${s.split} ${s.splitReverse} bg-sage`} aria-labelledby="contact-title">
      <div className={s.splitMedia}>
        <iframe
          className={s.map}
          src={contact.mapEmbed}
          title="Map: TULA Wellness by The Amala, Seminyak"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <div className={s.splitBody}>
        <Title id="contact-title">Get in Touch</Title>
        <dl className={s.facts} data-anim="">
          <div className={s.factWide}>
            <dt>Address</dt>
            <dd>{contact.address}</dd>
          </div>
          <div>
            <dt>Phone</dt>
            <dd>
              <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
            </dd>
          </div>
          <div>
            <dt>Email</dt>
            <dd>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </dd>
          </div>
          <div>
            <dt>Opening Hours</dt>
            <dd>
              {contact.hoursDays} · {contact.hoursTime}
            </dd>
          </div>
        </dl>
        <div data-anim="">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function Social() {
  const links = [
    { href: contact.facebook, label: 'Facebook', Icon: Facebook },
    { href: contact.instagram, label: 'Instagram', Icon: Instagram },
    { href: contact.whatsapp, label: 'WhatsApp', Icon: WhatsApp },
    { href: contact.tripadvisor, label: 'TripAdvisor', Icon: TripAdvisor },
  ];
  return (
    <ul className={s.social}>
      {links.map(({ href, label, Icon }) => (
        <li key={label}>
          <a href={href} {...ext} aria-label={label}>
            <Icon />
          </a>
        </li>
      ))}
    </ul>
  );
}

export function Footer() {
  return (
    <footer className={s.footer}>
      <div className={`container ${s.footerInner}`}>
        <img src="/images/logo-amala-tula.webp" width={494} height={196} alt="TULA Wellness by The Amala" loading="lazy" className={s.footerLogo} />
        <ul className={s.footerLinks}>
          <li>
            <a href={stay.url} {...ext}>
              {stay.label}
            </a>
          </li>
          <li>
            <a href={BLOG_URL} {...ext}>
              Blog
            </a>
          </li>
          <li>
            <TermsDialog className={s.footerBtn} />
          </li>
        </ul>
        <Social />
        <p className={s.footerLegal}>{contact.copyright}</p>
      </div>
    </footer>
  );
}
