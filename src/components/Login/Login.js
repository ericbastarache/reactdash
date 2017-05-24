import React, { Component } from 'react';
import './Login.css';

class Login extends Component {

  handleChange () {

  }

  handleSubmit () {

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
                  <input name="username" className="form-control" type="text" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password: </label>
                  <input name="password" type="password" className="form-control" onChange={this.handleChange} />
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
