import { createRoot } from "react-dom/client";
import { useState } from "react";

import { cardData } from "./utils/config";

import logo from "../assets/img/logo.png";
import "./App.css";

const App = () => {
  const [visible, setVisible] = useState("");
  const [updatedData, setUpdatedData] = useState(cardData);
  console.log("🚀 ~ file: App.js:12 ~ App ~ updatedData:", updatedData);

  function handleClick(id) {
    if (visible === id) {
      setVisible("");
    } else {
      setVisible(id);
    }
  }

  function handleCloseClick(id) {
    const upData = updatedData.filter((data) => data.id != id);
    setUpdatedData([...upData]);
  }

  return (
    <>
      <div className="container">
        <div className="header flex">
          <div className="logo flex center">
            <img src={logo} alt="" />
          </div>
          <div className="menunames flex">
            <span>Home</span>
            <span>About</span>
            <span>Tours</span>
          </div>
        </div>
        <div className="cards flex">
          {updatedData.map((card) => (
            <div className="card" key={card.id}>
              <div className="image">
                <i
                  className="fas fa-window-close"
                  onClick={() => {
                    handleCloseClick(card.id);
                  }}
                ></i>
                <img src={card.imagesource} alt="" />
              </div>
              <div className="content">
                <h3>{card.title}</h3>
                <p>{card.caption}</p>
                <div className="info flex">
                  <p>info </p>
                  <i
                    className="fas fa-caret-square-down"
                    onClick={() => handleClick(card.id)}
                  ></i>
                </div>
                {visible === card.id ? (
                  <p className="tour-details">{card.paragraph}</p>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

createRoot(root).render(<App />);
