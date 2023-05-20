import { createRoot } from "react-dom/client";
import { useState, useEffect } from "react";

import "./App.css";

const App = () => {
  const [password, setPassword] = useState("");

  const [passwordRange, setPasswordRange] = useState(10);

  const [isUpperCase, setIsUpperCase] = useState(true);
  const [isLowerCase, setIsLowerCase] = useState(true);
  const [isNumber, setIsNumber] = useState(true);
  const [isSymbol, setIsSymbol] = useState(true);

  useEffect(() => {
    setPassword(generatePassWord());
  }, [passwordRange, isUpperCase, isLowerCase, isNumber, isSymbol]);

  const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";

  const NUMBER = "0123456789";

  const SYMBOLS = "!@#$%^&*";

  let characters = "";

  characters += isUpperCase ? UPPERCASE : "";
  characters += isLowerCase ? LOWERCASE : "";
  characters += isNumber ? NUMBER : "";
  characters += isSymbol ? SYMBOLS : "";

  function generateRandom(min, max) {
    let minimun = min || 10;
    let maximun = max || 45;
    let result = Math.floor(Math.random() * (maximun - minimun) + minimun);
    return result;
  }

  function generatePassWord() {
    let pass = "";
    for (let i = 0; i < passwordRange; i++) {
      pass += characters[generateRandom(1, characters.length - 1)];
    }
    return pass;
  }

  function copyBtnHandler() {
    navigator.clipboard.writeText(password);
  }

  function regenerateBtnHandler() {
    setPassword(generatePassWord());
  }

  return (
    <>
      <div className="pass-cont">
        <div className="title-card flex-cen">
          <h1>Strong Password Generator</h1>
          <p>Create a strong password with password generator</p>
        </div>
        <div className="output-card flex-cen">
          <p>{password}</p>
          <div className="utils-btn">
            <button onClick={copyBtnHandler} className="copy-btn">
              Copy
            </button>
            <button onClick={regenerateBtnHandler} className="regenerate-btn">
              Regenerate
            </button>
          </div>
        </div>
        <div className="generator-card">
          <div className="input-slider flex-cen">
            <label htmlFor="password-range">
              Use the slider and select from the options
            </label>
            <div className="slider">
              <input
                type="range"
                name="password-range"
                id=""
                min="0"
                max="30"
                value={passwordRange}
                onInput={(e) => setPasswordRange(e.target.value)}
              />
              <span>{passwordRange}</span>
            </div>
          </div>
          <div className="input-check flex-cen">
            <input
              type="checkbox"
              name="Uppercase"
              id=""
              checked={isUpperCase}
              onChange={(e) => setIsUpperCase(!isUpperCase)}
            />
            <label htmlFor="Uppercase">Uppercase</label>
            <input
              type="checkbox"
              name="Lowercase"
              id=""
              checked={isLowerCase}
              onChange={(e) => setIsLowerCase(!isLowerCase)}
            />
            <label htmlFor="Lowercase">Lowercase</label>
            <input
              type="checkbox"
              name="Symbols"
              id=""
              checked={isSymbol}
              onChange={(e) => setIsSymbol(!isSymbol)}
            />
            <label htmlFor="Symbols">Symbols</label>
            <input
              type="checkbox"
              name="Numbers"
              id=""
              checked={isNumber}
              readOnly
            />
            <label htmlFor="Numbers">Numbers</label>
          </div>
        </div>
      </div>
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
