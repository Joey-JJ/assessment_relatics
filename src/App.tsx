import React, { useState } from "react";
import SearchCities from "./components/search/SearchCities";
import Navbar from "./components/layout/Navbar";
import ForecastContext from "./context/ForecastContext";
import Forecasts from "./components/forecasts/Forecasts";

const App: React.FC = () => {
  const [openSearch, setOpenSearch] = useState<boolean>(false);

  return (
    <ForecastContext>
      <div className="App min-h-screen bg-gradient-to-b from-sky-400 to-sky-200">
        <Navbar openSearch={openSearch} setOpenSearch={setOpenSearch} />
        {openSearch && <SearchCities />}
        <Forecasts />
      </div>
    </ForecastContext>
  );
};

export default App;
