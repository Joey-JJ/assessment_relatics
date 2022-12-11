import React, { useState, useEffect } from "react";
import type { City } from "../../types/City";
import type { ForecastData } from "../../types/ForecastData";
import { Card, Button } from "flowbite-react";

interface Props {
  city: City;
}

const ForecastCard: React.FC<Props> = ({ city }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [forecastData, setForecastData] = useState<ForecastData>(
    {} as ForecastData
  );

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
  }, [city.lat, city.lon]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Card className="m-4 w-max">
      <div className="flex flex-col items-center text-sm">
        <h2>
          <span className="font-bold">
            {city.name}, {city.country} -{" "}
          </span>
          {forecastData.weather[0].description.charAt(0).toUpperCase() +
            forecastData.weather[0].description.slice(1)}
        </h2>
        <p>
          Temp.: {forecastData.main.temp} (Min: {forecastData.main.temp_min}{" "}
          Max: {forecastData.main.temp_max})
        </p>
        <p>Feels like: {forecastData.main.feels_like}</p>
        <p>Pressure: {forecastData.main.pressure}</p>
        <p>Humidity: {forecastData.main.humidity}%</p>
      </div>
      <Button.Group className="flex justify-center">
        <Button size={"xs"}>Refresh</Button>
        <Button size={"xs"}>Delete</Button>
      </Button.Group>
    </Card>
  );
};

export default ForecastCard;
