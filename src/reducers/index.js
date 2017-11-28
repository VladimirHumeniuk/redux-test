import { combineReducers } from 'redux'
import userReducer from './user'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  router: routerReducer,
  userReducer
})

export default rootReducer;
