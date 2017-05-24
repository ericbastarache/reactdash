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
        <Header />
          <MainRoutes />
        <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
