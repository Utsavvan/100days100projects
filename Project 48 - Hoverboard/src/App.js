import { createRoot } from "react-dom/client";
import { useState, useEffect } from "react";

import { colorData } from "./utils/config";

import "./App.css";

const App = () => {
  const [color, setColor] = useState("white");
  const [curEle, setCurEle] = useState(0);

  function handleColor() {
    let randColor = colorData[Math.floor(Math.random() * colorData.length)];

    setColor(randColor);
  }

  //   useEffect(() => {
  //     handleColor();
  //   }, [curEle]);

  function handleMouseOver(e) {
    // setCurEle(i);
    e.target.style.background = color;
    e.target.style.boxShadow = `0px 0px 8px ${color}`;
    e.target.style.transition = "";
    handleColor();
  }

  return (
    <>
      <div className="container flex center">
        <div className="box-nodes flex">
          {Array(500)
            .fill(2)
            .map((card, i) => {
              return (
                <div
                  key={i}
                  className="box"
                  onMouseOver={(e) => {
                    handleMouseOver(e);
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "rgb(29, 29, 29)";
                    e.target.style.boxShadow = "none";
                    e.target.style.transition = "2s ease";
                    // e.target.style.boxShadow = "none";
                    // e.target.style.transitionDuration = "boxShadow 2s ease";
                  }}
                  style={{}}
                ></div>
              );
            })}
        </div>
      </div>
    </>
  );
};

createRoot(root).render(<App />);
