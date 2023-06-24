import { createRoot } from "react-dom/client";
import { useState, useEffect } from "react";

import "./App.css";

const careersArray = ["YouTuber", "Web Developer", "Freelancer", "Instructor"];

const App = () => {
  const [careers, setCareers] = useState("");

  const [index, setIndex] = useState(0);

  useEffect(() => {
    getCareer();
  }, [index]);

  function getCareer() {
    let currentCareer = careersArray[index].split("");

    function next() {
      setCareers((prev) => {
        return prev + currentCareer.shift();
      });

      if (currentCareer.length) {
        setTimeout(next, 400);
      } else {
        setCareers("");
        if (index >= careersArray.length - 1) {
          setIndex(0);
        } else {
          setIndex((prev) => {
            return prev + 1;
          });
        }
      }
    }
    next();
  }

  return (
    <>
      <div className="container">
        <h1>I am a {careers}</h1>
      </div>
    </>
  );
};

createRoot(root).render(<App />);
