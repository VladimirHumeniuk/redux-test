import React, { Component } from 'react'

import Navigation from './Navigation/Navigation'

export default class Registration extends Component {
  state = {
    username: '',
    email: '',
    password: ''
  };

  componentWillReceiveProps(nextProps) {
    const { isAuth } = nextProps.user;

    if (isAuth) {
      this.props.history.push('/login');
    }
  }

  handleChange = (event) => {
    switch(event.target.name) {
      case 'username':
        this.setState({ username: event.target.value });
        break;
      case 'email':
        this.setState({ email: event.target.value });
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
    const { username, email, password } = this.state;
    this.props.regUser(username, email, password);
  }

  render() {
    const { username, email, password } = this.state;
    return (
      <div>
        <Navigation />

        <div className='content'>
          <form onSubmit={this.handleSubmit}>
            <input
              type='text'
              name='username'
              value={username}
              onChange={this.handleChange}
              placeholder='User Name'
              required
            />
            <input
              type='email'
              name='email'
              value={email}
              onChange={this.handleChange}
              placeholder='Email'
              required
            />
            <input
              type='password'
              name='password'
              value={password}
              onChange={this.handleChange}
              placeholder='Password'
              required
            />
            <button type='submit'> Submit </button>
          </form>
        </div>
      </div>
    );
  }
}
