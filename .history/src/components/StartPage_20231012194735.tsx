import React from "react";
import BorderdButton from "../elements/BorderdButton";
import "../css/components/StartPage.css";
import CurvedButton from "../elements/CurvedButton";

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
            <br />
            your information to
            <br />
            reach your dream.
          </div>
          <div className="ten__min__container">
            <img
              className="ten__min__imgage"
              src="/images/🦆 icon _forward 10 seconds_.svg"
              alt=""
            />
            <div className="ten__mins">10 minutes to finish</div>
          </div>

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
            <div className="start__page__right__prompt__button">
              <CurvedButton text="Start" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Start;
