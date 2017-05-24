import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from '../Main/Main';
import About from '../About/About';
import Login from '../Login/Login';

const MainRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
    </Switch>
  )
}

export default MainRoutes;
