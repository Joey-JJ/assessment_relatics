import React, { useState } from "react";
import { Button } from "flowbite-react";
import { useForecastContext } from "../../context/ForecastContext";
import { City } from "../../types/City";

interface Props {
  city: City;
}

export const CityResult: React.FC<Props> = ({ city }) => {
  const { setAddedForecasts } = useForecastContext();
  const [added, setAdded] = useState<boolean>(false);

  const addForecast = () => {
    setAddedForecasts((prev) => [city, ...prev]);
    setAdded(true);
  };

  return (
    <div className="p-2 border-b flex justify-between items-center">
      <h3>
        {city.name}, {city.country}
      </h3>
      <Button size="xs" disabled={added} onClick={addForecast}>
        Add
      </Button>
    </div>
  );
};
