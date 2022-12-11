import React, { useState, useEffect } from "react";
import type { City } from "../../types/City";
import type { ForecastData } from "../../types/ForecastData";

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
    <div>
      {city.name}, {city.country}, {forecastData.main.temp}
    </div>
  );
};

export default ForecastCard;
