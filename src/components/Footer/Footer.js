import React from 'react';
import './Footer.css';

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <p className="text-center">{props.footerText}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
