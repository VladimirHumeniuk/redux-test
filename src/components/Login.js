import React from 'react'

import Navigation from './Navigation/Navigation'

const Login = () => (
  <div>
    <Navigation />

    <form>
      <input
        type='email'
        name='email'
        placeholder='email'
      />
      <input
        type='password'
        name='password'
        placeholder='password'
      />
      <button type='submit'> Login </button>
    </form>
  </div>
);


export default Login;
