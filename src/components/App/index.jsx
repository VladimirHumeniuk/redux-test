import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import RegistrationContainer from '../../containers/RegistrationContainer'
import ProfileContainer from '../../containers/ProfileContainer'
import LoginContainer from '../../containers/LoginContainer'
import Home from '../Home'

import './Main.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={LoginContainer} />
      <Route path="/registration" component={RegistrationContainer} />
      <Route path="/profile" component={ProfileContainer} />
    </Switch>
  </BrowserRouter>
);

export default App;
