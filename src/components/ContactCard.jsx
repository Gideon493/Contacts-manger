import { BsPersonCircle, BsTrashFill } from "react-icons/bs";
const ContactCard = ({ contact, deleteContact }) => {
  return (
    <div className="">
      <div className="flex flex-row justify-between bg-blue-400 duration-200 hover:scale-105 m-3 py-4 px-10 w-2/5 rounded-lg">
        <BsPersonCircle className="" />
        {/*<div> {contact.id}</div>*/}
        <div className="text-lg">{contact.name}</div>
        <div>{contact.email}</div>
        <BsTrashFill onClick={() => deleteContact(contact.id)} />
      </div>
    </div>
  );
};

export default ContactCard;
