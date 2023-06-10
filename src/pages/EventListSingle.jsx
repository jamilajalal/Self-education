import React ,{useState,useEffect,useRef} from 'react'
import './EventListSingle.css'
import single1 from '../assets/images/single1.jpg'
import {CgCalendarDates} from 'react-icons/cg'
import {IoMdTime} from 'react-icons/io'
import {CiLocationOn} from 'react-icons/ci'
import {BsTelephone} from 'react-icons/bs'
import {AiOutlineArrowRight, AiOutlineMail} from 'react-icons/ai'
import {TbInputSearch} from 'react-icons/tb'
import {RiFacebookFill} from "react-icons/ri"
import { BsTwitter } from "react-icons/bs";
import {FiInstagram } from "react-icons/fi";
import {ImPinterest } from "react-icons/im";
import {AiOutlineDribbble } from "react-icons/ai";
import {AiOutlineGoogle } from "react-icons/ai";
import Clock from '../components/Clock'
import ParticipantsProps from './ParticipantsProps'
import peoplephoto1 from '../assets/images/peoplephoto1.jpg'
import peoplephoto2 from '../assets/images/peoplephoto2.jpg'
import peoplephoto3 from '../assets/images/peoplephoto3.jpg'
import peoplephoto4 from '../assets/images/peoplephoto4.jpg'
import WarrenProps from './WarrenProps'
import {AiFillStar} from 'react-icons/ai'
import {AiOutlineArrowUp} from 'react-icons/ai'


const EventListSingle = () => {

const [timerDays,setTimerDays]= useState();
const [timerHours,setTimerHours]= useState();
const [timerMinutes,setTimerMinutes]= useState();
const [timerSeconds,setTimerSeconds]= useState();

let interval;

const startTimer=()=>{
  const countDownDate= new Date ("June 7,2025").getTime();
  interval=setInterval(()=>{
    const now =new Date().getTime();
    const distance=countDownDate-now;
    const days=Math.floor(distance/(24*60*60*1000));
const hours =Math.floor(
  (distance % (24*60*60*1000))/(1000*60*60)
  );
const minutes=Math.floor(
  (distance % (60*60*1000)) / (1000*60)
  );
  const seconds =Math.floor(
    (distance%(60*1000))/1000);

if(distance<0){
  clearInterval(interval.current);
} else{
  setTimerDays(days);
  setTimerHours(hours);
  setTimerMinutes(minutes);
  setTimerSeconds(seconds);
}


  
 } );
};

useEffect(()=>{
  startTimer();
})






const eventlistsingle = useRef(null);

const scrollToSection1=(elementRef)=>{
  window.scrollTo({
    top:elementRef.current.offsetTop,
    behavior:"smooth"
  })
}








  return (
    <div ref={eventlistsingle} className='eventlistsingle'>

<div className="eventsingle-photo">

<div className="eventsingle-h1-p">
<h1>EVENT SINGLE</h1>
<p>Home/Event Single</p>
</div>


</div>


<div className="ux-ui container">
  <div className="ux-ui-ro row ">
<div className="ux-ui-1 col-lg-8 col-xl-9 ">
  <h4>UX/UI Design Conference</h4>

  <img src={single1} alt="" />
  <Clock timerDays={timerDays} timerHours={timerHours} timerMinutes={timerMinutes} timerSeconds={timerSeconds}/>

  <div className="event-description">
    <h4>Event Description</h4>
    <p style={{color:"#6F7074",fontSize:"16px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.

<br /><br /> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  </div>

  <div className="event-content">

<h4>Event Content</h4>
<ul style={{color:"#7E7E7E"}}>

  <li>You will need a copy of Adobe XD 2019 or above. A free trial can be downloaded from Adobe.</li>
  <li>No previous design experience is needed.</li>
  <li>No previous Adobe XD skills are needed.</li>
</ul>
<div className="share-li">
<ul>
<p style={{color:"#3B3B3B",fontSize:"20px"}}>Share</p>

<li><RiFacebookFill/></li>
<li><BsTwitter/></li>
<li><FiInstagram/></li>
<li><ImPinterest /></li>
<li><AiOutlineDribbble /></li>
<li><AiOutlineGoogle /></li>


</ul>
</div>

  </div>

<div className="event-participants container">
  
<h4>Event Participants</h4>

<div className="event-participants-props row ">
<ParticipantsProps participantsimg={peoplephoto1} participantsh4="Andrew Williams" participantsp="Web Design, Photoshop"/>
<ParticipantsProps  participantsimg={peoplephoto2} participantsh4="Chris Park" participantsp="CSS, HTML"/>
<ParticipantsProps participantsimg={peoplephoto3} participantsh4="Krisztina Szer" participantsp="User Experience Design"/>
<ParticipantsProps  participantsimg={peoplephoto4} participantsh4="Kristen Pala" participantsp="Web Design, PSD to HTML"/>

</div>
</div>




<div className="warren">


<WarrenProps />
<hr />
<WarrenProps className="warren-main"/>
<hr />
<WarrenProps/>
<hr />
<div className="warren-button">
<button>See more reviews</button>
</div>
</div>





<div className="rate">



<h4>Add Reviews & Rate</h4>


<p> <span>What is it like to Course?</span> <a href="#">
<a href="#"><AiFillStar/></a>
<a href="#"><AiFillStar/></a>
<a href="#"><AiFillStar/></a>
<a href="#"><AiFillStar/></a>
<a href="#"><AiFillStar/></a>
 </a> 

</p>


<div className="rate-input">
<form action="#">

<div className="rate-input1">
<label htmlFor="">Review Title</label>

<input type="text" />
</div>

<div className="rate-input2">
<label htmlFor="">Review Content</label>
<textarea style={{border:"1px solid #b4b2b2"}} name="" id="" cols="30" rows="6"></textarea>

</div>







</form>
</div>
<div className="rate-button">
<button> Submit Review <AiOutlineArrowRight /> </button>
</div>
</div>











</div>


















<div className="ux-ui-2 col-lg-4 col-xl-3 pl10 pr10 ">
  <div className="ux-ui-2-big">

<div className="event-details">
<h4>Event Details</h4>

<a href="#"><CgCalendarDates/>Date: 06.09.2019 - 06.09.2020</a> 
<a href="#"><IoMdTime/> Time: 8:00 am - 5:00 pm</a>
<a href="#"><CiLocationOn/> Address: Cambridge, MA 02138, USA</a>

</div>

<div className="event-details-2">

<h4>Event Details</h4>

<iframe  height="200" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=baku+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">measure area map</a></iframe>

<a href="#"> <BsTelephone/>1-896-567-23497</a>
<a href="#"> <AiOutlineMail/>event@edumy.com</a>
<a href="#"><TbInputSearch/> http://www.edumy.com</a>



</div>

<div className="tags">
<h4>Tags</h4>

<div className="main-button">
<div className="photo-sketch">
<button>Photoshop</button>
<button>Sketch</button>
</div>
<div className="beg-ux">
<button>Beginner</button>
<button>UX/UI</button>
</div>
</div>
</div>



</div>




</div>
</div>

<div style={{width:"50px"}} onClick={()=> scrollToSection1(eventlistsingle)} className="arrow">

<AiOutlineArrowUp/>
</div>
</div>
    </div>



      
   
  )
}

export default EventListSingle