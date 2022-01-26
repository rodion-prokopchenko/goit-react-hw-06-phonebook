import { createReducer } from "@reduxjs/toolkit";
import react from "react";
import { addContact, deleteContact } from "./contact-actions";

const contactReducer =
  ([],
  {
    [deleteContact]: (state, action) =>
      state.filter((contacts) => contacts.id !== action.payload),
    [addContact]: (state, action) => [action.payload, ...state],
  });
