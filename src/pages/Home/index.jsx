import { Contact } from '../../components/Contact';
import { Hero } from '../../components/Hero';
import { Intro } from '../../components/Intro';
import { ProjectsShow } from '../../components/ProjectsShow';
import { PublishedArticles } from '../../components/PublishedArticles';
import { Welcome } from '../../components/Welcome';
import { ScrollContainer } from './styles';

export function Home() {
  return (
    <ScrollContainer>
      <Hero />
      <Welcome />
      <Intro />
      <ProjectsShow />
      <PublishedArticles />
      <Contact />
    </ScrollContainer>
  );
}
