import { createRoot } from "react-dom/client";
import { useState, useMemo } from "react";

import "./App.css";

const App = () => {
  const [time, setTime] = useState({
    hour: 0,
    minutes: 0,
    seconds: 0,
    ampm:0
  });

  let seconds = 0;

  const cacheFunc = useMemo(() => {
    const timer = setInterval(() => {
      const getTime = new Date();
      const getCurrentTime = getTime.toLocaleTimeString().split(" ");
      const setCurrentHour = getCurrentTime[0].split(":");
      setTime({
        hour: setCurrentHour[0],
        minutes: setCurrentHour[1],
        seconds: setCurrentHour[2],
        ampm:getCurrentTime[1]
      });
      seconds++;
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <>
      <div className="container">
        <div className="title">
          <p>Digital Clock</p>
        </div>
        <div className="cards flex">
          <div className="card hour-card">
            <div className="number flex center">{time.hour}</div>
            <div className="number-title flex center">Hours</div>
          </div>
          <div className="card minute-card">
            <div className="number flex center">{time.minutes}</div>
            <div className="number-title flex center">Minutes</div>
          </div>
          <div className="card second-card">
            <div className="number flex center">{time.seconds}</div>
            <div className="number-title flex center">Seconds</div>
          </div>
          <div className="card ampm-card">{time.ampm}</div>
        </div>
      </div>
    </>
  );
};

createRoot(root).render(<App />);
