import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';

const Marker = ({ text }) => {
  const [visiable, setVisiable] = useState(false);
  const info = () => setVisiable(!visiable);

  return (
    <>
      <div onMouseEnter={info} onMouseLeave={info}>
        <FontAwesomeIcon color="red" icon={faMapPin} size="3x" />
        {visiable ? <span style={{ color: 'white' }}>{text}</span> : null}
      </div>
    </>
  );
};

export default Marker;
