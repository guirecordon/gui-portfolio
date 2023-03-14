import {
  AboutCardHolder,
  AboutCardsContainer,
  AboutContainer,
  AboutDescriptionContainer,
  AboutImageContainer,
  AboutSectionContainer,
  MainContainer,
} from './styles';

import microverseLogo from '../../assets/About/microverse.png';
import byuLogo from '../../assets/About/byu-logo.svg';
import ucpLogo from '../../assets/About/UCP-Pequena.png';
import ucpBc from '../../assets/About/ucp-bc.jpg';
import byuCampus from '../../assets/About/BYU_baseball.0.webp';
import cefetLogo from '../../assets/About/cefet-logo.png';
import cefetCampus from '../../assets/About/cefet-fachada.jpg';
import woodpeckers from '../../assets/About/woodpeckers.png';

import useMediaQuery from '../../hooks/usehooks';

const data = [
  {
    id: '01',
    title: 'Full-time Coding Program',
    description: '1300+ hours of Fullstack pair programming',
    body: [
      'The first stop I made after deciding to move forward with a career change into web development was at Microverse. It is a full-time online program for aspiring developers from all over the world. I learned Javascript to pass the coding challenges and get accepted into the program.',
      'Once I was in, I joined a team with three other developers. In my case, it was me from Rio de Janeiro, Brazil; a former graphical designer from Mexico City; a newly graduated engineer from Lima, Peru; and a former embedded systems engineer from Lagos, Nigeria.',
      "It was rather exciting. We met every morning over Zoom for a standup meeting and every night for a wrap-up meeting. A couple of months in, covid hit, and the timing couldn't feel more appropriate to be inside all day, every day, and 100% focused on acquiring these new abilities with newly made international friends.",
      'It was a blast! There was a sense of commitment and of conclusion as each module ended.',
      'Pair programming was the norm. We did React/Redux on the front end and Ruby on Rails in the back end--despite unceasing requests to go another direction.',
      'I became fluent in git and GitHub, got accustomed to having code reviewed, and developed other in-demand skills that I believe have prepared me for my first job in development.',
    ],
    img: microverseLogo,
    video: '',
    link: woodpeckers,
  },
  {
    id: '02',
    title: 'BYU MBA',
    description: 'Marriott School of Business',
    body: [
      "I can't adequately describe how good it was to go to BYU. A career move was in the making, although I wasn't sure what it would be. Let alone that it would continue to this day.",
      'My experience at Brigham Young University was nothing short of incredible. It is one of my favorite places on earth. Sure, there were the beautiful mountains, the feeling of breathing thin air, the ever-present blue skies, and the desert summer nights. But it was also so much more.',
      'The important thing for us here, though, is that it was at BYU that I took my first-ever class in programming. It was an Intro to Java elective. That class planted the seed that was going to sprout in due time.',
      'Some of the transferrable skills I acquired over that time were strong business acumen; better presentation skills; teamwork--as it was over-emphasized and brought to a whole new level; a strong sense of personal accountability; the experience of working in the United States; exposure to different cultures; the list goes on and on.',
    ],
    img: byuLogo,
    video: '',
    link: byuCampus,
  },
  {
    id: '03',
    title: 'Catholic University of Petropolis',
    description: 'Business School - Undergraduate Degree',
    body: [
      "My undergraduate degree was in business. At the time, my eyes weren't open to opportunities in technology yet. It wasn't until I moved to Utah years later that I witnessed the emergence of the so-called Silicon slopes in Utah Valley. Then I would begin to realize the greatness of opportunities in this industry.",
      'Despite the career change that would later take place and bring me to where I am today, I feel satisfied with the educational and professional decisions I made then. I took real advantage of it. I got to participate in important international projects. I worked for a French multinational that would send me to France for yearly conferences, and I got to learn the language. It was nothing short of a lot of fun and learning.',
      'One key competence I learned during that stage of my life was people skills. Establishing relationships with different stakeholders was paramount. Things such as building expectations, and staying true to commitments and goals.',
      'As I look back, I see how foundational it was for me to have those experiences. I feel like I can transfer these skills to my current position as a software developer and become something more, such as an active team player that understands the nuances of daily corporate challenges.',
    ],
    img: ucpLogo,
    video: '',
    link: ucpBc,
  },
  {
    id: '04',
    title: 'Federal Institute of Technology - Rio de Janeiro',
    description: 'Computer Engineering Undergraduate Program',
    body: [
      "More recently, I took the Brazilian national admittance exam for higher education, which is not easy, especially for someone who'd been out of school for so long and got accepted into the Federal Institute of Technology to study computer engineering.",
      'However, a few months in, after carefully studying the syllabus of all semesters, I realized there was a gap between what the market was asking for and what academia was teaching. Of course, they had some super fun classes that I could look forward to, but with my focus on Javascript, really, everything that I wanted and needed to use in the marketplace, I would have to learn on my own.',
      'So, already having an undergraduate and a graduate degree under my belt, I decided to drop out of the Computer Engineering school and continue with my self-learning approach to computer science.',
      "I know this topic splits opinions a little bit, but I think it was the right decision for me. Plus, it was eye-opening to witness the state of affairs of computer science education. I still consider the possibility of returning for a master's in computer science, but when I do, I want to go in for a more specific technology focus.",
    ],
    img: cefetLogo,
    video: '',
    link: cefetCampus,
  },
];

