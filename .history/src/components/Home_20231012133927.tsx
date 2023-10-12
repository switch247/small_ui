import React from "react";
import BorderdButton from "../elements/BorderdButton";
import CustomInput from "../elements/CustomInput";
import "../css/components/Home.css";

const Home = () => {
  return (
    <>
      <div className="app__background"></div>
      <main className="main">
        <header className="app__header">
          <img className="gov_assist_logo" src="/images/Govassist.png" alt="" />
          <BorderdButton text="HEREE is the et" color="white" />
          <CustomInput placeholder="last name" />
        </header>
      </main>
    </>
  );
};

export default Home;
