import { createRoot } from "react-dom/client";
import { useState, useEffect } from "react";

import "./App.css";

const App = () => {
  const [translated, setTranslated] = useState();
  const [text, setText] = useState("");

  const [translateFrom, setTranslateFrom] = useState("en");
  const [translateTo, setTranslateTo] = useState("hi");

  useEffect(() => {
    const timer = setTimeout(() => getTranslated(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [text]);

  async function getTranslated() {
      console.log(text);
    const response = await fetch(
      `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`
    );
    const data = await response.json();
    setTranslated(data?.matches[0]?.translation);
  }

  function handleFrom(e) {
    setText(e.target.value);
  }

  //   function handleTo(e) {
  //     setTranslated(e.target.value);
  //   }

  return (
    <>
      <div className="container flex">
        <h1>Translate App</h1>
        <div className="translatefrom flex">
          <label htmlFor="translateFrom">From English</label>
          <textarea
            id="translateFrom"
            name="translateFrom"
            rows="4"
            value={text}
            onChange={handleFrom}
            cols="50"
          ></textarea>
        </div>

        <div className="translateto flex">
          <label htmlFor="translateTo">To Hindi</label>
          <textarea
            id="translateTo"
            name="translateTo"
            rows="4"
            value={translated}
            cols="50"
          >
            {console.log(
              "🚀 ~ file: App.js:37 ~ App ~ translated:",
              translated
            )}
          </textarea>
        </div>
      </div>
    </>
  );
};

createRoot(root).render(<App />);
