// FAQ.jsx
import styled from 'styled-components';
import { useState } from 'react';

const FAQContainer = styled.div`
  min-height: calc(100vh - 60px); /* Adjust if you have a fixed header/nav */
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
`;

const FAQTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
  color: var(--color-text-primary);
`;

const FAQSubtitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: var(--color-text-secondary);
  text-align: center;
`;

const FAQList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const QuestionItem = styled.li`
  margin-bottom: 1.5rem;
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 1rem;
  transition: border-color 0.3s ease;

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

const Question = styled.button`
  width: 100%;
  text-align: left;
  background-color: transparent;
  border: none;
  color: var(--color-text-primary);
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  cursor: pointer;
  position: relative;
  transition: color 0.2s ease;
  padding: 0;
  outline: none;

  &:hover {
    color: var(--color-primary-hover);
  }

  &::after {
    content: '+';
    position: absolute;
    right: 0;
    font-size: 1.2rem;
    transition: transform 0.3s ease;
  }

  &[data-open='true']::after {
    content: '-';
    transform: rotate(180deg);
  }

  &:focus,
  &:active,
  &:focus-visible {
    outline: none !important;
    box-shadow: none !important;
  }
`;

const Answer = styled.p`
  line-height: 1.6;
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  max-height: ${({ open }) => (open ? '200px' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease;
  margin: 0; 
  padding: ${({ open }) => (open ? '0.5rem 0' : '0')};
`;

export default function FAQ() {
  // Sample questions/answers
  const faqData = [
    {
      question: 'What is Sessions?',
      answer:
        'Sessions is a gym-focused social media app that allows users to log their workouts, connect with friends, and share their fitness journey. At Sessions it not about lifting more weight than the person next to you, it is about lifting each other up.',
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
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <FAQContainer>
      <FAQCard>
        <FAQTitle>Frequently Asked Questions</FAQTitle>
        <FAQSubtitle>Everything you need to know</FAQSubtitle>
        <FAQList>
          {faqData.map((item, index) => (
            <QuestionItem key={index}>
              <Question
                onClick={() => handleToggle(index)}
                data-open={index === openIndex}
              >
                {item.question}
              </Question>
              <Answer open={index === openIndex}>{item.answer}</Answer>
            </QuestionItem>
          ))}
        </FAQList>
      </FAQCard>
    </FAQContainer>
  );
}