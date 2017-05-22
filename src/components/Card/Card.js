import React from 'react';
import './Card.css';

const Card = ({cardHeader}) => {
  return (
    <div className="col-md-4">
      <div className="card">
        <h1 className="text-center">{cardHeader}</h1>
      </div>
    </div>
  )
}

export default Card;
