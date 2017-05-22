import React, { Component } from 'react';
import Card from '../../components/Card/Card';

class Main extends Component{
  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center">React Dashboard</h1>
          </div>
        </div>
        <div className="row">
          <Card cardHeader="Simple" cardDescription="asd"/>
          <Card cardHeader="Fast" cardDescription="fgh"/>
          <Card cardHeader="Reliable" cardDescription="jkl"/>
        </div>
      </div>
    );
  }
}

export default Main;
