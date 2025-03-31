// PrivacyPolicy.jsx
import { useState } from 'react';
import styled from 'styled-components';
import Paragraph from '../ConstantStyles';

const PrivacyContainer = styled.div`
  min-height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem;
  background-color: var(--color-background);
  color: var(--color-text-primary);
`;

const PrivacyCard = styled.div`
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

const PrivacyTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
  color: var(--color-text-primary);
`;

const PrivacyDate = styled.p`
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

const PrivacyContent = styled.div`
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

export default function PrivacyPolicy() {
  const [ setActiveSection] = useState(null);
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <PrivacyContainer>
      <PrivacyCard>
        <PrivacyTitle>Privacy Policy</PrivacyTitle>
        <PrivacyDate>Last Updated: March 31, 2025</PrivacyDate>
        
        <PrivacyContent>
          <Paragraph>
            At Sessions, we take your privacy seriously. This Privacy Policy explains how we collect, use, 
            disclose, and safeguard your information when you use our fitness social media platform, 
            available as a mobile application (the &quot;Service&quot;). 
            Please read this Privacy Policy carefully. By using the Service, you consent to the practices 
            described in this policy.
          </Paragraph>
          
          <TableOfContents>
            <TOCTitle>Table of Contents</TOCTitle>
            <TOCList>
              <TOCItem onClick={() => scrollToSection('information')}>1. Information We Collect</TOCItem>
              <TOCItem onClick={() => scrollToSection('use')}>2. How We Use Your Information</TOCItem>
              <TOCItem onClick={() => scrollToSection('sharing')}>3. Sharing Your Information</TOCItem>
              <TOCItem onClick={() => scrollToSection('storage')}>4. Data Storage and Security</TOCItem>
              <TOCItem onClick={() => scrollToSection('choices')}>5. Your Privacy Choices</TOCItem>
              <TOCItem onClick={() => scrollToSection('children')}>6. Children&apos;s Privacy</TOCItem>
              <TOCItem onClick={() => scrollToSection('updates')}>7. Updates to This Policy</TOCItem>
              <TOCItem onClick={() => scrollToSection('california')}>8. California Privacy Rights</TOCItem>
              <TOCItem onClick={() => scrollToSection('international')}>9. International Users</TOCItem>
              <TOCItem onClick={() => scrollToSection('contact')}>10. Contact Us</TOCItem>
            </TOCList>
          </TableOfContents>
          
          <SectionTitle id="information">1. Information We Collect</SectionTitle>
          <Paragraph>
            We collect several types of information from and about users of our Service:
          </Paragraph>
          <BulletList>
            <BulletItem>
              <strong>Personal Information:</strong> When you create an account, we collect information 
              such as your name, email address, username, password, and profile picture. You may also 
              choose to provide additional information such as your location (not tracked or required, entered as a text string and unverified)
            </BulletItem>
            <BulletItem>
              <strong>Fitness Data:</strong> We collect information about your workouts, including 
              exercises performed, sets, reps, weights, duration, and any other fitness metrics you 
              choose to track.
            </BulletItem>
            <BulletItem>
              <strong>User Content:</strong> We collect content you create, upload, or share on the 
              Service, including photos, comments, messages, and interactions with other users.
            </BulletItem>
            <BulletItem>
              <strong>Usage Information:</strong> We automatically collect information about your 
              interactions with the Service, including the pages or screens you view, the time spent 
              on those pages, navigation paths, and features you use.
            </BulletItem>
            <BulletItem>
              <strong>Device Information:</strong> We collect information about the device you use to 
              access the Service, including device type, operating system, and unique device identifiers.
            </BulletItem>
          </BulletList>
          
          <SectionTitle id="use">2. How We Use Your Information</SectionTitle>
          <Paragraph>
            We use the information we collect for various purposes, including:
          </Paragraph>
          <BulletList>
            <BulletItem>
              <strong>Providing the Service:</strong> To create and maintain your account, display your 
              workout data, enable social features, and provide customer support.
            </BulletItem>
            <BulletItem>
              <strong>Personalization:</strong> To personalize your experience, recommend content, and 
              suggest connections with other users.
            </BulletItem>
            <BulletItem>
              <strong>Communication:</strong> To send you service-related notifications and updates.
            </BulletItem>
            <BulletItem>
              <strong>Analytics:</strong> To analyze usage patterns, troubleshoot technical issues, and 
              improve the Service.
            </BulletItem>
            <BulletItem>
              <strong>Safety and Security:</strong> To verify accounts, prevent fraud, enforce our Terms 
              of Service, and protect the safety of our users.
            </BulletItem>
          </BulletList>
          
          <SectionTitle id="sharing">3. Sharing Your Information</SectionTitle>
          <Paragraph>
            We may share your information in the following circumstances:
          </Paragraph>
          <BulletList>
            <BulletItem>
              <strong>With Other Users:</strong> Your profile information, workout data, and content you 
              post will be visible to other users according to your privacy settings. By default, your 
              profile is visible to all users, but you can adjust these settings.
            </BulletItem>
            <BulletItem>
              <strong>Service Providers:</strong> We may share information with third-party vendors, 
              consultants, and service providers who perform services on our behalf, such as hosting, 
              data analytics, customer service, and marketing.
            </BulletItem>
            <BulletItem>
              <strong>Business Transfers:</strong> If Belo Technologies LLC is involved in a merger, 
              acquisition, or sale of assets, your information may be transferred as part of that transaction.
            </BulletItem>
            <BulletItem>
              <strong>Legal Requirements:</strong> We may disclose your information if required by law, 
              such as in response to a court order, subpoena, or government request.
            </BulletItem>
            <BulletItem>
              <strong>Protection of Rights:</strong> We may share information to protect the rights, 
              property, and safety of Belo Technologies LLC, our users, or others.
            </BulletItem>
            <BulletItem>
              <strong>With Your Consent:</strong> We may share information with third parties when you 
              give us explicit consent to do so.
            </BulletItem>
          </BulletList>
          <Paragraph>
            We do not sell your personal information to third parties for monetary compensation.
          </Paragraph>
          
          <SectionTitle id="storage">4. Data Storage and Security</SectionTitle>
          <BulletList>
            <BulletItem>
              <strong>Data Security:</strong> We implement appropriate technical and organizational 
              measures to protect your information from unauthorized access, loss, or alteration. 
              However, no method of transmission over the Internet or electronic storage is 100% secure.
            </BulletItem>
            <BulletItem>
              <strong>Data Retention:</strong> We retain your information for as long as your account 
              is active or as needed to provide you with the Service. We may retain certain information 
              even after you delete your account as required by law or for legitimate business purposes.
            </BulletItem>
          </BulletList>
          
          <SectionTitle id="choices">5. Your Privacy Choices</SectionTitle>
          <BulletList>
            <BulletItem>
              <strong>Account Information:</strong> You can update your account information and privacy 
              settings through the app settings. You can delete your account at any time through the Service settings.
            </BulletItem>
            <BulletItem>
              <strong>Cookies and Tracking:</strong> Most web browsers are set to accept cookies by 
              default. You can usually adjust your browser settings to remove or reject cookies, but 
              this may affect certain features of the Service.
            </BulletItem>
          </BulletList>
          
          <SectionTitle id="children">6. Children&apos;s Privacy</SectionTitle>
          <Paragraph>
            The Service is not intended for children under 13 years of age. We do not knowingly collect 
            personal information from children under 13. If you are a parent or guardian and believe 
            that your child has provided us with personal information, please contact us immediately 
            at accountsupport@belotech.net.
          </Paragraph>
          
          <SectionTitle id="updates">7. Updates to This Policy</SectionTitle>
          <Paragraph>
            We may update this Privacy Policy from time to time to reflect changes in our practices or 
            for other operational, legal, or regulatory reasons. We will notify you of any material 
            changes by posting the updated Privacy Policy on this page and updating the &quot;Last Updated&quot; 
            date. Your continued use of the Service after such modifications constitutes your 
            acknowledgment and acceptance of the modified policy.
          </Paragraph>
          
          <SectionTitle id="california">8. California Privacy Rights</SectionTitle>
          <Paragraph>
            If you are a California resident, you have certain rights regarding your personal information 
            under the California Consumer Privacy Act (CCPA), including:
          </Paragraph>
          <BulletList>
            <BulletItem>The right to know what personal information we collect about you</BulletItem>
            <BulletItem>The right to request deletion of your personal information</BulletItem>
            <BulletItem>The right to opt out of the sale of your personal information</BulletItem>
            <BulletItem>The right to non-discrimination for exercising your privacy rights</BulletItem>
          </BulletList>
          <Paragraph>
            To exercise these rights, please contact us at accountsupport@belotech.net.
          </Paragraph>
          
          <SectionTitle id="international">9. International Users</SectionTitle>
          <Paragraph>
            The Service is operated in the United States. If you are located outside of the United States, 
            please be aware that information we collect will be transferred to, processed, and stored in 
            the United States. By using the Service, you consent to this transfer, processing, and storage 
            of your information in the United States, where privacy laws may be different from those in 
            your country of residence.
          </Paragraph>
          
          <SectionTitle id="contact">10. Contact Us</SectionTitle>
          <Paragraph>
            If you have any questions or concerns about this Privacy Policy or our privacy practices, 
            please contact us at:
          </Paragraph>
          <Paragraph>
            Email: accountsupport@belotech.net
          </Paragraph>
          <Paragraph>
            Belo Technologies LLC<br />
            Boulder, Colorado
          </Paragraph>
        </PrivacyContent>
      </PrivacyCard>
    </PrivacyContainer>
  );
}