import { Product } from "@/typing";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavsState {
  items: Product[];
}

// --- Manual LocalStorage Helpers ---
const isClient = typeof window !== "undefined";

const saveToLocalStorage = (items: Product[]) => {
  if (isClient) {
    localStorage.setItem("favorites", JSON.stringify(items));
  }
};

const getInitialFavs = (): Product[] => {
  if (isClient) {
    const savedFavs = localStorage.getItem("favorites");
    return savedFavs ? JSON.parse(savedFavs) : [];
  }
  return [];
};
// ----------------------------------

const initialState: FavsState = {
  items: getInitialFavs(),
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

      // Save manually to localStorage after each change
      saveToLocalStorage(state.items);
    },
  },
});

export const { toggleFavorite } = favsSlice.actions;
export default favsSlice.reducer;
