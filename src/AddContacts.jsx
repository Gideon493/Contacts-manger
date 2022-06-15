//import React from "react";

import { useState } from "react";

//class AddContacts extends React.Component  {
   
    //render(){
    const AddContacts =(props)=>{
        //const[name,setName] = useState("")
        //const[email,setEmail] = useState("")
        const [details,setDetails] = useState({
            name:"",
            email:""
            
        })
        const addContact = (e)=>{
            e.preventDefault();
            if(details.email === "" ||details.name === ""){
                alert("All fields are required")
                return;
            }
            
            props.addContact(details)
            setDetails({name:"",email:""})
            
        }
        
    
    return ( 
        <div className="addcontact">
            
            <form action="" onSubmit={addContact}>
                <label htmlFor=""> <h3>Name</h3></label>
                
                <input type="text" 
                value={details.name}
                placeholder="Name"
                onChange={(e)=>setDetails({name:e.target.value})}
               
                />
                <br />
                <label htmlFor=""><h3>Email</h3></label>
              
                <input type="text" 
                value={details.email}
                placeholder="Email"
                onChange={(e)=>setDetails({email:e.target.value})}

               
                />
                <br /><br />
                <button style={{cursor:'pointer'}}>Add</button>
            </form>
        </div>
     );
    }
//}
 
export default AddContacts;