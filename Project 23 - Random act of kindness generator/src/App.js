import { createRoot } from "react-dom/client";
import { useEffect, useState } from "react";

import { randomActsOfKindness as rok } from "./utils/data.js";

import './App.css';

const App = () => {
  const [act, setAct] = useState("");

  useEffect(() => {
    handleClick();
  }, []);

  function getRandomAct() {
    const actNumber = Math.floor(Math.random() * rok.length);
    setAct(rok[actNumber]);
  }

  const handleClick = ( ) => {
    getRandomAct();
  }

  return (
    <>
      <div className="container">
        <h1 className='flex cen'>Random act of Kindness</h1>
        <section>
          <div className="card flex cen col">
            <div className="card-title">
              <h2>Kindness of the day</h2>
            </div>
            <div className="card-content">
              <p>{act}</p>
            </div>
            <div className="get-act-btn">
              <button onClick={handleClick}>Get New Act</button>
            </div>
            <div className="other-utils">
              <span className="copy-icon">
                <i className="fa-light fa-copy"></i>
              </span>
              <span className="share-icon">
                <i className="fa-light fa-share"></i>
              </span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

createRoot(root).render(<App />);
