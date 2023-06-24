import React, { useRef } from 'react'
import './TopLittle.css'
import {AiFillStar}  from "react-icons/ai";
import {CgProfile} from "react-icons/cg";
import {BiCommentDetail} from "react-icons/bi"
const TopLittle = ({kartinBasligi,meqaleKartininShekli,kartinMetni}) => {


const taginDivininUnvaniRef=useRef()

const openMenu=(e)=>{
  const acilanElement=e.target
  if(acilanElement.classList.contains('umumi')){
  taginDivininUnvaniRef.current.classList.add('aktiv')
  }
 
}
const closeMenu=(e)=>{
  const baglananElement=e.target
  if(baglananElement.classList.contains('umumi')){
    taginDivininUnvaniRef.current.classList.remove('aktiv')
    }
}


  return (
   

    
    <div  onMouseEnter={openMenu}  onMouseLeave={closeMenu} className=" umumi card  col-12 col-md-6 col-lg-2 " >
        <div ref={taginDivininUnvaniRef} className="tagIn  " >


        <div className="tag">Top Seller</div>
        <div className="in">Preview Course</div>

        </div>
    <img src={meqaleKartininShekli} className=" card-img-top " alt="..." />
    <div className="card-body">
      <h5 className="card-title">{kartinBasligi}</h5>
      <p style={{color:"#000"}} className="card-text">{kartinMetni}</p>
    </div>
<li className='list-inline-item'> 
<a href="#"><AiFillStar/></a>
<a href="#"><AiFillStar/></a>
<a href="#"><AiFillStar/></a>
<a href="#"><AiFillStar/></a>
<a href="#"><AiFillStar/></a>
<a style={{color:"#555555",textDecoration:"none"}}  href="#">(6)</a>
</li>
<hr />
<div className='lastsection'>
<div className="left-last">
  <CgProfile/> 
  <a href="#">1548</a> 
  <BiCommentDetail/>
  <a href="#">25</a>
</div>
<div className="right-last">
    $69.95
</div>

</div>

  </div>

  )
}

export default TopLittle