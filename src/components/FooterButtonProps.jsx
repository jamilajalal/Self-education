import React from 'react'

import './FooterButtonProps.css'
const FooterButtonProps = ({appleIcon,appleh1,applep,propsh1}) => {
  return (
<div className="propsfooterbutton "> 
   <h1>{propsh1}</h1>
    <button style={{width:"150px",height:"75px"}} className=' col-sm-6 col-md-4 col-md-3 col-lg-3' >
    <div className="appleIconYazi">
    <div className="appleIcon">
    {appleIcon}
    </div>
    
    <div className="appleYazi">
    <h3 style={{fontSize:"16px"}}>{appleh1}</h3>
    <p  style={{fontSize:"13px",color:"#969696"}}>{applep}</p>
    </div>
    </div>
   </button>
   
   </div>





   

   
 
  )
}

export default FooterButtonProps