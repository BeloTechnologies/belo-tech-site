// Sessions.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import SessionsHero from '../components/SessionsHero';
import FAQ from '../components/FAQ';
import SessionsPreview from '../components/SessionsPreview';
import Legal from '../components/Legal';

// Styled components for better layout
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--color-background);
`;

const Section = styled.section`
  position: relative;
  
  &:not(:first-child)::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    max-width: 1200px;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      var(--color-border),
      transparent
    );
    opacity: 0.6;
  }
`;

const SectionContent = styled.div`
  padding: ${props => props.noPadding ? '0' : '2rem 0'};
  width: 100%;
`;

function Sessions() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Scroll to top when navigating to this page without a hash
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <PageContainer>
      <Section id="hero">
        <SectionContent noPadding>
          <SessionsHero />
        </SectionContent>
      </Section>

      <Section id="preview">
        <SectionContent>
          <SessionsPreview />
        </SectionContent>
      </Section>

      <Section id="faq">
        <SectionContent>
          <FAQ />
        </SectionContent>
      </Section>

      <Section id="legal">
        <SectionContent>
          <Legal />
        </SectionContent>
      </Section>
    </PageContainer>
  );
}

export default Sessions;