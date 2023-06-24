import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import './Latest.css'
import { Autoplay, Navigation } from "swiper";
import latestphoto2 from '../assets/images/latestphoto2.jpg'
import latestphoto1 from '../assets/images/latestphoto1.jpg'
import latestphoto3 from '../assets/images/latestphoto3.jpg'
const Latest = () => {
  return (
  <div className="latest container ">

<div className="latest1">
<h1>Latest News And Events</h1>
<p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
</div>




<div className="latest2 row">
<div className="latestelave col-12 col-md-6 col-lg-6">
<Swiper
        rewind={true}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        
        <SwiperSlide><img src={latestphoto2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={latestphoto2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={latestphoto2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={latestphoto2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={latestphoto2} alt="" /></SwiperSlide>
       
      </Swiper>

      </div>
<div className="elaveimg col-12 col-md-6 col-lg-6">
  
<img src={latestphoto1} alt="" />
<img src={latestphoto3} alt="" />

</div>
<h4>Like what you see?<a href="#"> See more posts</a></h4>
</div>


  </div>
  )
}

export default Latest