import React from 'react';
import logo from '../../assets/tradeville.png';
import { Link } from 'react-router-dom';

interface Props {}

const Navbar = (props: Props) => {
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
        <div className="navbar-right">
          <div className="navbar-login">Login</div>
          <a href="" className="navbar-signup">
            Signup
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
