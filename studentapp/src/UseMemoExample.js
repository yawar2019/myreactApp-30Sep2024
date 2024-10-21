import { useMemo, useState } from "react";

const UseMemoExample = () => {
    const[count,setCount]=useState(0);
    const[dcount,setdCount]=useState(0);



const gettry=(()=>{
let s=0;
for(let i=0;i<5;i++)
{
    console.log(i);
    s+=i;
}

return s;

})


const calc=useMemo(()=>gettry(),[dcount]) ;




    return (
    <>
    
    <button onClick={()=>setCount(count+1)}>increment</button>
    <button onClick={()=>setdCount(dcount+1)}>increment</button>
    <span>Count:{count}</span>
    <span>Count:{dcount}</span>
    </>  );
}
 
export default UseMemoExample;