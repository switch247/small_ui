import React from "react";
import "./VerticalStepper.css";

const VerticalStepper = () => {
  return (
    <div className="vertical-stepper">
      <div className="step">
        <div className="step-circle">1</div>
        <div className="step-content">
          <h3>Step 1</h3>
          <p>Step 1 description goes here</p>
        </div>
      </div>
      <div className="step">
        <div className="step-circle">2</div>
        <div className="step-content">
          <h3>Step 2</h3>
          <p>Step 2 description goes here</p>
        </div>
      </div>
      <div className="step">
        <div className="step-circle">3</div>
        <div className="step-content">
          <h3>Step 3</h3>
          <p>Step 3 description goes here</p>
        </div>
      </div>
    </div>
  );
};

export default VerticalStepper;
