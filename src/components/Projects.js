import React from "react";

const Projects = () => {
  const sectionStyles = {
    padding: "4rem 2rem",
    backgroundColor: "#f9fafb",
    textAlign: "center",
  };

  const cardStyles = {
    backgroundColor: "#f3f4f6",
    borderRadius: "8px",
    padding: "2rem",
    margin: "1rem",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s",
    width: "300px",
    textAlign: "left",
    marginBottom: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const imageStyles = {
    borderRadius: "8px",
    width: "100%",
    height: "200px",
    objectFit: "cover",
    marginBottom: "1rem",
  };

  const hoverEffect = {
    ...cardStyles,
    ":hover": {
      transform: "scale(1.05)",
    },
  };

  const projects = [
    {
      title: "Surfing School Management System",
      description:
        "A complete management solution for surf schools to organize lessons and bookings using MERN Stack.",
      image: "/surf.png", // Update this to the actual path of your image
      link: "https://github.com/Pasindya/Surfing-Project-MERN-",
    },
    {
        title: "UI design for travel agency",
        description:
          "An interactive website design for travel agency website.",
        image: "/sl.png",
        link: "https://www.figma.com/design/PANgMymwKd73EopJmQgTKt/Visit-Sri-Lanka?node-id=0-1&node-type=canvas&t=lGUq7I9V2snMaiau-0",
      },
    {
      title: "To-Do List App",
      description:
        "A simple task management app with reminder functionality, built using Android Studio and Kotlin.",
      image: "/app.jpg",
      link: "https://github.com/Pasindya/MyTaskSchedulerApp",
    },
    {
      title: "Online Parking System",
      description:
        "A system to manage online parking slots Developed with PHP, implementing CRUD for the support page.",
      image: "/park.png",
      link: "https://github.com/Pasindya/Automated-Parking-System",
    },
    {
      title: "Stock Management System",
      description:
        "Developed with Java,under MVC architecture by implementing CRUD for the support page.",
      image: "/stock.png",
      link: "https://github.com/Pasindya/Online-stock-management-system",
    },
    {
        title: "My Portfolio Website",
        description:
          "Website for introduction myself.Implemented using react.js",
        image: "portfolio.png",
        link: "https://github.com/Pasindya/Pasindya-portfolio",
      },
    {
      title: "UI design for mobile pizza app",
      description:
        "Interactive designs for pizza odering mobile applications..",
      image: "/pizza.png",
      link: "https://www.figma.com/design/RVFwKBo0Hd6hLClaDkabHv/Untitled?m=auto&t=YFDbdVlpaJgG3uxV-6",
    },
    {
      title: "Movie website",
      description:
        "A user-friendly platform to browse and stream movies using HTML,CSS & Javascript",
      image: "/movie.png",
      link: "https://github.com/Pasindya/Movie-Website-HTML-CSS-JS-",
    },
  ];

  return (
    <section id="projects" style={sectionStyles}>
      <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>Projects</h2>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {projects.map((project, index) => (
          <div key={index} style={hoverEffect}>
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              style={imageStyles}
            />
            <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>{project.title}</h3>
            <p style={{ marginBottom: "1rem", color: "#6b7280" }}>
              {project.description}
            </p>
            <a
              href={project.link}
              style={{
                color: "#4f46e5",
                textDecoration: "none",
                fontWeight: "bold",
                transition: "color 0.3s",
              }}
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
