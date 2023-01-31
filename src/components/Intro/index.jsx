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
import tailwind from '../../assets/StackLogos/tailwind-css-2.svg';
import { ArrowRight } from 'phosphor-react';

export function Intro() {
  return (
    <IntroContainer>
      <LeftSide>
        <IntroPhotoContainer>
          <img src={IntroPhoto} alt="" />
        </IntroPhotoContainer>
        <p>
          I've been coding for roughly three years now with a special focus on
          Javascript and its frontend frameworks. You'll find some of my
          projects here and will be able to see what tools I've been using to
          build things.
        </p>
      </LeftSide>

      <RightSide>
        <h1>Website Content</h1>

        <HeaderContainer>
          <ContentHeaderHolder>
            <span>
              <ArrowRight size={24} weight="bold" color="#3730a3" />
            </span>
            <a href="#">Projects</a>
          </ContentHeaderHolder>

          <ContentHeaderHolder>
            <span>
              <ArrowRight size={24} weight="bold" color="#3730a3" />
            </span>
            <a href="#">Articles</a>
          </ContentHeaderHolder>

          <ContentHeaderHolder>
            <span>
              <ArrowRight size={24} weight="bold" color="#3730a3" />
            </span>
            <a href="#">About me</a>
          </ContentHeaderHolder>

          <ContentHeaderHolder>
            <span>
              <ArrowRight size={24} weight="bold" color="#3730a3" />
            </span>
            <a href="#">Contact</a>
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
            <span>Next</span>
          </LogoHolder>
          <LogoHolder>
            <img src={tailwind} alt="" />
            <span>Tailwind</span>
          </LogoHolder>
        </LogosContainer>
      </RightSide>
    </IntroContainer>
  );
}
