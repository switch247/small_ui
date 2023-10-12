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
            <NumberCard number={25} desc={"Days"} />
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
