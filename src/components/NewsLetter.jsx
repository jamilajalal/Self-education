import React from 'react'
import './NewsLetter.css'
import {AiOutlineArrowRight} from "react-icons/ai";
const NewsLetter = () => {
  return (
  <div className="newsletter ">
<h1 style={{fontSize:"26px"}}>Get Newsletter</h1>
<p style={{fontSize:"15px",color:"#6f7074"}}>Your download should start automatically, if not Click here. Should I give up, huh?.</p>
<div className="inputbutton">
<form action="">
  <input  type="text" placeholder='Email address'/>
  </form> 
  <button type='submit'><span>Get it now </span><AiOutlineArrowRight/></button> 
  </div>
  </div>
  )
}

export default NewsLetter