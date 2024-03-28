import { ContactCard } from "../index";
const Contacts = ({ contacts, deleteContact }) => {
    return (
        <div className="">
            {contacts.length < 1 ? <div className="text-red-600 text-lg">There are no contacts found</div>
                : contacts.map((contact) => {
                    return (
                        <ContactCard
                            key={contact.id}
                            contact={contact}
                            deleteContact={deleteContact}
                        />
                    );
                })}
        </div>
    );
};

export default Contacts;
