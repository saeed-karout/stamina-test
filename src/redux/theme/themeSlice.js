// src/redux/themeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: localStorage.getItem('currentMode') || 'dark', // الحصول على الثيم من localStorage أو الافتراضي
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      const newTheme = state.theme === 'dark' ? 'light' : 'dark';
      state.theme = newTheme;
      localStorage.setItem('currentMode', newTheme);
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
      localStorage.setItem('currentMode', action.payload);
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
