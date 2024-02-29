/* eslint-disable @next/next/no-img-element */
"use client"
import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/hero/BG4.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/hero/BG4.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/hero/BG4.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;