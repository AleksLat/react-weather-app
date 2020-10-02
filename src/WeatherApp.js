import React from "react";
import Footer from "./Footer";
import WeatherData from "./WeatherData";
import WeatherParam from "./WeatherParam";
import LargeImage from "./LargeImage";
import FlowerImage from "./FlowerImage";
import CurrentData from "./CurrentData";
import Units from "./Units";
import CurrentTemperature from "./CurrentTemperature";
import ChoosenCity from "./ChoosenCity";
import FormLocalSubmit from "./FormLocalSubmit";
import FormInfoSubmit from "./FormInfoSubmit";
import CityInput from "./CityInput";

export default function WeatherApp() {
  return (
    <div className="WeatherApp">
      <div className="weatherApp">
        <div className="enterCity">
          <form id="search-form">
            <div className="row">
              <CityInput />
              <FormInfoSubmit />
              <FormLocalSubmit />
            </div>
          </form>
        </div>
        <hr />
        <div className="result">
          <div className="row">
            <div className="col-6">
              <div className="weatherTemperature">
                <ChoosenCity />
                <CurrentTemperature />
                <Units />
                <CurrentData />
              </div>
            </div>
            <FlowerImage />
          </div>
        </div>
        <div class="row">
          <LargeImage />
          <WeatherParam />
          <WeatherData />
        </div>
      </div>

      <Footer />
    </div>
  );
}
