import { Box } from "@mui/material";
import ContactList from "../components/ContactList/ContactList";
import Filter from "../components/SearchBox/SearchBox";
import ContactForm from "../components/ContactForm/ContactForm";

const ContactsPage = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={3}
    >
      <ContactForm />
      <Filter />
      <ContactList />
    </Box>
  );
};

export default ContactsPage;
