import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import mapStyles from '../assets/mapStyles';

const mapStyle = {
  width: '100%',
  height: '800px',
};
const GOOGLE_API = process.env.REACT_APP_GOOGLE_API_KEY;
const AuroraMap = ({ center, props }) => {
  console.log('current location', center);

  return (
    <>
      <h1>AuroraMap</h1>
      {/* <LoadScript googleMapsApiKey={GOOGLE_API} id="c9f683c11539dc9b">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={4}
          
        />
      </LoadScript> */}

      <Map
        containerStyle={mapStyle}
        google={props.google}
        styles={mapStyles.mapstyle}
        zoom={2}
        initialCenter={center}
      />
    </>
  );
};

export default GoogleApiWrapper({
  apiKey: GOOGLE_API,
})(AuroraMap);
