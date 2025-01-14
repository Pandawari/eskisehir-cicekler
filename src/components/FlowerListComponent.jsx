import React from 'react';
import './FlowerListComponent.css';

const FlowerListComponent = ({ flowers, onFlowerClick }) => {
  return (
    <div className="flower-list">
      {flowers.map((flower, index) => (
        <div key={index} className="flower-item" onClick={() => onFlowerClick(flower)}>
          {flower.name}
        </div>
      ))}
    </div>
  );
};

export default FlowerListComponent;