import s from "./App.module.css";
import ContactForm from "./Components/ContactForm/ContactForm";
import Filter from "./Components/Filter/Filter";
import ContactList from "./Components/ContactList/ContactList";
import react from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeFilter,
  addContact,
  deleteContact,
} from "./Components/redux/contact-actions";
import {
  getContacts,
  getVisibleContacts,
} from "./Components/redux/contact-selectors";

export default function App() {
  const contacts = useSelector(getContacts);
  const filterStore = useSelector(getVisibleContacts);

  console.log("c", contacts);
  console.log("f", filterStore);

  const dispatch = useDispatch();

  const onDeleteContact = (id) => dispatch(deleteContact(id));
  const onChangeFilter = (e) => dispatch(changeFilter(e));

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
        filteredContacts={filterStore}
      />
    </div>
  );
}
