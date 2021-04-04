import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Weather = ({ location }) => {
  const [weather, setWeather] = useState();
  const OPENWEATHER_API = process.env.REACT_APP_OPENWEATHER_API_KEY;
  console.log(location, '날씨 컴포넌트');

  const getWeather = async () => {
    const data = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.lng}&exclude=minutely&units=metric&appid=${OPENWEATHER_API}`
    );

    console.log('날씨 데이터 ====>', data);

    setWeather(data.data);
  };

  console.log('state의 날씨 ==>', weather);

  useEffect(() => {
    getWeather();
  }, [location]);

  return <></>;
};

export default Weather;
