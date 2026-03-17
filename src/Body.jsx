import React from "react";
import "./Body.css";

export default function Body() {
  let weatherData = {
    city: "Berlin",
    temperature: 15,
    time: "09:37",
    description: "cloudy",
    icon: "☀️",
    humidity: 71,
    wind: 11,
  };

  return (
    <div className="current-weather">
      <div className="city-weather">
        <h1>{weatherData.city}</h1>
        <p className="current-details">
          <span>{weatherData.time}</span>, {weatherData.description} <br />
          Humidity: <strong>{weatherData.humidity} %</strong>, Wind:
          <strong id="wind-speed">{weatherData.wind} km/h</strong>
        </p>
      </div>
      <div className="current-temp">
        <span className="current-temp-icon">{weatherData.icon}</span>
        <span className="current-temp-value">{weatherData.temperature}</span>
        <span className="current-temp-unit">°C | °F</span>
      </div>
    </div>
  );
}
