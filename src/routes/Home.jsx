import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Form, Input, Label } from 'reactstrap';
import Weather from '../components/weather/Weather';

const Home = ({ position }) => {
  const [location, setLocation] = useState(position);
  const [city, setCity] = useState('');

  console.log('cityname ===>', city);
  const OPEN_CAGE_API = process.env.REACT_APP_OPENCAGE_API_KEY;
  const OPENWEATHER_API = process.env.REACT_APP_OPENWEATHER_API_KEY;

  const getAuroraForecast = async (latitude, longitude) => {
    const data = await axios.get(
      `https://api.auroras.live/v1/?type=ace&lat=${latitude}&long=${longitude}&data=all`
    );
    console.log('오로라 데이터', data);
    getCityName();
  };

  const getCityLocation = async () => {
    console.log('city===>', city.toLowerCase());
    console.log('api ===>', OPEN_CAGE_API);
    try {
      const location = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${OPEN_CAGE_API}`
      );

      console.log('location ===>', location);

      // get city's lat, lng
      const {
        geometry: { lat, lng },
      } = location.data.results.find(
        result => result.components.city.toLowerCase() === city.toLowerCase()
      );

      setLocation({ lat: lat, lng: lng });
    } catch (error) {
      alert("Can't find city at all!");
    }
  };

  const getCityName = async () => {
    const {
      data: [{ name }],
    } = await axios.get(
      `http://api.openweathermap.org/geo/1.0/reverse?lat=${location.lat}&lon=${location.lng}&limit=1&appid=${OPENWEATHER_API}`
    );

    // take City name out from data
    // const {
    //   data: [{ name }],
    // } = data;

    setCity(name);
  };

  const current = () => `Current location is ${city}`;

  const searchCityName = e => {
    const {
      target: { value },
    } = e;
    setCity(value);
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log('wanted city name ==>', city);
    getCityLocation();
  };

  useEffect(() => {
    getAuroraForecast(location.lat, location.lng);
  }, [location]);

  return (
    <>
      <h1>Home</h1>

      <Form onSubmit={onSubmit} className="col-sm-6 col-md-4 offset-md-4">
        <div className="search">
          <Label>
            <b>Find Location</b>
          </Label>
          <FontAwesomeIcon icon={faMapMarkerAlt} className="search-icon" />
          <Input
            id="search"
            name="search"
            onChange={searchCityName}
            placeholder={current()}
          />
        </div>
      </Form>
      <Weather location={location} />
    </>
  );
};
export default Home;
