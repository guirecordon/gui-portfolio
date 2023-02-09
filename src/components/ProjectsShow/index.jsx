import { useState } from 'react';
import {
  CardHolder,
  ImageContainer,
  MainPage,
  ProjectCardsContainer,
  ProjectDescriptionContainer,
  ProjectsContainer,
  ProjectTextHolder,
} from './styles';

import clothing from '../../assets/Projects/clothing-store.png';
import nextjs from '../../assets/Projects/next-js.png';
import coffee from '../../assets/Projects/coffee-delivery.png';
import blog from '../../assets/Projects/blog.png';

import profile from '../../assets/profile.png';

const data = [
  {
    id: 1,
    title: 'Clothing e-commerce store',
    description: 'Project using react, contextAPI etc',
    body: [
      'These are all original projects. Some of them I made the design myself using Figma. For others, I followed suggested designs and project challenges proposed by RocketSeat, which is this amazing Brazilian-based Javascript community that is always on to the next coolest thing.',
      'I chose to leave tutorial projects out of this list.',
      "If you have any suggestions of projects you'd like to see here. Please hit me on the contact form below.",
    ],
    img: clothing,
    video: '',
    link: 'https://github.com/guirecordon/frontend-eCommerce-level01',
  },
  {
    id: 2,
    title: 'NextJS e-commerce store',
    description: 'Project using Next JS etc',
    body: [
      'These are all original projects, some of which I made the design myself using Figma. For others, I followed suggested designs and project challenges proposed by RocketSeat, which is this amazing Brazilian-based Javascript community that is always on to the next coolest thing.',
      'I chose to leave tutorial projects out of this list.',
      "If you have any suggestions of projects you'd like to see here. Please hit me on the contact form below.",
    ],
    img: nextjs,
    video: '',
    link: 'https://github.com/guirecordon/04-ignite-shop',
  },
  {
    id: 3,
    title: 'Coffee delivery shop',
    description: 'Project using react, contextAPI etc',
    body: [
      'These are all original projects. Some of them I made the design myself using Figma. For others, I followed suggested designs and project challenges proposed by RocketSeat, which is this amazing Brazilian-based Javascript community that is always on to the next coolest thing.',
      'I chose to leave tutorial projects out of this list even though I tend to turn tutorial projects into my own, repeating them ruthlessly until they become second nature.',
      "If you have any suggestions of projects you'd like to see here. Please hit me on the contact form below.",
    ],
    img: coffee,
    video: '',
    link: 'https://github.com/guirecordon/02-coffee-delivery',
  },
  {
    id: 4,
    title: 'Github blog',
    description: 'Project using react, contextAPI etc',
    body: [
      'These are all original projects. Some of them I made the design myself using Figma. For others, I followed suggested designs and project challenges proposed by RocketSeat, which is this amazing Brazilian-based Javascript community that is always on to the next coolest thing.',
      'I chose to leave tutorial projects out of this list even though I tend to turn tutorial projects into my own, repeating them ruthlessly until they become second nature.',
      "If you have any suggestions of projects you'd like to see here. Please hit me on the contact form below.",
    ],
    img: blog,
    video: '',
    link: 'https://github.com/guirecordon/github-blog',
  },
];

export function ProjectsShow() {
  return (
    <ProjectsContainer>
      <h1 id="projects">My projects</h1>

      <MainPage>
        <ProjectCardsContainer>
          {data.map((project) => {
            return (
              <CardHolder href={`#${project.id}`}>
                <img src={project.img} width={128} height={128} alt="" />
                <p>{project.title}</p>
              </CardHolder>
            );
          })}
        </ProjectCardsContainer>

        <ProjectDescriptionContainer>
          <ProjectTextHolder>
            <h3>
              This is a list with some of my most recent projects. Select a
              project on the left to see more.
            </h3>

            <p>
              These are all original projects. Some of them I made the design
              myself using Figma. For others, I followed suggested designs and
              project challenges proposed by RocketSeat, which is this amazing
              Brazilian-based Javascript community that is always on to the next
              coolest thing.
            </p>
            <p>I chose to leave tutorial projects out of this list.</p>
            <p>
              If you have any suggestions of projects you'd like to see here.
              Please hit me on the contact form below.
            </p>
            <p>Thank you.</p>
            <ImageContainer>
              <img src={profile} alt="" />
            </ImageContainer>
          </ProjectTextHolder>

          {data.map((project) => {
            return (
              <ProjectTextHolder id={project.id}>
                <h1>{project.title}</h1>

                <p>{project.description}</p>

                <video
                  width="360"
                  height="240"
                  src="http://java2s.com/style/demo/your.webm"
                  controls
                  preload="none"
                  poster="http://java2s.com/style/download.png"
                >
                  Video cannot be displayed
                </video>

                {project.body.map((paragraph) => (
                  <p>{paragraph}</p>
                ))}
              </ProjectTextHolder>
            );
          })}
        </ProjectDescriptionContainer>
      </MainPage>
    </ProjectsContainer>
  );
}
