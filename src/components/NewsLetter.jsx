import React from 'react'
import './NewsLetter.css'
import {AiOutlineArrowRight} from "react-icons/ai";
const NewsLetter = () => {
  return (
  <div className="newsletter container ">
    <div className="newsletter-container row">
    <div className="newsletter-h1-p  col-lg-6 offset-lg-3">  
<h1 style={{fontSize:"26px"}}>Get Newsletter</h1>
<p style={{fontSize:"15px",color:"#6f7074"}}>Your download should start automatically, <br /> if not Click here. Should I give up, huh?.</p>
</div>
</div>
<div className="inputbutton-umumi">
<div className="inputbutton row ">
  <div className="interbutton-form col-lg-6 offset-lg-3"> 
<form action="">
  <input  type="text" placeholder='Email address'/>
  </form> 
  </div>
  <div className="interbutton-button col-lg-6 offset-lg-3"> 
  <button type='submit'><span>Get it now <AiOutlineArrowRight/></span></button> 
  </div>
  </div>
  </div>
  </div>

  )
}

export default NewsLetter