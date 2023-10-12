import React from "react";
import BorderdButton from "../elements/BorderdButton";
import "../css/components/PhonePage.css";
import CurvedButton from "../elements/CurvedButton";
import { useNavigate } from "react-router-dom";
import CustomizedSteppers from "./VerticalStepper";

const PhonePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <main className="phone__page__container">
        <div className="phone__page__left">
          <img
            className="phone_assist_logo"
            src="/images/Govassist.png"
            alt=""
          />
          <CustomizedSteppers />
        </div>
        <div className="phone__page__right">
          <div className="live__chat">
            <BorderdButton text="LIVE CHAT" borderColor="black" />
          </div>
          <div className="phone__page__right__prompt__container">
            <div>
              <div className="phone__page__right__prompt__text">
                2.1. - Phone number
              </div>
              <div className="phone__page__right__prompt__text">
                <input
                  type="text"
                  style={{
                    border: "none",
                    outline: "none",
                    fontSize: "3rem",
                  }}
                />
              </div>
            </div>
            <div className="phone__page__right__prompt__button"></div>
          </div>
          <div className="copy__right">
            Copyright © 2016-2023 GovAssist, LLC All Rights Reserved
          </div>
        </div>
      </main>
    </>
  );
};

export default PhonePage;
