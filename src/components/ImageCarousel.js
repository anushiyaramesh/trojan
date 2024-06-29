import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageCarousel = ({ images = [] }) => { // Default to empty array if images is undefined
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings} className="image-carousel">
      {images.map((image, index) => (
        <div key={index} className="carousel-image-container">
          <img src={image} alt={`Image ${index}`} className="carousel-image w-full" />
          
        </div>
      ))}
    </Slider>
  );
};

export default ImageCarousel;
