import React from "react";

import "./WeatherData.css";

export default function WeatherData() {
  return (
    <div className="weatherData">
      <div className="col-4">
        <ul className="weatherData">
          <li>
            <span id="humidity"></span>%
          </li>
          <li id="pressure">
            <span>10</span>
            N/m2
          </li>
          <li>
            <span id="wind-speed"></span>
            km/hr
          </li>
        </ul>
      </div>
    </div>
  );
}
