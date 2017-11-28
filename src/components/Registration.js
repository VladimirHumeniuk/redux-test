import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import Navigation from './Navigation/Navigation'

class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
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

  handleSubmit(event) {
    event.preventDefault();
    this.props.getUser(this.state.username, this.state.email, this.state.password);
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
