import { useState } from "react";
import { MyContext } from "./ContextEx";
import Component2 from "./Component2";
const Component1 = () => {

    const[count,setCount]=useState(78);



    
    return (
    <>
    <MyContext.Provider value={count}>
              <Component2/>
    </MyContext.Provider>
    </>  );
}
 
export default Component1;