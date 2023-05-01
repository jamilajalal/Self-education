import React,{useState} from 'react'
import './Register.css'
import {RiGoogleFill} from 'react-icons/ri'
import {GiCrossedBones} from 'react-icons/gi'
import {GrFacebookOption} from 'react-icons/gr'
import Login from './Login'
const Register = ({closeRegister}) => {
 const [openLogin,setOpenLogin]=useState(false)
  return (
<div className="register-alfa">
<div  onClick={() =>closeRegister(false)}   className="cross-icon2">
     <GiCrossedBones className='cross-icon2'/>
     </div>
<div  className="register-menu" >



<div className="register-navbar">
  <div  onClick={() =>closeRegister(false)}  className="register-navbar1">
  <a onClick={()=> {
    setOpenLogin(true) ;
  }}
  href="#">Login</a>
  </div>
 
{openLogin && <Login closeLogin ={setOpenLogin}/>} 
<div className="register-navbar2">
<a className='a-register'  href="#">Register</a>
</div>

</div>
<div className="register-h1-p">
<h1>Create New Account</h1>
<p>Have an account? <span style={{color:"#2441E7"}}>Login</span> </p>
</div>

<div className="five-input">

<input type="text" placeholder='Username' />
<input type="email" placeholder='Email Address' />
<input type="password" placeholder='Password' />
<input type="password" placeholder='Confirm Password' />
<div className="checkbox-input-register">
<input type="checkbox" id='name' />
<label style={{paddingTop:"8px"}} htmlFor="name">Want to become an instructor?</label>
</div>

</div>
<div className="blue-input">
  <label htmlFor="label"><a href="#">Register</a></label>
  <input type="text" id='label' />
</div>

<hr />
<div className="register-footer">
  <div className="register-footer1">
<label htmlFor=""><span className='span1'><GrFacebookOption className='face-icon'/><a href="#">Facebook</a> </span></label>
<input type="text" />
</div>
<div className="register-footer2">
<label htmlFor=""><span className='span2'><RiGoogleFill className='face-icon'/><a href="#">Google</a> </span></label>
<input type="text" />
  </div>
</div>

</div>
</div>



  )
}

export default Register