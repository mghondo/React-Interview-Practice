import React from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import DraggableListDescription from "../DraggableListDescription";

const DragAndDropContextCode = ({ children }) => {
  const codeSnippet = `
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import DraggableListDescription from "./DraggableListDescription";

const DragAndDropContext = ({ children }) => {
  return (
    <div>
      <DraggableListDescription />
      <DndProvider backend={HTML5Backend}>{children}</DndProvider>;
    </div>
  );
};

export default DragAndDropContext;
  `;

  return (
    <div className="container mt-4">
      {/* <DraggableListDescription /> */}
      <div className="card">
        <div className="card-header">
          <h5 className="card-title">DragAndDropContext Component Code</h5>
        </div>
        <div className="card-body">
          <pre>
            <code>{codeSnippet}</code>
          </pre>
        </div>
      </div>
      <DndProvider backend={HTML5Backend}>{children}</DndProvider>
    </div>
  );
};

export default DragAndDropContextCode;
