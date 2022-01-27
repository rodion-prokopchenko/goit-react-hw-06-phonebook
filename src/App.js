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
import {
  getContacts,
  getValueFilter,
} from "./Components/redux/contact-selectors";

export default function App() {
  const contacts = useSelector(getContacts);
  const filterStore = useSelector(getValueFilter);

  console.log("c", contacts);
  console.log("f", filterStore);

  const dispatch = useDispatch();

  const onDeleteContact = (id) => dispatch(deleteContact(id));
  const findedByName = (name) => dispatch(findByName(name));
  const onChangeFilter = (e) => dispatch(changeFilter(e));

  // console.log(findedByName(filterStore));
  const fContacts = findedByName(filterStore);

  function compairContacts(e) {
    if (!contacts) return;
    if (contacts.some(({ name }) => name === e)) {
      return true;
    }
  }

  return (
    <div className={s.app}>
      <ContactForm
        addContact={(name, number) => dispatch(addContact(name, number))}
        compairContacts={compairContacts}
      />
      <h2>Contacts</h2>
      <Filter onChange={onChangeFilter} />
      <ContactList
        deleteContact={(id) => dispatch(onDeleteContact(id))}
        filteredContacts={fContacts}
      />
    </div>
  );
}

// const [contacts, setContacts] = useLocalStorage("contacts", "");
// const [filter, setFilter] = useState("");

// const changeFilter = (e) => {
//   setFilter(e.currentTarget.value);
//   console.log(findByName());
// };

// const deleteContact = (contactId) => {
//   return setContacts(
//     contacts.filter((contacts) => contacts.id !== contactId)
//   );
// };

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
