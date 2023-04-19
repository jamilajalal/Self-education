import React from 'react'
import './Train.css'

import train1 from '../assets/images/train1.png'
import train2 from '../assets/images/train2.png'
import train3 from '../assets/images/train3.png'
import train4 from '../assets/images/train4.png'
import train5 from '../assets/images/train5.png'
const Train = () => {
  return (

<div className="train ">
<h1 >Need To Train Your Team?</h1>
<p >Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
<div className="trainimg ">
<img src={train1} alt="" className='train1 ' />
<img src={train2} alt=""  className='train2 '/>
<img src={train3} alt=""  className='train3 ' />
<img src={train4} alt=""  className='train4  '/>
<img src={train5} alt=""  className='train5 ' />

</div>

</div>



  )
}

export default Train