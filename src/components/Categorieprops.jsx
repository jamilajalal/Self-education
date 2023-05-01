import React from 'react'
import './Categorieprops.css'

const Categorieprops = ({icindekiH5,icindekiP,icindekiSekil}) => {
  return (
    <>

<div className="detailsImg col-12 col-md-6 col-lg-3">

   <div  className="details ">
<h5>{icindekiH5}</h5>
<p>{icindekiP}</p>
</div>

<div className="img1"  >
<img  style={{  borderRadius:"5px",backgroundSize:"cover"}} src={icindekiSekil} alt="" className='w-100' />
</div>
</div>

 
</>
  )
}

export default Categorieprops