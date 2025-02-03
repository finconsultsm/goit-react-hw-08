import sc from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import { selectFilteredContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const handleRemoveContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={sc.contactList}>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          handleRemoveContact={handleRemoveContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
