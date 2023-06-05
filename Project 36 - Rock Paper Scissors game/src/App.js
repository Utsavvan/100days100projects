import { createRoot } from "react-dom/client";
import { useReducer, useEffect } from "react";

import "./App.css";

const App = () => {
  const playEvents = ["Rock", "Paper", "Scissor"];

  const resultEvent = ["Draw", "Win", "Lost"];

  function reducer(state, action) {
    const newEvent = { ...state, ...action };

    if (newEvent.computer === newEvent.user) {
      newEvent.result = resultEvent[0];
    }

    // rock vs others logic
    if (
      newEvent.computer === playEvents[0] &&
      newEvent.user !== playEvents[0]
    ) {
      if (newEvent.user === playEvents[1]) {
        newEvent.userScore++;
        newEvent.result = resultEvent[1];
      } else {
        newEvent.computerScore++;
        newEvent.result = resultEvent[2];
      }
    }

    // paper vs others logic

    if (
      newEvent.computer === playEvents[1] &&
      newEvent.user !== playEvents[1]
    ) {
      if (newEvent.user === playEvents[2]) {
        newEvent.userScore++;
        newEvent.result = resultEvent[1];
      } else {
        newEvent.computerScore++;
        newEvent.result = resultEvent[2];
      }
    }

    // scissor vs others logic

    if (
      newEvent.computer === playEvents[2] &&
      newEvent.user !== playEvents[2]
    ) {
      if (newEvent.user === playEvents[0]) {
        newEvent.userScore++;
        newEvent.result = resultEvent[1];
      } else {
        newEvent.computerScore++;
        newEvent.result = resultEvent[2];
      }
    }

    return newEvent;
  }

  const initialArgs = {
    computer: "",
    computerScore: 0,
    user: "",
    userScore: 0,
    result: "",
  };

  const [event, setEvent] = useReducer(reducer, initialArgs);

  function handleClick(e) {
    let computerValue =
      playEvents[Math.floor(Math.random() * playEvents.length)];

    let userValue = e.target.dataset.value;

    setEvent({ computer: computerValue, user: userValue });
  }

  return (
    <>
      <div className="container">
        <h1 className="flex center">Rock,Paper,Scissor game with computer</h1>
        <div className="cards flex center">
          <div className="card computer-card">
            <span className="title">Computer</span>
            <h2>{event.computer}</h2>
            <b>{event.computerScore}</b>
          </div>
          <div className="card player-card">
            <span className="title">Player</span>
            <h2>{event.user}</h2>
            <b>{event.userScore}</b>
          </div>
        </div>
        <div className="choise flex center">
          <b>Make a choise</b>
          <div className="choise-btn">
            <button data-value="Rock" onClick={handleClick}>
              Rock
            </button>
            <button data-value="Paper" onClick={handleClick}>
              Paper
            </button>
            <button data-value="Scissor" onClick={handleClick}>
              Scissor
            </button>
          </div>
        </div>
        <div className="result flex center">{event.result}</div>
      </div>
    </>
  );
};

createRoot(root).render(<App />);
