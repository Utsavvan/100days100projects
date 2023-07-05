import { createRoot } from "react-dom/client";

import { useState, useEffect } from "react";

import "./App.css";

const App = () => {
  const [show, setShow] = useState(false);

  const [keys, setkey] = useState({
    key: 0,
    keyCode: 0,
    code: 0,
  });

  useEffect(() => {
    window.addEventListener("keydown", listenOnKeyPress);
  }, []);

  function listenOnKeyPress(e) {
    setkey({
      key: e.key,
      keyCode: e.keyCode,
      code: e.code,
    });
    setShow(true);
  }

  return (
    <>
      <div className="container flex center">
        <div className="content">
          {show ? (
            <>
              <div className="cards flex">
                <div className="card one ">
                  <small className=" flex center">event.key</small>
                  <div className="content flex center">{keys.key}</div>
                </div>
                <div className="card two">
                  <small className=" flex center">event.keyCode</small>
                  <div className="content flex center">{keys.keyCode}</div>
                </div>
                <div className="card three">
                  <small className=" flex center">event.code</small>
                  <div className="content flex center">{keys.code}</div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="key-card flex center">
                Press any key to get the keyCode
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

createRoot(root).render(<App />);
