import {BsTrash,BsPersonCircle} from 'react-icons/bs'
const ContactCard = ({contacts,deleteContact}) => {
    /*const deleteContact = (id)=>{
        deleteContact(contacts)
       contacts.filter((contact)=>
       {
           return contact.id !==id;
    })
    }*/
    return ( 
        <div>
            <h3>Your Contacts</h3>
            {contacts.map((contact)=>{
               return(
                    <div className='contactcard' key={contact.id}> 
                    <h3><span><BsPersonCircle/></span>{contact.name}</h3>
                    {contact.email}
                    <span ><BsTrash  onClick={()=>deleteContact(contact.id)} style={{cursor:'pointer'}}/></span>
                    </div>

                    
               )
            })}
        </div>
     );
}
 
export default ContactCard;