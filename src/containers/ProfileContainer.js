import { openProfile } from '../actions/Profile'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

import Profile from '../components/Profile/Profile'

const mapStateToProps = state => ({
  user: state.userReducer,
});

const mapDispatchToProps = dispatch => ({
  openProfile: (token) => dispatch(openProfile(token)),
})

const enhance = connect(mapStateToProps, mapDispatchToProps);

export default enhance(withRouter(Profile));
