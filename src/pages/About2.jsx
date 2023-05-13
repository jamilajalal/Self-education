import React from 'react'
import {AiFillStar}  from "react-icons/ai";


import './About2.css'
const About2 = ({meqaleKartininShekli,kartinBasligi,kartinMetni}) => {
  return (
    <div className='about2  '>
 <img src={meqaleKartininShekli} className=" about2-img-top " alt="..." />
    <div className="card-body2">
      <h5 className="card-title">{kartinBasligi}</h5>
      <p style={{color:"#000"}} className="card-text">{kartinMetni}</p>
    </div>
<li className='list-inline-item'> 
<a href="#"><AiFillStar/></a>
<a href="#"><AiFillStar/></a>
<a href="#"><AiFillStar/></a>
<a href="#"><AiFillStar/></a>
<a href="#"><AiFillStar/></a>
<a style={{color:"#555555",textDecoration:"none"}}  href="#">(6)</a>
</li>
<hr />


<div className="left-last-about">
<a href="#">56.188 students</a>
<a href="#">22 courses</a>
</div>




    </div>
  
  )
}

export default About2