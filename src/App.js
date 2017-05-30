import React, { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainRoutes from './components/MainRoutes/MainRoutes';
import { BrowserRouter as Router } from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      error: null
    }
  }

  componentDidMount = () => {
    this.ws = new WebSocket("ws://localhost:8080")
    this.ws.onmessage = e => this.setState({ users: Object.values(JSON.parse(e.data)) });
    this.ws.onerror = e => this.setState({ error: 'Websocket error' });
    this.ws.onclose = e => !e.wasClean && this.setState({ error: `Websocket error: ${e.code} ${e.reason}` });
  }

  componentWillUnmount = () => {
    this.ws.close();
  }

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
