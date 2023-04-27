import React ,{useState} from 'react'
import './Header.css'
import { Gradient } from 'react-gradient';
import {AiOutlineArrowDown  } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {  Navigation } from "swiper";
import MovingComponent from "react-moving-text";
import Button from './Button'


const Header = () => {



  return (
    <div className='header-container'> 
   
 				


 <div className="self">
<Button />
</div>

<div className="selfP">
<p>Technology is brining a massive wave of evolution on learning things on different ways</p>
</div>




 
    <Swiper
    rewind={true}
    navigation={true}
    modules={[ Navigation]}
    className="mySwiper"
  >

    <SwiperSlide className=''>
                  
<div className="image1 imgs ">
<h1 >SELF EDUCATION RESOURCES AND INFOS</h1>
<img className=" w-100" src="https://creativelayers.net/themes/edumy-html/images/home/1.jpg" alt="" />
</div>
</SwiperSlide>

    <SwiperSlide>
      <div className="image2 imgs">
      <h1 >FIND THE BEST COURSES</h1>
<img className=" w-100" src="https://creativelayers.net/themes/edumy-html/images/home/3.jpg" alt=""/>

</div>
</SwiperSlide>
    <SwiperSlide>
    <div className="image3 imgs">
    <h1 >SELF EDUCATION RESOURCES AND INFOS</h1>
<img className="w-100" src="https://creativelayers.net/themes/edumy-html/images/home/2.jpg" alt=""/>
</div>

    </SwiperSlide>

 
  </Swiper>










<div className="fourImages">

  <div className="hicon1 ">
    <img width={80} height={74} src="https://creativelayers.net/themes/edumy-html/images/home/hicon1.png" alt="" />
  <p>Learn From The Experts </p>
  </div>


  <div className="hicon2 ">
    <img width={80} height={74} src="https://creativelayers.net/themes/edumy-html/images/home/hicon2.png" alt="" />
    <p>Book Library & Store</p>
    </div>
   


<div className="hicon3 ">
  <img width={80} height={74} src="https://creativelayers.net/themes/edumy-html/images/home/hicon3.png" alt="" />
  <p> Worldwide Recognize</p>
  </div>

<div className="hicon4">
  <img width={80} height={74} src="https://creativelayers.net/themes/edumy-html/images/home/hicon4.png"  alt="" />
  <p>Best Industry Leaders</p>
  </div>
  

</div>

<div className="flaticon">

  
</div>



<div className="mouse-scroll">
<div className="first1">
<div className="second2">
<div  className="third3"><a href="#"><AiOutlineArrowDown/></a></div>
</div>
</div>


</div>



  </div>
  )
}

export default Header