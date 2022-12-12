import React from "react";
import { Button } from "flowbite-react";
import { Refresh, Delete } from "../../icons/Icons";
import type { City } from "../../types/City";

interface Props {
  setAddedForecasts: React.Dispatch<React.SetStateAction<City[]>>;
  city: City;
  setSeed: React.Dispatch<React.SetStateAction<number>>;
}

export const ForecastCardButtons: React.FC<Props> = ({
  setAddedForecasts,
  city,
  setSeed,
}) => {
  const deleteForecast = () => {
    setAddedForecasts((prev) =>
      prev.filter(
        (forecast) => forecast.lat !== city.lat && forecast.lon !== city.lon
      )
    );
  };

  return (
    <Button.Group className="flex justify-center">
      <Button size={"xs"} onClick={() => setSeed(Math.random())}>
        <Refresh />
        Refresh
      </Button>
      <Button size={"xs"} onClick={deleteForecast}>
        <Delete />
        Delete
      </Button>
    </Button.Group>
  );
};
