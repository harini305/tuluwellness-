import ViewShell from '@/components/ViewShell';
import {
  AboutView,
  ClassesView,
  ContactView,
  ExperiencesView,
  Footer,
  GalleryView,
  HomeView,
  ProgramsView,
  RetreatsView,
} from '@/components/Views';
import { views } from '@/content/site';

const nodes = {
  home: <HomeView />,
  about: <AboutView />,
  experiences: <ExperiencesView />,
  programs: <ProgramsView />,
  classes: <ClassesView />,
  retreats: <RetreatsView />,
  gallery: <GalleryView />,
  contact: <ContactView />,
};

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <ViewShell views={views.map((v) => ({ ...v, node: nodes[v.id] }))} footer={<Footer />} />
    </>
  );
}
