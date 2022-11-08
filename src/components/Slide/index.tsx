/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import dataMock from '../../dataMock';

function Slide() {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="slider-wrapper">
      <div className="slider">
        <Slider {...settings}>
          {dataMock.dataSliders.map((slider) => (
            <div className="slider-item">
              <figure>
                <img src={slider.img} alt="" />
              </figure>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Slide;
