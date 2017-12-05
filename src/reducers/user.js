import { REG_USER } from '../constants/Registration'
import { LOGIN_USER } from '../constants/Login'
import { USER_PROFILE } from '../constants/Profile'

const initialState = {
  username: '',
  email: '',
  token: '',
  isAuth: false,
};

const userReducer = (state = initialState, { type, user }) => {
  switch (type) {
    case REG_USER:
      return Object.assign({}, state, {
        username: user.username,
        email: user.email,
        isAuth: user.isAuth,
      });

    case LOGIN_USER:
      return Object.assign({}, state, {
        token: user.token,
        isAuth: user.isAuth
      });

    case USER_PROFILE:
      return Object.assign({}, state, {
        isAuth: user.isAuth
      });

    default:
      return state;
  }
};

export default userReducer;
