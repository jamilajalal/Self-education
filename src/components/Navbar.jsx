import React from 'react'
import headerLogo from '../assets/images/header-logo.png'
import { AiOutlineUser } from "react-icons/ai";
import {BsSearch} from "react-icons/bs"
import {BsBag} from "react-icons/bs"
import './Navbar.css'
const Navbar = () => {
  return (
   <> 



   <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid fluid2">
    <a style={{margin:'15px 37px 0 0',padding:'0px'}} className="navbar-brand" href="#"><img src={headerLogo} alt="" /><span style={{borderRight:'1px solid #aaa',margin:'10px 0 0',padding:'5px 15px',fontSize:'22px'}}>EDUMY</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <div className="ul">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      
       
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
       <span >HOME</span>
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
         <span> COURSES</span>
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      <span> EVENTS</span>
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           <span> PAGES</span>
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
         <span>BLOG</span>
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white "><span>CONTACT</span></a>
        </li>
      </ul>
      </div>
      

      <div className="icon">
     
      <a href="#"><AiOutlineUser style={{fontSize:'20px',color:'#fff'}}/><span>Login/Register</span></a>
     <a style={{padding:'6px 12px'}} href="#"> <BsBag style={{fontSize:'24px',color:'#fff'}}/><sup>5</sup></a>
      <BsSearch className='BsSearch' style={{fontSize:'22px',marginLeft:'15px',color:'#fff'}}/>
      </div>


    </div>
  </div>

</nav>
   








   
  

   </>
  )
}

export default Navbar