import {
  ContactContainer,
  ImageContainer,
  MainContainer,
  SocialBar,
} from './styles';
import contactPhoto from '../../assets/gui-recordon.jpg';

import { LinkedinLogo, GithubLogo, TwitterLogo } from 'phosphor-react';

export function Contact() {
  return (
    <ContactContainer>
      <h1 id="contact">Contact Form</h1>

      <MainContainer>
        <form
          action="https://formsubmit.co/f2822ab5a826cb13cef201c2400bd809"
          method="POST"
        >
          <label for="name">your name</label>
          <input type="text" name="name" placeholder="name" required />
          <label for="email">your email</label>
          <input
            type="email"
            name="email"
            placeholder="name@email.com"
            required
          />
          <textarea rows={12} name="message" required></textarea>
          <button type="submit">Send</button>
        </form>

        <ImageContainer>
          <SocialBar>
            <ul>
              <li>
                <a
                  href="https://github.com/guirecordon"
                  target="_blank"
                  title="github"
                >
                  <GithubLogo size={32} weight="bold" color="#84cc16" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/gui-recordon-react-developer/"
                  target="_blank"
                  title="linkedin"
                >
                  <LinkedinLogo size={32} weight="bold" color="#84cc16" />
                </a>
              </li>
              <li>
                <a href="" target="_blank" title="twitter">
                  <TwitterLogo size={32} weight="bold" color="#84cc16" />
                </a>
              </li>
            </ul>
          </SocialBar>
          <img src={contactPhoto} alt="" />
        </ImageContainer>
      </MainContainer>
    </ContactContainer>
  );
}
