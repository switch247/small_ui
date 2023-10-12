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
              Win the right to live in the USA!
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
              <div className="main__left__lists"></div>
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
