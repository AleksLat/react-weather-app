import React from "react";
import "./CurrentData.css";

export default function CurrentData() {
  return (
    <div className="CurrentData">
      <ul className="dateTime" id="dateTime-info">
        <li className="dateMonth" id="date">
          June 12
        </li>
        <li>
          <span id="description">Clouds</span>
        </li>
      </ul>
    </div>
  );
}
