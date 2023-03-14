import styled from 'styled-components';

export const IntroContainer = styled.div`
  scroll-snap-align: start;

  height: 100vh;
  width: 100%;
  background-color: #fff;
  padding: 4rem 2rem;

  display: grid;
  gap: 8rem;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 600px) {
    scroll-snap-align: none;
    display: block;
    height: auto;
    padding: 2rem 1rem;
    margin-bottom: 2rem;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;

  p {
    font-size: 1rem;
    font-style: italic;
    line-height: 1.6;
    text-rendering: geometricPrecision;
    text-align: end;
    color: #292524;
  }

  @media (max-width: 600px) {
    padding-bottom: 4rem;
  }
`;

export const IntroPhotoContainer = styled.div`
  width: 16rem;
  height: 16rem;
  border: solid 8px #67e8f9;
  border-radius: 50%;
  box-shadow: 2px 2px 4px #0891b2;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    text-transform: uppercase;
    font-size: 2rem;
    padding-bottom: 2rem;
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
`;

export const LogosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;

  padding-bottom: 2rem;

  span {
    color: #78716c;
  }
`;

export const LogoHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;

  img {
    width: 3.25rem;
    height: 4rem;
  }

  &:hover {
    span {
      animation: name-wiggle ease 0.5s 1;

      @keyframes name-wiggle {
        0% {
          transform: translate(0, 0);
        }
        25% {
          transform: translate(0, -0.125rem);
        }
        50% {
          transform: translate(0, 0.125rem);
        }
        75% {
          transform: translate(0, -0.125rem);
        }
      }
    }
  }
`;

export const HeaderContainer = styled.div`
  padding-bottom: 4rem;
`;

export const ContentHeaderHolder = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-bottom: 1.25rem;
  transition: ease 0.5s;

  a {
    font-weight: 700;
    font-size: 1.5rem;
    color: #292524;
    cursor: pointer;
  }

  &:hover {
    span {
      transform: translateX(0.5rem);
    }
  }
`;
