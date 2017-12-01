import React, { Component } from 'react'

import Navigation from './Navigation/Navigation'

export default class Login extends Component {
  state = {
    username: '',
    password: ''
  };

  componentWillReceiveProps(nextProps) {
    const { isAuth } = nextProps.status;

    if (isAuth === "success") {
      this.props.history.push('/profile');
    }
  }

  handleChange = (event) => {
    switch(event.target.name) {
      case 'username':
        this.setState({ username: event.target.value });
        break;
      case 'password':
        this.setState({ password: event.target.value });
        break;
      default:
        console.log('error');
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { username, password } = this.state;
    this.props.logUser(username, password );
  }

  render() {
    const { username, password } = this.state;
    return (
      <div>
        <Navigation />

        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='username'
            value={username}
            onChange={this.handleChange}
            placeholder='User Name'
          />
          <input
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            placeholder='password'
          />
          <button type='submit'> Submit </button>
        </form>
      </div>
    );
  }
}
