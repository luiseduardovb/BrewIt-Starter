import React, { useState } from "react";

//Style
import "./App.css";

//Data
import allBrewMethods from "./data";

//Components
import AboutPage from "./Components/AboutPage";
import NavBar from "./Components/NavBar";

function App() {
  const [showHome, setShowHome] = useState(true);

  return (
    <>
      <div className="App my-5">
        <NavBar setShowHome={setShowHome} />
        <div className="container">{showHome ? null : <AboutPage />}</div>
      </div>
    </>
  );
}

export default App;
