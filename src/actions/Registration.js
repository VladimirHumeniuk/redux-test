import axios from 'axios';

import { REG_USER } from '../constants/Registration';
// import { regUserInServer } from '../api/api';

export const regUser = (username, email, password) => {
  return axios.post('https://test-api.live.gbksoft.net/rest/v1/user/register', {
    username,
    email,
    password,
  })
    .then(({ data }) => ({
      type: REG_USER, 
      user: {
        username: data.result.username,
        email: data.result.email,
        isAuth: true,
      },
    }));
};
