import React from 'react'
import './ParticipantsProps.css'
const ParticipantsProps = ({participantsimg,participantsh4,participantsp}) => {
  return (
    <div className='participantsProps'>

<img src={participantsimg} alt="" />
 <h4>{participantsh4}</h4>
 <p>{participantsp}</p>






    </div>
  )
}

export default ParticipantsProps