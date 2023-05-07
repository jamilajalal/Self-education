import React, { useState } from 'react'
import './Register.css'

import { GiCrossedBones } from 'react-icons/gi'

import Login from './Login'
import { Formik } from 'formik'
import * as Yup from 'yup'

const Register = ({ closeRegister }) => {
  const [openLogin, setOpenLogin] = useState(false)
  return (
    <div className="register-alfa">
      <div onClick={() => closeRegister(false)} className="cross-icon2">
        <GiCrossedBones className='cross-icon2' />
      </div>
      <div className="register-menu" >



        <div className="register-navbar">
          <div onClick={() => closeRegister(false)} className="register-navbar1">
            <a onClick={() => {
              setOpenLogin(true);
            }}
              href="#">Login</a>
          </div>

          {openLogin && <Login closeLogin={setOpenLogin} />}
          <div className="register-navbar2">
            <a className='a-register' href="#">Register</a>
          </div>

        </div>
        <div className="register-h1-p">
          <h1>Create New Account</h1>
          <p>Have an account? <span style={{ color: "#2441E7" }}>Login</span> </p>
        </div>


        <div className="five-input">
          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
              agree: false,
            }}
            validationSchema={
              Yup.object({
                name: Yup.string().required("Enter name"),
                email: Yup.string().required("Enter email"),
                password: Yup.string().required("Enter password"),
                agree: Yup.boolean().required("Accept the terms")



              }) }

onSubmit={(values, { resetForm, setSubmitting})=>{
  console.log(values);
  setTimeout(()=>{
resetForm();
  },1000);
}}

          >
            {
              ({ values, errors, handleChange, handleSubmit, handleReset, dirty,touched, isSubmitting }) => (
                <form onSubmit={handleSubmit}>
                  
                 
                  <input type="text" id="name" placeholder='Jamila' className='register-input' value={values.name} onChange={handleChange} />

{
  errors.name && touched.name &&(
    <div className="input-feedback">
    {errors.name}
    </div>
  )
}

                
                  <input type="text" id="email" placeholder='camilacalalzada@mail.ru' className='register-input' value={values.email} onChange={handleChange} />

                  {
  errors.email && touched.email &&(
    <div className="input-feedback">
    {errors.email}
    </div>
  )
}

                 <input type="text" id="password" placeholder='123456789' className='register-input' value={values.password} onChange={handleChange} />
                 {
  errors.password && touched.password &&(
    <div className="input-feedback">
    {errors.password}
    </div>
  )
}
 


<div className="checkbox-input-register">

  <input id='agree' type="checkbox" value={values.agree} onChange={handleChange} />

  <label htmlFor='agree' className=''>Want to become an instructor?</label>
</div>


<button type='submit' className='blue-button' disabled={! dirty || isSubmitting}>
  Register
</button>


                </form>

              )

            }











           </Formik>




</div>





 

 

      </div>
    </div>



  )
}

export default Register