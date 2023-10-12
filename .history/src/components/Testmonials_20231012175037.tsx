import { useState } from "react";
import "../css/components/Testmonials.css";

const Testmonials = () => {
  return (
    <div className="testmonial__container">
      <div className="testmonial__title_img">
        <img src="/images/🦆 icon _document text_.svg" alt="" />
        <div className="testmonial__title">Our jobs speak for Ourselves!</div>
      </div>
      <div className="testmonial__main__container">
        <div className="testmonial_left">
          <img src="/images/Trustpilot1.svg" alt="" />
        </div>
        <div className="testmonial_right"></div>
      </div>
    </div>
  );
};

export default Testmonials;
