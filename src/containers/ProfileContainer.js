import { regUser } from '../actions/Registration'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

import Profile from '../components/Profile/Profile'

const mapStateToProps = state => ({
  user: state.userReducer,
});

const mapDispatchToProps = dispatch => ({
  regUser: (username, email, password) => dispatch(regUser(username, email, password)),
})

const enhance = connect(mapStateToProps, mapDispatchToProps);

export default enhance(withRouter(Profile));
