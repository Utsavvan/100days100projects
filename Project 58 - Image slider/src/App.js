import { createRoot } from "react-dom/client";
import { useState, useEffect, useReducer } from "react";

import { data } from "./utils/config";
import "./App.css";

const App = () => {
  function reducer(state, action) {
    const updatedState = { ...state, ...action };

    if (updatedState.type === "left") {
      //   updatedState.value = updatedState.value + 500;
      if (updatedState.value >= 1000) {
        updatedState.value = 1000;
      } else {
        updatedState.value = updatedState.value + 500;
      }
    }

    if (updatedState.type === "right") {
      //   updatedState.value = updatedState.value - 500;
      if (updatedState.value <= -1000) {
        updatedState.value = 1000;
      } else {
        updatedState.value = updatedState.value - 500;
      }
    }

    return updatedState;
  }

  const initialArgs = {
    value: 1000,
  };

  const [trasitionValue, setTransitionValue] = useReducer(reducer, initialArgs);

  useEffect(() => {
    let intervalId = setInterval(() => {
      // debugger;
      setTransitionValue({ type: "right" });
    }, 3000);
    return () => {
      return clearInterval(intervalId);
    };
  }, []);

  function handleLeft() {
    setTransitionValue({ type: "left" });
  }

  function handleRight() {
    setTransitionValue({ type: "right" });
  }

  return (
    <>
      <div className="container flex center">
        <div className="arrow left-arrow" onClick={handleLeft}>
          <i className="fas fa-angle-double-left btn prev"></i>
        </div>
        <div className="slide-container">
          <div
            className="image-cards flex center"
            style={{ transform: `translateX(${trasitionValue.value}px)` }}
          >
            {data.map((data) => (
              <div className="image-card " key={data.id}>
                <img src={data.imageSource} alt="image" />
              </div>
            ))}
          </div>
        </div>
        <div className="arrow right-arrow" onClick={handleRight}>
          <i className="fas fa-angle-double-right btn next"></i>
        </div>
      </div>
    </>
  );
};

createRoot(root).render(<App />);
