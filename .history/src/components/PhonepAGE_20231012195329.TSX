import React from "react";
import BorderdButton from "../elements/BorderdButton";
import "../css/components/StartPage.css";
import CurvedButton from "../elements/CurvedButton";
import { useNavigate } from "react-router-dom";

const PhoneNumber = () => {
  const navigate = useNavigate();
  return (
    <>
      <main className="start__page__container">
        <div className="start__page__left">
          <img
            className="start_assist_logo"
            src="/images/Govassist.png"
            alt=""
          />

          <div className="start__footer__containre">
            <div className="start__left__border"></div>
            <div className="start__left__info">
              This is a full copy of the official DV Lottery application form.
              Use it for training only. You will need to apply on the official
              website www.dvlottery.state.gov when it opens to take part in the
              lottery.
            </div>
          </div>
        </div>
        <div className="start__page__right">
          <div>
            <BorderdButton text="LIVE CHAT" borderColor="black" />
          </div>
          <div className="start__page__right__prompt__container">
            <div className="start__page__right__prompt__text">
              Are you ready to begin?
            </div>
            <div
              className="start__page__right__prompt__button"
              onClick={() => {
                navigate("/phoneNo");
              }}
            >
              <CurvedButton text="Start" color="white" fontSize={24} />
            </div>
          </div>
          <div className="copy__right">
            Copyright © 2016-2023 GovAssist, LLC All Rights Reserved
          </div>
        </div>
      </main>
    </>
  );
};

export default PhoneNumber;
