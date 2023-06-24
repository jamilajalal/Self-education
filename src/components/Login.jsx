import React, { useState } from 'react'
import './Login.css'
import { GiCrossedBones } from 'react-icons/gi'
import Register from './Register'
import { Formik } from 'formik'
import * as Yup from 'yup'

const Login = ({ closeLogin }) => {

  const [openRegister, setOpenRegister] = useState(false)
  return (
    <>


      <div className="login">
        <div onClick={() => closeLogin(false)} className="cross-icon1">
          <GiCrossedBones className='cross-icon1' />
        </div>
        <div className="login-menu">


          <div className="login-register">
            <div className="login-register1">
              <a href="#">Login
              </a>
            </div>
            <div className="login-register2">
              <a onClick={() => {
                setOpenRegister(true);
              }} href="#">Register</a>

            </div>
            {openRegister && <Register closeRegister={setOpenRegister} />}


          </div>

          <div className="login-h1-p">
            <h1>Login to your account</h1>
            <p>Don't have an account? <span>Sign Up!</span> </p>
          </div>


          <div className="three-input">
            <Formik
              initialValues={{
                email: "",
                password: "",
                agree: false,
              }}
              validationSchema={
                Yup.object({

                  email: Yup.string().required("Enter email"),
                  password: Yup.string().required("Enter password"),
                  agree: Yup.boolean().required("Accept the terms")

                })}
                onSubmit={(values, { resetForm, setSubmitting }) => {
                  console.log(values);
                  setTimeout(() => {
                    resetForm();
                  }, 1000);
                }}

            >

              {
                ({ values, errors, handleChange, handleSubmit, handleReset, dirty, touched, isSubmitting }) => (
                  <form onSubmit={handleSubmit}>
                    <input type="email" id="email" placeholder='camilacalalzada@mail.ru' className='login-input' value={values.email} onChange={handleChange} />
                    {
                      errors.email && touched.email && (
                        <div className="input-feedback">
                          {errors.email}
                        </div>
                      )
                    }
 <input type="text" id="password" placeholder='123456789' className='login-input' value={values.password} onChange={handleChange} />
                  {
                    errors.password && touched.password && (
                      <div className="input-feedback">
                        {errors.password}
                      </div>
                    )
                  }


<div className="checkbox-input-register">

<input id='agree' type="checkbox" value={values.agree} onChange={handleChange} />




<label htmlFor='agree' className=''>Remember me </label>
<a style={{color:"red"}} href="#">Forgot password?</a>
</div>

<button type='submit' className='blue-button' disabled={!dirty || isSubmitting}>
                   Login
                  </button>


                  </form>

                    )


}


                  </Formik>



</div>





        </div>


      </div>
    </>




  )
}


export default Login