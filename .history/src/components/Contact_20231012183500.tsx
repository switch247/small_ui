import React from "react";
import "../css/components/Contact.css";
import CustomInput from "../elements/CustomInput";
import CurvedButton from "../elements/CurvedButton";

const Contact = () => {
  return (
    <div className="contacts__container">
      <div className="contact__title">Let's keep in touch for news</div>
      <div className="email__conatainer">
        <div className="some__border" />
        <div className="contact__text">
          Subscribe to be the first do receive updates and be in advantage on
          your application proccess
        </div>

        <CustomInput placeholder="your email here" />
        <div className="contact__email__button">
          <CurvedButton
            text="Subscribe"
            color="white"
            backgroundColor="#fd806b"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
