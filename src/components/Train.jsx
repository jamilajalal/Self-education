import React from 'react'
import './Train.css'
import train1 from '../assets/images/train1.png'
import train2 from '../assets/images/train2.png'
import train3 from '../assets/images/train3.png'
import train4 from '../assets/images/train4.png'
import train5 from '../assets/images/train5.png'
const Train = () => {
  return (
    <div className='train container'>
      <div className="train-h1-p-container row">  
<div className="train-h1-p col-lg-6 offset-lg-3">  
<h1>Need To Train Your Team?</h1>
<p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
</div>
</div>

<div className="trainimg row">
<div className="train1 col-sm-6 col-md-4 col-lg ">
<img src={train1} alt="" />
</div>
<div className="train2 col-sm-6 col-md-4 col-lg"> 
<img src={train2} alt="" />
</div>
<div className="train3 col-sm-6 col-md-4 col-lg">  
<img src={train3} alt="" />
</div>
<div className="train4 col-sm-6 col-md-4 col-lg">  
<img src={train4} alt="" />
</div>
<div className="train5 col-sm-6 col-md-4 col-lg">  
<img src={train5} alt="" />
</div>



</div>

    </div>
  )
}

export default Train