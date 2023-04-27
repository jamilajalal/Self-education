import React,{useState} from 'react'
import './Register.css'
import {RiGoogleFill} from 'react-icons/ri'
import {GiCrossedBones} from 'react-icons/gi'
import {GrFacebookOption} from 'react-icons/gr'
const Register = ({closeRegister}) => {
 
  return (

<div onClick={() =>closeRegister(false)} className="register-menu" >
<div  className="gicross">
    <GiCrossedBones/>  
    </div>
<div className="register" >
  <div className="register-text">
<div className="register-navbar">
  <a href="#">Login</a>
  <a className='a-register'  href="#">Register</a>
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
<label htmlFor="name">Want to become an instructor?</label>
</div>

</div>
<div className="blue-input">
  <label htmlFor="label"><a href="#">Register</a></label>
  <input type="text" id='label' />
</div>
<div className="footer-register">
  <div className="footer-register1">
<label htmlFor=""><span className='span1'><GrFacebookOption/><a href="#">Facebook</a> </span></label>
<input type="text" />
</div>
<div className="footer-register2">
<label htmlFor=""><span className='span2'><RiGoogleFill/><a href="#">Google</a> </span></label>
<input type="text" />
  </div>
</div>

</div>
</div>

</div>

  )
}

export default Register