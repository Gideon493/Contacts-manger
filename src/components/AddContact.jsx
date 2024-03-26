import { useState } from "react";

const AddContacts = ({ addContact }) => {
    const [contact, setContact] = useState({
        name: "",
        email: ""
    });

    const [showContact, setShowContact] = useState(false)

    const handleNameChange = (e) => {
        setContact({ ...contact, name: e.target.value })
    }
    const handleEmailChange = (e) => {
        setContact({ ...contact, email: e.target.value })
    }
    const SubmitContact = (e) => {
        e.preventDefault();
        if (!contact.name) {
            alert("Please add name");
            return;
        } else if (!contact.email) {
            alert("Please add Email");
            return;
        } else {
            //const trimContact = contact.trim();
            addContact(contact);
            setContact({
                name: "",
                email: ""
            });

            setShowContact(false)
        }


    };
    return (

        <div className="">
            {!showContact ? <button className="text-yellow-200 border-none p-2 bg-green-800 text-slate-100 duration-200 rounded-md my-3 flex flex-row"
                onClick={() => setShowContact(true)}>New Contact
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mx-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>

            </button>
                : <form
                    action=""
                    className="bg-gray-200 rounded-md flex flex-col p-5 shadow-lg w-2/5"
                >
                    <label htmlFor="" className="text-lg text-cyan-900">
                        Name
                    </label>
                    <input
                        type="text"
                        placeholder="Name"
                        className="bg-white p-1 rounded-md duration-150 focus:scale-100 focus:outline-none focus:border-2 my-2 focus:border-cyan-500"
                        value={contact.name}
                        onChange={handleNameChange}
                    />
                    <label htmlFor="" className="text-lg text-cyan-900">
                        Email
                    </label>
                    <input
                        type="text"
                        placeholder="Email"
                        className="bg-white p-1 rounded-md duration-150 focus:scale-100 focus:outline-none focus:border-2 my-2 focus:border-cyan-500"
                        value={contact.email}
                        onChange={handleEmailChange}
                    />
                    <button
                        onClick={SubmitContact}
                        className="border-cyan-600 px-6 py-2 border text-cyan-700 hover:text-white duration-200 hover:scale-105 hover:bg-cyan-600 hover:outline-white bg-white rounded-md my-3 w-2/6"
                    >
                        Add Contact
                    </button>
                </form>}
        </div>
    );
};

export default AddContacts;
