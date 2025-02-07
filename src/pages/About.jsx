// About.jsx
import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import Paragraph from '../ConstantStyles';

const AboutContainer = styled.div`
  min-height: calc(100vh - 60px); /* Adjust if you have a navbar or header */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem;
  background-color: var(--color-background);
  color: var(--color-text-primary);
`;

const AboutCard = styled.div`
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  box-shadow: 0 2px 4px var(--shadow-color);
  border-radius: 8px;
  width: 90%;           /* Fill about 90% of parent width */
  max-width: 1200px;    /* Keep it from getting too wide */
  padding: 2rem;
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
`;

const AboutTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
  color: var(--color-text-primary);
`;

const AboutSubtitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: var(--color-text-secondary);
  text-align: center;
`;

const AboutContent = styled.div`
  line-height: 1.6;
  font-size: 1rem;
  color: var(--color-text-secondary);
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

/* New: Social Icon Container & Link styles */
const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  color: var(--color-text-secondary);
  font-size: 1.8rem;
  transition: color 0.3s ease;

  &:hover {
    color: var(--color-primary);
  }
`;

export default function About() {
  return (
    <AboutContainer>
      <AboutCard>
        <AboutTitle>About Belo Technologies</AboutTitle>
        <AboutSubtitle>Software Development</AboutSubtitle>
        <AboutContent>
          <Paragraph>
            Belo Technologies is a software development company dedicated to creating innovative and impactful software solutions.
            We specialize in developing cutting-edge applications that bring value to users and drive meaningful engagement.
          </Paragraph>
          <Paragraph>
            Our flagship project, Sessions, is a social media fitness and fitness tracking app for iOS and Android. Designed
            and developed entirely in-house, Sessions empowers users to connect, track their progress, and stay motivated
            on their fitness journeys.
          </Paragraph>
          <Paragraph>
            At Belo Technologies, we are passionate about building technology that inspires and transforms how people live,
            work, and connect. Follow us to stay updated on our journey and upcoming projects!
          </Paragraph>

          {/* Social icon links */}
          <SocialLinks>
            {/* Replace # with your real GitHub/LinkedIn profiles */}
            <SocialLink
              href="https://github.com/BeloTechnologies"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/company/belo-technologies"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </SocialLink>
          </SocialLinks>
        </AboutContent>
      </AboutCard>
    </AboutContainer>
  );
}