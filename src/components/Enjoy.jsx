import React from 'react'
import './Enjoy.css'
import phonephoto from '../assets/images/phone_home.png'
import EnjoyButton from './EnjoyButton'

import { TfiApple } from "react-icons/tfi";
import {SlControlPlay} from "react-icons/sl";
const Enjoy = () => {
  return (
  <div className="enjoy container row">

<div className="enjoy-left-side col-12 col-md-6 col-lg-2">
    

    <h1 style={{fontSize:"26px"}}>Download & Enjoy</h1>
    <p style={{fontSize:"15px"}}>Access your courses anywhere, anytime & prepare
with practice tests.</p>

<div className="enjoybutton row">
<EnjoyButton icindekiIcon={<TfiApple />} icindekih3="App Store" icindekiYazi="Available now on the"/>
<EnjoyButton icindekiIcon={<SlControlPlay />} icindekih3="Google Play" icindekiYazi="Get in on"/>
</div>

</div>









<div className="enjoy-right-side col-12 col-md-6 col-lg-2">
    <img style={{width:"300px"}} src={phonephoto} alt="" />
</div>

  </div>
  )
}

export default Enjoy
