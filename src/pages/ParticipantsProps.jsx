import React from 'react'
import './ParticipantsProps.css'
const ParticipantsProps = ({participantsimg,participantsh4,participantsp}) => {
  return (
   
    <div className='participantsProps col-sm-6 col-lg-6 col-xl-3'>
      <div className="part2">    
    
<div className="partimg">  
<img src={participantsimg} alt="" />
</div>

<div className="part-h4-p">  
 <h4>{participantsh4}</h4>
 <p>{participantsp}</p>
 </div>




 </div>

    </div>

  )
}

export default ParticipantsProps