import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from './Parent';

function App() {
let [number , setNumber]=useState(45);

  return (
    <div >
     Hello Word

     <Parent num={number} ></Parent>
     <button onClick={()=> setNumber(++number)}>Increase Number</button>
     <button onClick={()=> setNumber(--number)}>Decrease Number</button>
    </div>
  );
}

export default App;
