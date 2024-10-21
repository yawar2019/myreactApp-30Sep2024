import { useReducer } from "react";

const initialState=0;

const reducer=(state,action)=>{

switch(action)
{
    case 'Increment':return  state+1;
    case 'Decrement':return state-1;
    default:         return initialState;
}

}

const UseReducerExample = () => {
    
    const[count,dispatch]=useReducer(reducer,initialState);
    return (
        
        <>
    {count}
    <button onClick={()=>dispatch('Increment')}>Increment</button>
<button onClick={()=>dispatch('Decrement')}>Decrement</button>
<button onClick={()=>dispatch('default')}>Reset</button>

         </>
    
);
}
 
export default UseReducerExample;