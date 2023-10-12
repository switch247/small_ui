import React from "react";
import "./App.css";
import CurvedButton from "./elements/CurvedButton";
import BorderdButton from "./elements/BorderdButton";
import CustomInput from "./elements/CustomInput";

function App() {
  return (
    <div className="App">
      <div className="app__background"></div>
      <main className="main">
        <header className="app__header">
          <img className="gov_assist_logo" src="/images/Govassist.png" alt="" />
          <BorderdButton text="HEREE is the et" color="white" />
          <CustomInput placeholder="last name" />
        </header>
      </main>
    </div>
  );
}

export default App;
