import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'

import Registration from '../components/Registration'
import Login from '../components/Login'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Registration} />
      <Route path="/login" component={Login} />
    </Switch>
  </BrowserRouter>
)

export default App;
