import React from "react";

import "./CityInput.css";

export default function CityInput() {
  return (
    <div className="col-6">
      <input
        type="text"
        id="city-input"
        placeholder="City name"
        autocomplete="off"
        className="form-control shadow-sm"
      />
    </div>
  );
}
