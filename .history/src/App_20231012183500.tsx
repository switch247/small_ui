import React from "react";
import "./App.css";
import Home from "./components/Home";
import TableView from "./components/Table";
import Description from "./components/Description";
import Testmonials from "./components/Testmonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Home />
      <Description />
      <Testmonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
