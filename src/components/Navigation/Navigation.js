import React from 'react'
import { Link } from 'react-router-dom'

import './Navigation.css'

const Navigation = () => (
  <header className="header">
    <Link className="header__link" to="/"> Home </Link>

    <nav>
      <Link className="header__link" to="/login"> Login </Link>
      <Link className="header__link" to="/registration"> Registration </Link>
      <Link className="header__link" to="/profile"> Profile </Link>
    </nav>
  </header>
);

export default Navigation;
