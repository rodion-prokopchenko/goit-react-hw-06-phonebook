import counterReducer from "./contact-reducer";
// NEW
import { configureStore } from "@reduxjs/toolkit";
// NEW
const store = configureStore({ reducer: { contacts: counterReducer } });

export default store;
