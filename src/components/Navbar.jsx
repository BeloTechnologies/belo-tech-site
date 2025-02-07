// Navbar.jsx
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';

// Navbar Container
const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
  background-color: var(--color-surface);
  box-shadow: 0 2px 4px var(--shadow-color);
  width: 100%;
  border-bottom: 1px solid var(--color-border);
  position: relative; /* Important for positioning the mobile menu */
`;

// Brand/Logo
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

// Desktop NavLinks
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

// Hamburger Button (visible only on mobile)
const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: 768px) {
    display: block;
  }
  /* Simple styling for the 3 lines */
  div {
    width: 25px;
    height: 3px;
    background-color: var(--color-primary);
    margin: 5px 0;
    transition: 0.4s;
  }
`;

/* 
  Mobile Menu (shown on hamburger click, hidden otherwise).
  We'll position it absolutely under the navbar.
*/
const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: var(--color-surface);
  position: absolute;
  top: 60px; /* Adjust based on Navbar height */
  right: 5%;
  padding: 1rem;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  box-shadow: 0 2px 4px var(--shadow-color);
  z-index: 999;

  a {
    text-decoration: none;
    color: var(--color-text-secondary);
    font-weight: 500;
    font-size: 1rem;
    transition: all 0.3s ease;
    position: relative;

    &:hover {
      color: var(--color-text-primary);
    }
  }
`;

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <NavbarContainer>
      <NavBrand>
        <Link to="/">Home</Link>
      </NavBrand>

      {/* Desktop Links */}
      <NavLinks>
        <Link to="/sessions">Sessions</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/about">About</Link>
      </NavLinks>

      {/* Hamburger (shown below 768px) */}
      <Hamburger onClick={toggleMobileMenu}>
        <div></div>
        <div></div>
        <div></div>
      </Hamburger>

      {/* Mobile Menu (conditional render) */}
      {mobileOpen && (
        <MobileMenu>
          <Link to="/" onClick={() => setMobileOpen(false)}>
            Home
          </Link>
          <Link to="/sessions" onClick={() => setMobileOpen(false)}>
            Sessions
          </Link>
          <Link to="/contact" onClick={() => setMobileOpen(false)}>
            Contact Us
          </Link>
          <Link to="/about" onClick={() => setMobileOpen(false)}>
            About
          </Link>
        </MobileMenu>
      )}
    </NavbarContainer>
  );
}

export default Navbar;