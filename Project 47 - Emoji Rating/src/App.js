import { createRoot } from "react-dom/client";

import { useState } from "react";

import { data } from "./utils/data";

import "./App.css";

const App = () => {
  const [curEmoji, setCurEmoji] = useState({
    color:"red",
    icon:"far fa-angry fa-3x"
  });
  const [curStar, setCurStar] = useState(1);

  function handleClick(i) {
    setCurEmoji(data[i - 1]);
    setCurStar(i);
  }

  return (
    <>
      <div className="container flex center">
        <div className="card flex center column">
          <div className="emojis">
            <i style={{color: curEmoji.color}} className={`emoji ${curEmoji.icon}`}></i>
          </div>
          <div className="stars">
            {data.map((data, i) => (
              <i
                onClick={() => {
                  handleClick(i + 1);
                }}
                className={`star fa-solid fa-star ${
                  curStar >= i + 1
                    ? "start-icon-selected"
                    : "start-icon-notselected"
                }`}
              ></i>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

createRoot(root).render(<App />);
