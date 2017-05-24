import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div className="col-md-4">
      <div className="card">
        <h1 className="text-center">{props.cardHeader}</h1>
        <p>{props.cardDescription}</p>
      </div>
    </div>
  )
}

export default Card;
