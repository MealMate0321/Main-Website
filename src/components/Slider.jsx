import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../assets/css/CustomCarousel.css'; 
import Slider1 from '../assets/images/slider1.jpg';
import Slider2 from '../assets/images/slider2.jpg';
import Slider3 from '../assets/images/slider3.jpg';

const CustomCarousel = () => {
  return (
    <Carousel fade >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slider1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Delicious Meals, Delivered to Your Doorstep!</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slider2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Revolutionizing Mealtime, One Tiffin at a Time</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slider3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Bringing Home-Cooked Comfort to Your Busy Life</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CustomCarousel;
