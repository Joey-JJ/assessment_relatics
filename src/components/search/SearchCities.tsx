import React, { useState } from "react";
import CitiesList from "./CitiesList";
import SearchBar from "./SearchBar";
import type { City } from "../../types/City";

const SearchCities = () => {
  const [cities, setCities] = useState<City[]>([]);
  const [hasSearched, setHasSearched] = useState<boolean>(false);

  return (
    <div>
      <SearchBar setCities={setCities} setHasSearched={setHasSearched} />
      {cities.length > 0 && <CitiesList cities={cities} />}
      {cities.length === 0 && hasSearched && <p>No cities found</p>}
    </div>
  );
};

export default SearchCities;
