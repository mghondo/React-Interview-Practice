import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const DraggableListCode = () => {
  const codeSnippet = `
import React, { useState } from "react";
import DraggableItem from "./DraggableItem";

const DraggableList = () => {
  const [items, setItems] = useState([
    { id: "item1", content: "Item 1" },
    { id: "item2", content: "Item 2" },
    { id: "item3", content: "Item 3" },
    { id: "item4", content: "Item 4" },
    { id: "item5", content: "Item 5" },
  ]);

  const moveItem = (fromIndex, toIndex) => {
    const updatedItems = [...items];
    const [movedItem] = updatedItems.splice(fromIndex, 1);
    updatedItems.splice(toIndex, 0, movedItem);
    setItems(updatedItems);
  };

  return (
    <ul style={{ listStyleType: "none", padding: 0 }}>
      {items.map((item, index) => (
        <DraggableItem
          key={item.id}
          index={index}
          item={item}
          moveItem={moveItem}
        />
      ))}
    </ul>
  );
};

export default DraggableList;
  `;

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header">
          <h5 className="card-title">DraggableList Component Code</h5>
        </div>
        <div className="card-body">
          <pre>
            <code>{codeSnippet}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default DraggableListCode;
