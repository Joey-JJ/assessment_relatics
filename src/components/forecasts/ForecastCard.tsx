import React, { useState, useEffect } from "react";
import type { City } from "../../types/City";
import type { ForecastData } from "../../types/ForecastData";
import { Card } from "flowbite-react";
import { useForecastContext } from "../../context/ForecastContext";
import ForecastCardData from "./ForecastCardData";
import { ForecastCardButtons } from "./ForecastCardButtons";

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
          `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
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
    <Card className="m-4 w-80" key={seed}>
      <img
        src={`http://openweathermap.org/img/wn/${forecastData.weather[0].icon}@2x.png`}
        alt="Weather icon"
        className="w-15 h-15 mx-auto"
      />

      <ForecastCardData forecastData={forecastData} city={city} />
      <ForecastCardButtons
        setAddedForecasts={setAddedForecasts}
        city={city}
        setSeed={setSeed}
      />
    </Card>
  );
};

export default ForecastCard;
