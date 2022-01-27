import shortid from "shortid";
import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("contact/add", (name, number) => ({
  payload: {
    id: shortid.generate(),
    name: name,
    number: number,
  },
}));

const deleteContact = createAction("contact/delete");

const findByName = createAction("contact/filtered");

const changeFilter = createAction("filter/change");

// const compairContacts = createAction("contact/compair", (e) => (
//    !contacts ?? return;
//      (contacts.some(({ name }) => name === e)) {
//       return true;
//     }
// ))

export { addContact, deleteContact, findByName, changeFilter };
