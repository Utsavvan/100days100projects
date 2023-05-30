import { createRoot } from "react-dom/client";
import { useReducer, useState } from "react";

const App = () => {
  const [changeValue, setChangedValue] = useState("");

  function reducer(state, action) {
    const newEle = { ...state, ...action };

    if (action.type === "changeCel") {
      
      return {
        ...newEle,
        Fahrenheit: (newEle.Celsius * 1.8 + 32).toFixed(2),
        Kelvin: newEle.Celsius + 273.15,
      };
    }

    if (action.type === "changeFahr") {
      return {
        ...newEle,
        Celsius: ((newEle.Fahrenheit - 32) / 1.8).toFixed(2),
        Kelvin: (((newEle.Fahrenheit - 32) / 1.8 )+ 273.15).toFixed(2),
      };
    }

    if (action.type === "changeKel") {
      return {
        ...newEle,
        Fahrenheit: ((newEle.Kelvin - 273.15) * 1.8 + 32.0).toFixed(2),
        Celsius: (newEle.Kelvin - 273.15).toFixed(2),
      };
    }

    return newEle;
  }

  const initialArgs = {
    Celsius: 0,
    Fahrenheit: 0,
    Kelvin: 0,
  };

  const [tempertures, setTempertures] = useReducer(reducer, initialArgs);

  function handleCelsius(e) {
    setTempertures({ type: "changeCel", Celsius: Number(e.target.value) });
  }

  function handleFahrenheit(e) {
    setTempertures({ type: "changeFahr", Fahrenheit: Number(e.target.value) });
  }

  function handleKelvin(e) {
    setTempertures({ type: "changeKel", Kelvin: Number(e.target.value) });
  }

  return (
    <>
      <div className="container">
        <div className="content-card">
          <div className="title">
            <h1>Temperature Converter</h1>
          </div>
          <div className="input-fields">
            <label htmlFor="Celsius">Celsius</label>
            <input
              type="number"
              name="Celsius"
              value={tempertures.Celsius}
              onChange={handleCelsius}
            />
            <br />
            <label htmlFor="Fahrenheit">Fahrenheit</label>
            <input
              type="number"
              name="Fahrenheit"
              value={tempertures.Fahrenheit}
              onChange={handleFahrenheit}
            />
            <br />
            <label htmlFor="Kelvin">Kelvin</label>
            <input
              type="number"
              name="Kelvin"
              value={tempertures.Kelvin}
              onChange={handleKelvin}
            />
          </div>
        </div>
      </div>
    </>
  );
};

createRoot(root).render(<App />);
