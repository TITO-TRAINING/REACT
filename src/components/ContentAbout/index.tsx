import React from 'react';
// icom
import { BiRestaurant } from 'react-icons/bi';
import { FcAbout } from 'react-icons/fc';
// data mock
import { Link } from 'react-router-dom';
import dataMock from '../../dataMock';
// img
import AboutImgPage from '../AboutImgPage';
import img from '../../assets/images/leaf.png';
import imgFood from '../../assets/images/pngwing7@2x.png';

export default function ContentAbout() {
  return (
    <div className="about-page row mt-5">
      <div className="about-page-title col-lg-5 text">
        <h2>It’s not just a Food Its a Expirence!</h2>
        <p>
          This is Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Numquam eius vel tempore consectetur nesciunt?
        </p>
        <div className="row">
          <div className="about-page-button__restaurant d-flex justify-content-center col-md-6 ">
            <button type="button">
              <Link to="/blog">
                <BiRestaurant /> Restaurants
              </Link>
            </button>
          </div>
          <div className="about-page-button__aboutus d-flex justify-content-center">
            <button type="button">
              <Link to="/">
                <FcAbout /> about us
              </Link>
            </button>
          </div>
        </div>
        <div className="about-page-button row">
          <figure className="leaf col-md-6">
            <img src={img} alt="" />
          </figure>
        </div>
      </div>
      <div className="about-page-img col-lg-7" id="img1">
        <figure className="about-page-img__food">
          <img src={imgFood} alt="aboutimg" />
        </figure>
        {dataMock.dataImgAbout.map((listImgAbout) => (
          <AboutImgPage
            img={listImgAbout.img}
            altImg={listImgAbout.alt}
            classImg={listImgAbout.class}
          />
        ))}
      </div>
    </div>
  );
}
