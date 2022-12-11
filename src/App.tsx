import React, { useState } from "react";
import { SearchCities } from "./components/SearchCities";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  const [openSearch, setOpenSearch] = useState<boolean>(false);

  return (
    <div className="App">
      <Navbar openSearch={openSearch} setOpenSearch={setOpenSearch} />
      {openSearch && <SearchCities />}
    </div>
  );
};

export default App;
