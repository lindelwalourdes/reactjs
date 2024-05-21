import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'bootstrap/dist/css/bootstrap.min.css';

const config = {
  apiKey: "AIzaSyCOxE6SmtB2tWfMeVrcLLQycym3PqUYvS0",
  authDomain: "crud-project-3cefd.firebaseapp.com",
  projectId: "crud-project-3cefd",
  storageBucket: "crud-project-3cefd.appspot.com",
  messagingSenderId: "430986158790",
  appId: "1:430986158790:web:75fe725d2f62b1a5346dc7",
  measurementId: "G-5N2QMWEMQN"
};
firebase.initializeApp(config);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
