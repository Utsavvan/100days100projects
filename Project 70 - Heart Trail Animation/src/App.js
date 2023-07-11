import { createRoot } from "react-dom/client";

import "./App.css";

const App = () => {
  function mouseMoveHandler(e) {
    let container = document.querySelector(".container");

    let mouseX = e.clientX;
    let mouseY = e.clientY;

    let span = document.createElement("span");
    container.appendChild(span);

    const size = Math.random() * 100;
    span.style.width = size + "px";
    span.style.height = size + "px";
    span.style.position = "absolute";
    span.style.left = mouseX + "px";

    span.style.top = mouseY + "px";

    setTimeout(() => {
      span.remove();
    }, 1000);
  }

  return (
    <>
      <div className="container" onMouseMove={(e) => mouseMoveHandler(e)}></div>
    </>
  );
};

createRoot(root).render(<App />);
