import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  selectedCategory: string;
}

const initialState: FilterState = {
  selectedCategory: "all",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { setCategory } = filterSlice.actions;
export default filterSlice.reducer;