// Privacy.jsx
import styled from 'styled-components';

import Paragraph from '../ConstantStyles';

const PrivacyContainer = styled.div`
  min-height: calc(100vh - 60px); /* Adjust if you have a navbar or header of height 60px */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem;
  padding-left: 5%;
  padding-right: 5%;
  background-color: var(--color-background);
  color: var(--color-text-primary);
`;

const PrivacyCard = styled.div`
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  box-shadow: 0 2px 4px var(--shadow-color);
  border-radius: 8px;
  width: 100%;
  padding: 2rem;
  margin-top: 2rem;
`;

const PrivacyTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
  color: var(--color-text-primary);
`;

const PrivacySubtitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: var(--color-text-secondary);
  text-align: center;
`;

const PrivacyContent = styled.div`
  line-height: 1.6;
  font-size: 1rem;
  color: var(--color-text-secondary);
`;

export default function Privacy() {
  return (
    <PrivacyContainer>
      <PrivacyCard>
        <PrivacyTitle>Privacy Policy</PrivacyTitle>
        <PrivacySubtitle>We value your privacy and security</PrivacySubtitle>
        <PrivacyContent>
          <Paragraph>
            Welcome to our Privacy Policy page. We’re committed to safeguarding
            your personal data and ensuring a secure and user-friendly
            experience. Please check back soon for full details on how we
            collect, use, and protect your information.
          </Paragraph>
          <Paragraph>
            In the meantime, if you have any questions, feel free to reach out
            to our team at any time. Your trust is important to us.
          </Paragraph>
        </PrivacyContent>
      </PrivacyCard>
    </PrivacyContainer>
  );
}