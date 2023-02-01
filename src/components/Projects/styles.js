import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  background: #fff;
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
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
  box-shadow: 4px 4px #292524;

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

  h1 {
    text-transform: uppercase;
    font-size: 1.125rem;
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
  }

  p {
    color: #292524;
    padding-bottom: 1.5rem;
  }
`;

export const ImageContainer = styled.div`
  width: 182px;
  height: 182px;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.5) translate(50% 20%);
  }
`;
