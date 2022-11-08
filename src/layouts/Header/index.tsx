import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import Logo from '../../assets/images/logo.png';

function Header() {
  return (
    <div className="headerr">
      <header className="header navbar navbar-expand-lg row justify-content-between container-fluid">
        <div className="header-logo navbar-brand d-flex align-items-center gap-4 col-md-5 col-lg-4">
          <figure className="header-logo-image">
            <img src={Logo} alt="logo food review blog" />
          </figure>
          <h1 className="header-logo-content">Food Review Blog</h1>
          <div className="menu__actions" id="toggle">
            <FaBars />
          </div>
        </div>
        <nav className="header-nav col-md-7">
          <ul className="header-nav-list navbar-nav d-flex justify-content-between">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/Blogpage">Restaurants</Link>
            </li>
            <li className="nav-item">
              <Link to="/Detailblogpage">Newsfeed</Link>
            </li>
            <li className="nav-item">
              <Link to="/about">Logout</Link>
            </li>
            <li className="nav-item">
              <Link to="/about">Logout</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
