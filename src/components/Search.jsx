import React from 'react'
import './Search.css'
import {GiCrossedBones} from 'react-icons/gi'
import {BiSearchAlt} from 'react-icons/bi'
const Search = ({closeSearchMenu}) => {



  return (


    <div className="search ">

    <form action="#">

<div  onClick={() =>closeSearchMenu(false)}   className="cross-icon">
     <GiCrossedBones className='cross-icon'/>
     </div>

<div className="input-search">
    <input type="text" placeholder ='Search courses'/>

    <div className="search-icon">
    <BiSearchAlt/>
    </div>
    </div>
    
    </form>
    
    
    
       </div>

  )
}

export default Search