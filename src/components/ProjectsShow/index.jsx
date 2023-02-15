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
      'I built this project as the first of a series of complete eCommerce websites. The idea is that all the projects, including this one, will be a complete solution to web commerce, including the backend. I began with the most basic React structures and appendices I knew with the intention of then moving to more advanced tools and solutions. Let me go over some of them:',
      'CSS with styled components: Although styled components are already one layer up on the scale of simplicity in CSS, I decided to start with it because it offers almost the same experience as writing basic CSS, but with the advantage of better HTML structure and visualization.',
      'Advanced React file structure: I applied advanced best practices to the file structure, including dividing the files into pages and components, each component into their equivalent index and style files. I also applied varying themes and global styles to the project.',
      'Context API: I used the built-in React Context API functionality to manage the global state of the shopping cart.',
      'graphQL and Headless CMS: Since this was a front-end project, I used a headless CMS tool for the database. I went with graphCMS (which now has been rebranded as Hygraph), which I already knew from using it in other projects. Being quite familiar with SQL, I find it remarkbly straightforward to use graphQL API instead of REST APIs. It might sound like a more complex decision for a project that I\'m naming "basic", but, again, because I already knew SQL, I was able to reduce the learning curve and take advantage of a simpler, faster query data fetching.',
      "Figma: I used Figma to create my own design. The objective here wasn't so much to shine my designing skills, but to practice using Figma efficiently as a React developer. I divided each component inside of Figma, thus laying out the basic structure of my React project. ",
      'Deployment: I chose to use Netfly as it is probably one of the most effortless tools out there to deploy a React app.',
    ],
    img: clothing,
    video: 'https://www.loom.com/embed/70f7371d2cd0417091cce4a3d57ebd0f',
    link: 'https://github.com/guirecordon/frontend-eCommerce-level01',
  },
  {
    id: 2,
    title: 'NextJS e-commerce store',
    description: 'Project using Next JS etc',
    body: [
      'The objective of this project was to practice Next JS. I followed a design challenge proposed by Rocketseat. Here are some of the skills I got to practice:',
      'File-system routing.',
      'Stitches for CSS styled-components',
      'CSS global styling.',
      'Lazy loading with next/image',
      'Stripe API for payment of eCommerce products',
      'Data fetching from the Stripe API',
      'SSG - Static Site Generation: I loved being able to use this feature of Next JS to improve loading speed.',
      'Next JS link for routing and navigation.',
      'API routes with Next JS.',
      'Context API for global state management',
    ],
    img: nextjs,
    video: 'https://www.loom.com/embed/3533484f65434954a2b4baab67349e19',
    link: 'https://github.com/guirecordon/04-ignite-shop',
  },
  {
    id: 3,
    title: 'Coffee delivery shop',
    description: 'Project using react, contextAPI etc',
    body: [
      'Coffee Shop is an eCommerce project that uses TypeScript + React.',
      'Just like in the other projects, I applied a global + themes and I used styled components for CSS styling.',
      'I also used React Router DOM for the routing layout and an advanced React page structure layout.',
      'In this project, I also used React hook form and React Context API for global state management.',
    ],
    img: coffee,
    video: 'https://www.loom.com/embed/ea8b63ab17c241eebfe24c9f4935ab5a',
    link: 'https://github.com/guirecordon/02-coffee-delivery',
  },
  {
    id: 4,
    title: 'Github blog',
    description: 'Project using react, contextAPI etc',
    body: [
      'The main objective of this project was to practice HTTP requests by using the Github API.',
      'I used Axios for the HTTP requests.',
    ],
    img: blog,
    video: 'https://www.loom.com/embed/dff0383f3b454535be61f003ff3e6126',
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
              Here is a list of some of my most recent projects. Select a
              project on the left to see more.
            </h3>

            <p>
              These are all original projects. For some of them, I made the
              design myself using Figma. For others, I developed the design
              project challenges proposed by RocketSeat, which is this
              enthusiastic Brazilian-based Javascript community, that is always
              on to the next coolest thing.
            </p>
            <p>I chose to leave tutorial projects out of this list.</p>
            <p>
              If you have suggestions for projects you'd like to see here,
              please hit me on the contact form below.
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

                <div
                  style={{
                    position: 'relative',
                    paddingBottom: '56.25%',
                    height: 0,
                  }}
                >
                  <iframe
                    src={project.video}
                    frameborder="0"
                    webkitallowfullscreen
                    mozallowfullscreen
                    allowfullscreen
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                    }}
                  ></iframe>
                </div>

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
