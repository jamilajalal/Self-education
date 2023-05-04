import React from 'react'
import './ContactProps.css'
const ContactProps = ({contactp,contacta,contactul,contactul2,contactul3,contactul4,contactul5,contactul6}) => {
  return (
    <div className='contactprops'>

<p >{contactp}</p>
<a  href="#">{contacta}</a>
<a className='contactul' style={{textDecoration:"none",color:"#222"}} href="#"><span>{contactul}</span><span>{contactul2}</span><span>{contactul3}</span><span>{contactul4}</span><span>{contactul5}</span><span>{contactul6}</span></a>
    </div>
  )
}

export default ContactProps