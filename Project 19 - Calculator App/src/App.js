import { createRoot } from "react-dom/client";
import { useState } from "react";

import "./App.css";

const App = () => {
  const [calculateString, setCalculateString] = useState("");

  function handleClick(e) {
    setCalculateString(calculateString.concat(e.target.value));
  }

  function handleBackSpace() {
    setCalculateString(
      calculateString.substring(0, calculateString.length - 1)
    );
  }

  function handleClear() {
    setCalculateString("");
  }

  function handleSum() {
    try {
      const sum = eval(calculateString);
      setCalculateString(String(sum));
    } catch (e) {
      setCalculateString("Error put legit value");
    }
  }

  return (
    <>
      <div className="calculator-cont">
        <div className="output flex">
          <input type="text" value={calculateString} disabled />
        </div>
        <div className="input flex">
          <div className="button-grid">
            <button className="grid-items clear light" onClick={handleClear}>
              Clear
            </button>
            <button className="grid-items light" onClick={handleBackSpace}>
              Back
            </button>
            <button
              className="grid-items light"
              value="/"
              onClick={handleClick}
            >
              /
            </button>
            <button className="grid-items" value="7" onClick={handleClick}>
              7
            </button>
            <button className="grid-items" value="8" onClick={handleClick}>
              8
            </button>
            <button className="grid-items" value="9" onClick={handleClick}>
              9
            </button>
            <button
              className="grid-items light"
              value="*"
              onClick={handleClick}
            >
              *
            </button>
            <button className="grid-items" value="4" onClick={handleClick}>
              4
            </button>
            <button className="grid-items" value="5" onClick={handleClick}>
              5
            </button>
            <button className="grid-items" value="6" onClick={handleClick}>
              6
            </button>
            <button
              className="grid-items light"
              value="-"
              onClick={handleClick}
            >
              -
            </button>
            <button className="grid-items" value="1" onClick={handleClick}>
              1
            </button>
            <button className="grid-items" value="2" onClick={handleClick}>
              2
            </button>
            <button className="grid-items" value="3" onClick={handleClick}>
              3
            </button>
            <button
              className="grid-items light"
              value="+"
              onClick={handleClick}
            >
              +
            </button>
            <button className="grid-items" value="0" onClick={handleClick}>
              0
            </button>
            <button className="grid-items" value="." onClick={handleClick}>
              .
            </button>
            <button
              className="grid-items equal light"
              value="="
              onClick={handleSum}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
