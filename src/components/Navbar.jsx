// Navbar.jsx
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import logo from '../assets/belo_technologies_logo_transparent.png';

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
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease;
`;

// Brand/Logo
const NavBrand = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  a {
    display: flex;
    align-items: center;
    color: var(--color-primary);
    text-decoration: none;
    transition: color 0.3s ease;
    font-weight: 800;
    &:hover {
      color: var(--color-primary-hover);
    }
  }
  
  img {
    height: 30px;
    width: auto;
    margin-right: 0.5rem;
  }
`;

// Desktop NavLinks
const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.active ? 'var(--color-primary)' : 'var(--color-text-secondary)'};
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  position: relative;
  padding: 0.5rem 0;

  &:hover {
    color: var(--color-text-primary);
  }

  &:after {
    content: '';
    position: absolute;
    width: ${props => props.active ? '100%' : '0'};
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: var(--color-primary);
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: 100%;
  }
`;

// Hamburger Button (visible only on mobile)
const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: 768px) {
    display: block;
  }
  
  div {
    width: 25px;
    height: 3px;
    background-color: var(--color-primary);
    margin: 5px 0;
    transition: 0.4s;
    
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(-45deg) translate(-5px, 6px)' : 'rotate(0)'};
    }
    
    &:nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
    }
    
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(45deg) translate(-5px, -6px)' : 'rotate(0)'};
    }
  }
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: var(--color-surface);
  position: absolute;
  top: 60px;
  right: 0;
  left: 0;
  padding: 1rem 2rem;
  border-bottom: 1px solid var(--color-border);
  box-shadow: 0 4px 6px var(--shadow-color);
  z-index: 999;
  transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(-100%)'};
  opacity: ${({ open }) => open ? '1' : '0'};
  transition: all 0.3s ease;
  pointer-events: ${({ open }) => open ? 'all' : 'none'};
`;

const MobileNavLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.active ? 'var(--color-primary)' : 'var(--color-text-secondary)'};
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.3s ease;
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--color-border);
  
  &:last-child {
    border-bottom: none;
  }

  &:hover {
    color: var(--color-primary);
    padding-left: 0.5rem;
  }
`;

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  const toggleMobileMenu = () => {
    setMobileOpen((prev) => !prev);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when changing routes
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <NavbarContainer style={{ 
      padding: scrolled ? '0.7rem 5%' : '1rem 5%',
      boxShadow: scrolled ? '0 4px 10px rgba(0, 0, 0, 0.1)' : '0 2px 4px var(--shadow-color)'
    }}>
      <NavBrand>
        <Link to="/">
          <img src={logo} alt="Belo Technologies Logo" />
          <span>Belo</span>
        </Link>
      </NavBrand>

      {/* Desktop Links */}
      <NavLinks>
        <NavLink to="/" active={isActive('/')}>
          Home
        </NavLink>
        <NavLink to="/sessions" active={isActive('/sessions')}>
          Sessions
        </NavLink>
        <NavLink to="/contact" active={isActive('/contact')}>
          Contact Us
        </NavLink>
        <NavLink to="/about" active={isActive('/about')}>
          About
        </NavLink>
      </NavLinks>

      {/* Hamburger (shown below 768px) */}
      <Hamburger onClick={toggleMobileMenu} open={mobileOpen}>
        <div></div>
        <div></div>
        <div></div>
      </Hamburger>

      {/* Mobile Menu */}
      <MobileMenu open={mobileOpen}>
        <MobileNavLink to="/" active={isActive('/')}>
          Home
        </MobileNavLink>
        <MobileNavLink to="/sessions" active={isActive('/sessions')}>
          Sessions
        </MobileNavLink>
        <MobileNavLink to="/contact" active={isActive('/contact')}>
          Contact Us
        </MobileNavLink>
        <MobileNavLink to="/about" active={isActive('/about')}>
          About
        </MobileNavLink>
      </MobileMenu>
    </NavbarContainer>
  );
}

export default Navbar;