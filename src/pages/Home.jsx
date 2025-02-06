// Home.jsx
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import logo from '../assets/belo_technologies_logo_transparent.png';

const HomeContainer = styled.div`
  width: 100%;
  padding: 0 20px;
  padding-top: 3rem;
  flex: 1;
  display: flex;
  align-items: center;
  background-color: var(--color-background); /* optional, or remove if using global styles */
  color: var(--color-text-primary);          /* optional, or remove if using global styles */
`;

const HomeHero = styled.div`
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
  margin-bottom: 1.5rem;
  line-height: 1.2;
  font-weight: 700;
  color: var(--color-text-primary);
`;

const HeroSubtitle = styled.h2`
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
  font-weight: 500;
  color: var(--color-text-secondary);
`;

const HeroDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 500px;
  margin-bottom: 2rem;
  color: var(--color-text-secondary);
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

function Home() {
  return (
    <HomeContainer>
      <HomeHero>
        <HeroContent>
          <HeroTitle>Belo Technologies</HeroTitle>
          <HeroSubtitle>Software Development</HeroSubtitle>
          <HeroDescription>
            We are a software development company that specializes in web and mobile applications. Checkout our flagship product, Sessions, a social fitness platform for iOS and Android.
          </HeroDescription>
          <ButtonGroup>
            <Link to="/contact">
              <SecondaryButton>Get in Touch</SecondaryButton>
            </Link>
            <Link to="/sessions">
              <CTAButton>Sessions</CTAButton>
            </Link>
          </ButtonGroup>
        </HeroContent>

        <HeroImage>
          <img
            src={logo}
            alt="logo"
          />
        </HeroImage>
      </HomeHero>
    </HomeContainer>
  );
}

export default Home;