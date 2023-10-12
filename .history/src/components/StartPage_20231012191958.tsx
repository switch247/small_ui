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
