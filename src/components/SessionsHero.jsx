// SessionsHero.jsx
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeroContainer = styled.div`
  width: 100%;
  padding: 0 20px;
  padding-top: 3rem;
  flex: 1;
  display: flex;
  align-items: center;
`;

const Hero = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 2rem 5%;
  }
`;

const HeroContent = styled.div`
  flex: 1;
  max-width: 600px;
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  color: var(--color-text-primary);
  margin-bottom: 1.5rem;
  line-height: 1.2;
  font-weight: 700;
  max-width: 700px;
`;

const HeroDescription = styled.p`
  font-size: 1.1rem;
  color: var(--color-text-secondary);
  margin-bottom: 2rem;
  line-height: 1.6;
  max-width: 500px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
`;

const CTAButton = styled.button`
  padding: 0.8rem 1.6rem;
  font-size: 0.95rem;
  background-color: var(--color-primary);
  color: var(--color-text-primary);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  outline: none;
  position: relative;
  z-index: 1;

  &:focus {
    outline: none;
  }
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 40px;
    background: var(--color-primary);
    left: 0;
    bottom: -8px;
    filter: blur(20px);
    opacity: 0;
    transition: all 0.3s ease;
    z-index: -1;
  }
  &:hover {
    background-color: var(--color-primary-hover);
    transform: translateY(-2px);
    &::after {
      opacity: 0.6;
      transform: translateY(4px);
    }
    .arrow {
      transform: translateX(4px);
    }
  }
`;

const SecondaryButton = styled.button`
  padding: 0.8rem 1.6rem;
  font-size: 0.95rem;
  background-color: transparent;
  color: var(--color-text-primary);
  border: 2px solid var(--color-border);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  outline: none;

  &:focus {
    outline: none;
  }
  &:hover {
    border-color: var(--color-primary);
    color: var(--color-primary);
    transform: translateY(-2px);
  }
`;

const HeroImage = styled.div`
  flex: 1;
  max-width: 600px;

  img {
    width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 4px 6px var(--shadow-color);
    opacity: 0.9;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 1;
    }
  }
`;

function SessionsHero() {
  return (
    <>
      {/* Hero Section */}
      <HeroContainer>
        <Hero>
          <HeroContent>
            <HeroTitle>
              Join a community of committed gym users to grow and learn
            </HeroTitle>
            <HeroDescription>
              Sessions is a gym-focused social media app that allows users to log
              their workouts, connect with friends, and share their fitness journey.
            </HeroDescription>
            <HeroDescription>
              At Sessions it’s not about lifting more weight than the person next
              to you, it is about lifting each other up.
            </HeroDescription>
            <ButtonGroup>
              <Link to="/sessions#faq">
                <SecondaryButton>Learn More</SecondaryButton>
              </Link>
              <Link to="/sessions#preview">
                <CTAButton>
                  Preview
                  <span className="arrow">→</span>
                </CTAButton>
              </Link>
            </ButtonGroup>
          </HeroContent>
          <HeroImage>
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80"
              alt="Hero illustration"
            />
          </HeroImage>
        </Hero>
      </HeroContainer>
    </>
  );
}

export default SessionsHero;