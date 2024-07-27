import React, { useState } from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { Button } from "react-bootstrap";
import DraggableListDescription from "./DraggableListDescription";
import DraggableListCode from "./CodeFiles/DraggableListCode";
import DraggableItemCode from "./CodeFiles/DaggableItemCode";
import DragAndDropContextCode from "./CodeFiles/DragAndDropContextCode";
import "bootstrap/dist/css/bootstrap.min.css";

const DragAndDropContext = ({ children }) => {
  const [showDraggableListCode, setShowDraggableListCode] = useState(false);
  const [showDraggableItemCode, setShowDraggableItemCode] = useState(false);
  const [showDragAndDropContextCode, setShowDragAndDropContextCode] =
    useState(false);

  return (
    <div className="container mt-4">
      <DraggableListDescription />
      <DndProvider backend={HTML5Backend}>{children}</DndProvider>
      <div className="d-flex justify-content-center mt-4">
        <Button
          variant="primary"
          className="mx-2"
          onClick={() => setShowDraggableListCode(!showDraggableListCode)}
        >
          {showDraggableListCode ? "Hide" : "Show"} DraggableList Code
        </Button>
        <Button
          variant="secondary"
          className="mx-2"
          onClick={() => setShowDraggableItemCode(!showDraggableItemCode)}
        >
          {showDraggableItemCode ? "Hide" : "Show"} DraggableItem Code
        </Button>
        <Button
          variant="success"
          className="mx-2"
          onClick={() =>
            setShowDragAndDropContextCode(!showDragAndDropContextCode)
          }
        >
          {showDragAndDropContextCode ? "Hide" : "Show"} DragAndDropContext Code
        </Button>
      </div>
      {showDraggableListCode && (
        <div className="mt-4">
          <h3>DraggableList Code</h3>
          <DraggableListCode />
        </div>
      )}
      {showDraggableItemCode && (
        <div className="mt-4">
          <h3>DraggableItem Code</h3>
          <DraggableItemCode />
        </div>
      )}
      {showDragAndDropContextCode && (
        <div className="mt-4">
          <h3>DragAndDropContext Code</h3>
          <DragAndDropContextCode />
        </div>
      )}
    </div>
  );
};

export default DragAndDropContext;
