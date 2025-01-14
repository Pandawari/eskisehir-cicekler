import React from 'react';
import map1 from '../assets/maps/map1.jpeg'; // Import the JPEG map image

const MapComponent = ({ mapSrc }) => {
  return (
    <div>
      <img src={mapSrc || map1} alt="Map" style={{ width: '100%', height: 'auto' }} />
    </div>
  );
};

export default MapComponent;