import { createRoot } from "react-dom/client";
import { useState } from "react";

import "./App.css";

const App = () => {
  const [mousePositions, setMousePositions] = useState({
    x: 0,
    y: 0,
  });

  window.addEventListener("mousemove",(e)=>{
    setMousePositions({
        x: e.clientX,
        y: e.clientY,
    });
  })

  return (
    <>
      <div className="container flex center">
        <div className="cards flex">
          <div className="card">
            <div className="card-title x-position">Mouse X Prosition(px)</div>
            <div className="card-box flex center">{mousePositions.x}</div>
          </div>
          <div className="card">
            <div className="card-title y-position">Mouse Y Prosition(px)</div>
            <div className="card-box flex center">{mousePositions.y}</div>
          </div>
        </div>
      </div>
    </>
  );
};

createRoot(root).render(<App />);
