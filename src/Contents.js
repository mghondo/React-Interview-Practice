// Contents.js
import React from "react";
import { Route, Link, Routes } from "react-router-dom";
import { Row, Col, Card } from "react-bootstrap";
import FileExplorer from "./components/FileExplorer/FileExplorer";
import PaginationComponent from "./components/Pagination/Pagination";
import moviesData from "./components/Pagination/paginationData";
import fileExplorerData from "./components/FileExplorer/fileExplorerData";

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
                        {comp.description.length > 100
                          ? `${comp.description.substring(0, 97)}...`
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
