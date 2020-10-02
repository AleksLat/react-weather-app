import React from "react";
import "./Units.css";

export default function Units() {
  return (
    <div className="Units">
      <span className="units">
        <a href="#" id="celsius-link" className="active">
          °C
        </a>{" "}
        |
        <a href="#" id="fahrenheit-link">
          °F
        </a>
      </span>
    </div>
  );
}
