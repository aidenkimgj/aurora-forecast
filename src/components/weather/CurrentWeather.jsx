import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Col, Label, Row } from 'reactstrap';
import {
  WiDaySnowThunderstorm,
  WiDaySunny,
  WiCloudy,
  WiDayRainMix,
  WiDayRain,
  WiDaySnow,
  WiTornado,
  WiFog,
  WiDust,
  WiDayStormShowers,
  WiDayFog,
  WiSmoke,
} from 'weather-icons-react';

const timeNow = new Date();
const utc = timeNow.getTime() + timeNow.getTimezoneOffset() * 60 * 1000;
console.log(utc);
console.log('utc', utc / 1000);
console.log(new Date(utc));

const weatherName = {
  Thunderstorm: <WiDaySnowThunderstorm size={70} color="white" />,
  Drizzle: <WiDayRainMix size={70} color="white" />,
  Rain: <WiDayRain size={70} color="white" />,
  Snow: <WiDaySnow size={70} color="white" />,
  Tornado: <WiTornado size={70} color="white" />,
  Clear: <WiDaySunny size={80} color="white" />,
  Mist: <WiFog size={70} color="white" />,
  Smoke: <WiSmoke size={70} color="white" />,
  Haze: <WiDayFog size={70} color="white" />,
  Dust: <WiDust size={70} color="white" />,
  Ash: <WiDust size={70} color="white" />,
  Squall: <WiDayStormShowers size={70} color="white" />,
  Clouds: <WiCloudy size={70} color="white" />,
};

const CurrentWeather = ({ currWeather, offset }) => {
  const [sunrise, setSunrise] = useState(new Date(currWeather.sunrise * 1000));
  const [sunset, setSunset] = useState(new Date(currWeather.sunset * 1000));
  const [localTime, setLocalTime] = useState(new Date(currWeather.dt * 1000));
  const [clouds, setClouds] = useState(currWeather.clouds);
  const [windChill, setWindChill] = useState(currWeather.feels_like);
  const [humidity, setHumidity] = useState(currWeather.humidity);
  const [pressure, setPressure] = useState(currWeather.pressure);
  const [temp, setTemp] = useState(currWeather.temp);
  const [weather, setWeather] = useState(currWeather.weather);

  console.log('offset ====>', offset);

  const refresh = () => {
    setSunrise(
      new Date(utc + (offset + currWeather.sunrise - currWeather.dt) * 1000)
    );
    setSunset(
      new Date(utc + (offset + currWeather.sunset - currWeather.dt) * 1000)
    );
    setLocalTime(new Date(utc + offset * 1000));
    setClouds(currWeather.clouds);
    setWindChill(currWeather.feels_like);
    setHumidity(currWeather.humidity);
    setPressure(currWeather.pressure);
    setTemp(currWeather.temp);
    setWeather(currWeather.weather);
  };

  const description = () => {
    const exp = weather[0].description;
    const firstLetter = exp.substring(0, 1);
    const restLetter = exp.substring(1);
    return `${firstLetter.toUpperCase()}${restLetter}`;
  };

  useEffect(() => {
    refresh();
  }, [currWeather]);
  return (
    <>
      <h3>Current Weather</h3>
      <div className="curr-weather">
        <Row>
          <Col className="curr-icon">{weatherName[weather[0].main]}</Col>
          <Col className="curr-temp">{Math.round(temp)}°c</Col>
        </Row>
        <Row>
          <Col className="curr-description">{description()}</Col>
        </Row>
        <Row className="curr-info">
          <Col>
            <Row>
              <Col>
                <Label>Cloud Cover</Label>
              </Col>
              <Col className="col-right">{clouds}%</Col>
            </Row>
            <Row>
              <Col>
                <Label>Humidity</Label>
              </Col>
              <Col className="col-right">{humidity}%</Col>
            </Row>
            <Row>
              <Col>
                <Label>Sunrise</Label>
              </Col>
              <Col className="col-right">
                {sunrise.getHours()}:
                {sunrise.getMinutes() < 10
                  ? `0${sunrise.getMinutes()}`
                  : sunrise.getMinutes()}
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>
                <Label>RealFeel</Label>
              </Col>
              <Col className="col-right">{Math.round(windChill)}°c</Col>
            </Row>
            <Row>
              <Col>
                <Label>Pressure</Label>
              </Col>
              <Col className="col-right">{pressure} hPa</Col>
            </Row>
            <Row>
              <Col>
                <Label>Sunset</Label>
              </Col>
              <Col className="col-right">
                {sunset.getHours()}:
                {sunset.getMinutes() < 10
                  ? `0${sunset.getMinutes()}`
                  : sunset.getMinutes()}
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col className="curr-description">
            <Label>Local Time : </Label> {moment().format('MMM')}
            &nbsp;{localTime.getDate()} &nbsp;{localTime.getFullYear()}{' '}
            {localTime.getHours()}:
            {localTime.getMinutes() < 10
              ? `0${localTime.getMinutes()}`
              : localTime.getMinutes()}
          </Col>
        </Row>
      </div>
    </>
  );
};

export default CurrentWeather;
