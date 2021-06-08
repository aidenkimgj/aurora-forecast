import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';

const Aurora = React.memo(location => {
  const [info, setInfo] = useState();
  const getAuroraForecast = async (latitude, longitude) => {
    const data = await axios.get(
      `https://api.auroras.live/v1/?type=ace&lat=${latitude}&long=${longitude}&data=all`
    );
    const threedays = await axios.get(
      `https://api.auroras.live/v1/?type=ace&lat=${latitude}&long=${longitude}&data=threeday`
    );
    const probability = await axios.get(
      `https://api.auroras.live/v1/?type=ace&lat=${latitude}&long=${longitude}&data=probability`
    );
    console.log('오로라 데이터 all', data);
    console.log('오로라 데이터 threeday', threedays);
    console.log('오로라 데이터 probability', probability);
    setInfo(data);
  };

  useEffect(() => {
    getAuroraForecast(location.lat, location.lng);
  }, [location]);

  return (
    <>
      <h1>Aurora</h1>
    </>
  );
});

export default Aurora;
