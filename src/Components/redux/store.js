import counterReducer from "./contact-reducer";
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
  reducer: {
    contacts: counterReducer,
  },
});

export default store;
