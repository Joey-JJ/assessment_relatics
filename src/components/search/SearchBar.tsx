import React, { useState } from "react";
import { TextInput, Button } from "flowbite-react";
import type { City } from "../../types/City";

interface Props {
  setCities: React.Dispatch<React.SetStateAction<City[]>>;
}

const SearchBar: React.FC<Props> = ({ setCities }) => {
  const [city, setCity] = useState("");

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCity("");

    // Input validation
    if (city.trim().length === 0) {
      return;
    }

    // Fetch possible cities from api and parse the response
    const cityResponse = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=10&appid=f43255c624f037a1e2b6f0de2bf00498`
    );

    const cityData = await cityResponse.json();
    setCities(cityData);
  };
  return (
    <form
      onSubmit={submitHandler}
      className="flex px-10 py-4 gap-2 bg-slate-200"
    >
      <TextInput
        className="grow"
        placeholder="Enter a city"
        onChange={(e) => setCity(e.target.value)}
        value={city}
      />
      <Button type="submit">Search</Button>
    </form>
  );
};

export default SearchBar;
