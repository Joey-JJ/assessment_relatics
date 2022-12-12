import React from "react";
import type { City } from "../../types/City";
import type { ForecastData } from "../../types/ForecastData";

interface Props {
  city: City;
  forecastData: ForecastData;
}

const ForecastCardData: React.FC<Props> = ({ forecastData, city }) => {
  return (
    <div className="flex flex-col text-sm">
      <h2 className="text-lg font-bold">
        {city.name}, {city.country}
      </h2>
      <h3 className="text-slate-300 border-b border-slate-300 mb-2">
        {forecastData.weather[0].description.charAt(0).toUpperCase() +
          forecastData.weather[0].description.slice(1)}
      </h3>
      <ul>
        <li>Temp.: {forecastData.main.temp}</li>
        <li>Min: {forecastData.main.temp_min}</li>
        <li>Max: {forecastData.main.temp_max}</li>
        <li>Feels like: {forecastData.main.feels_like}</li>
        <li>Pressure: {forecastData.main.pressure}</li>
        <li>Humidity: {forecastData.main.humidity}%</li>
      </ul>
    </div>
  );
};

export default ForecastCardData;
