import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  scroll-snap-align: start;

  background: #fff;
  height: 100vh;
  padding: 2rem;

  h1 {
    text-transform: uppercase;
    text-align: center;
    font-size: 2rem;
    padding-bottom: 1rem;
    text-shadow: 2px 2px #67e8f9;

    /* background-image: linear-gradient(
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
    ); */

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
`;

export const MainPage = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  /* padding: 2rem; */

  height: 90%;

  border: solid 3px #155e75;
  border-radius: 8px;
  overflow: hidden;

  box-shadow: 2px 2px 4px #67e8f9;
`;

export const ProjectCardsContainer = styled.div`
  padding: 1rem;
  height: 100%;
  overflow-y: scroll;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

export const CardHolder = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  overflow: hidden;
  cursor: pointer;
  border-radius: 8px;
  box-shadow: 1px 1px #292524;

  &:hover {
    transform: translate(-4px, -4px);
    box-shadow: 4px 4px #292524;
  }

  img {
    width: 100%;
    object-fit: cover;
    object-position: 25%;
  }

  p {
    line-height: 1.6;
    background: #fff;
  }
`;

export const ProjectDescriptionContainer = styled.div`
  height: 100%;
  overflow-y: scroll;
  padding: 1rem;

  h3 {
    font-size: 1.125rem;
    color: #292524;
    padding-bottom: 1.5rem;
    line-height: 1.6;
  }

  p {
    color: #292524;
    padding-bottom: 1.5rem;
    line-height: 1.3;
  }
`;

export const ImageContainer = styled.div`
  width: 11rem;
  height: 11rem;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.5) translate(50% 20%);
  }
`;

export const ProjectTextHolder = styled.div`
  padding-bottom: 24rem;
`;

export const GithubLink = styled.a`
  color: #65a30d;
  font-weight: 700;

  &:hover {
    color: #84cc16;
  }
`;
