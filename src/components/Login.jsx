import React,{useState} from 'react'
import './Login.css'
import {GiCrossedBones} from 'react-icons/gi'
import {GrFacebookOption} from 'react-icons/gr'
import {RiGoogleFill} from 'react-icons/ri'
import Register from './Register'
const Login = ({closeLogin}) => {

const [openRegister,setOpenRegister]=useState(false)

  return (

    <div onClick={() => closeLogin(false)} className="login-menu ">
    <div  className="gicross">
    <GiCrossedBones/>
    </div>
    
 <div className="login-register " >
 <div  className="login-navbar ">
 <a href="#">Login</a>
 
 <a  onClick={() =>{
    setOpenRegister(true);
   }}  href="#">Register</a>
   {openRegister && <Register closeRegister ={setOpenRegister}/>}

 </div>
 
 
 <div className="login-h1-p">
 <h1>Login to your account</h1>
 <p>Don't have an account? <span>Sign Up!</span> </p>
 </div>
 
 
 <div className="login-input">
   <form action="">
     <div className="three-input">
 <input type="email" name="" id="" placeholder='Email Address'/>
 <input type="password" name="" id="" placeholder='Password' />
 </div>
 <div className="checkbox-input">
 <input type="checkbox" name="" id="" />
 
 <label style={{color:"#6F7074", fontSize:"15px",textAlign:"center"}} htmlFor="">Remember me</label>
 <a href="#">Forgot Password?</a>
 </div>
 </form>
 
 
 <div className="text-input"  >
   <label htmlFor=""><span className='text-span'>Login </span > </label>
 <input  type="text" />
 </div>
 </div>
 
 <div className="login-footer">
   <div className="login-footer1">
 <label htmlFor=""><span className='span1'><GrFacebookOption/><a href="#">Facebook</a> </span></label>
 <input type="text" />
 </div>
 <div className="login-footer2">
 <label htmlFor=""><span className='span2'><RiGoogleFill/><a href="#">Google</a> </span></label>
 <input type="text" />
 </div>
 </div>
 
 
 
 </div>
 </div>
 
  )
}

export default Login