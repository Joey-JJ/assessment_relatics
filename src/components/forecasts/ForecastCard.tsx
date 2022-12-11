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

  // Fetch forecast data at first render
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
    <Card className="m-4 w-80 sm:w-60" key={seed}>
      <div className="flex flex-col text-sm">
        <h2 className="text-lg font-bold">
          {city.name}, {city.country}
        </h2>
        <h3 className="text-slate-400 border-b border-slate-300 mb-2">
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
          Delete
        </Button>
      </Button.Group>
    </Card>
  );
};

export default ForecastCard;
