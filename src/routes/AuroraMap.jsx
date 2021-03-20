import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import mapStyles from '../assets/mapStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const GOOGLE_API = process.env.REACT_APP_GOOGLE_API_KEY;

const AuroraMap = ({ center }) => {
  const [auroraMap, setAuroraMap] = useState([]);

  const AnyReactComponent = () => (
    <FontAwesomeIcon icon={faMapMarkerAlt} size="3x" />
  );

  const AuroraColorComponent = ({ aurora }) => {
    return (
      <div
        style={{
          backgroundColor: 'red',
          width: '15px',
          height: '20px',
          opacity: '0.2',
        }}
      ></div>
    );
  };

  const getAuroraMap = async () => {
    const data = await axios.get(
      'https://services.swpc.noaa.gov/json/ovation_aurora_latest.json '
    );

    console.log(data);
    setAuroraMap(
      data.data.coordinates
        .map(location => location)
        .filter(coordinates => coordinates[2] !== 0)
    );
  };

  useEffect(() => {
    getAuroraMap();
  }, []);

  return (
    <>
      <h1>AuroraMap</h1>

      <div style={{ height: '80vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: GOOGLE_API }}
          defaultCenter={center}
          defaultZoom={4}
          options={mapStyles}
        >
          <AnyReactComponent lat={center.lat} lng={center.lng} />
          {auroraMap.map(location => (
            <AuroraColorComponent
              key={location}
              lat={location[1]}
              lng={location[0]}
              aurora={location[2]}
            />
          ))}
        </GoogleMapReact>
      </div>
    </>
  );
};

export default AuroraMap;
