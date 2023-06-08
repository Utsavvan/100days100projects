import { createRoot } from "react-dom/client";
import { useEffect, useState, useCallback } from "react";

import converterApi from "./utils/apis/ConverterApi";

const App = () => {
  const [baseRate, setBaseRate] = useState("");
  const [convertedCurrency, setConvertedCurrency] = useState("USD");
  const [convertedRate, setConvertedRate] = useState("");

  const [currencydata, setCurrencyData] = useState([]);

  const currencyOptions = Object.values(currencydata).map((data) => {
    return {
      code: data.code,
      name: data.name,
    };
  });

  const getData = useCallback(async () => {
    const fetchCurrencyData = await converterApi();
    setCurrencyData(fetchCurrencyData);
  }, []);

  function handleConverterChange(e) {
    setConvertedCurrency(e.target.value);
  }

  function convertCurrency() {
    const filterData = Object.values(currencydata).filter((data) => {
      return data.code === convertedCurrency;
    });

    setConvertedRate(filterData);
  }

  useEffect(() => {
    getData();
  }, [getData]);

  useEffect(() => {
    convertCurrency();
  }, [convertedCurrency]);

  return (
    <>
      <div className="container">
        <h1>Currency Converter</h1>
        <div className="currency-card">
          <div className="base-currency">
            <select name="" id="">
              <option value="In">Indian Rupee</option>
            </select>
            <input
              type="text"
              value={baseRate}
              onChange={(e) => {
                setBaseRate(e.target.value);
                convertCurrency();
              }}
            />
          </div>
          <div className="converted-currency">
            <select name="" id="" onChange={handleConverterChange}>
              {currencyOptions.map((currency) => (
                <option value={currency.code}>{currency.name}</option>
              ))}
            </select>
            <input
              type="text"
              value={baseRate ? (baseRate * convertedRate[0]?.rate) : 0}
              readOnly
            />
          </div>
          <div className="valuation-compare">
            <b>1 {convertedCurrency} = {convertedRate[0]?.inverseRate} INR</b>
          </div>
        </div>
      </div>
    </>
  );
};

createRoot(root).render(<App />);
