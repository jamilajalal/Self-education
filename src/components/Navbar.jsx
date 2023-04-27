import React,{useState} from 'react';
import headerLogo from '../assets/images/header-logo.png'
import { AiOutlineUser } from "react-icons/ai";
import {BsSearch} from "react-icons/bs"
import {BsBag} from "react-icons/bs"
import Modal from './Modal';
import './Navbar.css'
import Login from './Login'
import Search from './Search'
import Register from './Register';
import {Link} from 'react-router-dom'

const Navbar = () => {

const [color,setColor]=useState(false)

function colorChange(){
  if(window.scrollY >=89){
    setColor(true)
  }
  else{
    setColor(false)
  }
}

window.addEventListener("scroll",colorChange)


const [openModal,setOpenModal]=useState(false);


const [openSearch,setOpenSearch]=useState(false);


const [openLogin,setOpenLogin]=useState(false);


  return (
    <> 

   <nav className= 'navbar navbar-expand-lg bg-body-tertiary'>
  <div className={color? "container-fluid fluid2 fixed" : "container-fluid fluid2"}>
    <a style={{margin:'15px 37px 0 0',padding:'0px'}} className="navbar-brand" href="#"><img src={headerLogo} alt="" /><span style={{borderRight:'1px solid #aaa',margin:'10px 0 0',padding:'5px 15px',fontSize:'22px'}}>EDUMY</span></a>
    <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <div className="ul">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      
       
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle text-white" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
       <span >HOME</span>
          </Link>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle text-white" to="/about" role="button" data-bs-toggle="dropdown" aria-expanded="false">
         <span> ABOUT</span>
          </Link>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle text-white" to="/events" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      <span> EVENTS</span>
          </Link>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle text-white" to="/courses" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      <span> COURSES</span>
          </Link>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
    
        <li className="nav-item">
          <Link className="nav-link text-white " to="/contact"><span>CONTACT</span></Link>
        </li>
      </ul>
      </div>
      

  
     
      <div className="icon">

      <a  onClick={() =>{
        setOpenLogin(true);
      }} href="#"><AiOutlineUser  style={{fontSize:'20px'}} className='login-icon'/><span className='login-icon'>Login/Register</span></a>
      {openLogin && <Login closeLogin={setOpenLogin}/>}



      <a  onMouseEnter={()=>{
        setOpenModal(true);
      }}
 className='bsbag' style={{padding:'6px 12px'}} href="#"> <BsBag style={{fontSize:'24px'}}/><sup>5</sup></a>
        {openModal && <Modal closeModal={setOpenModal}/>}



     <a onClick={() =>{
      setOpenSearch(true);
     }}
     className='BsSearch'  style={{fontSize:'22px',marginLeft:'15px'}} href="#"> <BsSearch /></a>
     {openSearch && <Search closeSearchMenu={setOpenSearch}/>}

     

      </div>


    </div>
  </div>

</nav>
   








   

</>

  )
  }

  export  default Navbar