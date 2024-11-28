import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import EmailJS SDK

const Contact = () => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS service to send the message
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send(
        "service_p8qnjyc", // Your email service ID
        "template_bx6cp78", // Your email template ID
        templateParams,
        "d5LHyX-pkeNnr-syf" // Your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("Message Sent", response);
          setStatus("Message Sent Successfully!");
        },
        (err) => {
          console.error("Failed to send message", err);
          setStatus("Failed to send message. Please try again.");
        }
      );

    // Clear form fields after submission
    setName("");
    setEmail("");
    setMessage("");
  };

  // Section and form styles
  const sectionStyles = {
    padding: "4rem 2rem",
    backgroundColor: "#f9fafb",
    textAlign: "center",
  };

  const formStyles = {
    maxWidth: "600px",
    margin: "0 auto",
    backgroundColor: "white",
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const inputStyles = {
    width: "100%",
    padding: "1rem",
    marginBottom: "1.5rem",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    fontSize: "1rem",
  };

  const buttonStyles = {
    width: "100%",
    padding: "1rem",
    backgroundColor: "#4f46e5",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background 0.3s",
  };

  const buttonHover = {
    ...buttonStyles,
    ":hover": {
      backgroundColor: "#4338ca",
    },
  };

  const iconStyle = {
    color: "#4f46e5",
    fontSize: "1.5rem",
    margin: "0 1rem",
    transition: "color 0.3s",
  };

  const iconHover = {
    color: "#4338ca",
  };

  return (
    <section id="contact" style={sectionStyles}>
      <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem", color: "#2d3436" }}>Contact</h2>

      {/* Contact Form */}
      <form style={formStyles} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          style={inputStyles}
          required
          value={name}
          onChange={handleNameChange}
        />
        <input
          type="email"
          placeholder="Your Email"
          style={inputStyles}
          required
          value={email}
          onChange={handleEmailChange}
        />
        <textarea
          placeholder="Your Message"
          style={{ ...inputStyles, height: "150px" }}
          value={message}
          onChange={handleChange}
          required
        />
        <button type="submit" style={buttonStyles}>Send Message</button>
      </form>

      {/* Status Message */}
      {status && <p style={{ color: "#4caf50", marginTop: "1rem" }}>{status}</p>}

      {/* Social Media Links with Icons */}
      <div style={{ marginTop: "2rem" }}>
        <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "#2d3436" }}>Connect with me:</h3>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          {/* Email Icon */}
          <a href="mailto:pasindyachavindi13@gmail.com" style={{ ...iconStyle, marginRight: "2rem" }} title="Email">
            <i className="fas fa-envelope" style={iconStyle}></i>
          </a>

          {/* Phone Icon */}
          <a href="tel:0712174880" style={{ ...iconStyle, marginRight: "2rem" }} title="Phone">
            <i className="fas fa-phone-alt" style={iconStyle}></i>
          </a>

          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/pasindya-chavindee-00342223a/"
            target="_blank"
            rel="noopener noreferrer"
            style={iconStyle}
            title="LinkedIn"
          >
            <i className="fab fa-linkedin" style={iconStyle}></i>
          </a>

          {/* GitHub Icon */}
          <a
            href="https://github.com/Pasindya"
            target="_blank"
            rel="noopener noreferrer"
            style={iconStyle}
            title="GitHub"
          >
            <i className="fab fa-github" style={iconStyle}></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
