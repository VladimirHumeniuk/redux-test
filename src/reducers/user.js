import { GET_USER } from '../constants/Registration'

const userReducer = (state = [], action) => {
  switch(action.type) {
    case GET_USER:
      return action.user

    default:
      return state
  }
}

export default userReducer
