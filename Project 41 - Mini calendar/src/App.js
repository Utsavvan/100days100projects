import { createRoot } from "react-dom/client";

import "./App.css";

const App = () => {
  const date = new Date().toDateString().split(" ");

  return (
    <>
      <div className="container">
            <div className="calender-card ">
                <div className="month">{date[0]}</div>
                <div className="date">
                    <div className="weekday">{date[1]}</div>
                    <div className="currentday">{date[2]}</div>
                    <div className="currentyear">{date[3]}</div>
                </div>
            </div>
      </div>
    </>
  );
};

createRoot(root).render(<App />);
