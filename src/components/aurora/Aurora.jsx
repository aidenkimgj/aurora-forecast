import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';

const Aurora = React.memo(location => {
  const [data, setDate] = useState();
  const getAuroraForecast = async (latitude, longitude) => {
    const data = await axios.get(
      `https://api.auroras.live/v1/?type=ace&lat=${latitude}&long=${longitude}&data=all`
    );
    console.log('오로라 데이터', data);
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
