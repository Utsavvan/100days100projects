import { createRoot } from "react-dom/client";
import { useState, useEffect } from "react";

import Card from "./components/Card/Card";

import "./App.css";

const App = () => {
  const [search, setSearch] = useState("pune");

  const [weatherData, setWeatherData] = useState({});

  async function handleSearch() {

    try {
        
        const API_KEY = `b7cdba968f0e8bd331f0a710bbfd1523`;
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${API_KEY}`;
    const response = await fetch(URL);
    const data = await response.json();
    console.log("🚀 ~ file: App.js:12 ~ handleSearch ~ data:", data);

    const { name } = data;
    const { temp, humidity, pressure } = data.main;
    const { main: currentWeather } = data.weather[0];
    const { speed } = data.wind;
    const { country, sunset } = data.sys;
    
    const weatherDataObject = {
        name,
        temp,
        humidity,
        pressure,
        currentWeather,
        speed,
        country,
        sunset,
    };
    
    setWeatherData(weatherDataObject);
    
    } catch (error) {
        console.error(error);
    }
}
useEffect(() => {
    handleSearch();
  }, []);

  return (
    <div className="container">
      <div className="searchbar flex-cen">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="search-btn" onClick={handleSearch}>Search</button>
      </div>
      <Card weatherData={weatherData} />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
