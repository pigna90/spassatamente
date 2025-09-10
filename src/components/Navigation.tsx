import React, { useState } from 'react';

export const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close menu after clicking
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navigation">
      <button 
        className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="#home" className="active" onClick={(e) => scrollToSection(e, 'home')}>Home</a></li>
        <li><a href="#episodes-section" onClick={(e) => scrollToSection(e, 'episodes-section')}>Episodi</a></li>
        <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>Chi Siamo</a></li>
        <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contatti</a></li>
      </ul>
    </nav>
  );
}; 