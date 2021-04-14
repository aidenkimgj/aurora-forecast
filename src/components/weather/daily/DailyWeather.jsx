import React, { useEffect, useState } from 'react';
import { Col, Row } from 'reactstrap';
import DailyWeatherDetail from './DailyWeatherDetail';

const DailyWeather = ({ dailyWeather, offset, utc }) => {
  const [weather, setWeather] = useState([]);

  const nextSevenDays = () => {
    let arr = [];
    for (let i = 1; i < dailyWeather.length; i++) {
      arr = [...arr, dailyWeather[i]];
    }
    setWeather(arr);
  };

  useEffect(() => {
    nextSevenDays();
  }, [dailyWeather]);
  return (
    <>
      <h3>7 Days Weather</h3>
      <Row>
        {weather.map(detail => (
          <Col className="daily-weather">
            <DailyWeatherDetail
              key={detail.dt}
              daily={detail}
              offset={offset}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default DailyWeather;
