import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'reactstrap';
import CurrentWeather from './CurrentWeather';
import DailyWeather from './DailyWeather';
import HourlyWeather from './HourlyWeather';

const Weather = ({ location }) => {
  const [weather, setWeather] = useState();
  const OPENWEATHER_API = process.env.REACT_APP_OPENWEATHER_API_KEY;
  console.log(location, '날씨 컴포넌트');

  const getWeather = async () => {
    const data = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.lng}&exclude=minutely&units=metric&appid=${OPENWEATHER_API}`
    );
    console.log('시간 ===>', new Date(data.data.current.dt * 1000));
    console.log('날씨 데이터 ====>', data);

    setWeather(data.data);
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
            <Row className="weather-current">
              <Col className="col-md-5 current">
                <CurrentWeather
                  currWeather={weather.current}
                  offset={weather.timezone_offset}
                />
              </Col>
              <Col className="hourly">
                <HourlyWeather hourlyWeather={weather.hourly} />
              </Col>
            </Row>
            <Row className="weather-daily">
              <Col>
                <DailyWeather dailyWeather={weather.daily} />
              </Col>
            </Row>
          </div>
        </>
      ) : (
        <h3>Weather is loading...</h3>
      )}
    </>
  );
};

export default Weather;
