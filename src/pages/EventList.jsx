import React,{useRef} from 'react'
import './EventList.css'
import list1 from '../assets/images/list1.jpg'
import list2 from '../assets/images/list2.jpg'
import list3 from '../assets/images/list3.jpg'
import list4 from '../assets/images/list4.jpg'
import EventListProps from './EventListProps'
import {CgCalendarDates} from 'react-icons/cg'
import {IoMdTime} from 'react-icons/io'
import {CiLocationOn} from 'react-icons/ci'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {AiOutlineArrowUp} from 'react-icons/ai'
const EventList = () => {

  const eventlist = useRef(null);

const scrollToSection1=(elementRef)=>{
  window.scrollTo({
    top:elementRef.current.offsetTop,
    behavior:"smooth"
  })
}

  return (
    <div ref={eventlist} className='eventlist'>


<div className="eventlist-photo">

<div className="eventlist-h1-p">
          <h1>EVENT</h1>
          <p>Home / Event</p>
        </div>


</div>


<div className="eventProps container">


<EventListProps EventImg={list1} Eventh4="Everything is Teachable"  Eventp="Lorem gravida nibh vel veliauctor aliquenean sollicitudin, lorem quis bibendum auctor nisi elit consequat ipsutis sem nibh id elit." Eventicon1={<CgCalendarDates/>} Eventa1=" Date: 06.09.2019 - 06.09.2020" Eventicon2={<IoMdTime/>} Eventa2="Time: 8:00 am - 5:00 pm" Eventicon3={<CiLocationOn/>} Eventa3="Address: Cambridge, MA 02138, USA" />
<EventListProps EventImg={list2} Eventh4="Everything is Teachable"  Eventp="Lorem gravida nibh vel veliauctor aliquenean sollicitudin, lorem quis bibendum  auctor nisi elit consequat ipsutis sem nibh id elit."  Eventicon1={<CgCalendarDates/>} Eventa1=" Date: 06.09.2019 - 06.09.2020" Eventicon2={<IoMdTime/>} Eventa2="Time: 8:00 am - 5:00 pm" Eventicon3={<CiLocationOn/>} Eventa3="Address: Cambridge, MA 02138, USA"/>
<EventListProps EventImg={list3} Eventh4="Everything is Teachable"  Eventp="Lorem gravida nibh vel veliauctor aliquenean sollicitudin, lorem quis bibendum auctor nisi elit consequat ipsutis sem nibh id elit."  Eventicon1={<CgCalendarDates/>} Eventa1=" Date: 06.09.2019 - 06.09.2020" Eventicon2={<IoMdTime/>} Eventa2="Time: 8:00 am - 5:00 pm" Eventicon3={<CiLocationOn/>} Eventa3="Address: Cambridge, MA 02138, USA"/>
<EventListProps EventImg={list4} Eventh4="Everything is Teachable"  Eventp="Lorem gravida nibh vel veliauctor aliquenean sollicitudin, lorem quis bibendum auctor nisi elit consequat ipsutis sem nibh id elit."  Eventicon1={<CgCalendarDates/>} Eventa1=" Date: 06.09.2019 - 06.09.2020" Eventicon2={<IoMdTime/>} Eventa2="Time: 8:00 am - 5:00 pm" Eventicon3={<CiLocationOn/>} Eventa3="Address: Cambridge, MA 02138, USA"/>





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


<div onClick={()=> scrollToSection1(eventlist)} className="arrow">

<AiOutlineArrowUp/>
</div>



    </div>
  )
}

export default EventList