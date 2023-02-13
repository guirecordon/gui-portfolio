import {
  CardHolder,
  GithubLink,
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
      'I built this project as the first of a series of complete eCommerce websites. The idea is that all of the projects, including this one, will be a complete solution to webcommerce, including the backend. I began with the most basic React structures and appendices I knew to, then, move on to more advanced tools and solutions. So, let me go over each one of them:',
      'CSS with styled-components: Athough, stlyled-components is already one layer up on the scale of simplicity in CSS, I decided to start with it because it offers almost the same experience as writing basic CSS, but with the advantage of better html structure and visualization.',
      'Advanced React file structure: I applied advanced best practices to file structure, including dividing the files into pages, components, each component into their equivalent index and style files. I also applied varying themes and global styles to the project.',
      'Context API: I used the built-in React Context API functionality to manage the global state of the shopping cart.',
      'graphQL and Headless CMS: Since this was a frontend project, I decided to use a headless CMS tool for the database. I went with graphCMS (which now has been rebranded as Hygraph), that I already knew from using it in other projects. Being quite familiar with SQL, I find it particularly straightfoward to use graphQL API instead of REST APIs. It might sound like a more complex decision for a project that I\'m naming "basic", but, again, because I already knew SQL, I was able to reduce the learning curve and take advantage of a simpler, faster query data fetching.',
      "Figma: I used Figma to create my own design. The objective here wasn't so much to shine my designing skills, but to practice using Figma efficiently as a React developer. I divided each component inside of Figma thus laying out the basic struture of my React project. ",
      'Deployment: I chose to use Netfly as it is probably the most effortless tool out there to deploy a React app.',
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

                <GithubLink href={project.link} target="_blank">
                  Visit repository on Github
                </GithubLink>
              </ProjectTextHolder>
            );
          })}
        </ProjectDescriptionContainer>
      </MainPage>
    </ProjectsContainer>
  );
}
