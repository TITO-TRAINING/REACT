import React from 'react';
// component
import Header from '../../components/Header';
import Login from '../../components/Login';
import Register from '../../components/Register';
// img
import imgUrl from '../../assets/images/brookeLark.png';

export default function Account() {
  const divStyle = {
    backgroundImage: `url(${imgUrl})`,
  };
  return (
    <section className="login-register bg-image">
      <div style={divStyle}>
        <div className="mask d-flex align-items-center gradient-custom-3">
          <div className="container">
            <Header />
            <div className="form row d-flex justify-content-end align-items-center">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <Login />
                <Register />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
