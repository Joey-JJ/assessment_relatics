import React, { useState, useEffect } from "react";
import type { City } from "../../types/City";
import type { ForecastData } from "../../types/ForecastData";
import { Card, Button } from "flowbite-react";
import { useForecastContext } from "../../context/ForecastContext";

interface Props {
  city: City;
}

const ForecastCard: React.FC<Props> = ({ city }) => {
  const { setAddedForecasts } = useForecastContext();

  const [loading, setLoading] = useState<boolean>(true);
  const [forecastData, setForecastData] = useState<ForecastData>(
    {} as ForecastData
  );

  // Added seed state to force re-render
  const [seed, setSeed] = useState<number>(0);

  // Fetch forecast data at first render and when seed changes
  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=f43255c624f037a1e2b6f0de2bf00498`
        );
        const data = await response.json();
        const { main, weather } = data;
        setForecastData({ main, weather });
      } catch (error: any) {
        alert(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchForecast();
  }, [city.lat, city.lon, seed]);

  // Loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Card className="m-4 w-80 sm:w-60 bg-white/80 shadow-xl" key={seed}>
      <div className="flex flex-col text-sm">
        <h2 className="text-lg font-bold">
          {city.name}, {city.country}
        </h2>
        <h3 className="text-slate-900 border-b border-slate-300 mb-2">
          {forecastData.weather[0].description.charAt(0).toUpperCase() +
            forecastData.weather[0].description.slice(1)}
        </h3>
        <p>Temp.: {forecastData.main.temp}</p>
        <p>Min: {forecastData.main.temp_min}</p>
        <p>Max: {forecastData.main.temp_max}</p>
        <p>Feels like: {forecastData.main.feels_like}</p>
        <p>Pressure: {forecastData.main.pressure}</p>
        <p>Humidity: {forecastData.main.humidity}%</p>
      </div>

      <Button.Group className="flex justify-center">
        <Button size={"xs"} onClick={() => setSeed(Math.random())}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4 pr-1"
          >
            <path
              fill-rule="evenodd"
              d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z"
              clip-rule="evenodd"
            />
          </svg>
          Refresh
        </Button>
        <Button
          size={"xs"}
          onClick={() => {
            setAddedForecasts((prev) =>
              prev.filter(
                (forecast) =>
                  forecast.lat !== city.lat && forecast.lon !== city.lon
              )
            );
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4 pr-1"
          >
            <path
              fill-rule="evenodd"
              d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z"
              clip-rule="evenodd"
            />
          </svg>
          Delete
        </Button>
      </Button.Group>
    </Card>
  );
};

export default ForecastCard;
