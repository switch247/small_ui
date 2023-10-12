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
        <div className="contact__email__input">
          <CustomInput placeholder="your email here" />
        </div>
        <CurvedButton
          text="Subscribe"
          color="white"
          backgroundColor="
#fd806b"
        />
      </div>
    </div>
  );
};

export default Contact;
