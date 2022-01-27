import {
  combineReducers,
  configureStore,
  createReducer,
  createStore,
} from "@reduxjs/toolkit";

import react from "react";
import {
  addContact,
  deleteContact,
  findByName,
  changeFilter,
} from "./contact-actions";
import { getValueFilter } from "./contact-selectors";
import { useSelector } from "react-redux";

console.log(getValueFilter());
// const n = useSelector(getValueFilter()).toLowerCase();

const contactReducer = createReducer([1, 2, 3], {
  [deleteContact]: (state, action) =>
    state.filter((contacts) => contacts.id !== action.payload),
  [addContact]: (state, action) => [action.payload, ...state],
  [findByName]: (state, action) =>
    state.filter((state) => state.name.toLowerCase().includes(action.payload)),
});
// or action.payload (ABOUT TOP)

const filterReducer = createReducer("sdsds", {
  [changeFilter]: (_, action) => action.payload,
});

// [compairContacts];

const counterReducer = combineReducers({
  items: contactReducer,
  filter: filterReducer,
});

export { counterReducer, filterReducer };
