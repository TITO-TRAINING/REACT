import React from 'react';
import imgHeader from '../../assets/images/logo.png';

function Headerlogo() {
  return (
    <div className="main-header header-logo navbar-brand d-flex justify-content-center align-items-center gap-4 mt-5">
      <figure className="header-logo-image">
        <img src={imgHeader} alt="logo food review blog" />
      </figure>
      <h1 className=" header-logo-content">Food Review Blog</h1>
    </div>
  );
}

export default Headerlogo;
