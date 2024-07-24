import React from "react";

const ProgressBarParentCode = () => {
  const progressBarParentCode = `
import React, { useEffect, useState, useCallback } from "react";
import "./ProgressBar.css";
import ProgressBarComp from "./ProgressBar";
import CSSCode from "./Code/CSSCode";
import ProgressBarCode from "./Code/ProgressBarCode";
import ProgressBarParentCode from "./Code/ProgressBarParentCode";

const ProgressBarParent = () => {
  const [value, setValue] = useState(0);
  const [speed, setSpeed] = useState(100);
  const [isRunning, setIsRunning] = useState(true);
  const [showCSSCode, setShowCSSCode] = useState(false);
  const [showProgressBarCode, setShowProgressBarCode] = useState(false);
  const [showParentCode, setShowParentCode] = useState(false);

  const startProgress = useCallback(() => {
    setValue(0);
    setIsRunning(true);
  }, []);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setValue((val) => {
        if (val < 100) {
          return val + 1;
        } else {
          clearInterval(interval);
          setIsRunning(false);
          return 100;
        }
      });
    }, speed);

    return () => clearInterval(interval);
  }, [speed, isRunning]);

  const handleRefresh = () => {
    startProgress();
  };

  const setProgressSpeed = (newSpeed) => {
    setSpeed(newSpeed);
    if (!isRunning) {
      startProgress();
    }
  };

  return (
    <div className="container">
      <h2>Progress Bar Demonstration</h2>
      <p>
        Visualize progress with our dynamic progress bar component. This
        interactive element allows you to represent completion status, loading
        times, or any quantifiable progress in a clear and engaging manner.
      </p>
      <div className="btn-group mb-3">
        <button
          type="button"
          className="btn btn-warning dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Set Speed
        </button>
        <ul className="dropdown-menu">
          <li>
            <a
              className="dropdown-item"
         
              onClick={() => setProgressSpeed(100)}
            >
              100 Milliseconds
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
           
              onClick={() => setProgressSpeed(75)}
            >
              75 Milliseconds
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
          
              onClick={() => setProgressSpeed(25)}
            >
              25 Milliseconds
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
            
              onClick={() => setProgressSpeed(10)}
            >
              Ludicrous Speed!!
            </a>
          </li>
        </ul>
      </div>
      <ProgressBarComp value={value} />
      <div className="text-center mt-4">
        <button
          className="btn btn-primary custom-button"
          onClick={handleRefresh}
        >
          Refresh Bar
        </button>
      </div>

      <div className="mt-4">
        <div className="btn-group me-2 mb-2">
          <button
            type="button"
            className="btn btn-primary dropdown-toggle"
            onClick={() => setShowCSSCode(!showCSSCode)}
          >
            {showCSSCode ? "Hide CSS Code" : "Show CSS Code"}
          </button>
        </div>
        <div className="btn-group me-2 mb-2">
          <button
            type="button"
            className="btn btn-primary dropdown-toggle"
            onClick={() => setShowProgressBarCode(!showProgressBarCode)}
          >
            {showProgressBarCode
              ? "Hide Progress Bar Code"
              : "Show Progress Bar Code"}
          </button>
        </div>
        <div className="btn-group mb-2">
          <button
            type="button"
            className="btn btn-primary dropdown-toggle"
            onClick={() => setShowParentCode(!showParentCode)}
          >
            {showParentCode
              ? "Hide Parent Component Code"
              : "Show Parent Component Code"}
          </button>
        </div>
      </div>

      {showCSSCode && (
        <div className="card mt-3">
          <div className="card-body">
            <CSSCode />
          </div>
        </div>
      )}
      {showProgressBarCode && (
        <div className="card mt-3">
          <div className="card-body">
            <ProgressBarCode />
          </div>
        </div>
      )}
      {showParentCode && (
        <div className="card mt-3">
          <div className="card-body">
            <ProgressBarParentCode />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProgressBarParent;

  `;

  return (
    <div className="progress-bar-parent-code-container">
      <h3>Progress Bar Parent Component Code</h3>
      <pre>
        <code>{progressBarParentCode}</code>
      </pre>
    </div>
  );
};

export default ProgressBarParentCode;
