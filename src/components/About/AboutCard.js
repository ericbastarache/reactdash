import React from 'react';
import './About.css';

const AboutCard = (props) => {
  return (
    <div className="col-md-4">
      <p>{props.content}</p>
    </div>
  );
}

export default AboutCard;
