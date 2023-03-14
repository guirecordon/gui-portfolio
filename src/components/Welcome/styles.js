import styled from 'styled-components';

export const WelcomeContainer = styled.div`
  scroll-snap-align: start;

  width: 100%;
  height: 100vh;
  overflow: hidden;

  position: relative;

  iframe {
    width: calc(100% + 96px);
    height: calc(100% + 96px);

    overflow: hidden;
    position: absolute;
    top: -68px;
    left: -68px;

    scroll-snap-align: start;
  }

  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 900;
    font-size: 12rem;
    mix-blend-mode: screen;
    background: #fff;
    width: 100%;
    height: 100%;

    position: absolute;
  }

  @media (max-width: 600px) {
    scroll-snap-align: none;

    h1 {
      font-size: 5rem;
    }
  }
`;

export const UpperContainer = styled.div`
  position: absolute;
  top: calc(50% - 152px);
  left: calc(50% - 452px);

  p {
    font-size: 4rem;
    font-weight: 400;
  }

  @media (max-width: 600px) {
    top: calc(50% - 92px);
    left: 16px;

    p {
      font-size: 1.75rem;
    }
  }
`;

export const HiContainer = styled.span`
  background-image: linear-gradient(
    45deg,
    hsl(240deg 100% 20%) 0%,
    hsl(285deg 100% 17%) 2%,
    hsl(311deg 100% 17%) 4%,
    hsl(325deg 100% 19%) 6%,
    hsl(337deg 79% 22%) 8%,
    hsl(354deg 49% 26%) 13%,
    hsl(9deg 40% 27%) 19%,
    hsl(19deg 31% 28%) 30%,
    hsl(26deg 18% 30%) 49%,
    hsl(33deg 5% 32%) 100%
  );

  background-size: 100%;
  background-repeat: repeat;

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
`;

export const GuiContainer = styled.span`
  font-weight: 900;

  background-image: linear-gradient(
    50deg,
    hsl(25deg 95% 53%) 0%,
    hsl(29deg 98% 52%) 11%,
    hsl(33deg 100% 50%) 22%,
    hsl(36deg 100% 50%) 33%,
    hsl(40deg 100% 50%) 44%,
    hsl(43deg 100% 50%) 56%,
    hsl(46deg 100% 50%) 67%,
    hsl(49deg 100% 50%) 78%,
    hsl(52deg 100% 50%) 89%,
    hsl(55deg 100% 50%) 100%
  );

  background-size: 100%;
  background-repeat: repeat;

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
`;

export const RecordonContainer = styled.span`
  font-weight: 900;

  /* background-image: linear-gradient(
    50deg,
    hsl(224deg 64% 33%) 0%,
    hsl(232deg 51% 39%) 21%,
    hsl(241deg 43% 46%) 30%,
    hsl(250deg 44% 49%) 39%,
    hsl(258deg 48% 52%) 46%,
    hsl(265deg 55% 54%) 54%,
    hsl(272deg 62% 57%) 61%,
    hsl(279deg 70% 58%) 69%,
    hsl(286deg 77% 60%) 79%,
    hsl(292deg 84% 61%) 100%
  ); */

  background-image: linear-gradient(
    45deg,
    hsl(199deg 95% 74%) 0%,
    hsl(199deg 85% 70%) 11%,
    hsl(198deg 77% 67%) 22%,
    hsl(197deg 70% 63%) 33%,
    hsl(197deg 65% 59%) 44%,
    hsl(196deg 61% 56%) 56%,
    hsl(195deg 57% 52%) 67%,
    hsl(194deg 60% 48%) 78%,
    hsl(193deg 70% 43%) 89%,
    hsl(192deg 91% 36%) 100%
  );

  background-size: 100%;
  background-repeat: repeat;

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
`;

export const LowerContainer = styled.div`
  position: absolute;
  top: calc(50% + 100px);
  right: calc(50% - 452px);

  p {
    font-size: 3rem;
    font-weight: 900;
    color: #fff;
    padding: 0 1rem;

    background-image: linear-gradient(
      250deg,
      hsl(199deg 95% 74%) 0%,
      hsl(199deg 76% 69%) 3%,
      hsl(199deg 63% 63%) 9%,
      hsl(198deg 53% 58%) 16%,
      hsl(198deg 46% 53%) 25%,
      hsl(197deg 44% 48%) 38%,
      hsl(197deg 48% 42%) 53%,
      hsl(196deg 52% 37%) 70%,
      hsl(195deg 59% 32%) 86%,
      hsl(194deg 70% 27%) 100%
    );
  }

  @media (max-width: 600px) {
    position: absolute;
    top: calc(50% + 62px);
    right: calc(50% - 62px);

    p {
      font-size: 1.5rem;
      padding: 1rem;
    }
  }
`;

export const ScrollContainer = styled.div`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  animation: top-bottom 2s ease-in infinite;

  @keyframes top-bottom {
    0% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(50%);
    }

    100% {
      transform: translateY(100%);
    }
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 906px;

  position: absolute;
  top: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000000;
`;

export const LanguagesContainer = styled.div`
  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 2.5rem;

    font-size: 1.25rem;
    text-transform: lowercase;

    background-image: linear-gradient(
      45deg,
      hsl(0deg 72% 51%) 0%,
      hsl(7deg 68% 51%) 15%,
      hsl(12deg 64% 52%) 24%,
      hsl(15deg 59% 53%) 32%,
      hsl(17deg 53% 54%) 40%,
      hsl(19deg 46% 56%) 47%,
      hsl(21deg 38% 58%) 55%,
      hsl(22deg 29% 60%) 65%,
      hsl(23deg 19% 62%) 79%,
      hsl(24deg 5% 64%) 100%
    );

    background-size: 100%;
    background-repeat: repeat;

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }
`;

export const ThemeContainer = styled.div``;
