import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
  background-color: var(--color-surface);
  box-shadow: 0 2px 4px var(--shadow-color);
  width: 100%;
  border-bottom: 1px solid var(--color-border);
`;

const NavBrand = styled.div`
  font-size: 1.2rem;
  
  a {
    color: var(--color-primary);
    text-decoration: none;
    transition: color 0.3s ease;
    font-weight: 800;
    
    &:hover {
      color: var(--color-primary-hover);
    }
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: none;
  }
  
  a {
    text-decoration: none;
    color: var(--color-text-secondary);
    font-weight: 500;
    font-size: 0.9rem;
    transition: all 0.3s ease;
    position: relative;

    &:hover {
      color: var(--color-text-primary);
    }

    &:after {
      content: '';
      position: absolute;
      width: 0;
      height: 1px;
      bottom: -3px;
      left: 0;
      background-color: var(--color-primary);
      transition: width 0.3s ease;
    }

    &:hover:after {
      width: 100%;
    }
  }
`;

function Navbar() {
  return (
    <NavbarContainer>
      <NavBrand>
        <Link to="/">Home</Link>
      </NavBrand>
      <NavLinks>
        <Link to="/sessions">
          Sessions
        </Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/about">About</Link>
      </NavLinks>
    </NavbarContainer>
  );
}

export default Navbar;