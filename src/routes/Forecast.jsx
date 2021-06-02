import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Button, Form, Input, Label } from 'reactstrap';
import Weather from '../components/weather/Weather';
import { useDispatch } from 'react-redux';
import { add } from '../store';
import Aurora from '../components/aurora/Aurora';

const Forecast = React.memo(({ position }) => {
  const [location, setLocation] = useState(position);
  const [city, setCity] = useState('');

  const resetValue = useRef(null);
  const page = 'Forecast';
  const dispatch = useDispatch();
  console.log('cityname ===>', city);
  const OPEN_CAGE_API = process.env.REACT_APP_OPENCAGE_API_KEY;
  const OPENWEATHER_API = process.env.REACT_APP_OPENWEATHER_API_KEY;

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
    resetValue.current.value = '';
  };

  useEffect(() => {
    // getAuroraForecast(location.lat, location.lng);
    getCityName();
    dispatch(add(page));
  }, [location]);

  return (
    <>
      <div className="search-form">
        <Form onSubmit={onSubmit} style={{ width: '300px' }}>
          <div className="search">
            <Label>
              <b>Find Location</b>
            </Label>
            <FontAwesomeIcon icon={faMapMarkerAlt} className="search-icon" />
            <Input
              id="search"
              name="search"
              onChange={searchCityName}
              placeholder={city}
              innerRef={resetValue}
            />
          </div>

          <Button className="search-button">Search</Button>
        </Form>
      </div>
      <h1>Weather Forecast</h1>
      <Weather location={location} />
      <h1>Aurora Forecast</h1>
      <Aurora location={location} />
    </>
  );
});

export default Forecast;
