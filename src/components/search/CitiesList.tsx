import React from "react";
import { CityResult } from "./CityResult";
import type { City } from "../../types/City";

interface Props {
  cities: City[];
}

const CitiesList: React.FC<Props> = ({ cities }) => {
  return (
    <>
      {cities.map((city: City) => (
        <CityResult
          key={city.lat.toString() + city.lon.toString()}
          name={city.name}
          country={city.country}
        />
      ))}
    </>
  );
};

export default CitiesList;
