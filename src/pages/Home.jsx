import React from 'react'
import Header from '../components/Header';
import './Home.css';
// import Categories from '../components/Categories';
import Enhance from '../components/Enhance';
import TopCourses from '../components/TopCourses';
import Peoples from '../components/Peoples';
import Latest from '../components/Latest';
import Enjoy from '../components/Enjoy';
import Train from '../components/Train'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className='home'>

<Header/>
    {/* <Categories/> */}
    <Enhance/>
    <TopCourses/>
    <Peoples/>
    <Latest/>
    <Enjoy/>
    <Train/>
    <NewsLetter/>
  
  






    </div>
  )
}

export default Home