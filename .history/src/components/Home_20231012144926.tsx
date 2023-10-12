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
        <GreenCard />
        <NumberCard number={25} desc={"Days"} />
      </main>
    </>
  );
};

export default Home;
