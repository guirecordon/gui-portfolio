import { CaretDoubleDown, Moon } from 'phosphor-react';
import {
  GuiContainer,
  HiContainer,
  LanguagesContainer,
  LowerContainer,
  NavContainer,
  RecordonContainer,
  ScrollContainer,
  ThemeContainer,
  UpperContainer,
  WelcomeContainer,
} from './styles';

export function Welcome() {
  return (
    <WelcomeContainer>
      <iframe
        width="100%"
        height="572px"
        src="https://www.youtube.com/embed/wTcNtgA6gHs?autoplay=1&mute=1&start=15&end=240&loop=1&controls=0&showinfo=0&playlist=wTcNtgA6gHs"
        allow="autoplay"
        frameborder="0"
      ></iframe>

      {/* <NavContainer>
        <LanguagesContainer>
          <ul>
            <li>English</li>
            <li>Español</li>
            <li>Português</li>
            <li>Français</li>
            <li>日本語</li>
          </ul>
        </LanguagesContainer>

        <ThemeContainer>
          <Moon size={24} weight="bold" color="#A8A29E" />
        </ThemeContainer>
      </NavContainer> */}

      <h1>WELCOME</h1>
      <UpperContainer>
        <p>
          <HiContainer> Hi, my name is </HiContainer>
          <GuiContainer>gui</GuiContainer>{' '}
          <RecordonContainer>Recordon</RecordonContainer>
        </p>
      </UpperContainer>
      <LowerContainer>
        <p>to my portfolio website...</p>
      </LowerContainer>

      <ScrollContainer>
        <CaretDoubleDown size={24} color="#1c1917" weight="bold" />
      </ScrollContainer>
    </WelcomeContainer>
  );
}
