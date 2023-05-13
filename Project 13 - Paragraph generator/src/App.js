import { createRoot } from "react-dom/client";
import { Wordlist } from "./utils/WordList.js";

import { useState } from "react";

const App = () => {
  const [paragrahNumber, setParagraphNumber] = useState(0);

  const [content, setContent] = useState([]);

  function random(min, max) {
    return min + Math.random() * (max - min);
  }

  function generateParagraph() {
    const start = random(0, 50);

    const end = start + random(40, 50);

    const Paragraphs = Wordlist.slice(start, end).reduce((acc, cur) => {
      return acc + " " + cur;
    }, "");

    return Paragraphs;
  }

  function handleGenerate() {
    setContent([])
    for (let i=0; i < paragrahNumber; i++) {
      const data = generateParagraph();
      console.log("🚀 ~ file: App.js:30 ~ handleGenerate ~ data:", data)
      setContent((prevVal) => [...prevVal, data]);
    }
  }

  return (
    <>
      <h1>Paragraph generator</h1>
      <input
        type="number"
        value={paragrahNumber}
        onChange={(e) => setParagraphNumber(e.target.value)}
      />
      <button onClick={handleGenerate}>GENERATE</button>
      {
        content.map((content) => (
            <p>{content}</p>
        ))
      }
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
