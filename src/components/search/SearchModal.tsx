import React, { useState, useEffect } from "react";
import { Modal, TextInput } from "flowbite-react";
import type { City } from "../../types/City";
import SearchResult from "./SearchResult";

interface Props {
  openSearch: boolean;
  setOpenSearch: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchModal: React.FC<Props> = ({ openSearch, setOpenSearch }) => {
  const [city, setCity] = useState<string>("");
  const [cities, setCities] = useState<City[]>([]);
  const [hasSearched, setHasSearched] = useState<boolean>(false);

  // Data fetching
  useEffect(() => {
    // Prevent api call on empty input
    if (city.trim().length === 0) {
      setCities([]);
      setHasSearched(false);
      return;
    }

    // Timer to prevent api calls on every key stroke
    const timer = setTimeout(async () => {
      try {
        const cityResponse = await fetch(
          `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=10&appid=${process.env.REACT_APP_API_KEY}`
        );

        const cityData = await cityResponse.json();
        setCities(cityData);
      } catch (error: any) {
        alert(error.message);
      } finally {
        setHasSearched(true);
      }
    }, 500);

    // Clear timer with cleanup
    return () => {
      clearTimeout(timer);
    };
  }, [city]);

  return (
    <Modal
      className="min-h-full"
      show={openSearch}
      onClose={() => {
        setOpenSearch(false);
        setHasSearched(false);
        setCity("");
      }}
    >
      <Modal.Header>Enter a city name</Modal.Header>
      <Modal.Body>
        <form
          className="flex gap-2 items-center justify-center"
          onSubmit={(e) => e.preventDefault()}
        >
          <TextInput
            sizing="sm"
            className="grow"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </form>

        {!hasSearched && (
          <div className="text-sm text-gray-400 text-center mt-4">
            Search for a city
          </div>
        )}
        {hasSearched && cities.length === 0 && (
          <div className="text-sm text-gray-400 text-center mt-4">
            No cities found
          </div>
        )}
        {hasSearched && cities.length > 0 && (
          <ul className="mt-4">
            {cities.map((city) => (
              <SearchResult
                city={city}
                key={city.lat.toString() + city.lon.toString()}
              />
            ))}
          </ul>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default SearchModal;
