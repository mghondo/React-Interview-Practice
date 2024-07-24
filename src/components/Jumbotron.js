// src/components/Jumbotron.js
import React from "react";
import { Container } from "react-bootstrap";

const Jumbotron = ({ title, imageSrc, darken }) => {
  const jumbotronStyle = {
    position: "relative",
    backgroundImage: `url(${imageSrc})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
    padding: "8rem 2rem", // Doubled the top and bottom padding
    marginBottom: "2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "400px", // Set a minimum height to ensure it's taller
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: `rgba(0, 0, 0, ${darken})`,
    zIndex: 1,
  };

  const contentStyle = {
    position: "relative",
    zIndex: 2,
    textAlign: "center",
  };

  return (
    <div style={jumbotronStyle}>
      <div style={overlayStyle}></div>
      <Container style={contentStyle}>
        <h1>{title}</h1>
      </Container>
    </div>
  );
};

export default Jumbotron;
