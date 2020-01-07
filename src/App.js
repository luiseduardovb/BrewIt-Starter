import React, { useState } from "react";

//Style
import "./App.css";

//Data
import allBrewMethods from "./data";

//Components
import BrewingList from "./Components/BrewingList/index";
import AboutPage from "./Components/AboutPage";
import NavBar from "./Components/NavBar";

function App() {
  const [brewingMethods] = useState(allBrewMethods);
  const [showHome, setShowHome] = useState(true);

  return (
    <>
      <div className="App my-5">
        <NavBar setShowHome={setShowHome} />
        <div className="container">
          {showHome ? (
            <BrewingList brewingMethods={brewingMethods} />
          ) : (
            <AboutPage />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
