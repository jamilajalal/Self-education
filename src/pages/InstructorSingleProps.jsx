import React from 'react'
import './InstructorSingleProps.css'
const InstructorSingleProps = ({PropsImg,Propsh4,Propssmall,Propsp,PropsImg1}) => {
  return (

    <div className='instructorsingleprops'>

<div className="instructorsingle-a">
<a href="#">{PropsImg}</a>

<a className='img1' href="#">{PropsImg1}</a>
</div>

<div className="h4-small-p">
    <div className="h4-small">
<h4>{Propsh4}</h4>
<small>{Propssmall}</small>
</div>

<p>{Propsp}</p>
</div>


    </div>



  )
}

export default InstructorSingleProps