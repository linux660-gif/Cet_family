import React, { useState, useEffect } from 'react';
import { FaBell, FaCog, FaSun, FaMoon, FaUser } from 'react-icons/fa';


function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-theme');
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.navbar-collapse')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg ${hasScrolled ? 'navbar-scrolled' : ''} ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="container">
        <a className="navbar-brand" href="/">
          CET FAMILY
        </a>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/ministries" target='_blank'>
                Ministries
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/committees" target='_blank'>
                Committees
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about" target='_blank'>
                About
              </a>
            </li>
          </ul>

          <div className="navbar-actions">
            <button className="theme-toggle" onClick={toggleDarkMode}>
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </button>
            
            <button className="notification-btn">
              <FaBell />
              <span className="notification-badge">3</span>
            </button>
            
            <button className="settings-btn">
              <FaCog />
            </button>
            
            <div className="auth-buttons">
              <a href="/login" className="btn btn-primary">
                Log in
              </a>
              <a href="/signup" className="btn btn-outline">
                Sign Up
              </a>
            </div>
            
            <div className="user-dropdown">
              <button className="user-btn">
                <FaUser />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;