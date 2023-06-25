import { createRoot } from "react-dom/client";
import { useState, useEffect } from "react";

import "./App.css";

import { data } from "./utils/config";

const App = () => {
  const [followers, setFollowers] = useState({
    Twitter: 0,
    Youtube: 0,
    Facebook: 0,
  });

  useEffect(() => {
    data.map((data) => {
      let delay = Math.floor(data.followers / 50);
      increment(data.followers, data.name, delay);
    });
  }, []);

  function increment(num = 100, target, delay) {
    if (num <= 0) {
      return;
    } else {
      setTimeout(() => {
        increment(num - delay, target, delay);
      }, 35);
      setFollowers((prev) => {
        prev[target] = prev[target] + delay;
        return { ...prev };
      });
    }
  }

  return (
    <>
      <div className="container flex center">
        <div className="cards flex center">
          {data.map((data, i) => (
            <div key={i} className="card flex center column">
              <i className={data.icon}></i>
              <div className="card-data" data-followers={data.followers}>
                {followers[data.name]}
              </div>
              <span>{data.description}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

createRoot(root).render(<App />);
