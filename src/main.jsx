// main.jsx أو index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';

import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'; 
import store from './redux/store'; 
import i18n from './i18n'; // تأكد أن المسار صحيح
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
    <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <Router>
        <App  />
      </Router>
        </I18nextProvider>
    </Provider>
  </React.StrictMode>
);
