import React from "react";
import { useForecastContext } from "../../context/ForecastContext";
import ForecastCard from "./ForecastCard";
import type { City } from "../../types/City";

const Forecasts: React.FC = () => {
  const { addedForecasts } = useForecastContext();

  return (
    <div className="grid max-w-[90%] items-center mx-auto place-content-center justify-center lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
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
