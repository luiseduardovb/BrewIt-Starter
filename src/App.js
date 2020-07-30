import React, { useState } from "react";

//Style
import "./App.css";

//Data
import allBrewMethods from "./data";

//Components
import AboutPage from "./Components/AboutPage";
import BrewingList from "./Components/BrewingList";
import NavBar from "./Components/NavBar";

function App() {
  const [brewingMethods] = useState(allBrewMethods);
  const [showHome, setShowHome] = useState(true);

  return (
    <>
      <NavBar setShowHome={setShowHome} />
      <div className="App my-5">
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
