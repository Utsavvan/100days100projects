import { createRoot } from "react-dom/client";
import { useReducer, useEffect } from "react";

import "./App.css";

const App = () => {
  const initialArgs = {
    purchasePrice: 0,
    downPayment: 0,
    repaymentTime: 0,
    interestRate: 0,
    loanAmount: 0,
    estPerMonth: 0,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "handle-purchase":
        return {
          ...state,
          purchasePrice: action.payload,
        };
      case "handle-payment":
        if (action.payload > state.purchasePrice) {
          return {
            ...state,
            downPayment: state.purchasePrice,
          };
        }
        return {
          ...state,
          downPayment: action.payload,
        };
      case "handle-repayment":
        return {
          ...state,
          repaymentTime: action.payload,
        };
      case "handle-interest":
        return {
          ...state,
          interestRate: action.payload,
        };
      case "handle-loan":
        return {
          ...state,
          loanAmount: action.payload,
        };
      case "handle-month":
        return {
          ...state,
          estPerMonth: action.payload,
        };
      default:
        return state;
    }
  };

  const [input, setInput] = useReducer(reducer, initialArgs);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleLoan();
      handleMonth();
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  function handleLoan() {
    setInput({
      type: "handle-loan",
      payload: input.purchasePrice - input.downPayment,
    });
  }

  function handleMonth() {
    let { loanAmount, interestRate, repaymentTime } = input;
    let repaymentMonths = repaymentTime * 12;
    let monthlyInterest = interestRate / 12;
    let output = loanAmount * monthlyInterest * (Math.pow(1 + monthlyInterest, repaymentMonths)) / (Math.pow(1 + monthlyInterest, repaymentMonths) - 1) || 0;

    setInput({ type: "handle-month", payload: output });
  }

  function handleInput(e) {
    setInput({
      type: e.target.dataset.handle,
      payload: Number(e.target.value),
    });
  }
console.log("rerender");
  return (
    <>
      <div className="container">
        <h1 className="flex center">Mortgage calculator</h1>

        <div className="calculator flex center">
          <div className="input-cont">
            <label htmlFor="purchase-price">
              Purchase price : {input.purchasePrice} $
            </label>
            <input
              type="range"
              name="purchase-price"
              id=""
              min="0"
              max="1000000"
              step="500"
              data-handle="handle-purchase"
              value={input.purchasePrice}
              onChange={handleInput}
            />
          </div>

          <div className="input-cont">
            <label htmlFor="down-payment">
              Down payment : {input.downPayment} $
            </label>
            <input
              type="range"
              name="down-payment"
              id=""
              min="0"
              max="1000000"
              data-handle="handle-payment"
              value={input.downPayment}
              onChange={handleInput}
              step="500"
            />
          </div>

          <div className="input-cont">
            <label htmlFor="repayment-time">
              Repayment time : {input.repaymentTime} years
            </label>
            <input
              type="range"
              name="repayment-time"
              id=""
              data-handle="handle-repayment"
              value={input.repaymentTime}
              onChange={handleInput}
              min="1"
              max="50"
            />
          </div>

          <div className="input-cont">
            <label htmlFor="interest-rate">
              Interest rate : {input.interestRate}%
            </label>
            <input
              type="range"
              name="interest-rate"
              id=""
              data-handle="handle-interest"
              value={input.interestRate}
              onChange={handleInput}
              min="1"
              max="25"
            />
          </div>
        </div>

        <div className="results flex center">
          <div className="output loan-output">
            <p>Loan amount : </p>
            <p>{input.loanAmount}</p>
          </div>

          <div className="output month-output">
            <p>Estimated pr. month : </p>
            <p>{input.estPerMonth}</p>
          </div>
        </div>
      </div>
    </>
  );
};

createRoot(root).render(<App />);
