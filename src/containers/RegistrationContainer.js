import { regUser } from '../actions/Registration'
import { connect } from 'react-redux'
import Registration from '../components/Registration'

const mapDispatchToProps = dispatch => ({
  regUser: (username, email, password) => dispatch(regUser(username, email, password)),
})

const RegistrationContainer = connect(null, mapDispatchToProps)(Registration);

export default RegistrationContainer;
