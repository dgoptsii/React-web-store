import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../styles/slider.css';

function Slider() {
  return (
    <>
      <Carousel className="caruosel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://pm1.narvii.com/7339/fe5013fe1be5b61c3751e271aac83702005e6f5fr1-1920-1200v2_uhq.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h2>THE BEST MEMES</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.nawpic.com/media/2020/meme-nawpic-4.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h2>THE BEST PRICE</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.meme-arsenal.com/memes/ea136b9a8a6337e0034432217e26d3e3.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h2>ONE CAN SIMPLY BUY</h2>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Slider;
