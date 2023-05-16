import { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

import Card from "./components/Card/Card.js";

import AppContext from "./utils/Context.js";
import data from "./utils/data.js";

import "./App.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.body.style.backgroundColor  = "#282c35";
    } else {
      document.body.style.backgroundColor  = "white";
    }
  }, [darkMode]);

  return (
    <AppContext.Provider
      value={{
        darkMode,
        setDarkMode,
      }}
    >
      <main className="flex-cen">
        <div className={darkMode ? "container dark" : "light"}>
          <div className="header">
            <div className="title">OverReacted</div>
            <div className="flex-cen">
              <button
              className="dark-mode-btn"
                onClick={() => {
                  setDarkMode(() => !darkMode);
                }}
              >
                Toggle
              </button>
            </div>
          </div>
          {data.map((data) => (
            <Card key={data.id} data={data} />
          ))}
        </div>
      </main>
    </AppContext.Provider>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
