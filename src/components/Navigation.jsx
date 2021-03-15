import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/bestlocations">Best Locations</Link>
      </li>
      <li>
        <Link to="/auroramap">Aurora Map</Link>
      </li>
      <li>
        <Link to="/gallery">Gallery</Link>
      </li>
    </ul>
  );
};

export default Navigation;
