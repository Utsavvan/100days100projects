const Card = ({ weatherData }) => {
  const {
    name,
    temp,
    humidity,
    pressure,
    currentWeather,
    speed,
    country,
    sunset,
  } = weatherData;

  let date = new Date(sunset * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;
  let time = new Date().toLocaleString();

  const regionNames = new Intl.DisplayNames(["en"], { type: "region" });

  return (
    <div className="info-card flex-cen">
      <div className="weather-icon flex-cen"></div>
      <div className="degree-info flex-cen">
        <div className="city-info flex-cen">
          <div className="section1 flex-cen">
            <p>{temp}&deg;</p>
          </div>
          <div className="section2">
            <p>{currentWeather}</p>
            <p>
              {name}, {country}
            </p>
          </div>
        </div>
        <div className="time">{time}</div>
      </div>
      <div className="additional-data flex-cen">
        <div className="data-card">
          <span className="icon"></span>
          <span className="text">
            {timeStr}
            <br />
            Sunset
          </span>
        </div>
        <div className="data-card">
          <span className="icon"></span>
          <span className="text">
            {humidity}
            <br />
            Humidity
          </span>
        </div>
        <div className="data-card">
          <span className="icon"></span>
          <span className="text">
            <span className="text">
              {pressure}
              <br />
              Pressure
            </span>
          </span>
        </div>
        <div className="data-card">
          <span className="icon"></span>
          <span className="text">
            <span className="text">
              {speed}
              <br />
              Speed
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
