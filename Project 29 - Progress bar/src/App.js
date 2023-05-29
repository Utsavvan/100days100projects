import { createRoot } from "react-dom/client";
import { useState, useReducer } from "react";

import "./App.css";

const App = () => {
  //   const [active, setActive] = useState(0);
  const steps = [0, 1, 2, 3, 4, 5];


  function reducer(state,action) {
    // if(action === steps.length-1){
    //     return action = steps.length-1;
    // }
    // return action

    if(action.type === "INCREAMENT"){
        if(state < steps.length - 1){
            return state+1
        }
        return state;
    }

    if(action.type === "DECREMENT"){
        if(state > 0){
            return state-1
        }
        return state;
    }

  }
  const initialArgs = 0;

  const [active, setActive] = useReducer(reducer, initialArgs);
  console.log("🚀 ~ file: App.js:28 ~ App ~ active:", active)


  function prebtnHandler() {
    setActive({type: "DECREMENT"});
  }

  function nextbtnHandler() {
    setActive({type: "INCREAMENT"});
  }

  return (
    <>
      <div className="progress-bar">
        <div className="steps flex center">
          {steps.map((step, i) => (
            <>
              <div
                className={`step flex center step-${i} ${
                  active >= i ? "activeStep" : "inactiveStep"
                }`}
              >
                <i className={`fa-solid ${
                  active >= i ? "fa-check" : "fa-xmark"
                }`}></i>
              </div>
              {i < steps.length - 1 ? (
                <hr
                  className={`line-${i + 1} ${
                    active >= i + 1 ? "activeLine" : "inactiveLine"
                  }`}
                />
              ) : null}
            </>
          ))}
        </div>
        <div className="steps-btn flex center">
          <div className="prev">
            <button onClick={prebtnHandler} className="btn prev-btn">
              <i className="fa-solid fa-arrow-left"></i>
            </button>
          </div>
          <div className="next">
            <button onClick={nextbtnHandler} className="btn next-btn">
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

createRoot(root).render(<App />);
