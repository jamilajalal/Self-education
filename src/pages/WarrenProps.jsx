import React from 'react'
import './WarrenProps.css'
import {BsHandThumbsUp} from 'react-icons/bs'
import {AiFillStar}  from "react-icons/ai";
import {TbMessageDots} from 'react-icons/tb'
const WarrenProps = () => {
  return (
    <div className='warrenprops' >
<div className="warrenimg">
<img src="https://creativelayers.net/themes/edumy-html/images/resource/review1.png" alt="" />
</div>

<div className="warrenh4">
    <div className="warrenh4-li">
<h4>Warren Bethell</h4>

<li className='list-inline-item2'> 
<a href="#"><AiFillStar/></a>
<a href="#"><AiFillStar/></a>
<a href="#"><AiFillStar/></a>
<a href="#"><AiFillStar/></a>
<a href="#"><AiFillStar/></a>
</li>
</div>

<a href="#">6 months ago</a>

<p>This is the second Photoshop course I have completed with Cristian. Worth every penny and recommend it highly. To get the most out of this course, its best to to take the Beginner to Advanced course first.

<br /><br /> The sound and video quality is of a good standard. Thank you Cristian.</p>
<p></p>

<div className="warren-button-span">
<button><a href="#"><BsHandThumbsUp/> <span1>15</span1> Thank Waren</a></button>
<span><TbMessageDots/>Reply</span>
</div>
</div>


    </div>
    
  )
}

export default WarrenProps