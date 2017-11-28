import IS_AUTH from '../constants/Auth'

function checkAuth(status) {
  return {
    type: IS_AUTH,
    payload: status
  }
}
