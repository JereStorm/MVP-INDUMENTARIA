import React from "react";
import { Carousel } from "react-bootstrap";
// import Imagen1 from "../assets/imagen1.jpg";
export default function MyCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid active"
          src="https://ola-laropadeportiva.com/modules/xprtsliderblock/images/banner-3-slider-1920x900-fitlovers.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src="https://st3.depositphotos.com/1177973/13201/i/600/depositphotos_132011190-stock-photo-clothes-and-items-for-sport.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src="http://duemosli.blogs.uv.es/files/2014/02/993841.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}
