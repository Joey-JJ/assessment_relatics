import React from "react";
import { useForecastContext } from "../../context/ForecastContext";
import type { City } from "../../types/City";

const Forecasts: React.FC = () => {
  const { addedForecasts } = useForecastContext();

  return (
    <div>
      {addedForecasts.map((forecast: City) => (
        <p key={forecast.lat.toString() + forecast.lon.toString()}>
          {forecast.name}
        </p>
      ))}
    </div>
  );
};

export default Forecasts;
