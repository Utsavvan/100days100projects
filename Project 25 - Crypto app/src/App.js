import { createRoot } from "react-dom/client";
import { useState, useEffect } from "react";

import CryptoApi from "./utils/Apis/CryptoApi";

import "./App.css";


const App = () => {
    const [cryptoData, setCryptoData] = useState([]);
  const [filteredCryptoData, setFilteredCryptoData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    searchHandler();
  }, [search]);

  async function getData() {
    let data = await CryptoApi();
    setCryptoData(data);
    setFilteredCryptoData(data)
  }

  function searchHandler() {
    const filteredData = cryptoData.filter((cryptoData) => {
      return cryptoData.name.toUpperCase().includes(search.toUpperCase());
    });
    setFilteredCryptoData(filteredData);
  }

  return (
    <div className="container">
      <h1 className="flex center">Crypto App</h1>
      <div className="search-bar flex center">
        <input
          type="text"
          placeholder="search coins"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="crypto-list flex center">
        <table className="crypto-table">
          <thead>
            <tr>
              <th>Coin name</th>
              <th>Value</th>
              <th>1 day change</th>
              <th>Market cap.</th>
            </tr>
          </thead>
          <tbody>
            {filteredCryptoData.map((cryptoData) => {
              return (
                <tr>
                  <td>
                    <div className="item">
                      <img
                        className="crypto-image"
                        src={cryptoData.image}
                        alt=""
                      />
                      <span>{cryptoData.name}</span>
                    </div>
                  </td>
                  <td>Rs.{cryptoData.current_price}</td>
                  <td>{cryptoData.market_cap_change_percentage_24h}%</td>
                  <td>Rs.{cryptoData.market_cap}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

createRoot(document.getElementById("root")).render(<App />);
