import React, { Component } from 'react';
import './Main.css';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';

class Main extends Component {
  render () {
    return (
      <div>
        <section className="text-holder">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="text-center">React Dashboard</h1>
              </div>
            </div>
            <div className="row">
              <Card cardHeader="Simple" cardDescription="React Dash gives you valuable insights into who's doing what on your website."/>
              <Card cardHeader="Fast" cardDescription="With no page reloads, you can get realtime information as fast as you need it"/>
              <Card cardHeader="Reliable" cardDescription="React Dash is operational as long as you have an internet connection"/>
            </div>
          </div>
        </section>
        <section className="button-holder">
          <h1 className="text-center">Interesting buttons</h1>
          <div className="container">
            <div className="row">
              <Button buttonClassName="interesting" buttonText="Click Me!"/>
              <Button buttonClassName="show-content" buttonText="Show Me Something" />
              <Button buttonClassName="interesting" buttonText="Redirect to About"/>
            </div>
          </div>
        </section>
    </div>
    );
  }
}

export default Main;
