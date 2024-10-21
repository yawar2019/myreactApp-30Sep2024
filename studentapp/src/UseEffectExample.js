import { useEffect, useState } from "react";

const UseEffectExample = () => {

    const[count,setCount]=useState(0);
    const[secondcount,setSecondcount]=useState(0);

    useEffect(()=>{
         
        console.log('Hi i am ran');
    },[secondcount])

    return (
<>
<h1>Hi I am USeEffect Demo</h1>
<button onClick={()=>setCount(count+1)}>increment</button>
<button onClick={()=>setSecondcount(secondcount+1)}>increment 2</button>
<span>Count:{count}</span>
<span>Count:{secondcount}</span>
</>

      );
}
 
export default  UseEffectExample;