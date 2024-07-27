import React from "react";
import { useDrag, useDrop } from "react-dnd";

const ItemType = "ITEM";

const DraggableItem = ({ item, index, moveItem }) => {
  const ref = React.useRef(null);

  const [, drop] = useDrop({
    accept: ItemType,
    hover(draggedItem) {
      if (draggedItem.index !== index) {
        moveItem(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemType,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <li
      ref={ref}
      style={{
        padding: "16px",
        margin: "0 0 8px 0",
        backgroundColor: "#f0f0f0",
        border: "1px solid #ddd",
        borderRadius: "4px",
        opacity: isDragging ? 0.5 : 1,
        cursor: "move",
      }}
    >
      {item.content}
    </li>
  );
};

export default DraggableItem;
