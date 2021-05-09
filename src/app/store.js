import counterReducer from "../features/Counter/counterSlice";
import userReducer from "../../src/features/Auth/userSlice";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = {
  counter: counterReducer,
  user: userReducer,
};

const store = configureStore({
  reducer: rootReducer,
});
export default store;
