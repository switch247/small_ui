import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/homePage";
import StartPage from "./pages/startPage";
import PhoneNumber from "./pages/phoneNumber";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/start" element={<StartPage />} />
          <Route path="/phoneNo" element={<PhoneNumber />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
