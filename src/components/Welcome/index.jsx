import {
  GuiContainer,
  LowerContainer,
  RecordonContainer,
  UpperContainer,
  WelcomeContainer,
} from './styles';

export function Welcome() {
  return (
    <>
      <WelcomeContainer>
        <iframe
          width="100%"
          height="572px"
          src="https://www.youtube.com/embed/wTcNtgA6gHs?autoplay=1&mute=1&start=15&end=240&loop=1&controls=0&showinfo=0&playlist=wTcNtgA6gHs"
          allow="autoplay"
          frameborder="0"
        ></iframe>
        <h1>WELCOME</h1>
        <UpperContainer>
          <p>
            Hi, my name is <GuiContainer>gui</GuiContainer>{' '}
            <RecordonContainer>Recordon</RecordonContainer>
          </p>
        </UpperContainer>
        <LowerContainer>
          <p>to my portfolio website...</p>
        </LowerContainer>
      </WelcomeContainer>
    </>
  );
}
