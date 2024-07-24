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
        <div style={{ width: `${percent}%` }}></div>
      </div>
    </div>
  );
};

export default ProgressBarComp;
