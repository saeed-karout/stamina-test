import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './lang/languageSlice'; // Import the language slice
import themeReducer from './theme/themeSlice'; // Existing theme slice

const store = configureStore({
  reducer: {
    language: languageReducer,
    theme: themeReducer, // Your existing theme reducer
  },
});

export default store;
