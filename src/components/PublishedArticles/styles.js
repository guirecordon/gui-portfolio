import styled from 'styled-components';

export const ArticlesContainer = styled.div`
  scroll-snap-align: start;

  background: #fff;
  height: 100vh;
  padding: 1rem 11rem;

  h1 {
    text-align: center;
    padding: 2rem;
    text-transform: uppercase;
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

  h4 {
    text-align: center;
    text-align: justify;
    font-weight: 400;
    font-style: italic;
    padding-bottom: 4rem;
    color: #1c1917;
    line-height: 1.6;
  }

  @media (max-width: 600px) {
    scroll-snap-align: none;
    padding: 1rem;
    width: 100%;
    padding-bottom: 4rem;
    height: auto;

    h4 {
      font-size: 0.85rem;
    }
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  height: 12rem;

  @media (max-width: 600px) {
    flex-direction: column;
    height: 24rem;
  }
`;

export const CardContainer = styled.a`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border: solid 3px #155e75;

  border-radius: 8px;
  box-shadow: 2px 2px 4px #67e8f9;

  width: 24rem;
  overflow: hidden;
  position: relative;
  background: #d6d3d1;

  span {
    display: block;
    background: #fff;
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    padding: 0.5rem 0;
  }

  img {
    width: 100%;
    height: 80%;
    object-fit: contain;
  }

  &:hover {
    img {
      transform: scale(1.25);
    }
    span {
      font-weight: 700;
    }
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;
