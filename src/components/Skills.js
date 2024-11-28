import React from "react";

const Skills = () => {
  const sectionStyles = {
    padding: "4rem 2rem",
    backgroundColor: "white",
    textAlign: "center",
  };

  const skillCardStyles = {
    display: "inline-block",
    backgroundColor: "#f3f4f6",
    borderRadius: "8px",
    padding: "1.5rem",
    margin: "1rem",
    width: "150px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s",
  };

  const hoverEffect = {
    ...skillCardStyles,
    ":hover": {
      transform: "scale(1.05)",
    },
  };

  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "Version Controlling",
    "Python",
    "MongoDB",
    "PHP",
    "MySQL",
    "HTML",
    "C",
    "C++",
    "CSS",
    "Kotlin",
    "Android Studio",
  ];

  return (
    <section id="skills" style={sectionStyles}>
      <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>Skills</h2>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {skills.map((skill, index) => (
          <div key={index} style={hoverEffect}>
            <p style={{ fontSize: "1.2rem", color: "#4f46e5" }}>{skill}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
