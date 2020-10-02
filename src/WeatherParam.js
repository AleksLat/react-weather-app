import React from "react";
import "./WeatherParam.css";

export default function WeatherParam() {
  return (
    <div className="col-6">
      <ul className="weatherParam">
        <li>Humidity</li>
        <li>Pressure</li>
        <li>Wind</li>
      </ul>
    </div>
  );
}
