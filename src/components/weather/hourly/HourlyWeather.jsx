import React, { useEffect, useState } from 'react';
import { Row, Col } from 'reactstrap';
import HourlyWeatherDetail from './HourlyWeatherDetail';

const HourlyWeather = ({ hourlyWeather, sunrise, sunset, offset, utc }) => {
  const [weather, setWeather] = useState([]);

  const nextFiveHours = () => {
    let arr = [];
    for (let i = 1; i < 6; i++) {
      arr = [...arr, hourlyWeather[i]];
    }
    setWeather(arr);
  };

  console.log('hourly weather ---->', weather);

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
          utc={utc}
        />
      ))}
    </>
  );
};

export default HourlyWeather;
