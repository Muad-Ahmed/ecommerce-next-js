import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import favsReducer from "./favsSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;
export default store;
