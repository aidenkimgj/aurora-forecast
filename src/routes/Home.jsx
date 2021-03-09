import axios from 'axios';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const getAuroraForecast = async (latitude, longitude) => {
    const data = await axios.get(
      `https://api.auroras.live/v1/?type=all&lat=${latitude}&long=${longitude}&forecast=false&threeday=false`
    );
    console.log(data);
  };

  const getLocation = async () => {
    try {
      await navigator.geolocation.getCurrentPosition(position => {
        const {
          coords: { latitude, longitude },
        } = position;

        getAuroraForecast(latitude, longitude);
        console.log('latitude ===>', latitude);
        console.log('longitude ===>', longitude);
      });
    } catch (error) {
      alert("Can't find you");
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <>
      <Link to="/bestlocations">Best Locations</Link>
    </>
  );
};
export default Home;
