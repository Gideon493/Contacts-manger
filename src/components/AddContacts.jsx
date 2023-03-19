import { useState } from "react";

const AddContacts = ({ addContact }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Please add name");
      return;
    } else if (!email) {
      alert("Please add Email");
      return;
    } else {
      addContact({ name, email });
      setName("");
      setEmail("");
    }
  };
  return (
    <form
      action=""
      onSubmit={onSubmit}
      className="bg-gray-200 rounded-md flex flex-col p-5 shadow-lg w-2/5"
    >
      <label htmlFor="" className="text-lg text-cyan-900">
        Name
      </label>
      <input
        type="text"
        value={name}
        placeholder="Name"
        className="bg-white p-1 rounded-md duration-150 focus:scale-100 focus:outline-none focus:border-2 my-2 focus:border-cyan-500"
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="" className="text-lg text-cyan-900">
        Email
      </label>
      <input
        type="text"
        value={email}
        placeholder="Email"
        className="bg-white p-1 rounded-md duration-150 focus:scale-100 focus:outline-none focus:border-2 my-2 focus:border-cyan-500"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        onClick={addContact}
        className="border-cyan-600 px-6 py-2 border text-cyan-700 hover:text-white duration-200 hover:scale-105  hover:bg-cyan-600 hover:outline-white bg-white rounded-md my-3 w-2/6"
      >
        Add Contact
      </button>
    </form>
  );
};

export default AddContacts;
