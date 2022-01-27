import { createStore } from "redux";
import { counterReducer, filterReducer } from "./contact-reducer";
// NEW
import { configureStore } from "@reduxjs/toolkit";
// NEW
const store = configureStore({ reducer: counterReducer });

// const store = createStore(counterReducer, composeWithDevTools);

export default store;
