import React,{useRef} from 'react'
import './Contact.css'
import {CiLocationOn} from "react-icons/ci"
import {BsTelephone} from "react-icons/bs"
import {GiLetterBomb} from "react-icons/gi";
import {AiOutlineArrowUp} from 'react-icons/ai'
import emailjs from '@emailjs/browser';
const Contact = () => {

  const contact = useRef(null);

  const scrollToSection1=(elementRef)=>{
    window.scrollTo({
      top:elementRef.current.offsetTop,
      behavior:"smooth"
    })
  }





const formRef = useRef();
// console.log(formRef.current)

const sendEmail = (e) => {
  e.preventDefault();


  emailjs.sendForm('service_cy84h2j', 'template_a5goafh', formRef.current, 'ckXuQ_faHPVui35Hk')
  .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });

formRef.current.reset()


}
  return (
    <div ref={contact}  className='contact '>
<div className="contact-photo">

<div className="contact-h1-p">
<h1>CONTACT US</h1>
<p>Home / Contact Us</p>
</div>

</div>
<div className="contact-section">
<div className="contact-locations row">
<div className="location1 col-12 col-md-6 col-lg-2">
<span>{<CiLocationOn/>}</span>
  <h4>Our Location</h4>
  <p>Collin Street West, Victor 8007, Australia.</p>
</div>
<div className="location2 col-12 col-md-6 col-lg-2">
<span>{<BsTelephone/>}</span> 
  <h4>Our Location</h4>
  <p>Mobile: (+096) 468 235
Fax: (+096) 468 235</p>
</div>
<div className="location3 col-12 col-md-6 col-lg-2">
<span>{<GiLetterBomb/>} </span>
  <h4>Our Location</h4>
  <p>Info@edumy.com</p>
</div>


</div>







</div>

<div className="contact-main-section">

<div className="contact-main-left-section">

<iframe width="500" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=baku+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">measure area map</a></iframe>




</div>










<div className="contact-main-right-section">

<h4>Send a Message</h4>
<p style={{ color:"#474747"}}>Ex quem dicta delicata usu, zril vocibus maiestatis in qui.</p>
<div  className="contact-input">
<form ref={formRef} onSubmit={sendEmail}  action="">

<input
 type="text"
 placeholder='Name'
 name='mesajiGondereninAdi'
 />

<input 
type="email"
placeholder='email'
name='gondereninEmaili'
/>

<input
 type="text"
 placeholder='number'
 name='gondereninNomresi'
  />

<input
 type="text"
 placeholder='tittle'
 name='mesajinMovzusu'
  />
<div className="textarea">
<label htmlFor="">Your Message</label>
<textarea style={{width:"530px",height:"154px",border:"1px solid #a2a3a5"}} name="" id="" cols="30" rows="10"></textarea>
<button type='submit'>Button</button>
</div>




</form>
</div>




</div>


</div>

<div onClick={()=> scrollToSection1(contact)} className="arrow">

<AiOutlineArrowUp/>
</div>


    </div>
  )
}

export default Contact
