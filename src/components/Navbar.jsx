import React, { useState,useRef } from 'react';
import headerLogo from '../assets/images/header-logo.png'
import { AiOutlineUser } from "react-icons/ai";
import { BsSearch } from "react-icons/bs"
import { BsBag } from "react-icons/bs"
import Modal from './Modal';
import './Navbar.css'
import Login from './Login'
import Search from './Search'
import { Link } from 'react-router-dom'
import {AiOutlineBars} from 'react-icons/ai'
import {GiCrossedBones} from 'react-icons/gi'

import BarsMenu from './BarsMenu'

const Navbar = (openBrasMenu) => {

  const [color, setColor] = useState(false)

  function colorChange() {
    if (window.scrollY >= 89) {
      setColor(true)
    }
    else {
      setColor(false)
    }
  }

  window.addEventListener("scroll", colorChange)


  const [openModal, setOpenModal] = useState(false);


  const [openSearch, setOpenSearch] = useState(false);


  const [openLogin, setOpenLogin] = useState(false);



  const [open, setOpen] = useState(false)
  const [open1, setOpen1] = useState(false)




  const overlayDivininUnvaniRef=useRef()


const openOverlayMenu=(e) =>{

 const kliklenenElement=e.target


 if(kliklenenElement.classList.contains('bars-icon')){
  overlayDivininUnvaniRef.current.classList.add('aktif')

 }
}
const closeOverlayMenu=(e)=>{
  const kliklenenElement=e.target


  if(kliklenenElement.classList.contains('gicross-icon')){
   overlayDivininUnvaniRef.current.classList.remove('aktif')
 
  }
}

  return (
    <>

<div ref={overlayDivininUnvaniRef} className="overlay  ">

<GiCrossedBones  className=' gicross-icon' onClick={closeOverlayMenu}/>

<div className="nav-links">

<Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/events">Events</Link>
<Link to="/courses">Courses</Link>
<Link to="/contact">Contact</Link>


</div>



</div>




      <nav className='navbar navbar-expand-lg bg-body-tertiary'>
        <div className={color ? "container-fluid fluid2 fixed" : "container-fluid fluid2"}>
          <a style={{ margin: '15px 37px 0 0', padding: '0px' }} className="navbar-brand" href="#"><img src={headerLogo} alt="" /><span style={{ borderRight: '1px solid #aaa', margin: '10px 0 0', padding: '5px 15px', fontSize: '22px' }}>EDUMY</span></a>
          <button style={{border:"transparent"}} onClick={ openOverlayMenu} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <AiOutlineBars className='bars-icon' style={{marginRight:"10px",borderRight:"1px solid #aaa"}}/>
          </button>
          <button onClick={ openOverlayMenu} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <a onClick={() => {
                setOpenSearch(true);
              }}
              className='BsSearch ' style={{ fontSize: '22px',color:"#fff"}} href="#"><BsSearch /></a>
              {openSearch && <Search closeSearchMenu={setOpenSearch} />}
          </button>
        
        

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="ul">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">


                <li className="nav-item dropdown">
                  <Link className="nav-link  text-white" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                    <span >HOME</span>
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <Link className="nav-link  text-white" to="/about" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <span> ABOUT</span>
                  </Link>
                </li>
                <div className="relative">
                  <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle text-white" to="/events" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <span onMouseEnter={() => setOpen(!open)} onClick={() => setOpen(false)}> EVENTS</span>
                    </Link>
                    {
                      open &&
                      <div className="dropdown-menu-1">
                        <ul
                          onMouseLeave={() => setOpen(false)}
                          className="dropdown-menu menu-1">


                          <li
                            className=" p-2 text-lg cursor-pointer rounded ">

                            <Link className='eventslink' to={"/eventlist"}>
                            
                              Event List
                         
                            </Link>
                           <hr />
                            <Link className='eventslink' to={"/eventlistsingle"}>
                           
                              Event Single
                         
                            </Link>
                            
                          </li>
                          

                        </ul>
                      </div>

                    }
                  </li>
                </div>


                <div className="relative">
                  <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle text-white" to="/courses" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <span onMouseEnter={() => setOpen1(!open1)} onClick={() => setOpen1(false)}> COURSES</span>
                    </Link>
                    {
                      open1 &&
                      <div className=" dropdown-menu-2 ">
                        <ul
                          onMouseLeave={() => setOpen1(false)}
                          className="dropdown-menu">

                          <li

                            className="p-2 text-lg cursor-pointer rounded">

                            <Link className='courseslink' to={"/instructors"}>
                              Instructors
                            </Link>
                            <hr />
                            <Link  className='courseslink' to={"/instructorsingle"}>
                            Instructor Single
                            </Link>



                          </li>
                        </ul>
                      </div>

                    }
                  </li>
                </div>


                <li className="nav-item">
                  <Link className="nav-link text-white " to="/contact"><span>CONTACT</span></Link>
                </li>
              </ul>
            </div>
  


          

            <div className="icon">

           

              <a onClick={() => {
                setOpenLogin(true);
              }} href="#"><AiOutlineUser style={{ fontSize: '20px' }} className='login-icon' /><span className='login-icon'>Login/Register</span></a>
              {openLogin && <Login closeLogin={setOpenLogin} />}



              <a onMouseEnter={() => {
                setOpenModal(true);
              }}
                className='bsbag' style={{ padding: '6px 12px' }} href="#"> <BsBag style={{ fontSize: '24px' }} /><sup>5</sup></a>
              {openModal && <Modal closeModal={setOpenModal} />}



              <a onClick={() => {
                setOpenSearch(true);
              }}
                className='BsSearch' style={{ fontSize: '22px', marginLeft: '15px' }} href="#"> <BsSearch /></a>
              {openSearch && <Search closeSearchMenu={setOpenSearch} />}


         

            </div>
        

       

          </div>
        </div>

      </nav>











    </>

  )
}

export default Navbar