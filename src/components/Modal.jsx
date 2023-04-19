import React ,{useState} from 'react'
import './Modal.css';
import {RxCross2} from 'react-icons/rx'
const Modal = ({closeModal}) => {





  return (
   <div  onMouseLeave={()=> closeModal(false)} className='modalBackground'>
    <div className='modalContainer'>

    <div className="first-tittle">
      <img src="https://via.placeholder.com/50x50" alt="" />
      <div className="dolar">
      <h1>Dolar sit Amet</h1>
      <p>1 * $7.90</p>
      </div>
      <a href="#"><RxCross2 style={{color:"#000"}}/></a>
    </div>
    <hr />
    <div className="second-tittle">
      <img src="https://via.placeholder.com/50x50" alt="" />
      <div className="lorem">
        <h1>Lorem Ipsum</h1>
        <p>1 * $7.90</p>
      </div>
      <a href="#"><RxCross2 style={{color:"#000"}}/></a>
    </div>
    <hr />
    <div className="third-tittle">
      <img src="https://via.placeholder.com/50x50" alt="" />
      <div className="simply">
      <h1>Is Simply</h1>
      <p>1 * $7.90</p>
      </div>
      <a href="#"><RxCross2 style={{color:"#000"}}/></a>
    </div>
    <hr />
      <div className='modal-footer'>
        <h1>Subtotal: $57.70</h1>
        <div className="modal-btn">
        <button className='btn btn-primary' >View Card</button>
        <button style={{backgroundColor:"rgb(227, 31, 195"}}>Checkout</button>
        </div>
      </div>
    </div>
   </div>
  )
}

export default Modal