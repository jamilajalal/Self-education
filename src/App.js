import 'bootstrap/dist/css/bootstrap.min.css'
import { useState,useEffect,} from 'react'
import DotLoader from "react-spinners/DotLoader";
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Categories from './components/Categories';
import Enhance from './components/Enhance';
import Elave from './components/Elave';


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
    <Elave/>
 
    </div> 

  
   }

    </div>
  
  );
  }

export default App;

