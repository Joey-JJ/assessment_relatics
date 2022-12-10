import React, { useState } from "react";
import CitiesList from "./components/CitiesList";
import { SearchBar } from "./components/SearchBar";
import type { City } from "./types/City";

const App: React.FC = () => {
  const [cities, setCities] = useState<City[]>([]);

  return (
    <div className="App">
      <SearchBar setCities={setCities} />
      <CitiesList cities={cities} />
    </div>
  );
};

export default App;
