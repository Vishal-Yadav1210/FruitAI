// components/FruitCard.js
import React from 'react';
import './FruitCard.css';

const FruitCard = ({ name, calories }) => {
  return (
    <div className="fruit-card">
      <h3>{name}</h3>
      <p>{calories}</p>
    </div>
  );
};

export default FruitCard;
