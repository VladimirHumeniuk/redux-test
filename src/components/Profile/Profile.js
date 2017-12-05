import React, { Component } from 'react'

import Navigation from '../Navigation/Navigation'

import './Profile.css'

export default class Profile extends Component {
  state = {
    edit: false,
    username: '',
    email: '',
    token: this.props.user.token
  };

  componentWillMount(nextProps) {
    const { isAuth } = this.props.user;

    if (!isAuth) {
      this.props.history.push('/login');
    }
  }

  componentDidMount() {
    const { isAuth } = this.props.user;

    if (isAuth) {
      this.props.openProfile(this.state.token)

      this.setState((state) => ({
        username: this.props.user.username,
        email: this.props.user.email
      }));
    }
  }

  handleChange = () => {
    this.setState((state) => ({
      edit: !state.edit,
    }));
  }

  saveChange =() => {
    this.setState(() => ({
      edit: false
    }))
  }

  render() {
    if (!this.state.edit) {
      return (
        <div>
          <Navigation />

          <div className='content'>
            <div className="user-data">
              <div className="user-data__row">{this.state.username}</div>
              <div className="user-data__row">{this.state.email}</div>
              <button className="btn btn--primary" onClick={ this.handleChange }>Edit</button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <Navigation />

          <div className='content'>
            <div className="user-data">
              <textarea
                className="text"
                value={this.state.username}
                onChange={(e) => this.setState({username: e.target.value})}>
              </textarea>
              <textarea
                className="text"
                value={this.state.email}
                onChange={(e) => this.setState({email: e.target.value})}>
              </textarea>
              <button className="btn btn--primary" onClick={ this.saveChange }>Save</button>
            </div>
          </div>
        </div>
      )
    }
  }
}
