import { useState } from "react";

const RegistrationForm = () => {

    const[form,setForm]=useState({firstName:"Amair",country:"India",selectedValue:true})

 const Countries=[{id:1,country:'India'},{id:2,country:'China'}] 

const formInputs=(e)=>{
   const value=e.target.type==="checkbox"?e.target.checked:e.target.value;
    setForm({...form,
        [e.target.name]:value
      }) 


}

const onFormSubmit=(e)=>{
e.preventDefault();
console.log(form);
}

    return (<> 
    <div>
    <form onSubmit={onFormSubmit}>

        <label>First Name</label>
        <input type="text" value={form.firstName} name="firstName"  onChange={formInputs}/>
 <br></br>
 
 <label>Country Name</label>
      <select name="country" value={form.country} onChange={formInputs}>
       {Countries.map(c=><option key={c.id}>{c.country}</option>)}
      </select>  
 <br></br>

 <label>agree</label>
      <input type="checkbox" name="selectedValue" checked={form.selectedValue} onChange={formInputs}/><br></br>
<button type="submit">submit</button>
    </form>
    </div>
    </> 
    );
}
 
export default RegistrationForm;