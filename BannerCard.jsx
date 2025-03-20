import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import "./BannerCard.css";

const BannerCard = () => {
  return (
    <div className="banner">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide> 1</SwiperSlide>
        <SwiperSlide>2</SwiperSlide>
        <SwiperSlide> 3</SwiperSlide>
        <SwiperSlide>4</SwiperSlide>
        <SwiperSlide> 5</SwiperSlide>
        <SwiperSlide> 6</SwiperSlide>
        <SwiperSlide> 7</SwiperSlide>
        <SwiperSlide> 8</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerCard;
