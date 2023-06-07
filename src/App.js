import { useEffect, useState } from 'react';
import './App.css';



function App() {

  const[excuse,setExuse] = useState("");

  const GetFact = () =>{
    
      fetch(`https://catfact.ninja/fact/`)
      .then((data)=> {return data.json()})
      .then((data)=>setExuse(data.fact))
      .catch(console.log("error"))
      
  }
  

   return(
    <div className='App'>
      <div className='content'>
     <h1>Get a Cat Fact</h1>

     <h3>{excuse}</h3>
   
</div>
<button onClick={GetFact}>Cat Fact</button>

    </div>
   );
}
  

export default App;
