import React from "react";

const Header = () => {
  const headerStyles = {
    height: "100vh",
    backgroundImage: "url('/src/images/profile.jpg')", // Replace with your image URL
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    overflow: "hidden",
  };

  const overlayStyles = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(79, 70, 229, 0.7)", // Gradient overlay
    zIndex: 1,
  };

  const contentStyles = {
    position: "relative",
    zIndex: 2,
    animation: "fadeIn 2s ease-in-out",
  };

  const buttonStyles = {
    padding: "0.75rem 1.5rem",
    fontSize: "1rem",
    margin: "0.5rem",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    transition: "transform 0.3s, background 0.3s",
  };

  const cvButton = {
    ...buttonStyles,
    background: "#facc15",
    color: "#1f2937",
    transform: "scale(1)",
  };

  const exploreButton = {
    ...buttonStyles,
    background: "white",
    color: "#4f46e5",
    transform: "scale(1)",
  };

  const buttonHoverEffect = {
    transform: "scale(1.1)",
  };

  return (
    <header style={headerStyles}>
      <div style={overlayStyles}></div>
      <div style={contentStyles}>
        <h1 style={{ fontSize: "3.5rem", fontWeight: "bold" }}>
          Pasindya Chavindee
        </h1>
        <p
          style={{
            fontSize: "1.5rem",
            fontStyle: "italic",
            margin: "1rem 0",
            maxWidth: "700px",
          }}
        >
           Undergraduate | Self Motivator 
        </p>
        <div>
          <a
            href="/CV-PasindyaChavindee-SLIIT.pdf"
            download
            style={cvButton}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            Download CV
          </a>
          <button
            onClick={() =>
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" })
            }
            style={exploreButton}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            Explore Projects
          </button>
        </div>
      </div>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}
      </style>
    </header>
  );
};

export default Header;
