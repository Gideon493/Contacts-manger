import './App.css';
import AddContacts from './AddContacts';
import ContactCard from './ContactCard';
import { useEffect, useState } from 'react';

const App =()=> {
  const local_storage = "contacts"
  const [contacts,setContacts]=useState([
    {
    id:1,
    name:'Gideon Ngetich',
    email:'gideongetich493@gmail.com'
  },
  {
    id:2,
    name:'Joshua Bett',
    email:'joshuabett579@gmail.com'
  },
  {
    id:3,
    name:'Aron Bett',
    email:'aronbett943@gmail.com'
  }
])
const deleteContact =(id) =>{
  const newContacts = contacts.filter(contact=> contact.id !==id);
  setContacts(newContacts)

}
  
const addContact = (contact)=>{
  console.log(contact);
  setContacts([...contacts,contact])
}
useEffect(()=>{
  const retrieveContacts = JSON.parse(localStorage.getItem(local_storage))
  if (retrieveContacts) setContacts(retrieveContacts)
  },[])
useEffect(()=>{
localStorage.setItem(local_storage,JSON.stringify(contacts))
},[contacts])
  return (
    <div className="App">
     
        <h3>Contacts</h3>
       
        <AddContacts addContact={addContact}/>
        <br />
        <ContactCard contacts={contacts} deleteContact={deleteContact}/>
     
    </div>
  );
}

export default App;
