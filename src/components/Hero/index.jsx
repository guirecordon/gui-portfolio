import { CaretDoubleDown } from 'phosphor-react';
import { Greetings, HeroContainer, ScrollContainer, Shade } from './styles';
import useMediaQuery from '../../hooks/usehooks';
import coverMobile from '../../assets/mobile/guiSurf.jpeg';

export function Hero() {
  const matches = useMediaQuery('(max-width: 600px)');

  return (
    <HeroContainer>
      {matches ? (
        <img src={coverMobile} />
      ) : (
        <iframe
          src="https://www.youtube.com/embed/wTcNtgA6gHs?autoplay=1&mute=1&start=15&end=240&loop=1&controls=0&showinfo=0&playlist=wTcNtgA6gHs"
          allow="autoplay"
          frameborder="0"
        ></iframe>
      )}

      <Shade></Shade>
      <Greetings>
        <h3>Gui Recordon</h3>
        {/* <p>
          I'm just like my <h3>country: young,</h3> scrappy, and hungry
        </p> */}
        <p>software developer</p>
      </Greetings>

      <ScrollContainer>
        <CaretDoubleDown size={24} color="#fff" weight="bold" />
      </ScrollContainer>
    </HeroContainer>
  );
}
