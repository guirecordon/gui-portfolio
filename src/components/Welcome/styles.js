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
    /* padding-top: 6rem;
    padding-left: 10rem; */
    font-weight: 900;
    font-size: 12rem;
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

export const UpperContainer = styled.div`
  position: absolute;
  top: calc(50% - 152px);
  left: calc(50% - 452px);
  /* transform: translate(-50%, -50%); */
  /* 
  display: flex;
  align-items: baseline; */

  p {
    font-size: 4rem;
    font-weight: 900;
  }
`;

export const GuiContainer = styled.span`
  color: rgb(255, 255, 0);
`;

export const RecordonContainer = styled.span`
  color: rgb(0, 255, 255);
`;

export const LowerContainer = styled.div`
  position: absolute;
  top: calc(50% + 100px);
  right: calc(50% - 452px);
  /* transform: translate(-50%, -50%); */
  /* 
  display: flex;
  align-items: baseline; */

  p {
    font-size: 3rem;
    font-weight: 900;
  }
`;
