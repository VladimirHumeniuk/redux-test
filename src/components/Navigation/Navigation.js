import React from 'react';
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <header className="header">
      <Link className="header__link" to="/"> Home </Link>

      <nav>
        <Link className="header__link" to="/login"> Login </Link>
        <Link className="header__link" to="/registration"> registration </Link>
      </nav>
    </header>
  );
};

export default Navigation;
