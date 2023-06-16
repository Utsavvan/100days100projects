import { createRoot } from "react-dom/client";

import "./App.css";

import Card from "./components/card/card";

const App = () => {
  const data = [
    {
      icon: "fa-solid fa-suitcase",
      value: 15,
      description: "Years Exprerience",
    },
    {
      icon: "fa-solid fa-cloud",
      value: 260,
      description: "Websites Made",
    },
    {
      icon: "fa-brands fa-apple",
      value: 27,
      description: "Apps Made",
    },
  ];

  return (
    <div className="container">
      <div className="cards flex center">
        {data.map((data) => (
          <Card data={data} />
        ))}
      </div>
    </div>
  );
};

createRoot(root).render(<App />);
