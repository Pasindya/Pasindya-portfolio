import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle window resizing for mobile menu toggle
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navStyles = {
    background: "linear-gradient(to right, #6a11cb, #2575fc)", // Modern gradient background
    padding: "1rem 2rem",
    position: "fixed",
    width: "100%",
    top: 0,
    zIndex: 1000,
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Subtle shadow for depth
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    transition: "all 0.3s ease",
  };

  const logoStyles = {
    color: "white",
    fontSize: "1.8rem",
    fontWeight: "600",
    cursor: "pointer",
    letterSpacing: "2px",
    textTransform: "uppercase",
    transition: "color 0.3s ease",
  };

  const menuToggleStyles = {
    display: "none",
    fontSize: "2rem",
    color: "white",
    cursor: "pointer",
    transition: "color 0.3s ease",
  };

  const ulStyles = {
    display: "flex",
    listStyle: "none",
    margin: 0,
    padding: 0,
    alignItems: "center",
    justifyContent: "center", // Center the links horizontally
    flex: 1, // Allow the links to take up the available space
  };

  const linkStyles = {
    color: "white",
    margin: "0 1rem",
    textDecoration: "none",
    fontSize: "1.1rem",
    fontWeight: "600",
    position: "relative",
    transition: "color 0.3s ease, transform 0.3s ease", // Smooth transition
  };

  const linkHoverStyles = {
    color: "#ffd700", // Gold color for hover effect
    transform: "scale(1.1)", // Slight zoom effect on hover
  };

  const activeLinkStyles = {
    textDecoration: "underline",
    textUnderlineOffset: "6px",
    color: "#ffd700", // Gold color for active link
  };

  const mobileMenuStyles = {
    flexDirection: "column",
    backgroundColor: "#6a11cb",
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    padding: "1rem",
    borderTop: "1px solid rgba(255, 255, 255, 0.3)",
    display: isMenuOpen ? "flex" : "none",
    alignItems: "center",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav style={navStyles}>
      {/* Logo */}
      <h1
        style={logoStyles}
        onClick={() => window.scrollTo(0, 0)} // Scroll to top on click
      >
        Pasindya's Portfolio
      </h1>

      {/* Hamburger Icon for Mobile View */}
      <span
        style={{
          ...menuToggleStyles,
          display: isMobile ? "block" : "none",
        }}
        onClick={toggleMenu}
      >
        {isMenuOpen ? "✖" : "☰"}
      </span>

      {/* Navigation Links */}
      <ul style={isMobile ? { ...ulStyles, ...mobileMenuStyles } : ulStyles}>
        {["AboutMe", "Skills", "Education", "Projects", "Contact"].map(
          (item, index) => (
            <li key={index} style={{ marginBottom: isMobile ? "1rem" : "0" }}>
              <a
                href={`#${item.toLowerCase().replace(" ", "")}`}
                style={{
                  ...linkStyles,
                  ...(isMenuOpen ? linkHoverStyles : {}),
                }}
                onClick={() => setIsMenuOpen(false)} // Close menu on click
              >
                {item}
              </a>
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
