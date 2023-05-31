import { createRoot } from "react-dom/client";
import { useState } from "react";

import "./App.css";

import { tabsData } from "./utils/data";

const App = () => {
  const [visibleTab, setVisibleTab] = useState(0);

  function handleClick(i) {
    setVisibleTab(i);
  }

  return (
    <div className="container flex center">
      <div className="image">
        <img
          className="image-wrapper"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.hdnicewallpapers.com%2FWalls%2FBig%2FNature%2520and%2520Landscape%2FBeautiful_Sunrising_Nature_Image.jpg&f=1&nofb=1"
          alt=""
        />
      </div>
      <div className="tabs ">
        <div className="tab flex">
          <div className="tab-btn flex center">
            {tabsData.map((tab, i) => (
              <button
                className={`tab-cards ${
                  visibleTab === i ? "active-btn" : "inactive-btn"
                }`}
                onClick={() => handleClick(i)}
              >
                {tab.name}
              </button>
            ))}
          </div>
          <div className="tab-content ">
            {tabsData.map((tab, i) =>
              visibleTab === i ? (
                <p>
                  <h3>{tab.name}</h3>
                  {tab.content}
                </p>
              ) : null
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

createRoot(root).render(<App />);
