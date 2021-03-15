import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [city, setCity] = useState('Yellowknife');

  const OPEN_CAGE_API = process.env.REACT_APP_OPENCAGE_API_KEY;

  const getAuroraForecast = async (latitude, longitude) => {
    const data = await axios.get(
      `https://api.auroras.live/v1/?type=ace&lat=${latitude}&long=${longitude}&data=all`
    );
    console.log(data);
  };

  const getLocation = async () => {
    try {
      if (city !== '') {
        console.log('city===>', city);
        console.log('api ===>', OPEN_CAGE_API);
        const location = await axios.get(
          `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${OPEN_CAGE_API}`
        );

        console.log('location ===>', location);

        const {
          geometry: { lat, lng },
        } = location.data.results.find(
          result => result.components.city === city
        );

        getAuroraForecast(lat, lng);
        console.log('latitude ===>', lat);
        console.log('longitude ===>', lng);
      } else {
        navigator.geolocation.getCurrentPosition(position => {
          const {
            coords: { latitude, longitude },
          } = position;

          getAuroraForecast(latitude, longitude);
          console.log('latitude ===>', latitude);
          console.log('longitude ===>', longitude);
        });
      }
      // Current postion
    } catch (error) {
      alert("Can't find location");
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <>
      <h1>Home</h1>
    </>
  );
};
export default Home;
