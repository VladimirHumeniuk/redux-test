import { GET_USER } from '../constants/Registration'
import axios from 'axios'

export const getUser = (username, email, password, isAuth = false) => {
  return axios.post(
    'https://test-api.live.gbksoft.net/rest/v1/user/register',
    {
      username,
      email,
      password
    }
  )
  .then((response) => {
    console.log('action ', response)
    if (response.status === 201) {
      return {
        type: GET_USER,
        user: {
          username: response.data.result.username,
          email: response.data.result.email,
          isAuth: true
        },
      }
    }
  })
}
