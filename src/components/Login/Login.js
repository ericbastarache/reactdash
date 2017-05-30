import React, { Component } from 'react';
import InputField from '../InputField/InputField';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-4">
            <div className="login-holder">
              <h1 className="text-center">Login</h1>
              <form onSubmit={this.handleSubmit} className="form-horizontal">
                <div className="form-group">
                  <label htmlFor="username">Username: </label>
                  <InputField name="username" type="text" className="form-control" onChange={this.handleChange} placeholder="Enter your username" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password: </label>
                  <InputField name="password" type="password" className="form-control" placeholder="Enter your password" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                  <button className="btn btn-primary">Sign In</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
