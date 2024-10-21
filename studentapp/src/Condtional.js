import { Test } from "./Test";


export const Conditional = () => {
    
const isAvailable=true;


return (
<>
{/* {isAvailable && 

<h1>my second test component available</h1>}

{!isAvailable && 

<h1>my second test component not available</h1>} */}

{isAvailable?<Test/>:<h2>Good Night</h2>}



</>)


 
}