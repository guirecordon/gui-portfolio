import styled from 'styled-components';

export const ContactContainer = styled.div`
  scroll-snap-align: start;

  height: 100vh;
  background: #fff;

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

    background-size: 100%;
    background-repeat: repeat;

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  label {
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
    /* background-image: linear-gradient(
      45deg,
      hsl(85deg 85% 35%) 0%,
      hsl(80deg 82% 37%) 11%,
      hsl(76deg 78% 39%) 22%,
      hsl(72deg 75% 41%) 33%,
      hsl(68deg 71% 44%) 44%,
      hsl(65deg 67% 47%) 56%,
      hsl(61deg 63% 49%) 67%,
      hsl(57deg 70% 54%) 78%,
      hsl(54deg 82% 59%) 89%,
      hsl(50deg 98% 64%) 100%
    ); */

    background-size: 100%;
    background-repeat: repeat;

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }

  input {
    width: 100%;
    display: block;
    margin-bottom: 1rem;
    /* border: 2px solid #84cc16; */
    border: solid 3px #155e75;

    border-radius: 8px;
    font-size: 1rem;
    padding: 0.5rem;

    &:focus {
      /* border: 2px solid #65a30d; */
      border: solid 3px #155e75;
    }
  }

  textarea {
    width: 100%;
    flex: 1;

    font-size: 1rem;
    padding: 0.5rem;
    margin-bottom: 1rem;
    /* border: 2px solid #84cc16; */
    border: solid 3px #155e75;

    border-radius: 8px;
  }

  button {
    display: block;
    padding: 1rem 3.2rem;
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
    /* border: solid 2px #84cc16; */
    border: solid 3px #155e75;

    border-radius: 8px;
    color: #ecfccb;
    font-weight: 700;
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
    /* background-image: linear-gradient(
      45deg,
      hsl(85deg 85% 35%) 0%,
      hsl(85deg 73% 39%) 11%,
      hsl(85deg 65% 43%) 22%,
      hsl(85deg 60% 46%) 33%,
      hsl(84deg 55% 50%) 44%,
      hsl(84deg 59% 53%) 56%,
      hsl(83deg 64% 57%) 67%,
      hsl(83deg 69% 60%) 78%,
      hsl(82deg 76% 64%) 89%,
      hsl(82deg 85% 67%) 100%
    ); */

    &:hover {
      background-image: linear-gradient(
        250deg,
        hsl(45deg 93% 47%) 0%,
        hsl(46deg 85% 50%) 3%,
        hsl(46deg 86% 52%) 9%,
        hsl(46deg 88% 54%) 16%,
        hsl(47deg 89% 56%) 25%,
        hsl(48deg 91% 57%) 38%,
        hsl(48deg 92% 59%) 53%,
        hsl(49deg 94% 60%) 70%,
        hsl(50deg 96% 62%) 86%,
        hsl(50deg 98% 64%) 100%
      );

      color: #a16207;

      /* background-image: linear-gradient(
        45deg,
        hsl(85deg 85% 35%) 0%,
        hsl(85deg 82% 33%) 11%,
        hsl(86deg 78% 32%) 22%,
        hsl(86deg 76% 30%) 33%,
        hsl(86deg 73% 29%) 44%,
        hsl(87deg 71% 27%) 56%,
        hsl(87deg 68% 25%) 67%,
        hsl(87deg 66% 24%) 78%,
        hsl(87deg 64% 22%) 89%,
        hsl(88deg 61% 20%) 100%
      ); */
    }
  }
`;

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  padding: 2rem;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 8px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  position: relative;
`;

export const SocialBar = styled.div`
  position: absolute;
  right: 8px;
  background: #fff;
  width: 4rem;
  height: 60%;
  border-radius: 8px;
  /* border: 3px solid #84cc16; */
  border: solid 3px #155e75;

  display: flex;
  justify-content: center;
  align-items: center;

  li {
    padding-top: 2.5rem;
  }

  a {
    &:hover {
      box-shadow: 2px 2px 3px #155e75;
    }
  }
`;
