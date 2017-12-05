import { USER_PROFILE } from '../constants/Profile'
import { getCurrentUser } from '../api/api'

export const openProfile = async (token) => {
  const userData = await getCurrentUser(token);

  return {
    type: USER_PROFILE,
    user: {
      username: userData.result.username,
      email: userData.result.email,
      isAuth: true
    },
  };
};
