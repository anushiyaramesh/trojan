// src/Router.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';  // Assuming you have a Header component for navigation

const AppRouter = () => {
  return (
    <Router>
      <Header /> 

      {/* <Hero /> */}

     {/* <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/> */}

    </Router>
  );
};

export default AppRouter;
