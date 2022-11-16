import React from 'react';
// component
import { FaBars } from 'react-icons/fa';
import Navbar from '../../components/Navbar';
// data mock
import dataMock from '../../dataMock';
// icon
// img
import Logo from '../../assets/images/logo.png';

// data mock

function Header() {
  return (
    <div className="main-header">
      <header className="header navbar navbar-expand-lg row justify-content-between container-fluid">
        <div className="header-logo navbar-brand d-flex align-items-center gap-4 col-xl-4 m-auto">
          <figure className="header-logo-image">
            <img src={Logo} alt="logo food review blog" />
          </figure>
          <h1 className="header-logo-content">Food Review Blog</h1>
          <div className="menu__actions" id="toggle">
            <FaBars />
          </div>
        </div>
        <nav className="header-nav col-xl-8">
          <ul className="header-nav-list navbar-nav d-flex justify-content-between">
            {dataMock.dataLinhNav.map((listlinkNav) => (
              <Navbar link={listlinkNav.link} page={listlinkNav.page} />
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
