import React, { useState } from "react";
import CitiesList from "./CitiesList";
import { SearchBar } from "./SearchBar";
import type { City } from "../types/City";

export const SearchCities = () => {
  const [cities, setCities] = useState<City[]>([]);

  return (
    <div>
      <SearchBar setCities={setCities} />
      <CitiesList cities={cities} />
    </div>
  );
};
