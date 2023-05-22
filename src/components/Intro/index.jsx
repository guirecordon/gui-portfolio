import {
  ContentHeaderHolder,
  HeaderContainer,
  IntroContainer,
  IntroPhotoContainer,
  LeftSide,
  LogoHolder,
  LogosContainer,
  RightSide,
} from './styles';
import IntroPhoto from '../../assets/gui-recordon02.webp';
import javascript from '../../assets/StackLogos/logo-javascript.svg';
import typescript from '../../assets/StackLogos/typescript.svg';
import react from '../../assets/StackLogos/react-2.svg';
import redux from '../../assets/StackLogos/redux.svg';
import next from '../../assets/StackLogos/next-js.svg';
import nodejs from '../../assets/StackLogos/nodejs-icon.svg';
import { ArrowRight } from 'phosphor-react';

export function Intro() {
  return (
    <IntroContainer>
      <LeftSide>
        <IntroPhotoContainer>
          <img src={IntroPhoto} alt="" />
        </IntroPhotoContainer>
        <p>
          Hey, it's so exciting to have you here! I've been coding for more than
          three years now and it was about time I created a portfolio to show
          what I've been working on. I'm just a fun loving Javascript developer.
          You'll find some of my projects here and see some of the tools I've
          been using to build things. Select from the menu to jump to a specific
          topic or simply keep on scrolling.
        </p>
      </LeftSide>

      <RightSide>
        <h1>Website Content</h1>

        <HeaderContainer>
          <ContentHeaderHolder>
            <span>
              <ArrowRight size={24} weight="bold" color="#3730a3" />
            </span>
            <a href="#projects">Projects</a>
          </ContentHeaderHolder>

          <ContentHeaderHolder>
            <span>
              <ArrowRight size={24} weight="bold" color="#3730a3" />
            </span>
            <a href="#articles">Articles</a>
          </ContentHeaderHolder>

          <ContentHeaderHolder>
            <span>
              <ArrowRight size={24} weight="bold" color="#3730a3" />
            </span>
            <a href="#about">About me</a>
          </ContentHeaderHolder>

          <ContentHeaderHolder>
            <span>
              <ArrowRight size={24} weight="bold" color="#3730a3" />
            </span>
            <a href="#contact">Contact</a>
          </ContentHeaderHolder>
        </HeaderContainer>

        <h1>Stack/tools I've been using</h1>
        <LogosContainer>
          <LogoHolder>
            <img src={javascript} alt="" />
            <span>Javascript</span>
          </LogoHolder>
          <LogoHolder>
            <img src={typescript} alt="" />
            <span>Typescript</span>
          </LogoHolder>
          <LogoHolder>
            <img src={react} alt="" />
            <span>React</span>
          </LogoHolder>
          <LogoHolder>
            <img src={redux} alt="" />
            <span>Redux</span>
          </LogoHolder>
          <LogoHolder>
            <img src={next} alt="" />
            <span>Next.js</span>
          </LogoHolder>
          <LogoHolder>
            <img src={nodejs} alt="" />
            <span>Node.js</span>
          </LogoHolder>
        </LogosContainer>
      </RightSide>
    </IntroContainer>
  );
}
