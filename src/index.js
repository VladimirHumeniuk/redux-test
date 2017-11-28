import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import { Provider } from 'react-redux'

import RegistrationContainer from './containers/RegistrationContainer'
import Login from './components/Login'
import Home from './components/Home'
import store from './store/configureStore'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/registration" component={RegistrationContainer} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
