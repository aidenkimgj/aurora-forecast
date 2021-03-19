import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Home = ({ position }) => {
  const [city, setCity] = useState('yellowknife');
  const [currentLocation, setCurrentLocation] = useState(position);

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
        console.log('city===>', city.toLowerCase());
        console.log('api ===>', OPEN_CAGE_API);
        const location = await axios.get(
          `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${OPEN_CAGE_API}`
        );

        console.log('location ===>', location);

        const {
          geometry: { lat, lng },
        } = location.data.results.find(
          result => result.components.city.toLowerCase() === city.toLowerCase()
        );

        getAuroraForecast(lat, lng);
        console.log('latitude ===>', lat);
        console.log('longitude ===>', lng);
      } else {
        getAuroraForecast(currentLocation.lat, currentLocation.lng);
      }
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
