import React from 'react';
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileLink } from './NavbarStyledComponent';
import { DiCssdeck } from 'react-icons/di';
import { FaBars, FaSun, FaMoon } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { useTheme } from 'styled-components';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    console.log(darkMode);
  }

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <Nav darkMode={darkMode}>
      <NavbarContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: isOpen ? "black" : darkMode ? "white" : "black", marginBottom: '20px', cursor: 'pointer' }}>
            <DiCssdeck size="3rem" /> <Span style={{ fontSize: '1.5rem', marginLeft: '0.5rem' }}>Shivam</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={toggleMobileMenu} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {darkMode ? <FaSun style={{ fontSize: '2rem', marginRight: '0.5rem', color: theme.text_primary, cursor: 'pointer' }} onClick={toggleTheme} /> : <FaMoon style={{ fontSize: '2rem', marginRight: '0.5rem', color: theme.text_primary, cursor: 'pointer' }} onClick={toggleTheme} />}
          </div>
        </NavItems>

        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>
        </ButtonContainer>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={toggleMobileMenu}>About</MobileLink>
            <MobileLink href='#skills' onClick={toggleMobileMenu}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={toggleMobileMenu}>Experience</MobileLink>
            <MobileLink href='#projects' onClick={toggleMobileMenu}>Projects</MobileLink>
            <MobileLink href='#education' onClick={toggleMobileMenu}>Education</MobileLink>
            <GitHubButton style={{ padding: '10px 16px', background: `${theme.primary}`, color: 'white', width: 'max-content' }} href={Bio.github} target="_blank">Github Profile</GitHubButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar;
