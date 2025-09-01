// Contents.js
import React from "react";
import { Route, Link, Routes } from "react-router-dom";
import { Row, Col, Card } from "react-bootstrap";
import FileExplorer from "./components/FileExplorer/FileExplorer";
import PaginationComponent from "./components/Pagination/Pagination";
import moviesData from "./components/Pagination/paginationData";
import fileExplorerData from "./components/FileExplorer/fileExplorerData";

// import ProgressBar from "react-bootstrap/ProgressBar";

import ProgressBarParent from "./components/ProgressBar/ProgressBarParent";
import EMICalculatorComp from "./components/EMICalculator/EMICalculatorComp";

import DragAndDropContext from "./components/DragAndDrop/DragAndDropContext";
import DraggableList from "./components/DragAndDrop/DraggableList";
import WeatherApp from "./components/WeatherAPI/WeatherMain";
import DutSimulation from "./components/DutSimulationForm";
import DutchSimNew from "./components/DutchieNew/DutchSimNew";

// Array of components
const components = [
  {
    name: "File Explorer",
    description:
      "Navigate through a simulated file system structure. This component demonstrates a simple file explorer implementation. Click on folder names to expand or collapse them and view their contents. This structure mimics a typical file system, allowing you to navigate through various levels of folders and files.",
    path: "/file-explorer",
    component: () => <FileExplorer fileExplorerData={fileExplorerData} />,
  },
  {
    name: "Pagination",
    description:
      "This component will demonstrate pagination functionality. It allows users to navigate through pages of content efficiently.",
    path: "/pagination",
    component: () => <PaginationComponent moviesData={moviesData} />,
  },
  {
    name: "Progress Bar",
    description:
      "Visualize progress with our dynamic progress bar component. This interactive element allows you to represent completion status, loading times, or any quantifiable progress in a clear and engaging manner.",
    path: "/progress-bar",
    component: () => {
      return <ProgressBarParent />;
    },
  },
  {
    name: "EMI Calculator",
    description:
      "Visualize progress with our dynamic progress bar component. This interactive element allows you to represent completion status, loading times, or any quantifiable progress in a clear and engaging manner.",
    path: "/emi-calculator",
    component: () => {
      return <EMICalculatorComp />;
    },
  },
  {
    name: "Drag and Drop",
    description:
      "The Draggable List Component is a React component that allows users to reorder a list of items using drag-and-drop functionality. This component is built using the ",
    path: "/draganddrop",
    component: () => {
      return (
        <DragAndDropContext>
          <DraggableList />
        </DragAndDropContext>
      );
    },
  },
  {
    name: "Weather App",
    description:
      "The Draggable List Component is a React component that allows users to reorder a list of items using drag-and-drop functionality. This component is built using the ",
    path: "/weatherapp",
    component: () => {
      return <WeatherApp />;
    },
  },
  {
    name: "Dutchie Simulation Form",
    description:
      "Built in Conjunction with MorgoTools Building App.",
    path: "/dutsimulation",
    component: () => {
      return <DutSimulation />;
    },
  },
  {
    name: "New Dutchie Simulation Form",
    description:
      "Simulation of Dutchie CRM with corresponding Ids...",
    path: "/dutchie-new",
    component: () => {
      return <DutchSimNew />;
    },
  },
  // Add more components here as you create them
];

function Contents() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Row>
              {components.map((comp, index) => (
                <Col key={index} xs={12} sm={6} md={4} className="mb-4">
                  <Card>
                    <Card.Body>
                      <Card.Title>{comp.name}</Card.Title>
                      <Card.Text>
                        {comp.description.length > 150
                          ? `${comp.description.substring(0, 147)}...`
                          : comp.description}
                      </Card.Text>
                      <Link to={comp.path} className="btn btn-primary">
                        Explore
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          }
        />
        {components.map((comp, index) => (
          <Route key={index} path={comp.path} element={comp.component()} />
        ))}
      </Routes>
    </>
  );
}

export default Contents;