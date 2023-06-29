import { createRoot } from "react-dom/client";
import { useReducer, useEffect } from "react";

const App = () => {
  function timerReducer(state, action) {
    const updatedState = { ...state, ...action };

    let { second, minute, hour, timerStorage } = updatedState;

    if (action.type === "start") {
      updatedState.second += 1;
      if (updatedState.second >= 60) {
        updatedState.minute += 1;
        updatedState.second = 0;
      }

      if (updatedState.minute >= 60) {
        updatedState.minute = 0;
        updatedState.second = 0;
        updatedState.hour += 1;
      }
    }

    if (action.type === "pause") {
      clearInterval(updatedState.timerStorage);
    }

    if (action.type === "store") {
      updatedState.timerStorage = action.timerStorage;
    }

    if (action.type === "reset") {
      updatedState.second = 0;
      updatedState.minute = 0;
      updatedState.hour = 0;
    }

    return updatedState;
  }

  const initialArgs = {
    second: 0,
    minute: 0,
    hour: 0,
    timerStorage: 0,
  };

  useEffect(() => {
    // start();
  }, []);

  const [timer, setTimer] = useReducer(timerReducer, initialArgs);

  function start() {
    let intervalStorage;

    intervalStorage = setInterval(() => {
      setTimer({ type: "start" });
    }, 1000);

    setTimer({ type: "store", timerStorage: intervalStorage });
  }

  function pause() {
    setTimer({ type: "pause" });
  }

  function reset() {
    setTimer({ type: "reset" });
  }

  return (
    <>
      <div className="container">
        <div className="stopwatch-card">
          <h1>Stopwatch</h1>
          <h2>{`${timer.hour} : ${timer.minute} : ${timer.second}`}</h2>
          <div className="buttons">
            <button className="btn start-btn" onClick={start}>
              Start
            </button>
            <button className="btn stop-btn" onClick={pause}>
              Stop
            </button>
            <button className="btn reset-btn" onClick={reset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

createRoot(root).render(<App />);
