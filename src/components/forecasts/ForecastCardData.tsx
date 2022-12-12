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
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {city.name}, {city.country}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400 border-b pb-2 mb-4">
        {forecastData.weather[0].description.charAt(0).toUpperCase() +
          forecastData.weather[0].description.slice(1)}
      </p>
      <ul className="font-normal text-gray-700 dark:text-gray-400 list-disc ml-4">
        <li>
          Temp.: {forecastData.main.temp} {"\u00b0"}C
        </li>
        <li>
          Min: {forecastData.main.temp_min} {"\u00b0"}C
        </li>
        <li>
          Max: {forecastData.main.temp_max} {"\u00b0"}C
        </li>
        <li>
          Feels like: {forecastData.main.feels_like} {"\u00b0"}C
        </li>
        <li>Pressure: {forecastData.main.pressure} Pa</li>
        <li>Humidity: {forecastData.main.humidity}%</li>
      </ul>
    </div>
  );
};

export default ForecastCardData;
