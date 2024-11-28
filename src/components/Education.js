import React from "react";


const Education = () => {
  const sectionStyles = {
    padding: "4rem 2rem",
    background: "linear-gradient(135deg, #f3f4f6, #ffffff)",
    textAlign: "center",
    borderRadius: "10px",
    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
  };

  const titleStyles = {
    fontSize: "2.5rem",
    marginBottom: "2rem",
    fontWeight: "bold",
    color: "#2d3436",
    letterSpacing: "1px",
  };

  const cardStyles = {
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "1.5rem",
    margin: "1rem",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s, box-shadow 0.3s",
    width: "300px",
    maxWidth: "100%",
    textAlign: "center",
  };

  const cardImageStyles = {
    width: "100%",
    height: "200px",
    borderRadius: "8px",
    objectFit: "cover",
    marginBottom: "1rem",
  };

  const cardTitleStyles = {
    fontSize: "1.6rem",
    marginBottom: "0.8rem",
    fontWeight: "600",
    color: "#1f2937",
  };

  const cardSubtitleStyles = {
    fontSize: "1.2rem",
    marginBottom: "0.5rem",
    color: "#4b5563",
  };

  const cardDateStyles = {
    fontSize: "1rem",
    color: "#9ca3af",
  };

  const educationDetails = [
    {
      degree: "BSc (Hons) in Information Technology",
      institution: "Sri Lanka Institute of Information Technology",
      duration: "2022 Oct - Present",
      imageUrl: "/sliit.png", // Replace with actual image URLs
    },
    {
        degree: "Professional English & IT",
        institution: "Aquinas College of Higher Studies",
        duration: "2022 Mar-July",
        imageUrl: "/aq.jpeg", // Replace with actual image URLs
      },
    {
      degree: "Certificate in Marketing",
      institution: "Sri Lanka Institute of Marketing",
      duration: "2022 Mar-July",
      imageUrl: "/slim.jpeg", // Replace with actual image URLs
    },
    
      {
        degree: "G.C.E.A/L",
        institution: "Panadura Balika Vidyalaya",
        duration: "Mar 2019 -Aug 2021",
        imageUrl: "/pb.png", // Replace with actual image URLs
      },
      {
      degree: "G.C.E. O/L",
      institution: "Sri Sumangala Balika Maha Vidyalaya",
      duration: "Sep 2024 - Sep 2024",
      imageUrl: "/sum.jpeg", // Replace with actual image URLs
    },
  ];

  const handleHover = (e) => {
    e.target.style.transform = "scale(1.05)";
    e.target.style.boxShadow = "0 12px 40px rgba(0, 0, 0, 0.15)";
  };

  const handleMouseOut = (e) => {
    e.target.style.transform = "scale(1)";
    e.target.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.1)";
  };

  return (
    <section id="education" style={sectionStyles}>
      <h2 style={titleStyles}>Education</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "1.5rem",
          marginTop: "2rem",
        }}
      >
        {educationDetails.map((edu, index) => (
          <div
            key={index}
            style={cardStyles}
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseOut}
          >
            <img
              src={edu.imageUrl}
              alt={edu.institution}
              style={cardImageStyles}
            />
            <h3 style={cardTitleStyles}>{edu.degree}</h3>
            <p style={cardSubtitleStyles}>{edu.institution}</p>
            <p style={cardDateStyles}>{edu.duration}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
