import React from 'react';
// component
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
import Button from '../../components/Button';
import Line from '../../components/Line';
import FormInput from '../../components/FormInput';
import MainLayout from '../../components/MainLayout';
// img
import img from '../../assets/images/avt.png';
// data mock
import dataMock from '../../dataMock';
import SubmitForm from '../../components/SubmitForm';

export default function Profile() {
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // console.log('You have submitted the form.');
  };
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
                    classButton="btn-save px-3 btn btn-success btn-block"
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
                  classButton="btn-save px-3 btn btn-success text-truncate btn-block"
                  nameButton="Change photo"
                />
              </div>
              <div className="col-md-2 mb-3 d-flex align-items-center">
                <Button
                  classButton="btn btn-Delete btn-success btn-block"
                  nameButton="Delete"
                />
              </div>
            </div>
            <form action="/" onSubmit={handleSubmit}>
              <div className="row mt-5">
                {dataMock.dataFormInputProfile.map((listForm) => (
                  <FormInput
                    key={listForm.placeholder}
                    type={listForm.type}
                    placeholder={listForm.placeholder}
                    nameInput={listForm.name}
                  />
                ))}
              </div>
              <div className=" d-flex col-md-12 justify-content-end">
                <SubmitForm classButton="btn-save px-3" nameButton="Changes" />
              </div>
            </form>
            <div className="block my-5">
              <h5 className="title fw-bold mb-5">Connected Account</h5>
              <div className="cube mb-4">
                <div className="list-item row mb-4">
                  <span className="col-md-6 ">
                    <BsFacebook className="bs-facebook" />
                    Facebok
                  </span>
                  <div className=" d-flex col-md-6 justify-content-end">
                    <Button
                      classButton="btn-Disconnect"
                      nameButton="Disconnect"
                    />
                  </div>
                  <FormInput classForm="form-input" placeholder="Họ và tên" />
                </div>
              </div>
              <div className="list-item row ">
                <span className="col-md-6">
                  <FcGoogle />
                  Google
                </span>
                <div className=" d-flex col-md-6 justify-content-end">
                  <Button
                    classButton="btn-Disconnect"
                    nameButton="Disconnect"
                  />
                </div>
                <FormInput
                  type="email"
                  classForm="form-input"
                  placeholder="example@gmail.com"
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
                  classButton="btn-Disconnect btn-success btn-block"
                  nameButton="Unsubscribe"
                />
              </div>
            </div>
            <Line line="line" />
            <div className="row mb-5">
              <div className="button-login d-flex col-md-6">
                <Button classButton="btn-Disconnect" nameButton="Sign out" />
              </div>
              <div className=" d-flex col-md-6 justify-content-end">
                <Button
                  classButton="btn-Disconnect"
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
