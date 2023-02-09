import styled from 'styled-components';

export const AboutContainer = styled.div`
  scroll-snap-align: start;
  height: 100vh;
  background: #fff;

  h1 {
    text-align: center;
    text-transform: uppercase;
    font-size: 2rem;
    padding: 1rem;

    background-image: linear-gradient(
      45deg,
      hsl(350deg 89% 60%) 0%,
      hsl(350deg 91% 60%) 11%,
      hsl(350deg 92% 59%) 22%,
      hsl(350deg 94% 58%) 33%,
      hsl(350deg 95% 58%) 44%,
      hsl(350deg 96% 57%) 56%,
      hsl(350deg 98% 56%) 67%,
      hsl(349deg 99% 54%) 78%,
      hsl(349deg 99% 53%) 89%,
      hsl(347deg 100% 50%) 100%
    );

    background-size: 100%;
    background-repeat: repeat;

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }
`;

export const MainContainer = styled.div`
  background: #fff;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
`;

export const AboutCardsContainer = styled.div`
  padding: 1rem;
  height: 100%;
  overflow-y: scroll;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

export const AboutCardHolder = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  overflow: hidden;
  cursor: pointer;
  border-radius: 8px;
  box-shadow: 1px 1px #292524;
  padding: 1rem;

  &:hover {
    transform: translate(-4px, -4px);
    box-shadow: 4px 4px #292524;
  }

  img {
    width: 100%;
    object-fit: contain;
  }

  p {
    line-height: 1.6;
    background: #fff;
  }
`;

export const AboutDescriptionContainer = styled.div`
  /* height: 100%; */
  overflow-y: scroll;
  padding: 1rem;

  h1 {
    text-transform: uppercase;
    padding-bottom: 1rem;

    background-image: linear-gradient(
      45deg,
      hsl(350deg 89% 60%) 0%,
      hsl(350deg 91% 60%) 11%,
      hsl(350deg 92% 59%) 22%,
      hsl(350deg 94% 58%) 33%,
      hsl(350deg 95% 58%) 44%,
      hsl(350deg 96% 57%) 56%,
      hsl(350deg 98% 56%) 67%,
      hsl(349deg 99% 54%) 78%,
      hsl(349deg 99% 53%) 89%,
      hsl(347deg 100% 50%) 100%
    );

    background-size: 100%;
    background-repeat: repeat;

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }

  h3 {
    font-size: 1.125rem;
    color: #292524;
    padding-bottom: 2rem;
    line-height: 1.6;
  }

  p {
    color: #292524;
    padding-bottom: 1.5rem;
    line-height: 1.3;
  }
`;
