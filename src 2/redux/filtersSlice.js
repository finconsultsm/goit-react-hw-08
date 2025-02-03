import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  query: "",
};

export const filtersSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeQueryFilter: (state, action) => {
      state.query = action.payload;
    },
  },
});

export const { changeQueryFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
