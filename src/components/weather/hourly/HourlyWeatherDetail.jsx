import React, { useEffect, useState } from 'react';
import { Col, Row } from 'reactstrap';
import { weatherIconDay, weatherIconNight } from '../WeatherIcons';

const HourlyWeatherDetail = ({ weather, sunrise, sunset, offset }) => {
  const [hweather, setHWeather] = useState(weather.weather[0]);

  const description = () => {
    const exp = hweather.description;
    const firstLetter = exp.substring(0, 1);
    const restLetter = exp.substring(1);
    return `${firstLetter.toUpperCase()}${restLetter}`;
  };

  const timezone_offset = new Date().getTimezoneOffset() * 60;

  useEffect(() => {
    setHWeather(weather.weather[0]);
  }, [weather]);

  return (
    <>
      <Row>
        <div className="hourly-time">
          <div>
            <Col>
              {new Date(
                (weather.dt + offset + timezone_offset) * 1000
              ).getMonth() + 1}
              /
              {new Date(
                (weather.dt + offset + timezone_offset) * 1000
              ).getDate()}
              &nbsp;
              {new Date(
                (weather.dt + offset + timezone_offset) * 1000
              ).getHours() < 10
                ? `0${new Date(
                    (weather.dt + offset + timezone_offset) * 1000
                  ).getHours()}`
                : new Date(
                    (weather.dt + offset + timezone_offset) * 1000
                  ).getHours()}
              :00
            </Col>
          </div>
        </div>

        <Col id="hourly-icon">
          {sunset > weather.dt && sunrise < weather.dt
            ? weatherIconDay[weather.weather[0].main]
            : weatherIconNight[weather.weather[0].main]}
        </Col>
        <div className="hourly-temp">
          <div>
            <Col className="">{Math.round(weather.temp)}°c</Col>
          </div>
        </div>

        <div className="hourly-windchill">
          <div>
            <Col>RealFeel&reg; {Math.round(weather.feels_like)}°c</Col>
          </div>
        </div>
        <div className="hourly-description">
          <div>
            <Col>{description()}</Col>
          </div>
        </div>
      </Row>
    </>
  );
};

export default HourlyWeatherDetail;
