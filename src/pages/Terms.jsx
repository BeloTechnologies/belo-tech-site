// Terms.jsx
import { useState } from 'react';
import styled from 'styled-components';
import Paragraph from '../ConstantStyles';

const TermsContainer = styled.div`
  min-height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem;
  background-color: var(--color-background);
  color: var(--color-text-primary);
`;

const TermsCard = styled.div`
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  box-shadow: 0 2px 4px var(--shadow-color);
  border-radius: 8px;
  width: 90%;
  max-width: 1200px;
  padding: 2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  margin-left: auto;
  margin-right: auto;
`;

const TermsTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
  color: var(--color-text-primary);
`;

const TermsDate = styled.p`
  font-size: 0.9rem;
  text-align: center;
  color: var(--color-text-secondary);
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.4rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: var(--color-text-primary);
`;

const TermsContent = styled.div`
  line-height: 1.6;
  font-size: 1rem;
  color: var(--color-text-secondary);
  max-width: 800px;
  margin: 0 auto;
`;

const TableOfContents = styled.div`
  margin: 1.5rem 0;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.03);
  border-radius: 8px;
`;

const TOCTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: var(--color-text-primary);
`;

const TOCList = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

const TOCItem = styled.li`
  margin-bottom: 0.5rem;
  cursor: pointer;
  color: var(--color-primary);
  
  &:hover {
    text-decoration: underline;
  }
`;

const BulletList = styled.ul`
  margin-left: 1.5rem;
  margin-bottom: 1rem;
`;

const BulletItem = styled.li`
  margin-bottom: 0.5rem;
`;

const SubBulletList = styled.ul`
  margin-left: 1.5rem;
  margin-top: 0.5rem;
`;

const SubBulletItem = styled.li`
  margin-bottom: 0.5rem;
  list-style-type: circle;
`;

