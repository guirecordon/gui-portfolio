import styled from 'styled-components';

export const AboutContainer = styled.div`
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
