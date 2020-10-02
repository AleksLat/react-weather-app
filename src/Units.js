import React from "react";
import "./Units.css";

export default function Units() {
  return (
    <div className="Units">
      <span className="units">

      <button id="celsius-link" className="active">
      °C
    </button>{" "}
        |
        
        <button href="#" id="fahrenheit-link">
          °F
        </button>
      </span>
    </div>
  );
}