export default function Terms() {
  const [ setActiveSection] = useState(null);
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <TermsContainer>
      <TermsCard>
        <TermsTitle>Terms of Service</TermsTitle>
        <TermsDate>Last Updated: March 31, 2025</TermsDate>
        
        <TermsContent>
          <Paragraph>
          Welcome to Sessions, a fitness social media platform designed for weightlifting and fitness enthusiasts to log, track, and share their daily workouts with friends. 
          By accessing or using our app, website, or services (collectively, the &quot;Service&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). 
          If you do not agree to these Terms, please do not use the Service.
          </Paragraph>
          
          <TableOfContents>
            <TOCTitle>Table of Contents</TOCTitle>
            <TOCList>
              <TOCItem onClick={() => scrollToSection('acceptance')}>1. Acceptance of Terms</TOCItem>
              <TOCItem onClick={() => scrollToSection('account')}>2. Account Registration and Use</TOCItem>
              <TOCItem onClick={() => scrollToSection('features')}>3. Features of the Service</TOCItem>
              <TOCItem onClick={() => scrollToSection('content')}>4. User Content</TOCItem>
              <TOCItem onClick={() => scrollToSection('conduct')}>5. Conduct and Community Guidelines</TOCItem>
              <TOCItem onClick={() => scrollToSection('privacy')}>6. Privacy</TOCItem>
              <TOCItem onClick={() => scrollToSection('ip')}>7. Intellectual Property</TOCItem>
              <TOCItem onClick={() => scrollToSection('disclaimer')}>8. Health and Fitness Disclaimer</TOCItem>
              <TOCItem onClick={() => scrollToSection('termination')}>9. Termination</TOCItem>
              <TOCItem onClick={() => scrollToSection('liability')}>10. Limitation of Liability</TOCItem>
              <TOCItem onClick={() => scrollToSection('indemnification')}>11. Indemnification</TOCItem>
              <TOCItem onClick={() => scrollToSection('governing')}>12. Governing Law</TOCItem>
              <TOCItem onClick={() => scrollToSection('changes')}>13. Changes to the Service</TOCItem>
              <TOCItem onClick={() => scrollToSection('contact')}>14. Contact Us</TOCItem>
            </TOCList>
          </TableOfContents>
          
          <SectionTitle id="acceptance">1. Acceptance of Terms</SectionTitle>
          <Paragraph>
            By creating an account or using the Service, you confirm that you are at least 13 years old 
            (or the minimum age required in your jurisdiction to use online services without parental 
            consent) and agree to comply with these Terms. These Terms may be updated periodically, 
            and we will notify you of significant changes. Your continued use of the Service after 
            updates constitutes acceptance of the revised Terms.
          </Paragraph>
          
          <SectionTitle id="account">2. Account Registration and Use</SectionTitle>
          <BulletList>
            <BulletItem>
              <strong>Eligibility:</strong> You must provide accurate and complete information when creating an 
              account. You are responsible for maintaining the confidentiality of your login 
              credentials and for all activities under your account.
            </BulletItem>
            <BulletItem>
              <strong>Account Security:</strong> Notify us immediately at accountsupport@belotech.net if you 
              suspect unauthorized use of your account. You may not share your account with 
              others or allow others to access it.
            </BulletItem>
            <BulletItem>
              <strong>Termination:</strong> We reserve the right to suspend or terminate your account at our 
              discretion, including for violations of these Terms.
            </BulletItem>
          </BulletList>
          
          <SectionTitle id="features">3. Features of the Service</SectionTitle>
          <BulletList>
            <BulletItem>
              <strong>Workout Logging and Sharing:</strong> You may log your weightlifting workouts (e.g., 
              exercises, sets, reps, weights) and share them with friends or other users you 
              follow.
            </BulletItem>
            <BulletItem>
              <strong>Social Interaction:</strong> You can follow other users, comment on their posts, and 
              engage with their content, subject to these Terms.
            </BulletItem>
            <BulletItem>
              <strong>Blocking Users:</strong> You may block other users to prevent them from viewing your 
              profile or interacting with you. Blocked users will not be notified of the block.
            </BulletItem>
            <BulletItem>
              <strong>Reporting System:</strong> You may report content or users that violate these Terms using 
              our in-app reporting feature. We will review reports and take action as appropriate.
            </BulletItem>
          </BulletList>
          
          <SectionTitle id="content">4. User Content</SectionTitle>
          <BulletList>
            <BulletItem>
              <strong>Ownership:</strong> You retain ownership of the content you post (e.g., workout logs, 
              photos, comments, or other materials) (&quot;User Content&quot;). By posting User Content, 
              you grant us a worldwide, non-exclusive, royalty-free, sublicensable, and 
              transferable license to use, reproduce, distribute, display, and perform your User 
              Content in connection with operating and promoting the Service.
            </BulletItem>
            <BulletItem>
              <strong>Responsibility:</strong> You are solely responsible for your User Content and the 
              consequences of posting it. We do not endorse or verify the accuracy of User 
              Content.
            </BulletItem>
            <BulletItem>
              <strong>Content Restrictions:</strong> You agree not to post User Content that:
              <SubBulletList>
                <SubBulletItem>Is unlawful, harassing, defamatory, abusive, threatening, or obscene;</SubBulletItem>
                <SubBulletItem>Promotes violence, discrimination, or harm to any person or group;</SubBulletItem>
                <SubBulletItem>Contains nudity, explicit sexual content, or graphic violence;</SubBulletItem>
                <SubBulletItem>Infringes on any third-party rights (e.g., copyright, trademark, privacy);</SubBulletItem>
                <SubBulletItem>Includes false or misleading information about workouts, health, or fitness;</SubBulletItem>
                <SubBulletItem>Advertises or solicits commercial goods/services without our prior written consent.</SubBulletItem>
              </SubBulletList>
            </BulletItem>
            <BulletItem>
              <strong>Removal:</strong> We may remove or restrict access to User Content that violates these 
              Terms or applicable laws, at our sole discretion.
            </BulletItem>
          </BulletList>
          
          <SectionTitle id="conduct">5. Conduct and Community Guidelines</SectionTitle>
          <BulletList>
            <BulletItem>
              <strong>Respectful Interaction:</strong> Treat other users with respect. Harassment, bullying, or 
              abusive behavior will not be tolerated.
            </BulletItem>
            <BulletItem>
              <strong>No Misuse:</strong> Do not use the Service to spam, scam, or engage in any activity that 
              disrupts the experience of other users.
            </BulletItem>
            <BulletItem>
              <strong>Reporting Violations:</strong> Use the reporting system to flag inappropriate content or 
              behavior. Do not abuse the reporting system with false reports.
            </BulletItem>
          </BulletList>
          
          <SectionTitle id="privacy">6. Privacy</SectionTitle>
          <Paragraph>
            Your use of the Service is also governed by our <a href="https://belotech.net/sessions/privacy-policy">Privacy Policy</a>, which explains 
            how we collect, use, and protect your personal information.
          </Paragraph>
          
          <SectionTitle id="ip">7. Intellectual Property</SectionTitle>
          <BulletList>
            <BulletItem>
              <strong>Our Rights:</strong> The Service, including its design, features, and branding, is owned by 
              Belo Technologies LLC and protected by copyright, trademark, and other laws.
            </BulletItem>
            <BulletItem>
              <strong>Your Rights:</strong> You may not copy, modify, distribute, or reverse-engineer any part of 
              the Service without our written permission.
            </BulletItem>
          </BulletList>
          
          <SectionTitle id="disclaimer">8. Health and Fitness Disclaimer</SectionTitle>
          <BulletList>
            <BulletItem>
              <strong>General Information:</strong> The Service provides tools for logging and sharing workouts 
              but does not offer professional medical, fitness, or nutritional advice. Content 
              shared by users or provided by us is for informational purposes only.
            </BulletItem>
            <BulletItem>
              <strong>Assumption of Risk:</strong> Weightlifting and exercise involve inherent risks of injury. 
              You assume all risks associated with your use of the Service and any workouts you 
              perform. Consult a healthcare professional before starting any fitness program.
            </BulletItem>
            <BulletItem>
              <strong>No Liability:</strong> We are not liable for any injuries, damages, or losses resulting from 
              your reliance on information or workouts shared through the Service.
            </BulletItem>
          </BulletList>
          
          <SectionTitle id="termination">9. Termination</SectionTitle>
          <BulletList>
            <BulletItem>
              <strong>By You:</strong> You may delete your account at any time through the app settings.
            </BulletItem>
            <BulletItem>
              <strong>By Us:</strong> We may suspend or terminate your access to the Service for violations of 
              these Terms, illegal activity, or at our sole discretion, with or without notice.
            </BulletItem>
          </BulletList>
          
          <SectionTitle id="liability">10. Limitation of Liability</SectionTitle>
          <Paragraph>
            To the fullest extent permitted by law, Belo Technologies LLC, its affiliates, and employees 
            will not be liable for any indirect, incidental, consequential, or punitive damages arising 
            from your use of the Service, including but not limited to injuries, data loss, or loss of 
            profits.
          </Paragraph>
          
          <SectionTitle id="indemnification">11. Indemnification</SectionTitle>
          <Paragraph>
            You agree to indemnify and hold Belo Technologies LLC harmless from any claims, damages, or 
            expenses (including legal fees) arising from your use of the Service, your User Content, or 
            your violation of these Terms.
          </Paragraph>
          
          <SectionTitle id="governing">12. Governing Law</SectionTitle>
          <Paragraph>
            These Terms are governed by the laws of the State of Colorado, without regard to conflict of 
            law principles. Any disputes arising out of or related to these Terms or the Service will be 
            resolved exclusively in the state courts located in Denver, Colorado, or, if applicable, in 
            the federal courts of the United States located in the District of Colorado. You agree to 
            submit to the personal jurisdiction of these courts for the purpose of litigating any such 
            disputes.
          </Paragraph>
          
          <SectionTitle id="changes">13. Changes to the Service</SectionTitle>
          <Paragraph>
            We may modify, suspend, or discontinue any part of the Service at any time without notice or 
            liability.
          </Paragraph>
          
          <SectionTitle id="contact">14. Contact Us</SectionTitle>
          <Paragraph>
            For questions about these Terms, contact us at accountsupport@belotech.net
          </Paragraph>
        </TermsContent>
      </TermsCard>
    </TermsContainer>
  );
}