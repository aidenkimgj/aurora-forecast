import axios from 'axios';
import React, { useEffect } from 'react';

const BestLocations = () => {
  const getBestLocations = async () => {
    const locations = await axios.get(
      'https://api.auroras.live/v1/?type=locations'
    );
    console.log(locations);
  };

  useEffect(() => {
    getBestLocations();
  }, []);

  return (
    <>
      <div>BestLocations</div>
    </>
  );
};

export default BestLocations;
