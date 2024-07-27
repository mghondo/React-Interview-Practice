const DraggableListDescription = () => {
  return (
    <div>
      <h2 className="text-center">Draggable List Component</h2>
      <br />
      <p>
        The Draggable List Component is a React component that allows users to
        reorder a list of items using drag-and-drop functionality. This
        component is built using the <code>react-dnd</code> library, which
        provides a flexible and easy-to-use API for implementing drag-and-drop
        interactions in React applications.
      </p>
      <p>The component is composed of several parts:</p>
      <ul>
        <li>
          <strong>DragAndDropContext:</strong> This component sets up the
          drag-and-drop context using the <code>DndProvider</code> from{" "}
          <code>react-dnd</code>. It wraps the entire application or the part of
          the application where drag-and-drop functionality is needed.
        </li>
        <li>
          <strong>DraggableItem:</strong> This component represents each
          draggable item in the list. It uses the <code>useDrag</code> hook to
          make the item draggable and the <code>useDrop</code> hook to handle
          the drop logic. The item can be dragged and dropped to reorder the
          list.
        </li>
        <li>
          <strong>DraggableList:</strong> This component manages the list of
          items and handles the reordering logic. It maintains the state of the
          list and updates the order of items when a drag-and-drop action is
          completed.
        </li>
      </ul>
      <p>
        The Draggable List Component provides a clean and interactive user
        experience, making it easy for users to reorder items in a list. It can
        be customized further to fit the specific needs of your application.
      </p>
      <p>
        Here is an example of how to use the Draggable List Component in your
        React application:
      </p>
      <pre>
        <code>
          {`import React from 'react';
  import DragAndDropContext from './DragAndDropContext';
  import DraggableList from './DraggableList';
  
  function App() {
    return (
      <div className="App">
        <h1>Draggable List</h1>
        <DragAndDropContext>
          <DraggableList />
        </DragAndDropContext>
      </div>
    );
  }
  
  export default App;`}
        </code>
      </pre>
      <p>
        The above example demonstrates how to integrate the Draggable List
        Component into your application. The <code>DragAndDropContext</code>{" "}
        component wraps the <code>DraggableList</code> component to provide the
        necessary context for drag-and-drop interactions.
      </p>
      <br />
      <h2 className="text-center">Try for Yourself</h2>
      <br />
    </div>
  );
};

export default DraggableListDescription;
