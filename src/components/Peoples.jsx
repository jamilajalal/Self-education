import React from 'react'
import './Peoples.css'
import People from './People'
import People2 from './People2'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from 'swiper';
import peoplephoto1 from '../assets/images/peoplephoto1.jpg'
import peoplephoto2 from '../assets/images/peoplephoto2.jpg'
import peoplephoto3 from '../assets/images/peoplephoto3.jpg'
import peoplephoto4 from '../assets/images/peoplephoto4.jpg'
const Peoples = () => {
  return (
    <div className="people">

    <div className="whatsay">

    <h1 style={{fontSize:"26px"}}>What People Say</h1>
    <p style={{fontSize:"15px",color:"#6F7074"}}>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
    </div>
    
<div className="autoswiper">
    <Swiper 
        slidesPerView={"3"}
        spaceBetween={30}
        autoplay
     modules={[Autoplay]}
     
        className="mySwiper"
      >
        <SwiperSlide><People sheklinNovu={peoplephoto1} /></SwiperSlide>
        <SwiperSlide><People sheklinNovu={peoplephoto2} /></SwiperSlide>
        <SwiperSlide><People sheklinNovu={peoplephoto3} /></SwiperSlide>
        <SwiperSlide><People sheklinNovu={peoplephoto4} /></SwiperSlide>
        <SwiperSlide><People sheklinNovu={peoplephoto1} /></SwiperSlide>
        <SwiperSlide><People sheklinNovu={peoplephoto2} /></SwiperSlide>
        <SwiperSlide><People sheklinNovu={peoplephoto3} /></SwiperSlide>
      </Swiper>

      <Swiper 
        slidesPerView={"1"}
        spaceBetween={30}
        autoplay
     modules={[Autoplay]}
     
        className="mySwiper"
      >
 
        <SwiperSlide><People2/></SwiperSlide>
        <SwiperSlide><People2/></SwiperSlide>
        <SwiperSlide><People2/></SwiperSlide>
        <SwiperSlide><People2/></SwiperSlide>
        <SwiperSlide><People2/></SwiperSlide>
        <SwiperSlide><People2/></SwiperSlide>
        <SwiperSlide><People2/></SwiperSlide>
     
      </Swiper>

     


      </div>

</div>
  )
}

export default Peoples