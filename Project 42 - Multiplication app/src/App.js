import { createRoot } from "react-dom/client";
import { useState, useReducer ,useEffect } from "react";

import "./App.css";

const App = () => {
  function reducer(state, action) {
    const newEvent = { ...structuredClone(state) , ...structuredClone(action)};
    if (action.type === "setQuestion") {
      newEvent.firstOprand = Math.floor(Math.random() * 10);
      newEvent.secondOprand = Math.floor(Math.random() * 10);
    }
    return newEvent;
  }

  const initilArgs = {
    firstOprand: 0,
    secondOprand: 1,
  };

  const [questions, setQuestions] = useReducer(reducer, initilArgs);

  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);

  function validateAnswer(e) {
    e.preventDefault();
    const submitedAnswer = questions.firstOprand * questions.secondOprand;
    if (answer === submitedAnswer) {
      setScore(score+1);
    } else {
      setScore(score-1);
    }
    setQuestions({ type: "setQuestion" });
    setAnswer("")
  }
  useEffect(()=>{
    setQuestions({ type: "setQuestion" });
  },[])

  return (
    <>
      <div className="container flex center">
        <div className="content-card">
          <form action="" onSubmit={validateAnswer}>
            <p className="score">score: {score}</p>
            <p className="question">
              What is {questions.firstOprand} multiply by {questions.secondOprand}?
            </p>
            <input
            className="input-answer"
            placeholder="Enter your answer"
              type="number"
              name=""
              id=""
              value={answer}
              onChange={(e) => setAnswer(Number(e.target.value))}
            />
            <br />
            <button className="submit-answer" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

createRoot(root).render(<App />);
