import React, { useContext, useReducer } from 'react';
import ValueContext from './ValueContext';
import NumberReducer from './NumberReducer';


function Child2() {
    let number= useReducer(NumberReducer)
  return (

    <div >
      Child 2
 

    </div>
  );
}

export default Child2;
