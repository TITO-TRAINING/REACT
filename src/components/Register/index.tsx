import React from 'react';
import logo from '../../assets/images/onlineRegistration.png';
import dataMock from '../../dataMock';
import Button from '../Button';
import FormInput from '../FormInput';

export default function Register() {
  return (
    <div className="login-card login loginform mb-5 p-5" id="register">
      <div className="login-card-body body">
        <div className="d-flex justify-content-center">
          <figure className="body-img px-3">
            <img src={logo} alt="" />
          </figure>
        </div>
        <form className="body-form" action="">
          {dataMock.dataFormRegister.map((listFormRegister) => (
            <FormInput
              classForm={listFormRegister.classForm}
              type={listFormRegister.type}
              classInput={listFormRegister.classInput}
              placeholder={listFormRegister.placeholder}
            />
          ))}
          <div className="body-btn row ">
            <div className="button-login d-flex justify-content-center col-md-6">
              <Button
                classButton="btnlogin btn-Login btn btn-success btn-block btn-sm text-body"
                nameButton="Login"
              />
            </div>
            <div className="button-login d-flex justify-content-center col-md-6">
              <Button
                classButton="btnlogin btn-Register btn btn-success btn-block btn-sm text-body"
                nameButton="Register"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
