import { Product } from "@/typing";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavsState {
  items: Product[];
}

const initialState: FavsState = {
  items: [],
};

const favsSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<Product>) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (index >= 0) {
        state.items.splice(index, 1); // Remove if exists
      } else {
        state.items.push(action.payload); // Add if not exists
      }
    },
  },
});

export const { toggleFavorite } = favsSlice.actions;
export default favsSlice.reducer;
