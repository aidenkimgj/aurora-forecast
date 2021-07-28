import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'reactstrap';
import CurrentWeather from './CurrentWeather';
import DailyWeather from './daily/DailyWeather';
import HourlyWeather from './hourly/HourlyWeather';

const Weather = React.memo(({ location }) => {
  const [weather, setWeather] = useState();
  const [utc, setUTC] = useState();

  const OPENWEATHER_API = process.env.REACT_APP_OPENWEATHER_API_KEY;
  console.log(location, '날씨 컴포넌트');

  const getWeather = async () => {
    const data = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.lng}&exclude=minutely&units=metric&appid=${OPENWEATHER_API}`
    );
    getUTCTime();
    setWeather(data.data);
  };

  const getUTCTime = () => {
    const timeNow = new Date();
    const utcTime = timeNow.getTime() + timeNow.getTimezoneOffset() * 60 * 1000;
    setUTC(utcTime);
  };

  console.log('state의 날씨 ==>', weather);

  useEffect(() => {
    getWeather();
  }, [location]);

  return (
    <>
      {weather ? (
        <>
          <div className="weather">
            <h1>Weather Forecast</h1>
            <Row className="weather-current">
              <Col className="col-md-5 current">
                <CurrentWeather
                  currWeather={weather.current}
                  offset={weather.timezone_offset}
                  utc={utc}
                />
              </Col>
              <Col className="hourly">
                <HourlyWeather
                  hourlyWeather={weather.hourly}
                  sunrise={weather.current.sunrise}
                  sunset={weather.current.sunset}
                  offset={weather.timezone_offset}
                />
              </Col>
            </Row>
            <Row className="weather-daily">
              <Col>
                <DailyWeather
                  dailyWeather={weather.daily}
                  offset={weather.timezone_offset}
                  timezone={weather.timezone}
                  utc={utc}
                />
              </Col>
            </Row>
          </div>
        </>
      ) : (
        <h3>Weather is loading...</h3>
      )}
    </>
  );
});

export default Weather;
