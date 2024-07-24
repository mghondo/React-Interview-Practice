import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Pagination as BSPagination,
  Button,
  Collapse,
} from "react-bootstrap";
import PaginationCode from "./PaginationCode";
import "bootstrap/dist/css/bootstrap.min.css";

const PaginationComponent = ({ moviesData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showJson, setShowJson] = useState(false);
  const [showCode, setShowCode] = useState(false);
  const itemsPerPage = 9;

  // Defensive check to ensure moviesData is defined
  if (!moviesData) {
    return <p>No data available</p>;
  }

  // Calculate the total number of pages
  const totalPages = Math.ceil(moviesData.length / itemsPerPage);

  // Get the movies for the current page
  const currentMovies = moviesData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container className="mt-4">
      <h2>Pagination</h2>
      <p className="mb-4">
        This component demonstrates pagination functionality. It allows users to
        navigate through pages of movie data efficiently. Each page displays 9
        movie cards with their title, year, and top actors.
      </p>
      <Button onClick={() => setShowJson(!showJson)} className="mb-3 me-2">
        {showJson ? "Hide JSON Data" : "Show JSON Data"}
      </Button>
      <Button onClick={() => setShowCode(!showCode)} className="mb-3">
        {showCode ? "Hide Component Code" : "Show Component Code"}
      </Button>
      <Collapse in={showJson}>
        <div className="mt-3 mb-3">
          <pre>{JSON.stringify(moviesData, null, 2)}</pre>
        </div>
      </Collapse>
      <Collapse in={showCode}>
        <div className="mt-3 mb-3">
          <PaginationCode />
        </div>
      </Collapse>
      <Row>
        {currentMovies.map((movie, index) => (
          <Col key={index} xs={12} md={4} className="mb-4">
            <Card style={{ backgroundColor: "#bcc6d9" }}>
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>
                  <strong>Year:</strong> {movie.year}
                </Card.Text>
                <Card.Text>
                  <strong>Actors:</strong> {movie.topActors.join(", ")}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <BSPagination className="justify-content-center">
        <BSPagination.First
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
        />
        <BSPagination.Prev
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        />
        {[...Array(totalPages).keys()].map((number) => (
          <BSPagination.Item
            key={number + 1}
            active={number + 1 === currentPage}
            onClick={() => handlePageChange(number + 1)}
          >
            {number + 1}
          </BSPagination.Item>
        ))}
        <BSPagination.Next
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        />
        <BSPagination.Last
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
        />
      </BSPagination>
    </Container>
  );
};

export default PaginationComponent;
