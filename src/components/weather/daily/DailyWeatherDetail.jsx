import React, { useEffect, useState } from 'react';
import { Row } from 'reactstrap';
import { weatherIconDay } from '../WeatherIcons';
import dateFormat from 'dateformat';

const DailyWeatherDetail = ({ daily, offset }) => {
  console.log('info===>', daily);
  const [weather, setWeather] = useState(daily);

  const description = () => {
    const exp = weather.weather[0].description;
    const firstLetter = exp.substring(0, 1);
    const restLetter = exp.substring(1);
    return `${firstLetter.toUpperCase()}${restLetter}`;
  };

  const timezone_offset = new Date().getTimezoneOffset() * 60;

  useEffect(() => {
    setWeather(daily);
  }, [daily]);
  return (
    <>
      <div>
        <div className="daily-date">
          <Row>
            {dateFormat(
              new Date((weather.dt + offset + timezone_offset) * 1000),
              'ddd'
            )}
          </Row>
        </div>
        <div className="daily-date">
          <Row>
            {dateFormat(
              new Date((weather.dt + offset + timezone_offset) * 1000),
              'mmm d'
            )}
          </Row>
        </div>

        <div className="daily-icon">
          <Row>{weatherIconDay[weather.weather[0].main]}</Row>
        </div>

        <div className="daily-detail">
          <div className="daily-temp">
            <Row>
              {Math.round(weather.temp.max)}°c /{Math.round(weather.temp.min)}°c
            </Row>
          </div>
          <div className="daily-description">
            <Row>{description()}</Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default DailyWeatherDetail;
