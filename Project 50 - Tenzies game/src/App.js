import { createRoot } from "react-dom/client";

import { useState, useReducer, useEffect } from "react";

import "./App.css";

import TENZIES from "../assets/TENZIES.png";

const App = () => {
  const [playScreen, setPlayScreen] = useState(true);
  const [rollCounter, setRollCounter] = useState(0);

  const [freeze, setFreeze] = useState([]);

  const [winner, setWinner] = useState(false);

//   const [timer, setTimer] = useState({
//     minutes: 0,
//     seconds: 0,
//     totalSeconds: 55,
//   });

//   const [ active , setActive ] = useState(true)

  function reducer(state, actions) {

    if (actions.type === "roll") {
      let objKeys = Object.keys(state).filter((key) => !freeze.includes(key));

      let updatedState = { ...state };
      for (let index = 0; index < objKeys.length; index++) {
        const element = objKeys[index];
        updatedState[element] = Math.floor(Math.random() * 6 + 1);
      }
      return updatedState;
    }
  }

  const initialArgs = {
    dice1: 0,
    dice2: 0,
    dice3: 0,
    dice4: 0,
    dice5: 0,
    dice6: 0,
    dice7: 0,
    dice8: 0,
    dice9: 0,
    dice10: 0,
  };

  const [diceValues, setDiceValues] = useReducer(reducer, initialArgs);

  useEffect(() => {
    setDiceValues({ type: "roll" });
  }, []);

//   useEffect(() => {
//     let interVal = null;
//     if (active) {
//       interVal = setInterval(() => {
//         setTimer({
//           totalSeconds: timer.totalSeconds++,
//           minutes: Math.floor(timer.totalSeconds / 60),
//           seconds: timer.totalSeconds % 60,
//         });
//       }, 1000);
//     } else {
//       clearInterval(interVal);
//     }
//   }, [active]);

  function handlePlayBtn() {
    setPlayScreen(true);
  }

  function handleRollbtn() {
    setDiceValues({ type: "roll" });
    // debugger;
    setRollCounter((prevValue) => {
      return prevValue + 1;
    });
    setActive(false);
  }

  function handleNewGameBtn() {
    setFreeze([]);
    setRollCounter(0);
    setWinner(false);
    setDiceValues({ type: "roll" });
  }

  function handleDiceClick(diceKey) {
    setFreeze((preValue) => [...preValue, diceKey]);
    let objvalues = Object.values(diceValues);
    let uniqCheck = [...new Set(objvalues)];

    if (uniqCheck.length === 1) {
      setWinner(true);
    }
  }

  return (
    <>
      <div className="container flex center">
        <div className="card">
          {playScreen ? (
            <div className="game-page">
              <h1>Tenzies</h1>
              <div className="score-cards flex center">
                <div className="rolls-card">
                  <b>Rolls</b>
                  <p>{rollCounter}</p>
                </div>
                <div className="time-card">
                  <b>Time</b>
                  <p>
                    {/* {timer.minutes}:{timer.seconds} */}
                    00:00
                  </p>
                </div>
              </div>
              <div className="dices">
                <div className="dice-wrapper flex center">
                  {Object.keys(diceValues).map((dices, i) => (
                    <>
                      <div
                        className={`dice flex center ${
                          freeze.includes(dices) ? "dice-active" : ""
                        }`}
                        onClick={() => {
                          handleDiceClick(dices);
                        }}
                      >
                        {Array(diceValues[dices])
                          .fill(0)
                          .map((dots, i) => (
                            <div className="dots"></div>
                          ))}
                        {/* <div className="dots"></div>
                        <div className="dots"></div>
                        <div className="dots"></div>
                        <div className="dots"></div>
                        <div className="dots"></div> */}
                      </div>
                    </>
                  ))}
                </div>
              </div>
              <div className="roll-btn flex center">
                {winner ? (
                  <button onClick={handleNewGameBtn}>New game</button>
                ) : (
                  <button onClick={handleRollbtn}>Roll</button>
                )}
              </div>
            </div>
          ) : (
            <div className="start-page">
              <img src={TENZIES} alt="" />
              <p>Roll until all dice are the same.</p>
              <p>
                Click each die to freeze it at its current value between rolls.
              </p>
              <button onClick={handlePlayBtn}>Play</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

createRoot(root).render(<App />);
