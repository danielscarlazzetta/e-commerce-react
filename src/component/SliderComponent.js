import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SliderComponent.css';

import imgZapatilla from '../assets/img/maceimg.png'

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slide-item">
          <img src={imgZapatilla} alt="Slide 1" />
          <div className="slide-content">
            <h3>Título 1</h3>
            <p>Descripción del slide 1.</p>
            <p>Descripción del slide 1.</p>
            <p>Descripción del slide 1.</p>
          </div>
        </div>
        <div className="slide-item">
          <img src={imgZapatilla} alt="Slide 2" />
          <div className="slide-content">
            <h3>Título 2</h3>
            <p>Descripción del slide 2.</p>
          </div>
        </div>
        <div className="slide-item">
          <img src={imgZapatilla} alt="Slide 3" />
          <div className="slide-content">
            <h3>Título 3</h3>
            <p>Descripción del slide 3.</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;
