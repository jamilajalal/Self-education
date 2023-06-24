import React, { useRef} from "react";

import './About.css'
import aboutPhoto from '../assets/images/aboutPhoto.jpg'
import Enhance from '../components/Enhance'
import melumatlar from '../about.json'
import About2 from './About2'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper";
import Peoples from '../components/Peoples'
import Train from '../components/Train'
import NewsLetter from '../components/NewsLetter'
import {AiOutlineArrowUp} from 'react-icons/ai'

import CountUp from 'react-countup'
const About = () => {
  
const about = useRef(null);

const scrollToSection1=(elementRef)=>{
  window.scrollTo({
    top:elementRef.current.offsetTop,
    behavior:"smooth"
  })
}

  return (
    <div ref={about} className='about'>
      <div className="about-photo">

        <div className="about-h1-p">
          <h1>ABOUT US</h1>
          <p>Home / About Us</p>
        </div>
      </div>


<div className="value-story">

      <div className="our-values row">
        <div className="our-values-left-side col-12 col-md-6 col-lg-2">

          <h4>OurValues</h4>
          <p>  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis,et quasi architecto beatae vitae dicta sunt explicabo. <br /><br /> <span>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis,et quasi architecto beatae vitae dicta sunt explicabo. <br /><br /> Nemo enim ipsam,voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia,consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.,Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, adipisci velit, sed quia non numquam eius modi tempora
</span>

         
           </p>


        </div>
        <div className="our-values-right-side  col-12 col-md-6 col-lg-2">
          <img src={aboutPhoto} alt="" />

        </div>



      </div>

<div className="our-story">

<h4>Our Story</h4>
<div className="p-counter row">
  <div className="p-counter1 col-12 col-md-6 col-lg-2">
  <p>FOREIGN FOLLOWERS</p>
<CountUp className='countup' start={0} end={88000} duration={5} delay={0}/>
  </div>
  <div className="p-counter2 col-12 col-md-6 col-lg-2">
  <p> CERTIFIED TEACHERS</p>
<CountUp className='countup' start={0} end={96} duration={5} delay={0}/>
  </div>
  <div className="p-counter3 col-12 col-md-6 col-lg-2">
  <p> STUDENTS ENROLLED</p>
<CountUp className='countup' start={0} end={4789} duration={5} delay={0}/>
  </div>
  <div className="p-counter4 col-12 col-md-6 col-lg-2">
  <p>COMPLETE COURSES</p>
<CountUp className='countup'  start={0} end={488} duration={5} delay={0}/>
  </div>
</div>
</div>

<div className="who">
  <div className="who-left">
    <h4>Who We Are</h4>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis,et quasi architecto beatae vitae dicta sunt explicabo.

 <br /><br /> Nemo enim ipsam,voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia,consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.,Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, adipisci velit, sed quia non numquam eius modi tempora</p>
  </div>
  <div className="who-right">
    <h4>What We Do</h4>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis,et quasi architecto beatae vitae dicta sunt explicabo.

<br /><br /> Nemo enim ipsam,voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia,consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.,Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, adipisci velit, sed quia non numquam eius modi tempora</p>
  </div>
</div>







</div>

<Enhance/>



<div className=" row swiper ">
<Swiper
        rewind={true}
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination,Navigation]}
        className="mySwiper row"
      >
        {  melumatlar.map(melumat =>(

        <SwiperSlide><About2  kartinBasligi={melumat.meqaleninBasligi} meqaleKartininShekli={melumat.meqaleninShekli} kartinMetni={melumat.meqaleninMetni}/></SwiperSlide>

        ))
}
      </Swiper>
      </div>

<Peoples/>

<Train/>

<NewsLetter/>


<div style={{width:"50px"}} onClick={()=> scrollToSection1(about)} className="arrow">

<AiOutlineArrowUp/>
</div>
    </div>
  )
}

export default About