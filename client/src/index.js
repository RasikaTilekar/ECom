import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

<<<<<<< HEAD
import './i18n'
=======
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';




>>>>>>> 556e8886229930c99aa5685fe9f9e97519aa12b1

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
