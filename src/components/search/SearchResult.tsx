import { Button } from "flowbite-react";
import React, { useState } from "react";
import { useForecastContext } from "../../context/ForecastContext";
import type { City } from "../../types/City";

interface Props {
  city: City;
}

const SearchResult: React.FC<Props> = ({ city }) => {
  const { setAddedForecasts } = useForecastContext();
  const [added, setAdded] = useState<boolean>(false);

  const addForecast = () => {
    setAddedForecasts((prev) => [city, ...prev]);
    setAdded(true);
  };

  return (
    <div
      className={`flex justify-between py-2 ${
        !added ? "text-white" : "text-gray-400"
      } items-centerx`}
    >
      <p>
        {city.name}, {city.country}
      </p>
      <Button size="xs" disabled={added} onClick={addForecast}>
        Add
      </Button>
    </div>
  );
};

export default SearchResult;
