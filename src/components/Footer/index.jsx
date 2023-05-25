import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaUniversity } from 'react-icons/fa';


const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-container">
          <p>&copy; {new Date().getFullYear()} Kyrylo Rybalko</p>
          <div className="social-icons">
            <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:kay-dev-uk@gmail.com">
              <FaEnvelope />
            </a>
            <a href="mailto:kay-dev-uk@gmail.com">
              <FaUniversity />
            </a>
          </div>
        </div>
      </footer>
    );
  };

export default Footer
