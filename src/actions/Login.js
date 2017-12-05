import { LOGIN_USER } from '../constants/Login'
import { logUserInServer } from '../api/api'

export const logUser = async (username, password) => {
  const userData = await logUserInServer(username, password);

  return {
    type: LOGIN_USER,
    user: {
      token: userData.result.token,
      username: userData.result.username,
      email: userData.result.email,
      isAuth: true
    },
  };
};
