import React from 'react';
import ImgContact from '../../assets/images/food.jpg';
import Button from '../../components/Button';
import FormInput from '../../components/FormInput';
import Line from '../../components/Line';
import Tittlesearch from '../../components/Titlesearch';
import dataMock from '../../dataMock';
import Footer from '../../layouts/Footer';
import Header from '../../layouts/Header';

export default function Contact() {
  const classLine = 'line-contact line';
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
                  <form action="/">
                    <div className="row">
                      {dataMock.datFormInput.map((listFormInput) => (
                        <FormInput
                          classForm={listFormInput.classForm}
                          type={listFormInput.type}
                          classInput={listFormInput.classInput}
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
                    <Button button="SUBMIT MESSAGE" classButton="btn" />
                  </form>
                </div>
                <div className="contact-area-info__list mb-3 mt-4">
                  <ul>
                    <li>
                      <i className="fas fa-map-marker-alt" />
                      470 Trần Đại Nghĩa-Ngũ Hành Sơn-Đà Nẵng
                    </li>
                    <li>
                      <i className="fas fa-envelope" />
                      mailencutephomaique@gmail.com
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
