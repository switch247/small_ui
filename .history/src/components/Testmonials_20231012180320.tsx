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
        <div className="testmonial_right">
          <div className="truesP">
            <img src="/images/TrustP.png" alt="" />
          </div>
          <div className="girl__image">
            <img src="/images/undraw_personal_opinions_re_qw29 1.png" alt="" />
          </div>
        </div>
      </div>

      <div className="boder__bottom"></div>
    </div>
  );
};

export default Testmonials;
