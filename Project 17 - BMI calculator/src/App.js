import { useState ,useEffect ,useMemo} from "react";
import { createRoot } from "react-dom/client";

import './App.css';

const App = () => {
  const [weight, setWeight] = useState(60);
  const [height, setHeight] = useState(150);
  const [bmi,setBmi] = useState(0);

  function handleInput(e) {
    setWeight(e.target.value);
  }

  function handleHeight(e) {
    setHeight(e.target.value);
  }

//   useEffect(()=>{
//     getBmi()
//   },[weight,height])

  const output = useMemo(()=>{
    console.log('render')
    let heightInMeter = height / 100;
    const BMI = weight/(heightInMeter*heightInMeter);
    return BMI.toFixed(2)
  },[weight,height])

//   function getBmi(){
//     console.log('render')
//     let heightInMeter = height / 100;
//     const BMI = weight/(heightInMeter*heightInMeter);
//     setBmi(BMI.toFixed(2));
//   }

  return (
    <>
      <div className="card ">
        <div className="title flex-cen">
          <h1>Project 17: BMI CALCULATOR</h1>
        </div>
        <div className="range flex-cen column">
          <label htmlFor="weight">Weight : {weight} Kg</label>

          <input
            type="range"
            name="weight"
            id=""
            min="0"
            max="220"
            value={weight}
            onInput={handleInput}
          />
          <br />
          <label htmlFor="height">Height : {height} cm</label>
          <input
            type="range"
            name="height"
            id=""
            min="0"
            max="220"
            value={height}
            onInput={handleHeight}
          />
        </div>
        <div className="output flex-cen column">
            <p>Your BMI is a </p>
            <p className="output-div">{output}</p>
        </div>
      </div>
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
