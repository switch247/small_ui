import { useState } from "react";

const Testmonials = () => {
  return (
    <div className="description__container">
      <div className="description__title_img">
        <img src="/images/🦆 icon _document text_.svg" alt="" />
        <div className="description__title">Our jobs speak for Ourselves!</div>
      </div>
      <div className="description__dropdowns">
        <div className="dropdown">
          <div className="dropdown__clickable">
            <div className="dropdown__title">Diversity Visa Cost</div>
            <img className="dropdown__img" src={""} alt="" />
          </div>
        </div>
        <div className="dropdown">
          <div className="dropdown__clickable">
            <div className="dropdown__title">Diversity Visa Timeline</div>
            <img className="dropdown__img" src={"/images/down.svg"} alt="" />
          </div>
        </div>
        <div className="dropdown">
          <div className="dropdown__clickable">
            <div className="dropdown__title">Diversity Visa FAQs</div>
            <img className="dropdown__img" src={"/images/down.svg"} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testmonials;
