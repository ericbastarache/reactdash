import React, { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainRoutes from './components/MainRoutes/MainRoutes';
import { BrowserRouter as Router } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Header brandText="React Dashboard" />
          <MainRoutes />
        <Footer footerText="Copyright Eric Bastarache 2017" />
        </div>
      </Router>
    );
  }
}

export default App;
