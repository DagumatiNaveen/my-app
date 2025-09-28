import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import App from './App';
// import App1 from './Appl';
// import Functio from './Functio';
// import AppButton from './AppButton';
// import Decrement from './Decrement';

// import {Parent }from './Context/UserContext';
// import App from './App';
import Application from './Application';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    
    <Application />
  // </React.StrictMode>
);

reportWebVitals();