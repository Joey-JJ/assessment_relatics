import React from "react";
import { useForecastContext } from "../../context/ForecastContext";
import ForecastCard from "./ForecastCard";
import type { City } from "../../types/City";

const Forecasts: React.FC = () => {
  const { addedForecasts } = useForecastContext();

  return (
    <div className="grid">
      {addedForecasts.map((forecast: City) => (
        <ForecastCard
          key={forecast.lat.toString() + forecast.lon.toString()}
          city={forecast}
        />
      ))}
    </div>
  );
};

export default Forecasts;
