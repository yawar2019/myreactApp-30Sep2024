import { useState,useRef } from "react";

const UseRefExample = () => {
const[count,setCount]=useState(0);
const myRef=useRef(0);
const textRef=useRef(0);
const updateCount=()=>{

    setCount(count+1);//after updating value //boundry vdom
    myRef.current+=1;
   
    console.log(count);//update changes u will get after rendering dom
    console.log(myRef);
    console.log(textRef)
    textRef.current.focus();
    textRef.current.style="color:red";
    textRef.current.value="dirup";
}

    return ( //rerender -real dom
    <>
    <input type="text" ref={textRef}/>
    <button onClick={updateCount}>Increment</button>
    <span>Count:{count}</span>
    <span>ref:{myRef.current}</span>
    </> );
}
 
export default UseRefExample;