import React from "react";
import BorderdButton from "../elements/BorderdButton";
import "../css/components/Home.css";
import GreenCard from "./GreenCard";
import NumberCard from "../elements/NumberCard";

const Home = () => {
  return (
    <>
      <div className="app__background"></div>
      <main className="main">
        <header className="app__header">
          <img className="gov_assist_logo" src="/images/Govassist.png" alt="" />
          <BorderdButton text="Live Chat" color="white" />
        </header>
        <div className="main__container">
          <div className="main__left__contianer">
            <div className="main__left__title">
              Win the right to live{" "}
              <span style={{ color: "white" }}>in the USA!</span>
            </div>
            <div className="main__left__small_container">
              <div className="edge"></div>
              <div className="main__left__desc">
                The official deadline is running, so hurry up and apply here!
              </div>
              <div className="number__container">
                <NumberCard number={27} desc="DAYS" />
                <NumberCard number={24} desc="HOURS" />
                <NumberCard number={60} desc="MINUTES" />
                <NumberCard number={27} desc="SECONDS" />
              </div>
              <div className="main__left__lists">
                <div className="list">
                  <img
                    className="list__img"
                    src="/images/🦆 icon _people_.svg"
                    alt=""
                  />
                  <div className="list__desc"></div>
                </div>
                <div className="list">
                  <img
                    className="list__img"
                    src="/images/🦆 icon _medal star_.svg"
                    alt=""
                  />
                  <div className="list__desc"></div>
                </div>
                <div className="list">
                  <img
                    className="list__img"
                    src="/images/🦆 icon _wallet check_.svg"
                    alt=""
                  />
                  <div className="list__desc"></div>
                </div>
                <div className="list">
                  <img
                    className="list__img"
                    src="/images/🦆 icon _clock_.svg"
                    alt=""
                  />
                  <div className="list__desc"></div>
                </div>
                <div className="list">
                  <img
                    className="list__img"
                    src="/images/🦆 icon _message_.svg"
                    alt=""
                  />
                  <div className="list__desc"></div>
                </div>
                <div className="list">
                  <img
                    className="list__img"
                    src="/images/🦆 icon _lovely_.svg"
                    alt=""
                  />
                  <div className="list__desc"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="main__right__contianer">
            <GreenCard />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
