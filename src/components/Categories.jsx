import React from 'react'
import './Categories.css'
import Categorieprops from './Categorieprops'
import categorie1 from '../assets/images/categorie1.jpg'
import categorie2 from '../assets/images/categorie2.jpg'
import categorie3 from '../assets/images/categorie3.jpg'
import categorie4 from '../assets/images/categorie4.jpg'
import categorie5 from '../assets/images/categorie5.jpg'
import categorie6 from '../assets/images/categorie6.jpg'
import categorie7 from '../assets/images/categorie7.jpg'
import categorie8 from '../assets/images/categorie8.jpg'


const Categories = () => {
  return (

<div className="categoriesMain ">
  
<div className="h1p">
<h1>Via School Categories Courses</h1>
<p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>

</div>


    <div className='categories container row '>


<Categorieprops icindekiH5="Design" icindekiP="Over 800 Courses" icindekiSekil={categorie1} />
<Categorieprops icindekiH5="Business" icindekiP="Over 1,400 Courses"  icindekiSekil={categorie2}/>
<Categorieprops icindekiH5="Software Development" icindekiP="Over 350 Courses"  icindekiSekil={categorie3}/>
<Categorieprops icindekiH5="Web Development" icindekiP="Over 640 Courses"  icindekiSekil={categorie4}/>
<Categorieprops icindekiH5="Photography" icindekiP="Over 740 Courses"  icindekiSekil={categorie5}/>
<Categorieprops icindekiH5="Audio + Music" icindekiP="Over 120 Courses"  icindekiSekil={categorie6}/>
<Categorieprops icindekiH5="Marketing" icindekiP="Over 200 Courses"  icindekiSekil={categorie7}/>
<Categorieprops icindekiH5="3D + Animation" icindekiP="Over 900 Courses"  icindekiSekil={categorie8}/>


    </div>




    <button col-12 col-md-6 col-lg-3>View All Courses</button>
    </div> 
  )
  }

export default Categories