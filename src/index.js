import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TitleNav from './components/titleNav';
import AboutMe from './components/aboutMe';
import Footer from './components/Footer';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQTZ6kct_A-3i4mDN3ocRk1h-PQ-BVBec",
  authDomain: "kdme-ba340.firebaseapp.com",
  projectId: "kdme-ba340",
  storageBucket: "kdme-ba340.appspot.com",
  messagingSenderId: "104197857718",
  appId: "1:104197857718:web:5c31ad5144b5a8f2cba117",
  measurementId: "G-VKCHVF3EW8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <TitleNav />
    <App />
    <AboutMe />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
