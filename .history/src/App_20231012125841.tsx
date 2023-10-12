import React from "react";
import "./App.css";
import CurvedButton from "./elements/CurvedButton";
import BorderdButton from "./elements/BorderdButton";

function App() {
  return (
    <div className="App">
      <main>
        <header>
          <div className="app__header">
            <div className="app_title">
              <BorderdButton text="HEREE is the et" />
            </div>
          </div>
        </header>
      </main>
    </div>
  );
}

export default App;
