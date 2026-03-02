import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import favsReducer from "./favsSlice";
import filterReducer from "./filterSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favsReducer,
    filter: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;
export default store;
