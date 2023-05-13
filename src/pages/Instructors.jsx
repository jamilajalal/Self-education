import React,{useRef,useState} from 'react'
import './Instructors.css';
import About2 from './About2';
import melumatlar from '../about.json'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Navigation } from "swiper";
import {BiSearchAlt} from 'react-icons/bi'
import {GiCrossedBones} from 'react-icons/gi'
import {IoIosArrowDropdown} from 'react-icons/io'
import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {AiOutlineArrowUp} from 'react-icons/ai'
import peoplephoto1 from '../assets/images/peoplephoto1.jpg' 
import peoplephoto2 from '../assets/images/peoplephoto2.jpg' 
import peoplephoto3 from '../assets/images/peoplephoto3.jpg' 

const Instructors = () => {

  const instructors = useRef(null);

const scrollToSection1=(elementRef)=>{
  window.scrollTo({
    top:elementRef.current.offsetTop,
    behavior:"smooth"
  })
}

const [list,setList] =React.useState([
  {id:1,name:"Photoshop"},
  {id:2,name:"Sketch"},
  {id:3,name:"Beginner"},
])


function removeList (id){
  const newList=list.filter((l)=>l.id !== id);
  setList(newList)
}




const handleClick=()=>{
  
}





  return (
    <div ref={instructors} className='instructors'>

<div className="instructors-photo">

<div className="instructors-h1-p">

<h1>INSTRUCTORS</h1>
<p>Home / Instructors</p>
</div>

</div>

<div className="ins-popular">

<div className="popular-h3">
<h3>Popular Instructors</h3>
</div>


<>   
<Swiper
      rewind={true}
        slidesPerView  ={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation, Pagination]}
        className="mySwiper "
      >
        {  melumatlar.map(melumat =>(

         <SwiperSlide><About2  kartinBasligi={melumat.meqaleninBasligi} meqaleKartininShekli={melumat.meqaleninShekli} kartinMetni={melumat.meqaleninMetni}/></SwiperSlide>
  
        ))
}

      </Swiper>
      </>

      {/* <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      
      </Swiper>
     */}


</div>

<div className="ins-cards-con container"> 
<div className="ins-cards row">

<div className="ins-cards-left col-md-12 col-lg-8 ">

<div className="cards-nav row">

<div className="card-p col-sm-5 col-lg-5 col-xl-6">
  <p>85 Instructors</p>
</div>
<div className="card-input col-sm-7 col-lg-7 col-xl-6">
  <input type="text" placeholder='Search our instructors' />
  
<BiSearchAlt className='card-icon'/>

</div>

</div>


<div className="card-section row  ">
<div className="card-first-section col-12 col-md-6  col-lg-4 ">
<About2 className="about5" kartinBasligi="Andrew Williams" meqaleKartininShekli={peoplephoto1}  kartinMetni="Web Design, Photoshop"/>
<About2  kartinBasligi="Krisztina Szer" meqaleKartininShekli={peoplephoto2}  kartinMetni="User Experience Design"/>
<About2  kartinBasligi="Andrew Williams" meqaleKartininShekli={peoplephoto3}  kartinMetni="Web Design, Photoshop"/>
</div>
<div className="card-second-section col-12 col-md-6  col-lg-4 ">

<About2  kartinBasligi="Krisztina Szer" meqaleKartininShekli={peoplephoto3}  kartinMetni="User Experience Design"/>
<About2  kartinBasligi="Anna Richard" meqaleKartininShekli={peoplephoto3}  kartinMetni="Web Design, Photoshop"/>
<About2  kartinBasligi="Andrew Williams" meqaleKartininShekli={peoplephoto1}  kartinMetni="Web Design, Photoshop"/>

</div>
<div className="card-third-section col-12 col-md-6  col-lg-4 ">

<About2  kartinBasligi="Andrew Williams" meqaleKartininShekli={peoplephoto2}  kartinMetni="Web Design, Photoshop"/>
<About2  kartinBasligi="Krisztina Szer" meqaleKartininShekli={peoplephoto1}  kartinMetni="User Experience Design"/>
<About2  kartinBasligi="Anna Richard" meqaleKartininShekli={peoplephoto2}  kartinMetni="Web Design, Photoshop"/>

</div>
</div>

</div>
<div className="ins-cards-right col-lg-4 col-xl-3">
<div className="selected">

  <a href="#">Selected Filters <span ><IoIosArrowDropdown/></span> </a>





<div className="todo">
 <ul>
{
  list.map((todo) => {
    return <li style={{marginTop:"25px",marginRight:"60px"}} key={todo.id}>{todo.name} <span onClick={() => removeList(todo.id)} style={{marginLeft:"50px",color:"blue"}}>X</span></li>
  })
}


</ul> 
</div>













</div>

<div className="software">

<a href="#">Software <span onClick={handleClick}><IoIosArrowDropdown/></span> </a>


<div className="software-box">
<form action="">
  <div className="box1">
<input  type="checkbox" />
<label htmlFor="checkbox">Photoshop <a href="#">(06)</a></label>

</div>
<div className="box2">
<input type="checkbox" />
<label htmlFor="checkbox">Adobe Illustrator <a href="#">(126)</a></label>

</div>
<div className="box3">
<input type="checkbox" />
<label htmlFor="checkbox">Graphic Design <a href="#">(26)</a></label>

</div>
<div className="box4">      
<input type="checkbox" />
<label htmlFor="checkbox">Sketch <a href="#">(76)</a></label>

</div>

<div className="box5">        
<input type="checkbox" />
<label htmlFor="checkbox">InDesign <a href="#">(1136)</a></label>

</div>

<div className="box6">
<input type="checkbox" />
<label htmlFor="checkbox">CorelDRAW <a href="#">(26)</a></label>

</div>
<div className="box7">
<input type="checkbox" />
<label htmlFor="checkbox">After Effects <a href="#">(7)</a></label>

</div>

</form>

 <div className="last-a">
 <a href="#"> <AiOutlinePlus/><small>See More</small>  </a>
 </div>
 </div>
</div>

<div className="rating">
  <a href="#">Rating <span><IoIosArrowDropdown/></span> </a>

<div className="rating-box">
<form action="">
  <div className="box1">
<input className='input' type="checkbox" />
<label htmlFor="checkbox">Show All<a href="#">(06)</a></label>

</div>
<div className="box2">
<input type="checkbox" />
<label htmlFor="checkbox">1 star and higher<a href="#">(126)</a></label>

</div>
<div className="box3">
<input type="checkbox" />
<label htmlFor="checkbox">2 star and higher<a href="#">(26)</a></label>

</div>
<div className="box4">      
<input type="checkbox" />
<label htmlFor="checkbox">3 star and higher <a href="#">(76)</a></label>

</div>

<div className="box5">        
<input type="checkbox" />
<label htmlFor="checkbox">4 star and higher <a href="#">(1136)</a></label>

</div>

<div className="box6">
<input type="checkbox" />
<label htmlFor="checkbox">5 star and higher <a href="#">(26)</a></label>

</div>


</form>
</div>
</div>
</div>




</div>
</div>



<div className="page-link">

<button>
<AiOutlineArrowLeft className='arrowicon'/> 
  <a  href="#">Prev</a>
 
</button>

<div className="page-a">

<a href="#">1</a>
<a className='blue-2' href="#">2</a>
<a href="#">3</a>
<a href="#">...</a>
<a href="#">14</a>

</div>

<button>
  <a href="#">Next</a> <AiOutlineArrowRight className='arrowicon'/>
</button>





</div>


<div onClick={()=> scrollToSection1(instructors)} className="arrow">

<AiOutlineArrowUp/>
</div>
    </div>


  
  )
}

export default Instructors