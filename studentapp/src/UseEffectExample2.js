import { useEffect, useState } from "react";

const UseEffectExample2 = () => {

    const [seconds,setSeconds]=useState(0);

useEffect(()=>{

const interval=setInterval(() => {
    setSeconds(s=>s+1);
}, 1000);

// return a cleanup function to clear the interval when the component re-render

return()=>{

    clearInterval(interval);
    console.log('Clear Interval called');
}
})
    return ( <>{seconds}</> );
}
 
export default UseEffectExample2;