import React from 'react'
import './Footer.css'
import FooterProps from './FooterProps'
import {ImAppleinc} from "react-icons/im";
import {SlControlPlay} from "react-icons/sl";
import {RiFacebookFill} from "react-icons/ri"
import { BsTwitter } from "react-icons/bs";
import {FiInstagram } from "react-icons/fi";
import {ImPinterest } from "react-icons/im";
import {AiOutlineDribbble } from "react-icons/ai";
import {AiOutlineGoogle } from "react-icons/ai";
import footerLogo from '../assets/images/footer-logo.png'

const Footer = () => {
  return (
   <>   
<div className="footer-one">

<div className="footer-one-con container">


<div className="footer-one-ro row">

<div className="firts-footer col-sm-6 col-md-4 col-md-3 col-lg-2">
<FooterProps footerh1="Contact" footera1="329 Queensberry Street, North" footera2="Melbourne" footera3="VIC 3051, Australia." footera4="123 456 7890" footera5="support@edumy.com"/>

</div>
<div className="second-footer col-sm-6 col-md-4 col-md-3 col-lg-2">
 <FooterProps footerh1="Company" footera1="About Us" footera2="Blog" footera3="Contact" footera4="Become a Teacher" />

</div>
<div className="third-footer col-sm-6 col-md-4 col-md-3 col-lg-2">
 <FooterProps footerh1="Programs" footera1="Nanodegree Plus" footera2="Veterans" footera3="Georgia" footera4="Self-Driving Car" />

</div>
<div className="fourth-footer col-sm-6 col-md-4 col-md-3 col-lg-2">
 <FooterProps footerh1="SUPPORT" footera1="Documentation" footera2="Forums" footera3="Language Packs" footera4="Release Status" />

</div>

<div className="footer-last col-sm-6 col-md-6 col-md-3 col-lg-3 ">
  
 <h4>Mobile</h4>

<div className="footer-last-1">

 <div className="last1-a"><ImAppleinc/></div>

<div className="last1-a2-a3"> 
 <div className="last1-a2">App Store</div>
 <div className="last1-a3">Available now on the</div>
 </div>

 </div>
 <div className="footer-last-1">

 <div className="last1-a"><SlControlPlay/></div>

 <div className="last1-a2-a3"> 
 <div className="last1-a2">Google Play</div>
 <div className="last1-a3">Get in on</div>
 </div>
 </div>

 </div>





</div>


</div>


</div>

<div className="footer-middle">

<div className="footer-middle-con container">

<div className="footer-middle-ro row">

<div className="footer-left1 col-sm-4 col-md-3 col-lg-3 col-xl-2">
   <img src={footerLogo} alt="" />
  <h1>EDUMY</h1>
   </div>

<div className="footer-left2 col-sm-8 col-md-5 col-lg-6 col-xl-6">
   <span><a href="#">Home</a></span>
    <span><a href="#">Privacy</a></span>
    <span><a href="#">Terms</a></span>
    <span><a href="#">Sitemap</a></span>
   <span><a href="#">Purchase</a></span>
    </div>


<div className="footer-navbar-right-side col-sm-12 col-md-4 col-lg-3 col-xl-4">
    <a href="#"><RiFacebookFill/></a>
    <a href="#"><BsTwitter/></a>
    <a href="#"><FiInstagram/></a>   <a href="#"><ImPinterest/></a>
   <a href="#"><AiOutlineDribbble/></a>
    <a href="#"><AiOutlineGoogle/></a>
 </div>




</div>


</div>

</div>


<div className="footer-bottom">
<div className="footer-son container">
<div className="footer-p row">

<div className="footer-p-2 col-lg-6 offset-lg-3">  
 <p  style={{fontSize:"13px",color:"#6F7074",textAlign:"center",backgroundColor:"#000",marginBottom:"0px",position:"sticky"}}>Copyright Edumy &copy; 2019. All Rights Reserved.</p>
</div>


</div>


</div>



</div>

</>
  )
}

export default Footer