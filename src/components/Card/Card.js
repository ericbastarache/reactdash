import React from 'react';
import './Card.css';

const Card = ({cardHeader, cardDescription}) => {
  return (
    <div className="col-md-4">
      <div className="card">
        <h1 className="text-center">{cardHeader}</h1>
        <p>{cardDescription}</p>
      </div>
    </div>
  )
}

export default Card;
