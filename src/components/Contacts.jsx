import { ContactCard } from "../index";
const Contacts = ({ contacts, deleteContact }) => {
    return (
        <div className="">
            {contacts &&
                contacts.map((contact) => {
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
