import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import Navigation from './Navigation/Navigation'

class Registration extends Component {
  state = {
    username: '',
    email: '',
    password: ''
  };

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

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { username, email, password } = this.state;
      await this.props.regUser(username, email, password);
      this.props.history.push('/login');
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div>
        <Navigation />

        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='username'
            value={this.state.username}
            onChange={this.handleChange}
            placeholder='User Name'
          />
          <input
            type='email'
            name='email'
            value={this.state.email}
            onChange={this.handleChange}
            placeholder='email'
          />
          <input
            type='password'
            name='password'
            value={this.state.password}
            onChange={this.handleChange}
            placeholder='password'
          />
          <button type='submit'> Submit </button>
        </form>
      </div>
    );
  }
}

export default withRouter(Registration);
