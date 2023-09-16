import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
export const iconslice = createSlice({
  name: "lan",
  initialState: { language: "English" },
  reducers: {
    changeLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const store = configureStore({ reducer: { lan: iconslice.reducer } });

export const changeLocalLanguage = iconslice.actions.changeLanguage;
