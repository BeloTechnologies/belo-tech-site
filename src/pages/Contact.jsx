// Contact.jsx
import styled from 'styled-components';

const ContactContainer = styled.div`
  min-height: calc(100vh - 60px); /* Adjust if you have a navbar/header */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem;
  background-color: var(--color-background);
  color: var(--color-text-primary);
`;

const ContactCard = styled.div`
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  box-shadow: 0 2px 4px var(--shadow-color);
  border-radius: 8px;
  width: 90%;            /* Fill about 90% of parent width */
  max-width: 1200px;     /* Keep it from getting too wide */
  padding: 2rem;
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
`;

const ContactTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
  color: var(--color-text-primary);
`;

const ContactSubtitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: var(--color-text-secondary);
  text-align: center;
`;

const ContactContent = styled.div`
  line-height: 1.6;
  font-size: 1rem;
  color: var(--color-text-secondary);
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const EmailLink = styled.a`
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 600;
  &:hover {
    color: var(--color-primary-hover);
  }
`;

export default function Contact() {
  return (
    <ContactContainer>
      <ContactCard>
        <ContactTitle>Contact Us</ContactTitle>
        <ContactSubtitle>We’d love to hear from you</ContactSubtitle>
        <ContactContent>
          <p>
            If you have any questions or concerns, please reach out to:
            <br />
            <EmailLink href="mailto:TurnerNaef@belotech.net">
              TurnerNaef@belotech.net
            </EmailLink>
          </p>
        </ContactContent>
      </ContactCard>
    </ContactContainer>
  );
}