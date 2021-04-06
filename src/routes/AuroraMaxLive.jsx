import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../store';

const AuroraMaxLive = () => {
  const [img, setImage] = useState(
    `https://auroramax.phys.ucalgary.ca/recent/recent_720p.jpg?${new Date().getTime()}`
  );
  const [page, setPage] = useState('AuroraMax Live');
  const dispatch = useDispatch();
  console.log(img, 'image');

  const getAuroraMaxLive = () => {
    let d = new Date().getTime();
    let data = `https://auroramax.phys.ucalgary.ca/recent/recent_720p.jpg?${d}`;
    setImage(data);
  };

  useEffect(() => {
    setInterval(() => getAuroraMaxLive(), 10000);
    dispatch(add(page));
    return () => {
      clearInterval();
    };
  }, []);

  return (
    <>
      <div>
        <h3>AuroraMax Live</h3>
        <div className="aurora-live" style={{ marginTop: '50px' }}>
          <img alt="" id="aurora" src={img} />
        </div>
      </div>
    </>
  );
};

export default AuroraMaxLive;
