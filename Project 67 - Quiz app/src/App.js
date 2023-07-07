import { createRoot } from "react-dom/client";
import { useState, useEffect } from "react";

import { questionsData } from "./utils/config";

import "./App.css";

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState("");

  const [currentSelection, setCurrentSelection] = useState("");

  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [submitBtnDisabled, setSubmitBtnDisabled] = useState(false);

  useEffect(() => {
    setCurrentQuestion(1);
  }, []);

  function handleNextClick(id) {
    setAnswer("");
    setCurrentQuestion(() => {
      if (id >= questionsData.questions.length) {
        return id;
      }
      return id + 1;
    });
    setSubmitBtnDisabled(false);
    setBtnDisabled(true);
  }

  function handleSubmitClick(id, answer) {
    if (currentSelection === answer) {
      setAnswer("Correct answer");
      setScore((prev) => prev + 1);
    } else {
      setAnswer("Wrong answer");
      setScore((prev) => prev - 1);
    }
    setSubmitBtnDisabled(true);
    setBtnDisabled(false);
  }

  function handleOptionChange(e) {
    if (e.target.checked) {
      setCurrentSelection(e.target.value);
    }
  }

  return (
    <>
      <div className="container">
        <h1>Quiz app</h1>
        <p>Score : {score}</p>
        <p>{answer}</p>
        <div className="questions">
          {questionsData.questions.map((question) =>
            question.id === currentQuestion ? (
              <>
                <div className="question" key={question.id}>
                  <span>No : {question.id} </span>
                  {question.question}
                </div>
                <div className="options">
                  {question.options.map((option) => (
                    <>
                      <input
                        type="radio"
                        name="answers"
                        value={option}
                        onChange={(e) => {
                          handleOptionChange(e);
                        }}
                      />
                      <label htmlFor={option}>{option}</label>
                      <br />
                    </>
                  ))}
                </div>
                <div className="buttons">
                  <button
                    disabled={submitBtnDisabled}
                    onClick={() => {
                      handleSubmitClick(question.id, question.answer);
                    }}
                  >
                    Submit
                  </button>
                  <button
                    disabled={btnDisabled}
                    onClick={() => {
                      handleNextClick(question.id);
                    }}
                  >
                    Next
                  </button>
                </div>
              </>
            ) : null
          )}
        </div>
      </div>
    </>
  );
};

createRoot(root).render(<App />);
