import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; // Importing social media icons

function Footer() {
  const footerStyles = {
    backgroundColor: "#1a202c", // Dark background for footer
    color: "white",
    padding: "2rem 0",
    textAlign: "center",
    position: "relative",
    bottom: "0",
    width: "100%",
    fontFamily: "'Poppins', sans-serif",
  };

  const iconContainerStyles = {
    marginTop: "1rem",
    display: "flex",
    justifyContent: "center",
    gap: "1.5rem",
  };

  const iconStyles = {
    fontSize: "1.8rem",
    color: "#edf2f7", // Light gray color for icons
    transition: "color 0.3s ease",
  };

  const iconHoverStyles = {
    color: "#4f46e5", // Blue color on hover
  };

  return (
    <footer style={footerStyles}>
      <p>&copy; 2024 Pasindya Chavindee. All rights reserved.</p>
      
      <div style={iconContainerStyles}>
        <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
          <FaLinkedin
            style={iconStyles}
            onMouseEnter={(e) => e.target.style.color = "#4f46e5"}
            onMouseLeave={(e) => e.target.style.color = "#edf2f7"}
          />
        </a>
        
        <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
          <FaGithub
            style={iconStyles}
            onMouseEnter={(e) => e.target.style.color = "#4f46e5"}
            onMouseLeave={(e) => e.target.style.color = "#edf2f7"}
          />
        </a>
        
        <a href="mailto:someone@example.com">
          <FaEnvelope
            style={iconStyles}
            onMouseEnter={(e) => e.target.style.color = "#4f46e5"}
            onMouseLeave={(e) => e.target.style.color = "#edf2f7"}
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
