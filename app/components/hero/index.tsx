/* eslint-disable @next/next/no-img-element */
"use client"
import { heroCarouselType } from '@/app/utils/type';
import Carousel from 'react-bootstrap/Carousel';

function CarouselHeroSection({ data }: { data: heroCarouselType[] }) {
  return (
    <Carousel data-bs-theme="dark">
      {
        data.map((item, index) => {
          return (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={`${item.thumbnail}`}
                alt="First slide"
              />
            </Carousel.Item>
          )
        })
      }

    </Carousel>
  );
}

export default CarouselHeroSection;