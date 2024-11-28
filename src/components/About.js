import React from "react";
import profilePic from "../images/profile.jpg";

const About = () => {
  const aboutStyles = {
    padding: "4rem 2rem",
    background: "linear-gradient(to bottom, #ffffff, #f3f4f6)",
    textAlign: "center",
  };

  const headingStyles = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#4f46e5",
    marginBottom: "1rem",
    textTransform: "uppercase",
    letterSpacing: "1px",
  };

  const imageContainerStyles = {
    position: "relative",
    display: "inline-block",
  };

  const imageStyles = {
    width: "160px",
    height: "160px",
    borderRadius: "50%",
    marginBottom: "1.5rem",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  const overlayStyles = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    background: "rgba(79, 70, 229, 0.7)",
    opacity: 0,
    transition: "opacity 0.3s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1rem",
    color: "#fff",
    fontWeight: "bold",
  };

  const containerHover = {
    ":hover img": {
      transform: "scale(1.1)",
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
    },
    ":hover .overlay": {
      opacity: 1,
    },
  };

  const textStyles = {
    fontSize: "1.2rem",
    maxWidth: "700px",
    margin: "0 auto",
    color: "#4b5563",
    lineHeight: "1.8",
  };

  return (
    <section id="aboutme" style={aboutStyles}>
      <h2 style={headingStyles}>About Me</h2>
      <div style={{ ...imageContainerStyles, ...containerHover }}>
        <img src={profilePic} alt="Pasindya" style={imageStyles} />
        <div style={overlayStyles} className="overlay">
          Software Developer
        </div>
      </div>
      <p style={textStyles}>
      I am a 22-year-old, self-motivated second-year undergraduate student at the Sri Lanka Institute of
Information Technology (SLIIT), pursuing a degree in Information Technology. I have a solid
foundation in software development and mobile application design, with proficiency in Kotlin,
Android Studio, and the MERN stack.
My experience includes developing various web and mobile applications, showcasing strong
project management, leadership, and team collaboration skills. I am passionate about leveraging
technical expertise to solve real-world problems and thrive on creating innovative solutions to
make a positive impac
      </p>
    </section>
  );
};

export default About;
