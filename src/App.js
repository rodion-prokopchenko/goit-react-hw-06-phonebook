import s from "./App.module.css";
import ContactForm from "./Components/ContactForm/ContactForm";
import Filter from "./Components/Filter/Filter";
import ContactList from "./Components/ContactList/ContactList";
import react, { useState } from "react";
import shortid from "shortid";
import useLocalStorage from "./Components/Hooks/useLocalStorage";
import { useDispatch, useSelector } from "react-redux";
import {
  changeFilter,
  addContact,
  deleteContact,
  findByName,
} from "./Components/redux/contact-actions";
import { getContacts } from "./Components/redux/contact-selectors";

export default function App() {
  console.log(getContacts);
  // const [contacts, setContacts] = useLocalStorage("contacts", "");
  const [filter, setFilter] = useState("");

  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const onDeleteContact = (id) => dispatch(deleteContact(id));

  // const changeFilter = (e) => {
  //   setFilter(e.currentTarget.value);
  //   console.log(findByName());
  // };

  // const deleteContact = (contactId) => {
  //   return setContacts(
  //     contacts.filter((contacts) => contacts.id !== contactId)
  //   );
  // };

  function compairContacts(e) {
    if (!contacts) return;
    if (contacts.some(({ name }) => name === e)) {
      return true;
    }
  }

  // const addContact = (name, number) => {
  //   const newContact = {
  //     id: shortid.generate(),
  //     name: name,
  //     number: number,
  //   };
  //   setContacts((prevState) => [newContact, ...prevState]);
  // };

  // const findByName = () => {
  //   const normalizedFilter = filter.toLowerCase();

  //   return contacts.filter((contacts) =>
  //     contacts.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  // const filteredNames = findByName();

  return (
    <div className={s.app}>
      <ContactForm
        addContact={(e, w) =>
          dispatch(addContact(e.targer.value, w.target.value))
        }
        compairContacts={compairContacts}
      />
      <h2>Contacts</h2>
      <Filter onChange={(e) => dispatch(changeFilter(e.targer.value))} />
      <ContactList
        contacts={contacts}
        deleteContact={() => dispatch(onDeleteContact)}
        filtreredContacts={dispatch(findByName())}
      />
    </div>
  );
}
