// eslint-disable-next-line
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "./MainPageCarousel.scss";

function MainPageCarousel() {
  return (
    <>
      <Swiper className="mySwiper">
        <SwiperSlide className="mySwiper-slide-1">Slide 1</SwiperSlide>
        <SwiperSlide className="mySwiper-slide-2">Slide 2</SwiperSlide>
        <SwiperSlide className="mySwiper-slide-3">Slide 3</SwiperSlide>
        <SwiperSlide className="mySwiper-slide-4">Slide 4</SwiperSlide>
        <SwiperSlide className="mySwiper-slide-5">Slide 5</SwiperSlide>
      </Swiper>
    </>
  );
}

export default MainPageCarousel;
