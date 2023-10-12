import React from "react";
import "./App.css";
import CurvedButton from "./elements/CurvedButton";
import BorderdButton from "./elements/BorderdButton";

function App() {
  return (
    <div className="App">
      <main className="main">
        <div className="app__background"></div>
        <header>
          <div className="app__header">
            <div className="app_title"></div>
            <BorderdButton text="HEREE is the et" />
          </div>
        </header>
      </main>
    </div>
  );
}

export default App;
