import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./Greeting/greeting";

const store = configureStore({
  reducer: {
    message: messageReducer
  }
});

export default store;
