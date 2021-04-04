import axios from 'axios';
import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import mapStyles from '../assets/mapStyles';
import AnyReactComponent from '../components/Marker';

const GOOGLE_API = process.env.REACT_APP_GOOGLE_API_KEY2;

const BestLocations = ({ center }) => {
  const [location, setLocation] = useState([]);

  let arrayLocation = [];

  const getBestLocations = async () => {
    const locations = await axios.get(
      'https://api.auroras.live/v1/?type=locations'
    );
    console.log(locations.data);
    for (let i = 0; i < 17; i++) {
      arrayLocation = [...arrayLocation, locations.data[i]];
    }

    setLocation(arrayLocation);
  };

  const data = location.map(place => ({
    lat: place.lat,
    lng: place.long,
    info: place.description,
  }));

  console.log(data);

  useEffect(() => {
    getBestLocations();
  }, []);

  return (
    <>
      <h3>BestLocations</h3>

      <div style={{ height: '70vh', width: '100%', marginTop: '50px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: GOOGLE_API }}
          defaultCenter={center}
          defaultZoom={1}
          options={mapStyles}
        >
          {data.map(location => (
            <AnyReactComponent
              lat={location.lat}
              lng={location.lng}
              text={location.info}
            />
          ))}
        </GoogleMapReact>
      </div>
    </>
  );
};

export default BestLocations;
