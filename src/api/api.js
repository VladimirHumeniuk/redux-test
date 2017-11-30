import axios from 'axios';

export const regUserInServer = (username, email, password) => {
  axios.post('https://test-api.live.gbksoft.net/rest/v1/user/register', {
    username,
    email,
    password
  })
    .then(({ data }) => console.log(data));
};