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

    background-size: 100%;
    background-repeat: repeat;

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }

  @media (max-width: 600px) {
    scroll-snap-align: none;
    padding: 0rem 1rem 2rem 1rem;
  }
`;

export const MainContainer = styled.div`
  background: #fff;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  height: 90%;

  border: solid 3px #155e75;

  border-radius: 8px;
  overflow: hidden;

  box-shadow: 2px 2px 4px #67e8f9;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
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

  @media (max-width: 600px) {
    height: auto;
  }
`;

export const AboutSectionContainer = styled.div`
  padding-bottom: 8rem;

  @media (max-width: 600px) {
    padding-bottom: 2rem;
  }
`;
