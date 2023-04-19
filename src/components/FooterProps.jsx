import React from 'react'
import './FooterProps.css'
const FooterProps = ({footerh1,footera1,footera2,footera3,footera4,footera5}) => {
  return (
  
<div className="footerprops col-sm-6 col-md-4 col-md-3 col-lg-2">
<h1>{footerh1}</h1>
<ul>
<li><a href="#">{footera1}</a></li>
<li><a href="#">{footera2}</a></li>
<li><a href="#">{footera3}</a></li>
<li><a href="#">{footera4}</a></li>
</ul>





</div>




  )
}

export default FooterProps