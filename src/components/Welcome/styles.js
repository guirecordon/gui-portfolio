import styled from 'styled-components';

export const WelcomeContainer = styled.div`
  margin-top: 100vh;

  width: 100%;
  height: 100vh;
  overflow: hidden;
  margin-top: 100vh;

  position: relative;

  iframe {
    width: calc(100% + 96px);
    height: calc(100% + 96px);

    overflow: hidden;
    position: absolute;
    top: -68px;
    left: -68px;
    /* 
    z-index: 10000;
    */
  }

  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 900;
    font-size: 8rem;
    mix-blend-mode: screen;
    background: #fff;
    width: 100%;
    height: 100%;

    position: absolute;
    /* top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); */
  }
`;

export const WhiteLayer = styled.div`
  width: 90%;
  height: 90%;
  background: #fff;
  opacity: 1;

  h2 {
    font-size: 8rem;
    background-blend-mode: overlay;
    background-clip: text;
    opacity: 0.2;
    /* color: transparent; */
  }
`;

export const Box = styled.div`
  width: 300px;
  height: 300px;
  background: #fff;

  h2 {
    /* mix-blend-mode: screen; */
  }
`;
