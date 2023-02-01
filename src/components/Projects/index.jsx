import { useState } from 'react';
import {
  CardHolder,
  ImageContainer,
  ProjectCardsContainer,
  ProjectDescriptionContainer,
  ProjectsContainer,
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
    img: clothing,
    video: '',
    link: 'https://github.com/guirecordon/frontend-eCommerce-level01',
  },
  {
    id: 2,
    title: 'NextJS e-commerce store',
    description: 'Project using Next JS etc',
    img: nextjs,
    video: '',
    link: 'https://github.com/guirecordon/04-ignite-shop',
  },
  {
    id: 3,
    title: 'Coffee delivery shop',
    description: 'Project using react, contextAPI etc',
    img: coffee,
    video: '',
    link: 'https://github.com/guirecordon/02-coffee-delivery',
  },
  {
    id: 4,
    title: 'Github blog',
    description: 'Project using react, contextAPI etc',
    img: blog,
    video: '',
    link: 'https://github.com/guirecordon/github-blog',
  },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(0);

  return (
    <ProjectsContainer>
      <ProjectCardsContainer>
        {data.map((project) => {
          return (
            <CardHolder
              href={`#${project.id}`}
              onClick={() => setSelectedProject(project.id)}
            >
              <img src={project.img} width={128} height={128} alt="" />
              <p>{project.title}</p>
            </CardHolder>
          );
        })}
      </ProjectCardsContainer>

      <ProjectDescriptionContainer>
        <div>
          <h1>My projects</h1>

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
          <p>
            I chose to leave tutorial projects out of this list even though I
            tend to turn tutorial projects into my own, repeating them
            ruthlessly until they become second nature.
          </p>
          <p>
            If you have any suggestions of projects you'd like to see here.
            Please hit me on the contact form below.
          </p>
          <p>Thank you.</p>
          <ImageContainer>
            <img src={profile} alt="" />
          </ImageContainer>
        </div>

        {data.map((project) => {
          return (
            <div id={project.id}>
              <h1>{project.title}</h1>

              <p>{project.description}</p>
            </div>
          );
        })}

        {/* {selectedProject > 0 ? (
          <div>
            <h1>{data[selectedProject - 1].title}</h1>

            <p>{data[selectedProject - 1].description}</p>
          </div>
        ) : (
          <div>
            <h1>My projects</h1>

            <h3>
              This is a list with some of my most recent projects. Select a
              project on the left to see more.
            </h3>

            <p>
              These are all original projects. Some of them I made the design
              myself using Figma. For others, I followed suggested designs and
              project challenges proposed by RocketSeat, which is this amazing
              Brazilian-based coding school that is always on to the next
              coolest thing of the frontend scene.
            </p>
            <p>
              I chose to leave tutorial projects out of this list even though I
              tend to turn tutorial projects into my own, repeating them
              ruthlessly until they become second nature.
            </p>
            <p>
              If you have any suggestions of projects you'd like to see here.
              Please hit me on the contact form below.
            </p>
            <p>Thank you.</p>
            <ImageContainer>
              <img src={profile} alt="" />
            </ImageContainer>
          </div>
        )} */}
      </ProjectDescriptionContainer>
    </ProjectsContainer>
  );
}
