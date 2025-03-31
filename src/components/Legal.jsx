// Legal.jsx
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LegalContainer = styled.div`
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

const LegalCard = styled.div`
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  box-shadow: 0 2px 4px var(--shadow-color);
  border-radius: 8px;
  width: 100%;
  padding: 2rem;
  margin-top: 2rem;
`;

const LegalTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
  color: var(--color-text-primary);
`;

const LegalSubtitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: var(--color-text-secondary);
  text-align: center;
`;

const LegalContent = styled.div`
  line-height: 1.6;
  font-size: 1rem;
  color: var(--color-text-secondary);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const LegalLink = styled(Link)`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: var(--color-surface);
  color: var(--color-primary);
  border: 1px solid var(--color-primary);
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease;
  width: 100%;
  max-width: 300px;
  text-align: center;
  
  &:hover {
    background-color: var(--color-primary);
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const LegalDescription = styled.p`
  margin-bottom: 2rem;
  text-align: center;
  max-width: 600px;
`;

export default function Legal() {
  return (
    <LegalContainer>
      <LegalCard>
        <LegalTitle>Legal Information</LegalTitle>
        <LegalSubtitle>Important documents about using Sessions</LegalSubtitle>
        
        <LegalContent>
          <LegalDescription>
            We believe in transparency. Please review our Privacy Policy and Terms of Service to understand
            how we protect your data and the rules for using our platform.
          </LegalDescription>
          
          <LegalLink to="/sessions/privacy-policy">
            Privacy Policy
          </LegalLink>
          
          <LegalLink to="/sessions/terms">
            Terms of Service
          </LegalLink>
        </LegalContent>
      </LegalCard>
    </LegalContainer>
  );
}