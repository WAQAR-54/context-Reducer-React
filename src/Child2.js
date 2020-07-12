import React, { useContext, useReducer } from 'react';
import ValueContext from './ValueContext';
import NumberReducer from './NumberReducer';


function Child2() {
    let [state, dispatch]= useReducer(NumberReducer ,45)
  return (

    <div >
      Child 2 {state}
      <br/>
      <button onClick={ ()=>{dispatch({type:"INCREMENT", val:20}); }}> Increment</button>
      <br/>
      <button onClick={ ()=>{dispatch({type:"DECREMENT", val:10}); }}>Decrease</button>

    </div>
  );
}

export default Child2;
