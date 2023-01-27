import { ArrowBendRightDown, CaretDoubleDown } from 'phosphor-react';
import { Greetings, HeroContainer, ScrollContainer, Shade } from './styles';

export function Hero() {
  return (
    <HeroContainer>
      <iframe
        src="https://www.youtube.com/embed/wTcNtgA6gHs?autoplay=1&mute=1&start=15&end=240&loop=1&controls=0&showinfo=0&playlist=wTcNtgA6gHs"
        allow="autoplay"
        frameborder="0"
      ></iframe>
      <Shade></Shade>
      <Greetings>
        <h3>Gui Recordon</h3>
        {/* <p>
          I'm just like my <h3>country: young,</h3> scrappy, and hungry
        </p> */}
        <p>web developer</p>
      </Greetings>

      <ScrollContainer>
        <CaretDoubleDown size={24} color="#fff" weight="bold" />
      </ScrollContainer>
    </HeroContainer>
  );
}
