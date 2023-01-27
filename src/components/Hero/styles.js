import styled from 'styled-components';

export const HeroContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  overflow: hidden;
  z-index: -1000;

  iframe {
    width: calc(100% + 96px);
    height: calc(100% + 96px);

    overflow: hidden;
    position: absolute;
    top: -68px;
    left: -48px;

    z-index: 0;
  }
`;

export const Shade = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
`;

export const Greetings = styled.div`
  width: 100%;
  text-align: center;
  font-size: 7rem;
  font-weight: 900;
  color: #facc15;
  position: absolute;
  text-transform: uppercase;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h3 {
    line-height: 1;
    font-size: 9rem;
  }

  p {
    color: #fff;
    line-height: 1;
    font-size: 4rem;
  }
`;

export const ScrollContainer = styled.div`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  animation: top-bottom 2s ease-in infinite;

  @keyframes top-bottom {
    0% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(50%);
    }

    100% {
      transform: translateY(100%);
    }
  }
`;
