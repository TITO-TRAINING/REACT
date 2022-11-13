import React from 'react';
// component
import Button from '../../components/Button';
import Line from '../../components/Line';
import FormInput from '../../components/FormInput';
import MainLayout from '../../components/MainLayout';
// img
import img from '../../assets/images/avt.png';
// data mock
import dataMock from '../../dataMock';

export default function Profile() {
  return (
    <MainLayout
      chidren={
        <main>
          <div className="container my-5 py-5">
            <div className="row mt-5">
              <div className="col-md-6 mt-4">
                <h2 className="fw-bold ">Profile</h2>
              </div>
              <div className="col-md-6 d-flex justify-content-end">
                <div className="col-md-2 d-flex align-items-center">
                  <Button
                    classButton="btn-ChangePhoto px-3 btn btn-success btn-block"
                    nameButton="Save"
                  />
                </div>
              </div>
            </div>
            <Line line="line-profile line" />
            <div className="row mt-5">
              <figure className="col-md-2">
                <img src={img} className="img-fluid rounded-circle" alt="" />
              </figure>
              <div className="col-md-2 mb-3 d-flex align-items-center">
                <Button
                  classButton="btn-ChangePhoto  btn-success text-truncate btn-block"
                  nameButton="Change photo"
                />
              </div>
              <div className="col-md-8 mb-3 d-flex align-items-center">
                <Button
                  classButton="btn-ChangePhoto btn-success btn-block"
                  nameButton="Delete"
                />
              </div>
            </div>
            <div className="row mt-5">
              {dataMock.dataFormInputProfile.map((listForm) => (
                <FormInput
                  type={listForm.type}
                  placeholder={listForm.placeholder}
                />
              ))}
            </div>
            <div className=" d-flex col-md-12 justify-content-end">
              <Button classButton="btn-ChangePhoto" nameButton="Changes" />
            </div>
            <div className="block my-5">
              <h5 className="title fw-bold mb-5">Connected Account</h5>
              <div className="cube mb-4">
                <div className="list-item row mb-4">
                  <span className="col-md-6 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      width="48px"
                      height="48px"
                    >
                      <path
                        fill="#039be5"
                        d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                      />
                      <path
                        fill="#fff"
                        d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                      />
                    </svg>{' '}
                    Facebook
                  </span>
                  <div className=" d-flex col-md-6 justify-content-end">
                    <Button
                      classButton="btn-ChangePhoto"
                      nameButton="Disconnect"
                    />
                  </div>
                  <FormInput
                    classForm="form-input"
                    placeholder="Nguyễn Mai Lan"
                  />
                </div>
              </div>
              <div className="list-item row ">
                <span className="col-md-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="48px"
                    height="48px"
                  >
                    <path
                      fill="#FBC02D"
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12 s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20 s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    />
                    <path
                      fill="#E53935"
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039 l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    />
                    <path
                      fill="#4CAF50"
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36 c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    />
                    <path
                      fill="#1565C0"
                      d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571 c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    />
                  </svg>{' '}
                  Google
                </span>
                <div className=" d-flex col-md-6 justify-content-end">
                  <Button
                    classButton="btn-ChangePhoto"
                    nameButton="Disconnect"
                  />
                </div>
                <FormInput
                  type="email"
                  classForm="form-input"
                  placeholder="mailan@gmail.com"
                />
              </div>
            </div>
            <h5 className="title fw-bold">Newsletter</h5>
            <div className="row">
              <p className="col-md-6 d-flex align-items-center">
                you are currently subscribed to our Newsletter
              </p>
              <div className="button-login d-flex justify-content-end col-md-6">
                <Button
                  classButton="btn-ChangePhoto btn-success btn-block"
                  nameButton="Unsubscribe"
                />
              </div>
            </div>
            <Line line="line" />
            <div className="row mb-5">
              <div className="button-login d-flex col-md-6">
                <Button classButton="btn-ChangePhoto" nameButton="Sign out" />
              </div>
              <div className=" d-flex col-md-6 justify-content-end">
                <Button
                  classButton="btn-ChangePhoto"
                  nameButton="Delete Account"
                />
              </div>
            </div>
          </div>
        </main>
      }
    />
  );
}
