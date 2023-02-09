import {
  AboutCardHolder,
  AboutCardsContainer,
  AboutContainer,
  AboutDescriptionContainer,
  MainContainer,
} from './styles';

import {
  CardHolder,
  ImageContainer,
  ProjectCardsContainer,
  ProjectDescriptionContainer,
  ProjectsContainer,
} from '../ProjectsShow/styles';

import microverseLogo from '../../assets/About/microverse.png';
import byuLogo from '../../assets/About/byu-logo.svg';
import ucpLogo from '../../assets/About/UCP-Pequena.png';
import ucpBc from '../../assets/About/ucp-bc.jpg';
import byuCampus from '../../assets/About/BYU_baseball.0.webp';

const data = [
  {
    id: '01',
    title: 'Full-time Coding Program',
    description: '1300+ hours of Fullstack pair programming',
    body: [
      'The first stop I made after deciding to move forward with a career change into web development was at Microverse. It is this full-time online program for aspiring developer from the four corners of the world. I learned Javascript to pass the coding challenges and get accepted into the progam',
      'Once I was in, I was group with other three developers. In my case it was me from Rio de Janeiro, Brazil; a former graphical designer from Mexico city; a newly graduated engineer from Lima, Peru; and a former embeded systems engineer from Lagos, Nigeria.',
      "It was quite exciting. We met every morning over Zoom for a standup meeting and every night for a wrap-up meeting. A couple months in, covid restrictions were imposed and the timing couldn't feel more appropriate, really, to be inside and 100% focused on acquiring this new ability with newly made overseas friends.",
      'It was a joy. There was a sense of commitment and of conclusion as each module came to an end.',
      'Pair-programming was the norm. We did React/Redux on the frond-end and Ruby on Rails in the back-end--in spite of popular outcries to go another direction.',
      'I got to become fluent in git and github, got accostumed to having code reviewed, and a number of other in-demand skills.',
    ],
    img: microverseLogo,
    video: '',
    link: 'https://github.com/guirecordon/frontend-eCommerce-level01',
  },
  {
    id: '02',
    title: 'BYU MBA',
    description: 'Marriott School of Business',
    body: [
      "After successfully completing what felt like the opening act of my career, I felt ready to take on the next challenge. A career move was in the makings, but I wasn't quite sure what it was going to be yet. Let alone that it would continue to this day.",
      "My experience at Brigham Young University was nothing short of plain out awesome. It is one of my favorite places on earth. It still makes me nostalgic. Sure, there were the beautiful mountains, the feeling of breathing thin air, the ever present blue skies, the desert summer nights. But it was also so much more. I can't adequately put it into words.",
      'The important thing for us here, though, is that it was at BYU that I took my first ever class in programming. It was an elective Intro to Java class.',
      'The seed had been planted and it was going to swell in due time.',
      'Some of the transferrable skills I acquired over that period of time were: a stronger business acumen, better presentation skills--especially in English, team work was over-emphasized and brought to a whole new level, a stronger sense for personal accountability etc.',
    ],
    img: byuLogo,
    video: '',
    link: 'https://github.com/guirecordon/04-ignite-shop',
  },
  {
    id: '03',
    title: 'Coffee delivery shop',
    description: 'Project using react, contextAPI etc',
    body: [
      'These are all original projects. Some of them I made the design myself using Figma. For others, I followed suggested designs and project challenges proposed by RocketSeat, which is this amazing Brazilian-based Javascript community that is always on to the next coolest thing.',
      'I chose to leave tutorial projects out of this list even though I tend to turn tutorial projects into my own, repeating them ruthlessly until they become second nature.',
      "If you have any suggestions of projects you'd like to see here. Please hit me on the contact form below.",
    ],
    img: ucpLogo,
    video: '',
    link: 'https://github.com/guirecordon/02-coffee-delivery',
  },
  {
    id: '04',
    title: 'Github blog',
    description: 'Project using react, contextAPI etc',
    body: [
      'These are all original projects. Some of them I made the design myself using Figma. For others, I followed suggested designs and project challenges proposed by RocketSeat, which is this amazing Brazilian-based Javascript community that is always on to the next coolest thing.',
      'I chose to leave tutorial projects out of this list even though I tend to turn tutorial projects into my own, repeating them ruthlessly until they become second nature.',
      "If you have any suggestions of projects you'd like to see here. Please hit me on the contact form below.",
    ],
    img: byuCampus,
    video: '',
    link: 'https://github.com/guirecordon/github-blog',
  },
];

export function About() {
  return (
    <AboutContainer>
      <h1>About me</h1>

      <MainContainer>
        <AboutCardsContainer>
          {data.map((project) => {
            return (
              <AboutCardHolder href={`#${project.id}`}>
                <img src={project.img} width={128} height={128} alt="" />
                <p>{project.title}</p>
              </AboutCardHolder>
            );
          })}
        </AboutCardsContainer>

        <AboutDescriptionContainer>
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
          </div>

          {data.map((project) => {
            return (
              <div id={project.id}>
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
              </div>
            );
          })}
        </AboutDescriptionContainer>
      </MainContainer>
    </AboutContainer>
  );
}
