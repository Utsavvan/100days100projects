import { createRoot } from "react-dom/client";
import { useEffect ,useState} from "react";

import "./App.css";

const App = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    function increase(number){
        if(number >= 100 ){
            // setNumber(number);
            console.log("done");
            return number;
        }
        setTimeout(()=>{
            setNumber(number + 1);
            increase(number + 1);
        },30)
    }

    increase(number);
  }, []);

  return (
    <>
      <div className="wrapper">
        <div className="container" style={{ filter: `blur(${25 - (number / 4)}px)` }}></div>
        <div className="loader flex center" style={{ opacity: `${(100 - number)*0.01}` }}>
          {number}%
        </div>
      </div>
    </>
  );
};

createRoot(root).render(<App />);
