import React, { useEffect, useState } from 'react';
import HourlyWeatherDetail from './HourlyWeatherDetail';

const HourlyWeather = ({ hourlyWeather, sunrise, sunset, offset }) => {
  const [weather, setWeather] = useState([]);

  const nextFiveHours = () => {
    let arr = [];
    for (let i = 1; i < 6; i++) {
      arr = [...arr, hourlyWeather[i]];
    }
    setWeather(arr);
  };

  useEffect(() => {
    nextFiveHours();
  }, [hourlyWeather]);

  return (
    <>
      <h3>Hourly Weather</h3>
      {weather.map(detail => (
        <HourlyWeatherDetail
          key={detail.dt}
          weather={detail}
          sunrise={sunrise}
          sunset={sunset}
          offset={offset}
        />
      ))}
    </>
  );
};

export default HourlyWeather;
