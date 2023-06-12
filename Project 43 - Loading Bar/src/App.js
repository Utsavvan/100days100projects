import { createRoot } from "react-dom/client";
import { useState, useEffect , useMemo } from "react";

import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(0);

  useEffect(() => {
    let timer = setInterval(() => {
      if (loading < 100) {
        setLoading(loading+1);
      }
    }, 20);

    return () => {
        clearInterval(timer);
    }
  }, [loading]);

  return (
    <>
      <div className="container">
        <div className="title">
          <h1>Loading</h1>
          <h2 className="loading-percentage">{loading}</h2>
        </div>
        <div
          className="loading-bar"
          style={{ "border-left": `${loading * 3}px solid green` }}
        ></div>
      </div>
    </>
  );
};

createRoot(root).render(<App />);
