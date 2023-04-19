import React from 'react'
import './Footer.css'
import FooterProps from './FooterProps'
import {AiOutlineApple} from "react-icons/ai";
import {SlControlPlay} from "react-icons/sl";
import FooterButtonProps from './FooterButtonProps'
import {RiFacebookFill} from "react-icons/ri"
import { BsTwitter } from "react-icons/bs";
import {FiInstagram } from "react-icons/fi";
import {ImPinterest } from "react-icons/im";
import {AiOutlineDribbble } from "react-icons/ai";
import {AiOutlineGoogle } from "react-icons/ai";
import footerLogo from '../assets/images/footer-logo.png'

const Footer = () => {
  return (
   <div className="umumi-footer">    
   <div className="footer row">

<FooterProps footerh1="Contact" footera1="329 Queensberry Street, North" footera2="Melbourne" footera3="VIC 3051, Australia." footera4="123 456 7890" footera5="support@edumy.com"/>
<FooterProps footerh1="Company" footera1="About Us" footera2="Blog" footera3="Contact" footera4="Become a Teacher" />
<FooterProps footerh1="Programs" footera1="Nanodegree Plus" footera2="Veterans" footera3="Georgia" footera4="Self-Driving Car" />
<FooterProps footerh1="SUPPORT" footera1="Documentation" footera2="Forums" footera3="Language Packs" footera4="Release Status" />
 
   <div className="footerbuttonprops  ">
   <FooterButtonProps propsh1="Mobile" appleIcon={<AiOutlineApple/>} appleh1="App Store" applep="Available now on the"/> 
   <FooterButtonProps appleIcon={<SlControlPlay/>} appleh1="Google Play" applep="Get in on"/> 
   </div>

<div className="footer-navbar row">
<div className="footer-navbar-left-side col-12 col-md-6 col-lg-2">
   <div className="footer-left1">
   <img src={footerLogo} alt="" />
   <h1>EDUMY</h1>
   </div>
   <div className="footer-left2">
   <span><a href="#">Home</a></span>
   <span><a href="#">Privacy</a></span>
   <span><a href="#">Terms</a></span>
   <span><a href="#">Sitemap</a></span>
   <span><a href="#">Purchase</a></span>
   </div>
</div>




<div className="footer-navbar-right-side col-12 col-md-6 col-lg-2">
   <a href="#"><RiFacebookFill/></a>
   <a href="#"><BsTwitter/></a>
   <a href="#"><FiInstagram/></a>
   <a href="#"><ImPinterest/></a>
   <a href="#"><AiOutlineDribbble/></a>
   <a href="#"><AiOutlineGoogle/></a>
</div>

</div>

<p  style={{fontSize:"13px",color:"#6F7074",textAlign:"center",backgroundColor:"#000",padding:"20px",position:"sticky"}}>Copyright Edumy &copy; 2019. All Rights Reserved.</p>




   </div>
 


   </div>
  )
}

export default Footer