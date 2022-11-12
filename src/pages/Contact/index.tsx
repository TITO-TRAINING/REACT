import React from 'react';

// img
import ImgContact from '../../assets/images/food.jpg';

// component
import FormInput from '../../components/FormInput';
import Line from '../../components/Line';
import Tittlesearch from '../../components/Titlesearch';
import SubmitForm from '../../components/SubmitForm';

// data mock
import dataMock from '../../dataMock';

// layout
import Footer from '../../layouts/Footer';
import Header from '../../layouts/Header';

// constants
import Common from '../../Constants/Common';

export default function Contact() {
  const classLine = 'line-contact line';
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // console.log('You have submitted the form.');
  };
  return (
    <div>
      <Header />
      <main className="container pt-5 ">
        <section className="contact-area py-5 my-5 ">
          <Line line={classLine} />
          <Tittlesearch />
          <div className="container">
            <div className="row">
              <figure className="col-lg-6 contact-area-img">
                <img src={ImgContact} alt="img contact" />
              </figure>
              <div className="col-lg-6 pl-4">
                <div className="section-title contact-area-title mb-4 text-center">
                  <h2>CONTACT US ABOUT</h2>
                </div>
                <div className="contact-area-form">
                  <form action="/" onSubmit={handleSubmit}>
                    <div className="row">
                      {dataMock.dataFormInput.map((listFormInput) => (
                        <FormInput
                          type={listFormInput.type}
                          placeholder={listFormInput.placeholder}
                        />
                      ))}
                    </div>
                    <textarea
                      cols={10}
                      rows={3}
                      className="w-100 custom-textarea "
                      name="message"
                      id="message"
                      placeholder="Write Message..."
                    />
                    <SubmitForm nameButton="SUBMIT MESSAGE" classButton="btn" />
                  </form>
                </div>
                <div className="contact-area-info__list mb-3 mt-4">
                  <ul>
                    <li>
                      <i className="fas fa-map-marker-alt" />
                      {Common.ADDRESS}
                    </li>
                    <li>
                      <i className="fas fa-envelope" />
                      {Common.YOUR_EMAIL}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
