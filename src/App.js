import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "react-bootstrap";
import CustomNavbar from "./components/CustomNavbar";
import Jumbotron from "./components/Jumbotron";
import Contents from "./Contents";
import codeImage from "./imgs/code.jpg"; // Import the image


import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <CustomNavbar />
      <Jumbotron
        title="React Interview Topics"
        imageSrc={codeImage} // Pass the imported image
        darken={0.3} // Pass the darken prop with a value of 0.3 (30%)
      />
      <Container>
        <Contents />
      </Container>
    </Router>
  );
}

export default App;
