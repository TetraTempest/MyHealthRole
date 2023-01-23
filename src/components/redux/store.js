import { configureStore } from "@reduxjs/toolkit";
import hospitalReducers from "./reducers/hospitalReducers";

export default configureStore({
  reducer: {
    hospitals: hospitalReducers,
  },
});
