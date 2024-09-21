import { createSlice } from '@reduxjs/toolkit';

const initialLanguage = localStorage.getItem('i18nextLng') || 'ar';

const languageSlice = createSlice({
  name: 'language',
  initialState: {
    language: initialLanguage,
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.language = action.payload;
      localStorage.setItem('i18nextLng', action.payload); // Persist in local storage
    },
  },
});

export const { changeLanguage } = languageSlice.actions;
export default languageSlice.reducer;
