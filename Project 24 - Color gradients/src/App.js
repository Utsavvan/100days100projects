import { createRoot } from "react-dom/client";

import "./App.css";

import Card from "./components/Card/Card";
import {palettes } from "./utils/config";

const App = () => {
    
    console.log("🚀 ~ file: App.js:7 ~ palettes:", palettes)
  return (
    <>
      <div className="container">
        <h1 className="flex center">Color gradients</h1>
        <section>
          <div className="cards flex center">
            {
                palettes.map((color) => (
                    <Card color={color}/>
                ))
            }
          </div>
        </section>
      </div>
    </>
  );
};

createRoot(document.getElementById("root")).render(<App />);
