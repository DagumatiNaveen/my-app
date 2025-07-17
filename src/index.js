import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import App1 from './Appl';
// import Functio from './Functio';
// import App1 from './Appl';

import AppButton from './AppButton'; // Importing the App1 component
import Decrement from './Decrement';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App1 /> */}

    {/* <Functio /> */}
    {/* <AppButton /> */}
    <Decrement />
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
