import { getUser } from '../actions/Registration'
import { connect } from 'react-redux'
import Registration from '../components/Registration'

const mapDispatchToProps = dispatch => ({
  getUser: (username, email, password) => dispatch(getUser(username, email, password))
})

const RegistrationContainer = connect(null, mapDispatchToProps)(Registration);

export default RegistrationContainer;
