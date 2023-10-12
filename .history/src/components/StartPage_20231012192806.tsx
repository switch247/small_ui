import React from "react";
import BorderdButton from "../elements/BorderdButton";
import "../css/components/StartPage.css";

const Start = () => {
  return (
    <>
      <main className="start__page__container">
        <div className="start__page__left">
          <img
            className="start_assist_logo"
            src="/images/Govassist.png"
            alt=""
          />
          <div className="start__desc">
            Eletronic <br />
            <span style={{ color: "#4ac97d" }}>diversity visa</span>
            <br />
            entry form
          </div>
          <div className="start__desc__detail">
            Here you will fill all
            <br /> your information to
            <br />
            reach your dream.
          </div>
        </div>
        <div className="start__page__right"></div>
      </main>
    </>
  );
};

export default Start;

{
  /* <img className="gov_assist_logo" src="/images/Govassist.png" alt="" />
        <BorderdButton text="Live Chat" color="white" /> */
}
