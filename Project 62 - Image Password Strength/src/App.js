import { createRoot } from "react-dom/client";
import { useReducer } from "react";

import "./App.css";

const passPatterns = {
  hasUppercase: /[A-Z]/,
  hasLowercase: /[a-z]/,
  hasSpecialCharacters: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/,
  hasDigits: /\d/,
};

const App = () => {
  function inputReducer(state, action) {
    const updatedState = { ...state, ...action };

    if (updatedState.password) {
      let CheckUppercase = passPatterns.hasUppercase.test(
        updatedState.password
      );
      let CheckLowercase = passPatterns.hasLowercase.test(
        updatedState.password
      );
      let CheckSpecialCharacters = passPatterns.hasSpecialCharacters.test(
        updatedState.password
      );
      let CheckDigits = passPatterns.hasDigits.test(updatedState.password);

      // check if password is more than 8 characters
      if (
        updatedState.password.length >= 8 &&
        updatedState.hasEightChar === false
      ) {
        updatedState.strength += 20;
        updatedState.hasEightChar = true;
      }

      // check if password has a uppercase

      if (CheckUppercase && updatedState.hasUppercase === false) {
        updatedState.strength += 20;
        updatedState.hasUppercase = true;
      }

      // check if password has a lowercase

      if (CheckLowercase && updatedState.hasLowercase === false) {
        updatedState.strength += 20;
        updatedState.hasLowercase = true;
      }

      // check if password has a special character

      if (
        CheckSpecialCharacters &&
        updatedState.hasSpecialCharacters === false
      ) {
        updatedState.strength += 20;
        updatedState.hasSpecialCharacters = true;
      }

      // check if password has a digits

      if (CheckDigits && updatedState.hasDigits === false) {
        updatedState.strength += 20;
        updatedState.hasDigits = true;
      }
    }

    return updatedState;
  }

  const initialArgs = {
    mail: "",
    password: "",
    strength: 0,
    hasUppercase: false,
    hasLowercase: false,
    hasSpecialCharacters: false,
    hasDigits: false,
    hasEightChar: false,
  };

  const [inputs, setInput] = useReducer(inputReducer, initialArgs);

  function handleInput(e) {
    let dataId = e.target.dataset.id;
    setInput({ [dataId]: e.target.value });
  }

  return (
    <>
      <div
        className="container flex center"
        style={{ filter: `blur(${20 - inputs.strength / 5}px)` }}
      ></div>
      <div className="card ">
        <div className="title">
          <h1>Image Password Strength</h1>
          <p>Change the password to see the effect</p>
        </div>
        <div className="form-input flex column">
          <label htmlFor="">Email</label>
          <input
            type="text"
            className="input input-mail"
            placeholder="Enter your email"
            data-id="mail"
            value={inputs.mail}
            onChange={(e) => handleInput(e)}
          />
          <label htmlFor="">Password</label>
          <input
            type="text"
            className="input input-pass"
            placeholder="Enter your password"
            data-id="password"
            value={inputs.password}
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div className="submit-btn flex center">
          <button>SUBMIT</button>
        </div>
      </div>
    </>
  );
};

createRoot(root).render(<App />);
