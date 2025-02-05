import { useEffect } from "react";
import { Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import ContactList from "../components/ContactList/ContactList";
import Filter from "../components/SearchBox/SearchBox";
import ContactForm from "../components/ContactForm/ContactForm";
import { selectFilteredContacts } from "../redux/contacts/selectors";
import { fetchContacts } from "../redux/contacts/operations";

const ContactsPage = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"flex-start"}
      gap={3}
    >
      <ContactForm />
      <Filter />
      <ContactList contacts={contacts} />
    </Box>
  );
};

export default ContactsPage;
