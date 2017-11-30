import { REG_USER } from '../constants/Registration'

const userReducer = (state = {}, action) => {
  switch(action.type) {
    case REG_USER:
      return Object.assign(state, action.user);

    default:
      return state
  }
}

export default userReducer
