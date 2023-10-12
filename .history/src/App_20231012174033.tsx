import React from "react";
import "./App.css";
import Home from "./components/Home";
import TableView from "./components/Table";
import Description from "./components/Description";
import Testmonials from "./components/Testmonials";

function App() {
  return (
    <div className="App">
      <Home />
      <Description />
      <Testmonials />
    </div>
  );
}

export default App;
