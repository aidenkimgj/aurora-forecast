import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AuroraMaxLive = () => {
  const [img, setImg] = useState(null);

  const getAuroraMaxLive = () => {
    let d = new Date().getTime();
    let data = `https://auroramax.phys.ucalgary.ca/recent/recent_480p.jpg?${d}`;

    setImg(data);
  };

  const refreshImg = () => {
    setInterval('getAuroraMaxLive()', 3000);
    getAuroraMaxLive();
  };

  useEffect(() => {
    getAuroraMaxLive();
  }, []);

  return (
    <>
      <div onMouseOver={refreshImg}>
        <h1>AuroraMaxLive</h1>
        <img alt="" id="aurora" src={img} class="full-width"></img>
      </div>
    </>
  );
};

export default AuroraMaxLive;
