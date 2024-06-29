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
import Service from './components/Service';
import Staircase from './components/Services/Staircase';
import FloorInstallation from './components/Services/FloorInstallation';
import BespokeBookcases from './components/Services/BespokeBookcases';
import SecretRooms from './components/Services/SecretRooms';
import BespokeShelving from './components/Services/BespokeShelving';
import MediaUnits from './components/Services/MediaUnits';
import BuiltInCupboards from './components/Services/BuiltInCupboards';
import FittedWardrobes from './components/Services/FittedWardrobes';
import DoorInstallation from './components/Services/DoorInstallation';
import HomeLibrary from './components/Services/HomeLibrary';
import OutdoorGarden from './components/Services/OutdoorGarden';
import PartitionWalls from './components/Services/PartitionWalls';
import RoofsFitting from './components/Services/RoofsFitting';
import Windows from './components/Services/Windows';
import WoodenShopFronts from './components/Services/WoodenShopFronts';
import KitchenFitting from './components/Services/KitchenFitting';

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
    <Route path="/service" element={<Service />} />
    <Route path="/services/staircase" element={<Staircase />} />
    <Route path="/services/floorinstallation" element={<FloorInstallation />} />
    <Route path="/services/bespokebookcases" element={<BespokeBookcases />} />
    <Route path="/services/secretrooms" element={<SecretRooms />} />
    <Route path="/services/bespokeshelving" element={<BespokeShelving />} />
    <Route path="/services/mediaunits" element={<MediaUnits />} />
    <Route path="/services/builtincupboards" element={<BuiltInCupboards />} />
    <Route path="/services/builtincupboards" element={<BuiltInCupboards />} />
    <Route path="/services/fittedwardrobes" element={<FittedWardrobes />} />
    <Route path="/services/doorinstallation" element={<DoorInstallation />} />
    <Route path="/services/homelibrary" element={<HomeLibrary />} />
    <Route path="/services/outdoorgarden" element={<OutdoorGarden />} />
    <Route path="/services/partitionwalls" element={<PartitionWalls />} />
    <Route path="/services/roofsfitting" element={<RoofsFitting />} />
    <Route path="/services/windows" element={<Windows/>} />
    <Route path="/services/woodenshopfronts" element={<WoodenShopFronts/>} />
    <Route path="/services/kitchenfitting" element={<KitchenFitting/>} />


      </Routes>
      <Footer/>

    </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
