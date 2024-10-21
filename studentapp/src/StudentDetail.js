import { App } from "./App";
import { Conditional } from "./Condtional";
import { FacultyClassComp } from "./FacultyClassComp";
import { Test } from "./Test";

 
 
 export default  function StudentDetail()
{

    const show= ()=>{

        alert('hi i am called');
    }
     
    const showagain= ()=>{

        alert('hi i am called once again');
    }
    

    const showagain2= (val)=>{

        alert(val);
    }
    const inputTaker= (e)=>{

        console.log(e);
    }
    const inputTaker2= (e,val)=>{

        console.log(val);
        console.log(e);
    }

    return (
        <div>
            
        <h1>Students are awake</h1>
       <FacultyClassComp name="Subbu" marks="100"></FacultyClassComp>
       <button onClick={show}>click me</button>
       <button onClick={()=>{showagain()}}>click me onceagain</button>
       <button onClick={()=>{showagain2('hi i am called once again 2nd time')}}>click me 2nd time</button>
       <input type="text" name="StName" className="form-control" onChange={inputTaker} />
       <input type="text" onChange={(e)=>{inputTaker2(e,e.target.value)}} />
      <Conditional/>
       
        </div>
    )
}

 