import React, { useState, useEffect } from "react";
//Styling
import "../../timer.css";
import "../../style.css";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [currentTime, setTime] = useState(0);

  const [isActive, setIsActive] = useState(false);

  const reset = () => {
    setSeconds(0);
    setMinutes(0);
    setIsActive(false);
  };

  useEffect(() => {
    let interval = null;
    if (isActive) {
      const startTime = Date.now() - currentTime;
      interval = setInterval(() => {
        setTime(Date.now() - startTime);
        setSeconds(("0" + (Math.floor(currentTime / 1000) % 60)).slice(-2));
        setMinutes(("0" + (Math.floor(currentTime / 60000) % 60)).slice(-2));
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds, minutes]);

  return (
    <div className="app">
      <div className="time">
        {minutes}mins:{seconds}s
      </div>
      <div className="row">
        <button
          className={`button button-primary button-secondary-${
            isActive ? "active" : "inactive"
          }`}
          onClick={() => setIsActive(!isActive)}
        >
          {isActive ? "Pause" : "Start"}
        </button>
        <button className="button btn-danger" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
