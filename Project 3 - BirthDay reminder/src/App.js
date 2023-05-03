import { createRoot } from "react-dom/client";
import React, { useState, useEffect } from "react";
import data from "./config/data";
import "./App.css";

const App = () => {
  const [peoples, setPeoples] = useState([...data]);

  function clearAll (){
    setPeoples([])
  }

  return (
    <>
      <div className="container">{peoples.length} birthdays today</div>
      <div className="container">
        {peoples.map((people) => (
          <div key={people.id}>
            <img className="people" src={people.image} alt="" />
            <p>{people.name}</p>
            <p>{people.age} Years</p>
          </div>
        ))}
      </div>
      <div>
        <button onClick={clearAll}>Clear All</button>
      </div>
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
