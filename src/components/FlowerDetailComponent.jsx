import React from 'react';
import './FlowerDetailComponent.css';

const FlowerDetailComponent = ({ flower, onClose }) => {
  if (!flower) return null;

  return (
    <div className="flower-detail">
      <div className="image-container">
        <button className="close-button" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <img src={flower.image} alt={flower.name} className="flower-image" />
      </div>
      <div className="flower-description">
        <h2>{flower.name}</h2>
        <p>{flower.description}</p>
      </div>
      <audio controls className="flower-audio">
        <source src={flower.audio} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default FlowerDetailComponent;