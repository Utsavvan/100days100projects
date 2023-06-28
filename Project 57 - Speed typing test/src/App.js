import { createRoot } from "react-dom/client";
import { useState, useReducer, useRef } from "react";

import "./App.css";

const App = () => {
  const [paragraphString, setHighlightedString] = useState(
    "However, you can specify a fixed length or percentage to control the initial size."
  );

  const [sliced, setSliced] = useState(0);

  const [input, setInput] = useState("");

  const [msg, setMsg] = useState("");

  const intervalTimer = useRef(null);

  function reducer(state, action) {
    if (action.type === "start") {
      let startingpoint;
      intervalTimer.current = setInterval(() => {
        startingpoint = new Date();
        // return { ...state, start: startingpoint };
      }, 1000);

      if (state.start === state.end) {
        intervalTimer.current = null;
      }
      return { ...state, start: startingpoint };

    }

    // if (action.type === "end") {
    //   let endingPoint = action.endtime;
    //   return { ...state, end: endingPoint };
    // }
  }

  const initialArgs = {
    seonds: 0,
    minutes: 0,
  };

  const [timer, setTimer] = useReducer(reducer, initialArgs);

  function handleInput(e) {
    setInput(e.target.value);
    if (paragraphString.includes(e.target.value)) {
      setMsg("");
      setSliced(e.target.value.length);

      if (paragraphString.length === e.target.value.length) {
        setMsg("You win");
      }
    } else {
      setMsg("Invalid input");
    }
  }

  function handleTimer(time) {
    // setTimer({ type: "end", endtime: time * 60 * 1000 });
    setTimer({ type: "start" });
  }

  return (
    <>
      <div className="container flex center column">
        <div className="buttons">
          <button
            onClick={() => {
              handleTimer(1);
            }}
          >
            1
          </button>
          <button
            onClick={() => {
              handleTimer(2);
            }}
          >
            2
          </button>
          <button
            onClick={() => {
              handleTimer(5);
            }}
          >
            5
          </button>
        </div>
        <div className="timer">{timer?.start}</div>
        <div className="paragraph">
          <p>{msg}</p>
          <p>
            <span
              style={{ color: "red", backgroundColor: "rgba(255, 0, 0, 0.26)" }}
            >
              {paragraphString.slice(0, sliced)}
            </span>
            {paragraphString.slice(sliced)}
          </p>
        </div>
        <div className="text-area">
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            value={input}
            onInput={handleInput}
            onPaste={(e) => e.preventDefault()}
          ></textarea>
        </div>
      </div>
    </>
  );
};

createRoot(root).render(<App />);
