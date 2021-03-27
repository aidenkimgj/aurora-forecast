import React, { useEffect, useState } from 'react';

const AuroraMaxLive = () => {
  const [img, setImg] = useState(null);

  const getAuroraMaxLive = () => {
    let d = new Date().getTime();
    let data = `https://auroramax.phys.ucalgary.ca/recent/recent_480p.jpg?${d}`;

    setImg(data);
  };

  const refreshImg = () => {
    setInterval(getAuroraMaxLive(), 3000);
  };

  useEffect(() => {
    getAuroraMaxLive();
  }, []);

  return (
    <>
      <div>
        <h1>AuroraMax Live</h1>
        <div className="aurora-live">
          <img alt="" id="aurora" src={img} onLoad={refreshImg} />
        </div>
      </div>
    </>
  );
};

export default AuroraMaxLive;
