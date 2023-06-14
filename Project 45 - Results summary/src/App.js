import { createRoot } from "react-dom/client";

import "./App.css";

const App = () => {
  return (
    <>
      <div className="containers flex center">
        <div className="card card1">
          <div className="card-title flex center">Your results</div>
          <div className="scoress flex center">
          <div className="circle-score flex center column">
            <p className="flex center">76</p>
            <p>of 100</p>
          </div>
          </div>
          <div className="score-type flex center">Great</div>
          <span className="score-stat flex center">
            <p>
              You scored higher than 65% of the people who have taken these
              tests
            </p>
          </span>
        </div>
        <div className="card card2">
          <div className="card2-title">Summary</div>
          <div className="scores">
            <div className="score score1">
              <i></i>
              <p>Reaction</p>
              <p><b>80 </b>/ 100</p>
            </div>
            <div className="score score2">
              <i></i>
              <p>Memory</p>
              <p><b>92 </b>/ 100</p>
            </div>
            <div className="score score3">
              <i></i>
              <p>Verbal</p>
              <p><b>61 </b>/ 100</p>
            </div>
            <div className="score score4">
              <i></i>
              <p>Visual</p>
              <p><b>72 </b>/ 100</p>
            </div>
          </div>
          <div className="button flex center">
            <button className="next-btn ">Countinue</button>
          </div>
        </div>
      </div>
    </>
  );
};

createRoot(root).render(<App />);
