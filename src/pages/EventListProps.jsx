import React from 'react'
import './EventListProps.css'
const EventListProps = ({ EventImg, Eventh4, Eventp,Eventa1,Eventa2,Eventa3,Eventicon1,Eventicon2,Eventicon3 }) => {
    return (
        <div className='eventlistprops' >
            <div className="eventlistimg">
                <h1>28 <br /> DECEMBER</h1>
                <img src={EventImg} alt="" width={530} height={340} />
            </div>



          <div className="event-h4-p-a">
            <h4 style={{fontSize:"20px"}}>{Eventh4}</h4>
            <p style={{color:"#7E7E7E"}}> {Eventp} </p>


            <a href="#">{Eventicon1}{Eventa1}</a>
            <a href="#">{Eventicon2}{Eventa2}</a>
            <a href="#">{Eventicon3 }{Eventa3}</a>

            </div>








        </div>
    )
}

export default EventListProps