import { logUser } from '../actions/Login'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

import Login from '../components/Login'

const mapStateToProps = state => ({
  user: state.userReducer,
});

const mapDispatchToProps = dispatch => ({
  logUser: (username, password) => dispatch(logUser(username, password)),
})

const enhance = connect(mapStateToProps, mapDispatchToProps);

export default enhance(withRouter(Login));
