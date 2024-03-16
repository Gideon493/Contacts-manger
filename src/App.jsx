import { useState } from 'react';
import { Contacts, AddContacts } from './index';

const App = () => {
  //const local_storage = "contacts"
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: 'Gideon Ngetich',
      email: 'gideongetich493@gmail.com'
    },
    {
      id: 2,
      name: 'Joshua Bett',
      email: 'joshuabett579@gmail.com'
    },
    {
      id: 3,
      name: 'Aron Bett',
      email: 'aronbett943@gmail.com'
    }
  ])
  const deleteContact = (id) => {
    const newContacts = contacts.filter(contact => contact.id !== id);
    setContacts(newContacts)
  }
  const addContact = (contact) => {
    console.log(contact);
    setContacts([...contacts, contact])
  }
  /*useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(local_storage))
    if (retrieveContacts) setContacts(retrieveContacts)
  }, [])
  useEffect(() => {
    localStorage.setItem(local_storage, JSON.stringify(contacts))
  }, [contacts])*/
  return (
    <div className="ml-20">

      <h3 className="text-red-400 p-4 text-2xl">Contacts</h3>

      <AddContacts addContact={addContact} />
      <br />
      {contacts && <Contacts contacts={contacts} deleteContact={deleteContact} />}

    </div>
  );
}

export default App;
