import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Col, Label, Row } from 'reactstrap';
import { weatherIconDay, weatherIconNight } from './WeatherIcons';

const CurrentWeather = ({ currWeather, offset, utc }) => {
  const [sunrise, setSunrise] = useState(new Date(currWeather.sunrise * 1000));
  const [sunset, setSunset] = useState(new Date(currWeather.sunset * 1000));
  const [localTime, setLocalTime] = useState(new Date(currWeather.dt * 1000));
  const [clouds, setClouds] = useState(currWeather.clouds);
  const [windChill, setWindChill] = useState(currWeather.feels_like);
  const [humidity, setHumidity] = useState(currWeather.humidity);
  const [pressure, setPressure] = useState(currWeather.pressure);
  const [temp, setTemp] = useState(currWeather.temp);
  const [weather, setWeather] = useState(currWeather.weather);

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
          <Col className="curr-icon">
            {currWeather.sunset > currWeather.dt &&
            currWeather.sunrise < currWeather.dt
              ? weatherIconDay[weather[0].main]
              : weatherIconNight[weather[0].main]}
          </Col>
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
                {sunrise.getHours() < 10
                  ? `0${sunrise.getHours()}`
                  : sunrise.getHours()}
                :
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
          <Col className="curr-local">
            <Label>Local Time : </Label> {moment().format('MMM')}
            &nbsp;{localTime.getDate()}&nbsp;{localTime.getFullYear()} &nbsp;
            {localTime.getHours() < 10
              ? `0${localTime.getHours()}`
              : localTime.getHours()}
            :
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
