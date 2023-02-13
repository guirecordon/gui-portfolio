import styled from 'styled-components';

export const AboutContainer = styled.div`
  scroll-snap-align: start;
  height: 100vh;
  background: #fff;
  padding: 2rem;

  h1 {
    text-align: center;
    text-transform: uppercase;
    font-size: 2rem;
    padding: 1rem;
    text-shadow: 2px 2px #67e8f9;

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
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  height: 90%;

  border: solid 2px #5b21b6;
  border-radius: 8px;
  overflow: hidden;

  box-shadow: 2px 2px 4px #fde047;
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
  overflow-y: scroll;
  scroll-behavior: smooth;

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

export const AboutImageContainer = styled.div`
  height: 16rem;
  width: 100%;
  overflow: hidden;
  margin-bottom: 1.5rem;
  border-radius: 6px;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

export const AboutSectionContainer = styled.div`
  padding-bottom: 8rem;
`;
