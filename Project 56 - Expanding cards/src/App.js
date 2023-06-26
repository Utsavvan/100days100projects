import { createRoot } from "react-dom/client";
import { useState } from "react";

import { data } from "./utils/config";

import "./App.css";

const App = () => {
  const [activate, isActivate] = useState("");

  function handleClick(id) {
    isActivate(id);
  }

  return (
    <>
      <div className="container flex center">
        <div className="cards flex center">
          {data.map((card) => (
            <div
              className={`card ${activate === card.id ? "active" : ""}`}
              key={card.id}
              onClick={() => {
                handleClick(card.id);
              }}
            >
              <img className={`card-image `} src={card.imagePath} alt="" />
              {activate === card.id ? (
                <div
                  className={`img-title ${
                    activate === card.id ? "active" : ""
                  }`}
                >
                  {card.description}
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

createRoot(root).render(<App />);
