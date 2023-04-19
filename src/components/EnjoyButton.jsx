import React from 'react'
import './EnjoyButton.css'
const EnjoyButton = ({icindekiIcon,icindekih3,icindekiYazi}) => {
  return (
   <button  col-12 col-md-6 col-lg-2>
    <div className="icindekiIconYazi">
    <div className="icindekiIcon">
    {icindekiIcon}
    </div>
    
    <div className="icindekiYazi">
    <h3 style={{fontSize:"16px"}}>{icindekih3}</h3>
    <p style={{fontSize:"13px"}}>{icindekiYazi}</p>
    </div>
    </div>
   </button>
  )
}

export default EnjoyButton