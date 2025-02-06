import styled from "styled-components";

import screenshot1 from '../assets/screenshot1.png'
import screenshot2 from '../assets/screenshot2.png'
import screenshot3 from '../assets/screenshot3.png'

/* 
  Screenshot Section Styles
*/
const ScreenshotsSection = styled.section`
  max-width: 1400px;
  margin: 3rem auto;
  padding: 0 5%;
`;

const ScreenshotsTitle = styled.h2`
  font-size: 2rem;
  color: var(--color-text-primary);
  margin-bottom: 1rem;
  text-align: center;
`;

const ScreenshotsDescription = styled.p`
  font-size: 1rem;
  color: var(--color-text-secondary);
  margin-bottom: 2rem;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.5;
`;

const ScreenshotGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
`;

const Screenshot = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px var(--shadow-color);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.04);
  }
`;


export default function SessionsPreview() {
  return (
    <>


    {/* Screenshots Section */}
    <ScreenshotsSection>
        <ScreenshotsTitle>Preview the App</ScreenshotsTitle>
        <ScreenshotsDescription>
          Here are some early snapshots of our interface, showcasing
          workout logging, community feeds, and more.
        </ScreenshotsDescription>
        <ScreenshotGrid>
          <Screenshot
            src={screenshot1}
            alt="Screenshot 1"
          />
          <Screenshot
            src={screenshot2}
            alt="Screenshot 2"
          />
          <Screenshot
            src={screenshot3}
            alt="Screenshot 2"
          />
        </ScreenshotGrid>
      </ScreenshotsSection>
    </>
  );
}