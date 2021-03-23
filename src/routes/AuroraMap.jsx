import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import mapStyles from '../assets/mapStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const GOOGLE_API = process.env.REACT_APP_GOOGLE_API_KEY;

const AuroraMap = ({ center }) => {
  const [aurora, setAurora] = useState([]);

  const AnyReactComponent = () => (
    <FontAwesomeIcon icon={faMapMarkerAlt} size="3x" />
  );

  const getAuroraMap = async () => {
    const data = await axios.get(
      'https://services.swpc.noaa.gov/json/ovation_aurora_latest.json '
    );

    console.log(data);

    // Api에서 받은 것(용량이 너무큼)을 필터를 거쳐 다시 state로 저장

    setAurora(
      data.data.coordinates
        .map(location => {
          let temp = location[0];
          location[0] = location[1];
          location[1] = temp;
          return [location[0], location[1], location[2]];
        })
        .filter(coordinates => coordinates[2] > 0)
    );
  };

  const data = aurora.map(place => ({
    lat: place[0],
    lng: place[1],
    weight: place[2],
  }));

  const heatmapData = {
    positions: data,
    options: {
      radius: 40,
      opacity: 0.5,
    },
  };

  useEffect(() => {
    getAuroraMap();
  }, []);

  return (
    <>
      <h1>AuroraMap</h1>

      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: GOOGLE_API, libraries: ['visualization'] }}
          defaultCenter={center}
          defaultZoom={3}
          heatmap={heatmapData}
          options={mapStyles}
        >
          <AnyReactComponent lat={center.lat} lng={center.lng} />
        </GoogleMapReact>
      </div>
    </>
  );
};

export default AuroraMap;
