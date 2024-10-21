import {createContext, useState} from 'react'
import App from './App';
import TestContext from './TestContext';
export const ConterContext=createContext(0);

const  ContextApiExample= () => {
    
   
    const[bcount,setbCount]=useState(5);
    
     
    return (
        <>
        <ConterContext.Provider value={bcount}>
        <TestContext/>
    </ConterContext.Provider>
    <button onClick={()=>setbCount(bcount+1)}>click</button>
     
 
        </> 
    
);
}
 
 
export default ContextApiExample;