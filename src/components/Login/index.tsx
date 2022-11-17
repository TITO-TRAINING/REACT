import React from 'react';
// component
import FormInput from '../FormInput';
import SubmitForm from '../SubmitForm';
import Button from '../Button';
// img
import logo from '../../assets/images/handshake.png';

interface Props {
  handleBtnRegister: () => void;
}
export default function Login({ handleBtnRegister }: Props) {
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // console.log('You have submitted the form.');
  };
  return (
    <div className="login-card login loginform mb-5 p-5" id="login">
      <div className="login-card-body body">
        <div className="d-flex justify-content-center ">
          <figure className="body-img">
            <img src={logo} alt="Logo" />
          </figure>
        </div>
        <h5 className="body-text text-uppercase text-center mb-3">
          Welcome back
        </h5>
        <form className="body-form" action="/" onSubmit={handleSubmit}>
          <FormInput
            classForm="col-md-12"
            classInput="form-control form-control-lg mb-4"
            placeholder="Your Name"
          />
          <FormInput
            classForm="col-md-12"
            type="password"
            classInput="form-control form-control-lg mb-4"
            placeholder="Your Password"
          />
          <div className="form-check mb-2 row">
            <div className="col-md-5">
              <label className="form-check-label" htmlFor="form2Example3g">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="form2Example3cg"
                />
                Remember me
              </label>
            </div>
          </div>
          <div className="body-btn row ">
            <div className="button-login d-flex justify-content-center col-md-6">
              <SubmitForm
                classButton="btnlogin btn-Login btn btn-success btn-block btn-sm text-body"
                nameButton="Login"
              />
            </div>
            <div className="button-login d-flex justify-content-center col-md-6">
              <Button
                classButton="btnlogin btn-Register btn btn-success btn-block btn-sm text-body"
                nameButton="Register"
                handleOnclick={handleBtnRegister}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
