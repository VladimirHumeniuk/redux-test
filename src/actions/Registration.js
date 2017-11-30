import { REG_USER } from '../constants/Registration';
import { regUserInServer } from '../api/api';

export const regUser = async (username, email, password) => {
  const userData = await regUserInServer(username, email, password);

  return {
    type: REG_USER,
    user: {
      username: userData.result.username,
      email: userData.result.email,
      isAuth: true,
    },
  };
};
