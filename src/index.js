import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import Footer from './Footer'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Gallary from './components/Gallary';
import Contact from './components/Contact';
import Booking from './components/Booking';
import Service from './components/Service';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
      <Header /> 

      {/* <Hero /> */}

     <Routes>
    <Route path='/' element={<Home />} />    
    <Route path="/about" element={<About />} />
    <Route path="/gallary" element={<Gallary />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/booking" element={<Booking />} />
    <Route path="/service" element={<Service />} />



      </Routes>
      <Footer/>

    </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
