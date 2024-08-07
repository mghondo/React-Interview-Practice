// FileExplorerCode.js
import React from "react";
import { Card } from "react-bootstrap";

const FileExplorerCode = () => {
  const code = `
import React, { useState } from "react";
import { Button, Collapse } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const FileExplorer = ({ fileExplorerData }) => {
  const [openItems, setOpenItems] = useState({});
  const [showJson, setShowJson] = useState(false);

  const toggleItem = (itemId) => {
    setOpenItems((prevState) => ({
      ...prevState,
      [itemId]: !prevState[itemId],
    }));
  };

  const renderFileSystem = (data, parentId = "") => {
    return data.map((item, index) => {
      const itemId = \`\${parentId}-\${index}\`;

      return (
        <div key={itemId} className="mb-2">
          {item.contents.length > 0 ? (
            <>
              <Button
                variant="link"
                onClick={() => toggleItem(itemId)}
                aria-controls={\`collapse\${itemId}\`}
                aria-expanded={openItems[itemId]}
                className="text-decoration-none"
              >
                {item.name}
              </Button>
              <Collapse in={openItems[itemId]}>
                <div id={\`collapse\${itemId}\`}>
                  <div className="card card-body">
                    {renderFileSystem(item.contents, itemId)}
                  </div>
                </div>
              </Collapse>
            </>
          ) : (
            <div>{item.name}</div>
          )}
        </div>
      );
    });
  };

  return (
    <div>
      <h2>File Explorer</h2>
      <p className="mb-4">
        This component demonstrates a simple file explorer implementation. Click
        on folder names to expand or collapse them and view their contents. This
        structure mimics a typical file system, allowing you to navigate through
        various levels of folders and files.
      </p>
      <Button onClick={() => setShowJson(!showJson)} className="mb-3">
        {showJson ? "Hide JSON Data" : "Show JSON Data"}
      </Button>
      <Collapse in={showJson}>
        <div className="mt-3">
          <pre>{JSON.stringify(fileExplorerData, null, 2)}</pre>
        </div>
      </Collapse>
      {renderFileSystem(fileExplorerData)}
    </div>
  );
};

export default FileExplorer;
  `;

  return (
    <Card>
      <Card.Body>
        <Card.Title>File Explorer Component Code</Card.Title>
        <pre className="bg-light p-3 border rounded">
          <code>{code}</code>
        </pre>
      </Card.Body>
    </Card>
  );
};

export default FileExplorerCode;
