import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from './Parent';
import ValueContext from './ValueContext.js';

function App() {
//let [number , setNumber]=useState(45);
let value  = useState(48); 
//let Val=81;
  return (
    <ValueContext.Provider value={value}  >
      <div >
          Hello Word

        <Parent  ></Parent>
        {/* <button onClick={()=> setNumber(++number)}>Increase Number</button>
        <button onClick={()=> setNumber(--number)}>Decrease Number</button> */}
      </div>

    </ValueContext.Provider>
      
   
    
  );
}

export default App;
