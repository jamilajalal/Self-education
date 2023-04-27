import 'bootstrap/dist/css/bootstrap.min.css'
import { useState,useEffect,} from 'react'
import DotLoader from "react-spinners/DotLoader";
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Contact from './pages/Contact'
import About from './pages/About'
import Courses from './pages/Courses'
import Events from './pages/Events'
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
      <BrowserRouter> 
    <Navbar />

    <Routes> 
      <Route path='/' element={<Home/>} />
      <Route path='*' element={<NotFound/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/courses' element={<Courses/>} />
      <Route path='/events' element={<Events/>} />
   
</Routes>

    <Footer/> 
    </BrowserRouter>

    </div> 

  
   }

    </div>
  
  );
  }

export default App;

