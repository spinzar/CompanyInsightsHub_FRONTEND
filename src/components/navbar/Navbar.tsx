// src/components/navbar/Navbar.tsx

import React from 'react';
import logo from '../../assets/tradeville.png';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthenticationContext';

interface Props {}

const Navbar = (props: Props) => {
  const { isLoggedIn, user, logout} = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/">
          <img src={logo} alt="Tradeville" className="navbar-logo"/>
          </Link>
          <div className="navbar-links">
            <Link to="/search" className="navbar-link">
              Search
            </Link>
          </div>
        </div>
        {isLoggedIn() ? (
          <div className="navbar-right">
            <div className="navbar-login">
              <Link to="/login">{user?.username}</Link>
            </div>
            <a onClick={logout} className="navbar-signup">
              Log out
            </a>
          </div>
        ) : (
          <div className="navbar-right">
            <div className="navbar-login">
              <Link to="/login">Login</Link>
            </div>
            <Link to="/register" className="navbar-signup">
              Signup
            </Link>
          </div>
        )
        }
      </div>
    </nav>
  );
};

export default Navbar;
