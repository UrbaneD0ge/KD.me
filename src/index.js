import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TitleNav from './components/titleNav';
import AboutMe from './components/aboutMe';
import Footer from './components/footer';

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
