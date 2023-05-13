import React from 'react'
import TopLittle from './TopLittle'
import melumatlar from '../topcourses.json'
import './TopCourses.css'
const TopCourses = () => {




  return (
    <div className='topcourses-container row '> 

<div className="topcourses ">
<h5>Browse Our Top Courses</h5>
<p> Cum doctus civibus efficiantur in imperdiet deterruisset.</p>


<div className="kiciknavbar">
    <a href="">Developer</a>
    <a href="">Business</a>
    <a href="">Design</a>
    <a href=""> Web</a>
    <a href=""> Marketing</a>
</div>
</div>







<div className="top-Container row ">

    <div className=' top-little-container row '> 
{

    melumatlar.map(melumat =>(
  
< TopLittle kartinBasligi={melumat.meqaleninBasligi} meqaleKartininShekli={melumat.meqaleninShekli} kartinMetni={melumat.meqaleninMetni}/>

    ))
}

 
    </div>

    <div className=' top-little-container1 row '> 
{

    melumatlar.map(melumat =>(
  
< TopLittle kartinBasligi={melumat.meqaleninBasligi} meqaleKartininShekli={melumat.meqaleninShekli} kartinMetni={melumat.meqaleninMetni}/>

    ))
}

 
    </div>
    </div>



    </div>
  )
}

export default TopCourses