export function About() {
  const matches = useMediaQuery('(max-width: 600px)');

  return (
    <AboutContainer>
      <h1 id="about">About me</h1>

      <MainContainer>
        {matches ? (
          <>
            <AboutDescriptionContainer>
              <AboutSectionContainer>
                <h1>How I got here</h1>

                <h3>My software development story.</h3>

                <p>
                  I was a quality assurance analyst, or I had been, on and off
                  for a long time--both in the aerospace industry and, more
                  recently, in the software development industry. Not the same
                  creature, but like chickens to dinosaurs, you know, distant
                  descendants.
                </p>
                <p>
                  At the beginning of 2020, I began my journey toward making a
                  career change into software development. Since then, I've
                  participated in a full-time international coding program; I
                  have completed various online courses and developed in
                  Javascript, Ruby on Rails, and Python. I have also taken a job
                  as a Quality Assurance analyst, thus springboarding my first
                  experience within the industry.
                </p>
                <p>
                  I finally concluded that I needed to finish the transition I
                  had started in 2020. After a short sabbatical, I returned to
                  building projects with Javascript, so here I am, in 2023, to
                  showcase them.
                </p>

                <p>
                  Please select an option at the left to read a little about
                  some of the experiences I've had. I'll be honest, as I was
                  putting this together, it was challenging to draw a straight
                  line between my past experiences. So, I didn't try to. I
                  decided to embrace my career journey in all its complexity.
                  I've always been a learner, and that's my biggest ambition.
                </p>
                <p>
                  It's been an exciting time for me to learn development, and
                  whether you're a recruiter or a fellow developer, I hope we
                  can connect and share this exciting time.
                </p>
                <p>Thank you.</p>
              </AboutSectionContainer>

              {data.map((project) => {
                return (
                  <AboutSectionContainer id={project.id}>
                    <h1>{project.title}</h1>

                    <p>{project.description}</p>

                    <AboutImageContainer>
                      <img src={project.link} alt="" />
                    </AboutImageContainer>

                    {project.body.map((paragraph) => (
                      <p>{paragraph}</p>
                    ))}
                  </AboutSectionContainer>
                );
              })}
            </AboutDescriptionContainer>
          </>
        ) : (
          <>
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
              <AboutSectionContainer>
                <h1>How I got here</h1>

                <h3>My software development story.</h3>

                <p>
                  I was a quality assurance analyst, or I had been, on and off
                  for a long time--both in the aerospace industry and, more
                  recently, in the software development industry. Not the same
                  creature, but like chickens to dinosaurs, you know, distant
                  descendants.
                </p>
                <p>
                  At the beginning of 2020, I began my journey toward making a
                  career change into software development. Since then, I've
                  participated in a full-time international coding program; I
                  have completed various online courses and developed in
                  Javascript, Ruby on Rails, and Python. I have also taken a job
                  as a Quality Assurance analyst, thus springboarding my first
                  experience within the industry.
                </p>
                <p>
                  I finally concluded that I needed to finish the transition I
                  had started in 2020. After a short sabbatical, I returned to
                  building projects with Javascript, so here I am, in 2023, to
                  showcase them.
                </p>

                <p>
                  Please select an option at the left to read a little about
                  some of the experiences I've had. I'll be honest, as I was
                  putting this together, it was challenging to draw a straight
                  line between my past experiences. So, I didn't try to. I
                  decided to embrace my career journey in all its complexity.
                  I've always been a learner, and that's my biggest ambition.
                </p>
                <p>
                  It's been an exciting time for me to learn development, and
                  whether you're a recruiter or a fellow developer, I hope we
                  can connect and share this exciting time.
                </p>
                <p>Thank you.</p>
              </AboutSectionContainer>

              {data.map((project) => {
                return (
                  <AboutSectionContainer id={project.id}>
                    <h1>{project.title}</h1>

                    <p>{project.description}</p>

                    <AboutImageContainer>
                      <img src={project.link} alt="" />
                    </AboutImageContainer>

                    {project.body.map((paragraph) => (
                      <p>{paragraph}</p>
                    ))}
                  </AboutSectionContainer>
                );
              })}
            </AboutDescriptionContainer>
          </>
        )}
      </MainContainer>
    </AboutContainer>
  );
}
