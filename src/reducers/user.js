import { REG_USER } from '../constants/Registration';

const initialState = {
  username: '',
  email: '',
  isAuth: false,
};

const userReducer = (state = initialState, { type, user }) => {
  switch (type) {
    case REG_USER:
      console.log('REDUCER WORK');
      return Object.assign(state, user);

    default:
      return state;
  }
};

export default userReducer;
