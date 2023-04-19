import 'bootstrap/dist/css/bootstrap.min.css'
import { useState,useEffect,} from 'react'
import DotLoader from "react-spinners/DotLoader";
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Categories from './components/Categories';
import Enhance from './components/Enhance';
import TopCourses from './components/TopCourses';
import Peoples from './components/Peoples';
import Latest from './components/Latest';
import Enjoy from './components/Enjoy';
import Train from './components/Train'
import NewsLetter from './components/NewsLetter'
import Footer from './components/Footer'


const override= {
  display: "block",
  margin: "20rem auto",
  borderColor: "red",
};
function App() {





//LOADING 
const [loading,setLoading]=useState(false);
useEffect(()=>{
  setLoading(true)
  setTimeout(()=>{
    setLoading(false)
  },1000)
},[])


  return (
   <div className="App">  
   {
    loading?

    <DotLoader color={"#0fc5aa"}    size={80}  loading={loading}   cssOverride={override}/>

    : 
    
    <div> 
      <Navbar />
    <Header/>
    <Categories/>
    <Enhance/>
    <TopCourses/>
    <Peoples/>
    <Latest/>
    <Enjoy/> 
    <Train/> 
<NewsLetter/>
    <Footer/> 

    </div> 

  
   }

    </div>
  
  );
  }

export default App;

