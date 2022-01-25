import s from "./App.module.css";
import ContactForm from "./Components/ContactForm/ContactForm";
import Filter from "./Components/Filter/Filter";
import ContactList from "./Components/ContactList/ContactList";
import react, { useState } from "react";
import shortid from "shortid";
import useLocalStorage from "./Components/Hooks/useLocalStorage";

export default function App() {
  const [contacts, setContacts] = useLocalStorage("contacts", "");
  const [filter, setFilter] = useState("");

  const changeFilter = (e) => {
    setFilter(e.currentTarget.value);
    console.log(findByName());
  };

  const deleteContact = (contactId) => {
    return setContacts(
      contacts.filter((contacts) => contacts.id !== contactId)
    );
  };

  function compairContacts(e) {
    if (!contacts) return;
    if (contacts.some(({ name }) => name === e)) {
      return true;
    }
  }

  const addContact = (name, number) => {
    const newContact = {
      id: shortid.generate(),
      name: name,
      number: number,
    };
    setContacts((prevState) => [newContact, ...prevState]);
  };

  const findByName = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contacts) =>
      contacts.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const filteredNames = findByName();
  return (
    <div className={s.app}>
      <ContactForm addContact={addContact} compairContacts={compairContacts} />
      <h2>Contacts</h2>
      <Filter onChange={changeFilter} />
      <ContactList
        contacts={contacts}
        deleteContact={deleteContact}
        filtreredContacts={filteredNames}
      />
    </div>
  );
}

// class App extends PureComponent {
// state = {
//   contacts: [],
//   filter: "",
// };

// lContacts = () => {
//   return localStorage.getItem("contacts")
//     ? JSON.parse(localStorage.getItem("contacts"))
//     : [];
// };

// componentDidMount = () => {
//   console.log("срабатывает в начале");

//   const checkContacts = localStorage.getItem("contacts");

//   if (checkContacts) {
//     const parsedContacts = JSON.parse(checkContacts);

//     setState({ contacts: parsedContacts });
//   }
// };

// changeFilter = (e) => {
//   setState({ filter: e.currentTarget.value });
// };
// deleteFromLocaleStorage = (e) => {
//   let updateContacts = lContacts().filter(
//     (contacts) => contacts.id !== e
//   );
//   let updatedContacts = JSON.stringify(updateContacts);
//   localStorage.setItem("contacts", updatedContacts);
// };
// deleteContact = (contactId) => {
//   deleteFromLocaleStorage(contactId);

//   setState((prevState) => ({
//     contacts: prevState.contacts.filter(
//       (contacts) => contacts.id !== contactId
//     ),
//   }));
// };

// compairContacts = (e) => {
//   if (lContacts().some(({ name }) => name === e)) {
//     return true;
//   }
// };

// addContact = (name, number) => {
//   const newContact = {
//     id: shortid.generate(),
//     name: name,
//     number: number,
//   };
//   let lContacts = localStorage.getItem("contacts")
//     ? JSON.parse(localStorage.getItem("contacts"))
//     : [];
//   lContacts.unshift(newContact);
//   localStorage.setItem("contacts", JSON.stringify(lContacts));

//   setState({ contacts: lContacts });
// };

// findByName = () => {
//   const { filter, contacts } = state;
//   const normalizedFilter = filter.toLowerCase();

//   return contacts.filter((contacts) =>
//     contacts.name.toLowerCase().includes(normalizedFilter)
//   );
// };

// render() {
//   const { contacts } = state;

//   return (
//     <div className={s.app}>
//       <ContactForm
//         addContact={addContact}
//         compairContacts={compairContacts}
//       />
//       <h2>Contacts</h2>
//       <Filter onChange={changeFilter} />
//       <ContactList
//         contacts={contacts}
//         deleteContact={deleteContact}
//         filtreredContacts={findByName()}
//       />
//     </div>
//   );
// }
// }

// export default App;
