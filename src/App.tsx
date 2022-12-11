import React, { useState } from "react";
import SearchCities from "./components/search/SearchCities";
import Navbar from "./components/layout/Navbar";
import ForecastContext from "./context/ForecastContext";

const App: React.FC = () => {
  const [openSearch, setOpenSearch] = useState<boolean>(false);

  return (
    <ForecastContext>
      <div className="App">
        <Navbar openSearch={openSearch} setOpenSearch={setOpenSearch} />
        {openSearch && <SearchCities />}
      </div>
    </ForecastContext>
  );
};

export default App;
