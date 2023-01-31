import { Hero } from '../../components/Hero';
import { Intro } from '../../components/Intro';
import { Welcome } from '../../components/Welcome';
import { ScrollContainer } from './styles';

export function Home() {
  return (
    <ScrollContainer>
      <Hero />
      <Welcome />
      <Intro />
    </ScrollContainer>
  );
}
