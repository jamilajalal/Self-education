import React,{useRef} from 'react'
import './InstructorSingle.css';
import InstructorSingleProps from './InstructorSingleProps'
import ContactProps from './ContactProps';
import {FaRegDotCircle} from 'react-icons/fa'
import {RiFacebookFill} from "react-icons/ri"
import { BsTwitter } from "react-icons/bs";
import {FiInstagram } from "react-icons/fi";
import {ImPinterest } from "react-icons/im";
import {AiOutlineDribbble } from "react-icons/ai";
import {AiOutlineGoogle } from "react-icons/ai";
import{AiOutlineArrowUp} from 'react-icons/ai'
const InstructorSingle = () => {

  const instructorsingle = useRef(null);

  const scrollToSection1=(elementRef)=>{
    window.scrollTo({
      top:elementRef.current.offsetTop,
      behavior:"smooth"
    })
  }
  
  return (
    <div ref={instructorsingle} className='instructorsingle'>
<div className="instructorsingle-photo">
  <div className="instrucsingle-h1-p">
  <h1>ALI TUFAN</h1>
<p>Adobe Certified Instructor & Adobe Certified Expert</p>

  </div>

</div>
<div className="instruc-img">

<img src="https://creativelayers.net/themes/edumy-html/images/team/3.png" alt="" />

</div>

<div className="instruc-main">
<div className="instruc-main-left">

<div className="instruc-hello">

<h4>Hello! This is my story.</h4>
<p style={{paddingTop:"10px"}}>Hello! I am a Seattle/Tacoma, Washington area graphic designer with over 6 years of graphic design experience. I specialize in designing infographics, icons, brochures, and flyers.</p>
<div className="instruc-li">

<li>Included in my estimate:</li>
<li>Custom illustrations</li>
<li>Stock images</li>
<li>Any final files you need</li>
<br />
</div>
<p>If you have a specific budget or deadline, let me know and I will work with you!</p>


</div>

<div className="instruc-edu-exp">
<h4 style={{padding:"30px 0"}}>My Education</h4>
<InstructorSingleProps PropsImg={<FaRegDotCircle/>} Propsh4="Harvard University" Propssmall="2015 - 2019" Propsp="MBA from Harvard Business School"/>
<br />
<InstructorSingleProps PropsImg1={<FaRegDotCircle/>} Propsh4="Tomms College" Propssmall="2011 - 2015" Propsp="Bachlors in Fine Arts"/>

<h4 style={{padding:"30px 0"}}>My Experience</h4>
<InstructorSingleProps PropsImg={<FaRegDotCircle/>} Propsh4="Google" Propssmall="2015 - 2019" Propsp="Google 2015 - 2019
Web Designer"/>
<br />
<InstructorSingleProps PropsImg1={<FaRegDotCircle/>} Propsh4="Facebook" Propssmall="2011 - 2015" Propsp="CEO Founder"/>
<br />
<InstructorSingleProps PropsImg={<FaRegDotCircle/>} Propsh4="Tomms College " Propssmall="2011 - 2015" Propsp="CEO Founder"/>


</div>








</div>

<div className="instruc-main-right">
<div className="instruc-contact">

<h4>Contact</h4>
<ContactProps contactp="Phone Number" contacta="+765895465877"/>
<ContactProps contactp="Email" contacta="info@alitufan.com"/>
<ContactProps contactp="Skype" contacta="alitfn"/>

<ContactProps contactp="Social Media" contactul={<RiFacebookFill/>} contactul2={<BsTwitter />} contactul3={<FiInstagram />} contactul4={<ImPinterest />} contactul5={<AiOutlineDribbble />} contactul6={<AiOutlineGoogle />}/>


</div>

<div className="total">

<ContactProps contactp="Total students" contacta="102,924"/>
<ContactProps contactp="Courses" contacta="22"/>
<ContactProps contactp="Reviews" contacta="20,400"/>


</div>



</div>

  
</div>


<div onClick={()=> scrollToSection1(instructorsingle)} className="arrow">

<AiOutlineArrowUp/>
</div>



    </div>
  )
}

export default InstructorSingle