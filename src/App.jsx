import { fetchContacts } from "./redux/contactsOps";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components//ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
