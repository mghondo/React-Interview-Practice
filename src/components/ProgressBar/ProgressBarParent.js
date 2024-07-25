import React, { useEffect, useState, useCallback } from "react";
import "./ProgressBar.css";
import ProgressBarComp from "./ProgressBar";
import CSSCode from "./Code/CSSCode";
import ProgressBarCode from "./Code/ProgressBarCode";
import ProgressBarParentCode from "./Code/ProgressBarParentCode";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

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
      <h2>Interactive Progress Bar Demonstration</h2>
      <p>
        Welcome to our dynamic progress bar component showcase! This
        demonstration highlights a versatile and interactive progress bar that
        you can customize and control in real-time. Here's what you can do:
      </p>
      <ul>
        <li>Visualize progress with a sleek, animated bar</li>
        <li>Adjust the speed of progression using the dropdown menu</li>
        <li>
          Reset the progress bar at any time with the "Refresh Bar" button
        </li>
        <li>
          Explore the underlying code structure with toggleable code snippets
        </li>
      </ul>
      <p>
        The progress bar is not just a static element – it's a fully interactive
        component that responds to user input. You can speed it up for a quick
        demonstration or slow it down to observe the smooth transitions. It's
        perfect for representing loading times, completion status, or any
        quantifiable progress in your web applications.
      </p>
      <p>
        Below, you'll find the progress bar itself, along with controls to
        adjust its behavior. Feel free to experiment with different speeds and
        observe how the bar reacts. For those interested in the technical
        details, you can view the CSS, component, and parent component code by
        toggling the respective buttons.
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
            <button
              className="dropdown-item"
              onClick={() => setProgressSpeed(100)}
            >
              100 Milliseconds
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              onClick={() => setProgressSpeed(75)}
            >
              75 Milliseconds
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              onClick={() => setProgressSpeed(25)}
            >
              25 Milliseconds
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              onClick={() => setProgressSpeed(10)}
            >
              Ludicrous Speed!!
            </button>
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
