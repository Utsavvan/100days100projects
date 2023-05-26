import { createRoot } from "react-dom/client";

import { useState, useReducer, useEffect } from "react";

const App = () => {
  const [time, setTime] = useState(0);
  const [isrunning, setIsrunning] = useState(0);

  function handleStart() {
    setEvent({ type: "START" });
    setIsrunning(1);
  }

  function handleStop() {
    setEvent({ type: "STOP" });
    setIsrunning(0);
  }

  function handleResume() {
    setEvent({ type: "RESUME" });
    setIsrunning(1);
  }

  function handleReset() {
    setEvent({ type: "RESET" });
    setTime(0);
  }

  function timeConvert(milliseconds) {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const formattedTime = `${hours}:${padZero(minutes)}:${padZero(seconds)}`;
    return formattedTime;
  }

  function padZero(number) {
    return number.toString().padStart(2, "0");
  }

  useEffect(() => {
    let interVal = null;
    if (isrunning) {
      interVal = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interVal);
    }
    return () => {
      clearInterval(interVal);
    };
  }, [isrunning]);

  function reducer(state, action) {
    switch (action.type) {
      case "START":
        return (state = {
          startBtn: true,
          stopBtn: false,
          resumeBtn: true,
          resetBtn: false,
        });
      case "STOP":
        return (state = {
          startBtn: true,
          stopBtn: true,
          resumeBtn: false,
          resetBtn: false,
        });
      case "RESUME":
        return (state = {
          startBtn: true,
          stopBtn: false,
          resumeBtn: true,
          resetBtn: false,
        });
      case "RESET":
        return (state = {
          startBtn: false,
          stopBtn: true,
          resumeBtn: true,
          resetBtn: true,
        });
      default:
        return "Unknown action type";
    }
  }

  const initialState = {
    startBtn: false,
    stopBtn: true,
    resumeBtn: true,
    resetBtn: true,
  };

  const [event, setEvent] = useReducer(reducer, initialState);

  return (
    <>
      <div className="timer">
        <div className="time">
          {time ? timeConvert(time) + " " + time : "00:00:00"}
        </div>
        <div className="buttons">
          {!event.startBtn && (
            <button onClick={handleStart} className="start-btn">
              Start
            </button>
          )}
          {!event.resumeBtn && (
            <button onClick={handleResume} className="stop-btn">
              Resume
            </button>
          )}
          {!event.stopBtn && (
            <button onClick={handleStop} className="stop-btn">
              Stop
            </button>
          )}
          {!event.resetBtn && (
            <button onClick={handleReset} className="reset-btn">
              Reset
            </button>
          )}
        </div>
      </div>
    </>
  );
};
const container = document.getElementById("root");
createRoot(container).render(<App />);
