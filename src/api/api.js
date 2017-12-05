import axios from 'axios'

export const regUserInServer = (username, email, password) => {
  return axios.post('https://test-api.live.gbksoft.net/rest/v1/user/register', {
    username,
    email,
    password,
  })
  .then(({ data }) => data);
};

export const logUserInServer = (username, password) => {
  return axios.post('https://test-api.live.gbksoft.net/rest/v1/user/login', {
    username,
    password
  })
  .then(({ data }) => data);
};

export const getCurrentUser = (token) => {
  return axios({
    method:'get',
    url:'https://test-api.live.gbksoft.net/rest/v1/user/current',
    headers: {
      Authorization: 'Bearer ' + token
    },
    responseType:'json'
  })
  .then(({ data }) => data);
}
