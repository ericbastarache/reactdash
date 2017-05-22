import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <nav className="navbar navbar-dash" role="navigation">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">React Dashboard</a>
        </div>

        <div className="collapse navbar-collapse" id="navbar">
          <ul className="nav navbar-nav">
            <li className="active"><a href="#">Home</a></li>
            <li><a href="#"></a></li>

          </ul>

          <ul className="nav navbar-nav navbar-right">
            <li><a href="#"></a></li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
