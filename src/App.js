// App.js
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "react-bootstrap";
import CustomNavbar from "./components/CustomNavbar";
import Contents from "./Contents";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <CustomNavbar />
      <Container className="mt-4">
        {/* <h1 className="text-center mb-4">Interview Playground</h1> */}
        <Contents />
      </Container>
    </Router>
  );
}

export default App;
