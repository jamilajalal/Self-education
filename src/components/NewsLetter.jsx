import React from 'react'
import './NewsLetter.css'
import {AiOutlineArrowRight} from "react-icons/ai";
const NewsLetter = () => {




  return (
<div className="newsletter-container container">

<h4>Get Newsletter</h4>
<p>Your download should start automatically, if not Click here. Should I give up, huh?.</p>


<div className="input-button-news">
  <input
 type="text" placeholder='Email address' />
  <button>Get it now <AiOutlineArrowRight/></button>
</div>
</div>

  )
}

export default NewsLetter