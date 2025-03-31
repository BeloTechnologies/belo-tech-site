// FAQ.jsx
import styled from 'styled-components';
import { useState } from 'react';

const FAQContainer = styled.div`
  min-height: calc(100vh - 60px);
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

const FAQCard = styled.div`
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  box-shadow: 0 2px 4px var(--shadow-color);
  border-radius: 8px;
  width: 100%;
  padding: 2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const FAQTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
  color: var(--color-text-primary);
`;

const FAQSubtitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: var(--color-text-secondary);
  text-align: center;
`;

const FAQList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  max-width: 800px;
  margin: 0 auto;
`;

const QuestionItem = styled.li`
  margin-bottom: 1rem;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  
  &:hover {
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
  }
  
  &[data-open="true"] {
    border-color: var(--color-primary);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const Question = styled.button`
  width: 100%;
  text-align: left;
  background-color: ${({ isOpen }) => isOpen ? 'rgba(var(--color-primary-rgb), 0.05)' : 'transparent'};
  border: none;
  color: ${({ isOpen }) => isOpen ? 'var(--color-primary)' : 'var(--color-text-primary)'};
  font-size: 1.1rem;
  font-weight: 600;
  padding: 1rem 1.5rem;
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease;
  outline: none;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    color: var(--color-primary);
  }

  &:focus,
  &:active,
  &:focus-visible {
    outline: none;
    box-shadow: none;
  }
`;

const IconContainer = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  transform: ${({ isOpen }) => isOpen ? 'rotate(45deg)' : 'rotate(0)'};
  font-size: 1.5rem;
  line-height: 1;
  margin-left: 0.5rem;
`;

const Answer = styled.div`
  line-height: 1.6;
  font-size: 1rem;
  color: var(--color-text-secondary);
  max-height: ${({ isOpen }) => (isOpen ? '500px' : '0')};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  padding: ${({ isOpen }) => (isOpen ? '0 1.5rem 1.5rem' : '0 1.5rem')};
`;

const CategoryTabs = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const CategoryTab = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${({ isActive }) => isActive ? 'var(--color-primary)' : 'transparent'};
  color: ${({ isActive }) => isActive ? 'white' : 'var(--color-text-secondary)'};
  border: 1px solid ${({ isActive }) => isActive ? 'var(--color-primary)' : 'var(--color-border)'};
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${({ isActive }) => isActive ? 'var(--color-primary)' : 'rgba(var(--color-primary-rgb), 0.1)'};
    border-color: var(--color-primary);
  }
`;

export default function FAQ() {
  // Sample questions/answers organized by category
  const faqData = {
    general: [
      {
        question: 'What is Sessions?',
        answer:
          'Sessions is a gym-focused social media app that allows users to log their workouts, connect with friends, and share their fitness journey. At Sessions it\'s not about lifting more weight than the person next to you, it\'s about lifting each other up.',
      },
      {
        question: 'How do I install the app?',
        answer:
          'We are currently going through internal beta testing for iOS and Android. A waiting list for the larger beta and more information will be available soon.',
      },
      {
        question: 'What is a Session?',
        answer:
          'A Session is a workout log that you can create and share with your friends. You can log your exercises, sets, reps, and weight, and even add media like photos or notes about your workout.',
      },
      {
        question: 'Is the app free?',
        answer:
          'Yes! Sessions is completely free to install and use. For performance analysis and insights, premium features may be offered via subscription in the future.',
      },
    ],
    features: [
      {
        question: 'Can I track my progress over time?',
        answer:
          'Absolutely! Sessions allows you to view your workout history and track your progress over time. You can see how your weights, reps, and sets have changed for each exercise.',
      },
      {
        question: 'Can I follow my friends\' workouts?',
        answer:
          'Yes, Sessions is built around the social aspect of fitness. You can follow your friends, see their workouts in your feed, and interact with their content through likes and comments.',
      },
      {
        question: 'Is there a way to find workout inspiration?',
        answer:
          'Sessions has a discover feature that allows you to explore workouts from other users. You can also save workouts you like for future reference.',
      },
      {
        question: 'Can I customize my profile?',
        answer:
          'Yes, you can customize your profile with a photo, general location, and other personal information. You can also set privacy preferences to control who can see your workouts and profile information.',
      },
    ],
    account: [
      {
        question: 'How do I create an account?',
        answer:
          'Once the app is available, you can download it from the App Store or Google Play Store and follow the sign-up process. You\'ll need to provide basic information like your email address and create a password.',
      },
      {
        question: 'Can I delete my account?',
        answer:
          'Yes, you can delete your account at any time through the app settings. This will permanently remove all your data from our servers.',
      },
      {
        question: 'Is my data secure?',
        answer:
          'We take data security very seriously. All data is stored securely. You can review our Privacy Policy for more details on how we handle your information.',
      },
    ],
  };

  const [openIndex, setOpenIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState('general');

  const handleToggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  const categories = {
    general: 'General',
    features: 'Features',
    account: 'Account',
  };

  return (
    <FAQContainer>
      <FAQCard>
        <FAQTitle>Frequently Asked Questions</FAQTitle>
        <FAQSubtitle>Everything you need to know about Sessions</FAQSubtitle>
        
        <CategoryTabs>
          {Object.entries(categories).map(([key, label]) => (
            <CategoryTab 
              key={key} 
              isActive={activeCategory === key}
              onClick={() => {
                setActiveCategory(key);
                setOpenIndex(null);
              }}
            >
              {label}
            </CategoryTab>
          ))}
        </CategoryTabs>
        
        <FAQList>
          {faqData[activeCategory].map((item, index) => (
            <QuestionItem key={index} data-open={index === openIndex}>
              <Question
                onClick={() => handleToggle(index)}
                isOpen={index === openIndex}
              >
                {item.question}
                <IconContainer isOpen={index === openIndex}>+</IconContainer>
              </Question>
              <Answer isOpen={index === openIndex}>{item.answer}</Answer>
            </QuestionItem>
          ))}
        </FAQList>
      </FAQCard>
    </FAQContainer>
  );
}