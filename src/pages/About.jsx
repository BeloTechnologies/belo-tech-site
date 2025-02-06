// About.jsx
import styled from 'styled-components';

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

export default function About() {
  return (
    <AboutContainer>
      <AboutCard>
        <AboutTitle>About Sessions</AboutTitle>
        <AboutSubtitle>Your Community for Fitness and Growth</AboutSubtitle>
        <AboutContent>
          <p>
            At Sessions, we believe in the power of community to transform
            individual fitness journeys. Whether you&apos;re lifting weights for the
            first time or a seasoned pro, our platform helps you stay consistent
            and connect with like-minded individuals.
          </p>
          <p>
            Share workout logs, celebrate milestones, and motivate each other to
            keep going. We&apos;re continuously working to add new features—like 
            progress tracking, personalized workout plans, and more—to ensure you
            have all the tools you need to reach your goals.
          </p>
          <p>
            Thank you for being a part of the Sessions community!
          </p>
        </AboutContent>
      </AboutCard>
    </AboutContainer>
  );
}