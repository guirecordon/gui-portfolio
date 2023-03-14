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
    border: solid 3px #155e75;

    border-radius: 8px;
    font-size: 1rem;
    padding: 0.5rem;

    &:focus {
      border: solid 3px #155e75;
    }
  }

  textarea {
    width: 100%;
    flex: 1;

    font-size: 1rem;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: solid 3px #155e75;

    border-radius: 8px;
  }

  button {
    display: block;
    padding: 1rem 3.2rem;
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
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
    }
  }

  @media (max-width: 600px) {
    scroll-snap-align: none;
    height: auto;
    scroll-snap-align: auto;

    input,
    textarea {
      font-size: 0.85rem;
    }
  }
`;

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  padding: 2rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
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

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const SocialBar = styled.div`
  position: absolute;
  right: 8px;
  background: #fff;
  width: 4rem;
  height: 60%;
  border-radius: 8px;
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

  @media (max-width: 600px) {
    position: relative;
    right: 0;
    width: 100%;
    height: 4rem;

    ul {
      width: 100%;
      display: flex;
      justify-content: space-around;
    }

    li {
      padding-top: 0.5rem;
    }
  }
`;
