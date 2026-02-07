import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../typing";

export interface CartItem {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

// --- Helper Functions for Manual LocalStorage ---

const isClient = typeof window !== "undefined";

const saveToLocalStorage = (items: CartItem[]) => {
  if (isClient) {
    localStorage.setItem("cart", JSON.stringify(items));
  }
};

const getInitialItems = (): CartItem[] => {
  if (isClient) {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  }
  return [];
};

// -----------------------------------------------

const initialState: CartState = {
  items: getInitialItems(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Omit<CartItem, "quantity">>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      saveToLocalStorage(state.items); // Save manually
    },

    removeItem: (state, action: PayloadAction<{ id: number }>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.items = state.items.filter(
            (item) => item.id != action.payload.id,
          );
        }
      }
      saveToLocalStorage(state.items); // Save manually
    },

    toggleCart: (state, action: PayloadAction<Product>) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (index >= 0) {
        state.items.splice(index, 1);
      } else {
        state.items.push({
          // Casting Product to CartItem to satisfy TypeScript, quantity is added manually
          ...(action.payload as unknown as CartItem),
          quantity: 1,
        });
      }
      saveToLocalStorage(state.items); // Save manually
    },

    clearItems: (state) => {
      state.items = [];
      saveToLocalStorage(state.items); // Save manually
    },
  },
});

export const { addItem, removeItem, clearItems, toggleCart } =
  cartSlice.actions;
export default cartSlice.reducer;
