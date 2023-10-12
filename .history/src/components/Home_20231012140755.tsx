import React from "react";
import BorderdButton from "../elements/BorderdButton";
import "../css/components/Home.css";
import GreenCard from "./GreenCard";

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
      </main>
    </>
  );
};

export default Home;
