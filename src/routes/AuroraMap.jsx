import React, { useCallback, useEffect, useState } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px',
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const AuroraMap = () => {
  const [map, setMap] = useState(null);
  const GOOGLE_API = process.env.REACT_APP_GOOGLE_API_KEY;

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: GOOGLE_API,
  });

  const onLoad = useCallback(map => {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(map => {
    setMap(null);
  }, []);

  // const getGoogleMap = async () => {
  //   const data = await axios.get(
  //     `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API}&callback=initMap&region=kr`
  //   );

  //   console.log(data, 'map data');
  // };

  // useEffect(() => {
  //   getGoogleMap();
  // }, []);
  return (
    <>
      <h1>AuroraMap</h1>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          <></>
        </GoogleMap>
      ) : (
        <></>
      )}
    </>
  );
};

export default AuroraMap;
