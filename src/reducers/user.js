import { REG_USER } from '../constants/Registration';

const initialState = {
  username: '',
  email: '',
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

    default:
      return state;
  }
};

export default userReducer;
