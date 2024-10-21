 
import {useState} from 'react';
 

export const Test = () => {
    const ages=[10,20,30];
    const students=['Hari','subbu','manasa'];
    const [stName,setStName]=useState('dirup');
    const [stdetName,setStdetName]=useState({id:1,name:'Raghu',marks:60});
   
 

 const EmployeeDetails=[
                 {id:1,empname:'dilip'},
                 {id:2,empname:'shradha'},
                 {id:3,empname:'Raghu'}
                ];

                
          
                const UpdateStudentDet=()=>{
setStdetName(previousStDet=>{

    return {...previousStDet,marks:76}
})

                }
return(
   
<>
{/* <ul>
{ages.map((a)=>{return <li>{a}</li>})}
</ul>

<ul>
{students.map((a)=><li>{a}</li>)}
</ul> */}

{/* <table>
<tr>
    <thead>
        <tr>
        <th>id</th>
        <th>Name</th>
        </tr>
    </thead>
</tr>
<tbody>
{EmployeeDetails.map((e)=><tr><td>{e.id}</td><td>{e.empname}</td></tr>)}
</tbody>
<tfoot></tfoot>
</table> */}
<br></br>
<ul>
    <li>{stdetName.id}</li>
    <li>{stdetName.name}</li>
    <li>{stdetName.marks}</li>
</ul>

{stName}
 
<button onClick={()=>{setStName('Raghu')}}>Update Name</button>
<button onClick={()=>{setStdetName({id:stdetName.id,name:stdetName.name,marks:80})}}>Update studentDetail</button>
<button onClick={UpdateStudentDet}>Update studentDetail</button>
 
 
 
</>

)
}
 
    