import React, { useState, createContext, useContext } from "react";
import { City } from "../types/City";

interface ContextType {
  addedForecasts: City[];
  setAddedForecasts: React.Dispatch<React.SetStateAction<City[]>>;
}

// Create context with type
const Context = createContext<ContextType>({} as ContextType);

// Custom hook to use context
export const useForecastContext = () => useContext(Context);

interface Props {
  children: React.ReactNode;
}

// Context provider
const ForecastContext: React.FC<Props> = ({ children }) => {
  const [addedForecasts, setAddedForecasts] = useState<City[]>([]);

  return (
    <Context.Provider value={{ addedForecasts, setAddedForecasts }}>
      {children}
    </Context.Provider>
  );
};

export default ForecastContext;
