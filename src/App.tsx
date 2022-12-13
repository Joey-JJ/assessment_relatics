import React, { useState } from "react";
import Navbar from "./components/layout/Navbar";
import ForecastContext from "./context/ForecastContext";
import Forecasts from "./components/forecasts/Forecasts";
import SearchModal from "./components/search/SearchModal";

const App: React.FC = () => {
  const [openSearch, setOpenSearch] = useState<boolean>(false);

  return (
    <ForecastContext>
      <div className="App min-h-screen bg-gradient-to-b from-gray-900 to-slate-800">
        <Navbar openSearch={openSearch} setOpenSearch={setOpenSearch} />
        <Forecasts />
        <SearchModal openSearch={openSearch} setOpenSearch={setOpenSearch} />
      </div>
    </ForecastContext>
  );
};

export default App;
