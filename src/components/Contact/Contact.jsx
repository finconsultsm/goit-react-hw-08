import { FaPhoneAlt, FaUser } from "react-icons/fa";
import sc from "./Contact.module.css";

const Contact = ({ contact, handleRemoveContact }) => {
  const { name, number } = contact;
  console.log(contact);

  return (
    <li className={sc.contact}>
      <div className={sc.contactInfo}>
        <div>
          <FaUser />
          {name}
        </div>
        <div>
          <FaPhoneAlt />
          {number}
        </div>
      </div>
      <button onClick={() => handleRemoveContact(contact.id)}>Delete</button>
    </li>
  );
};

export default Contact;
