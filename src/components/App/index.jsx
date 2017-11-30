import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import RegistrationContainer from '../../containers/RegistrationContainer';
import Login from '../Login';
import Home from '../Home';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/registration" component={RegistrationContainer} />
    </Switch>
  </BrowserRouter>
);

export default App;
