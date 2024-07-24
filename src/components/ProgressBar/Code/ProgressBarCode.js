import React from "react";

const ProgressBarCode = () => {
  const progressBarCode = `
import { useState, useEffect } from "react";
import "./ProgressBar.css";

const ProgressBarComp = ({ value = 50 }) => {
  const [percent, setPercent] = useState(value);

  useEffect(() => {
    setPercent(Math.min(100, Math.max(value, 0)));
  }, [value]);

  return (
    <div>
      <div className="progress">
        <span className="percentage">{percent.toFixed()}%</span>
        <div style={{ width: \`\${percent}%\` }}></div>
      </div>
    </div>
  );
};

export default ProgressBarComp;
  `;

  return (
    <div className="progress-bar-code-container">
      <h3>Progress Bar Component Code</h3>
      <pre>
        <code>{progressBarCode}</code>
      </pre>
    </div>
  );
};

export default ProgressBarCode;
