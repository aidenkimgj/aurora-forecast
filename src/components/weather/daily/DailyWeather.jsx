import React, { useEffect, useState } from 'react';
import { Col, Row } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { setOffset, setTimeZone } from '../../../store';
import DailyWeatherDetail from './DailyWeatherDetail';

const DailyWeather = React.memo(({ dailyWeather, offset, timezone }) => {
  const [weather, setWeather] = useState([]);
  const [time, setTime] = useState(offset);
  const [zone, setZone] = useState(timezone);

  const dispatch = useDispatch();

  const nextSevenDays = () => {
    let arr = [];
    for (let i = 1; i < dailyWeather.length; i++) {
      arr = [...arr, dailyWeather[i]];
    }
    setWeather(arr);
    setTime(offset);
    setZone(timezone);
    console.log(offset, '설정된 데일리');
  };

  dispatch(setOffset(time));
  dispatch(setTimeZone(zone));

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
});

export default DailyWeather;
