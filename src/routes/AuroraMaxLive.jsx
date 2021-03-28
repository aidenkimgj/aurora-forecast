import React, { useEffect, useState } from 'react';

const AuroraMaxLive = () => {
  const [img, setImg] = useState(null);

  const getAuroraMaxLive = () => {
    let d = new Date().getTime();
    let data = `https://auroramax.phys.ucalgary.ca/recent/recent_720p.jpg?${d}`;

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
        <h3>AuroraMax Live</h3>
        <div className="aurora-live" style={{ marginTop: '50px' }}>
          <img alt="" id="aurora" src={img} onLoad={refreshImg} />
        </div>
      </div>
    </>
  );
};

export default AuroraMaxLive;
