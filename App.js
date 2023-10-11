import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
function App(){
   const [name, setName]=useState("");
   const [tnc, setTnc]=useState(false);
   const [interest,setInterest]=useState("");
   function getFormData(e)
   { 
      console.warn(name,tnc,interest)
      e.preventDefault()
   }
   return(
      <div className="App">
         <h1>Creating form in React App</h1>
         <form on submit={getFormData}>
            
            <input type="type here"placeholder='enter name' onChange={(e)=>setName(e.target.value)}/><br /><br />
            <select onChange={()=>setInterest}>
            <option>Select Option</option>
               <option>Dhoom1</option>
               <option>Dhoom2</option>
               <option>Dhoom3</option>
            </select><br /><br />
            <input type="checkbox" onChange={(e)=> setTnc(e.target.checked)}/><span>Accept terms and Conditions</span>  
            <br /><br />
            <button type="submit">Submit</button>
             </form>
         </div>
   );
}


export default App;