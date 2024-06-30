import { MdCall } from "react-icons/md";
import { CiFacebook, CiInstagram, CiTwitter, CiLinkedin } from "react-icons/ci";
import { FaAddressBook } from "react-icons/fa";
import { FaBuildingColumns } from "react-icons/fa6";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from 'react-icons/fa';

import { FaBars } from 'react-icons/fa';

import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Header = () => {
  
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="shadow">
      <div className="bg-[#9a3412] py-4 hidden md:flex ">
        <div className="container mx-auto flex justify-between items-center text-sm text-white">
          <div className="flex space-x-4">
            <div className="flex items-center space-x-1">
              <FaAddressBook />
              <span>13, Dean Road Sittingborn Kent Me102DG</span>
            </div>
            <div className="flex items-center space-x-1">
              <FaBuildingColumns />
              <span>TrOjAn CaRpEnTaRy</span>
            </div>
          </div>
          <div className="flex space-x-4 items-center">
            <div className="flex items-center space-x-1">
              <MdCall />
              <span>+07869514083</span>
            </div>
            <div className="flex space-x-2">
              <CiFacebook />
              <CiInstagram />
              <CiTwitter />
              <CiLinkedin />
            </div>
          </div>
        </div>
      </div>

      <nav className="bg-gray-800 p-4">
    <div className="container mx-auto flex justify-between items-center">
      <div className="text-white text-xl">
      <a  class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="/lg2.jpeg" class="h-20"  />
    </a>
      </div>
      <div className="hidden md:flex space-x-4">
        <Link to="/" className="text-white px-4 py-2 rounded-md hover:bg-gray-700">
          Home
        </Link>
        <Link to="/about" className="text-white px-4 py-2 rounded-md hover:bg-gray-700">
          About
        </Link>
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="text-white px-4 py-2 rounded-md hover:bg-gray-700"
          >
             <Link to="/service" className="text-white px-4 py-2 rounded-md hover:bg-gray-700">
                Services
              </Link>
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-200 rounded-md shadow-lg z-10">
                <Link to="/services/staircase" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
           Staircase fitting
            </Link>
            <Link to="/services/floorinstallation" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
           Floor Installation
            </Link>
            <Link to="/services/bespokebookcases" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
           Bespoke bookcases
            </Link>
            <Link to="/services/secretrooms" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
             Secret Rooms
            </Link>
            <Link to="/services/bespokeshelving" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
             Bespoke Shelvig
            </Link>
            <Link to="/services/mediaunits" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
            Media Units
            </Link>
            <Link to="/services/builtincupboards" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
             Built-in Cuboards
            </Link>
            <Link to="/services/fittedwardrobes" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
             Fitted wardrobes
            </Link>
            <Link to="/services/homelibrary" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
            Home Libirary
            </Link>
            <Link to="/services/kitchenfitting"className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
            Kitchen Fitting 
            </Link>
            <Link to="/services/windows" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
           Windows
            </Link>
            <Link to="/services/woodenshopfronts" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
           Wooden Shop Fronts
            </Link>
            <Link to="/services/doorinstallation" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
           Door Installation
            </Link>
            <Link to="/services/partitionwalls"className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
            Partittion Walls
            </Link>
            <Link to="/service2" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
            Outdoor/Garden
            </Link>
            <Link to="/services/roofsfitting" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
          Roofs Fitting
            </Link>
            </div>
          )}
        </div>
        <Link to="/gallary" className="text-white px-4 py-2 rounded-md hover:bg-gray-700">
          Gallary
        </Link>
        <Link to="/contact" className="text-white px-4 py-2 rounded-md hover:bg-gray-700">
          Contact
        </Link>
        
      </div>
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMobileMenu}
          className="text-white px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none"
        >
          Menu
        </button>
      </div>
    </div>
    {mobileMenuOpen && (
      <div className="md:hidden mt-10">
        <Link to="/" className="block text-white px-4 py-2 hover:bg-gray-700">
          Home
        </Link>
        <Link to="/about" className="block text-white px-4 py-2 hover:bg-gray-700">
          About
        </Link>
        <button
          onClick={toggleDropdown}
          className="block text-white  hover:bg-gray-700"
        >
          <Link to="/service" className="block text-white px-4 py-2 hover:bg-gray-700">
              Services
            </Link>
        </button>
        {dropdownOpen && (
		  
               <div className="bg-gray-200 border-4 border-black">
        <Link to="/" className="text-white px-4 py-2 rounded-md hover:bg-gray-700">
          Home
        </Link>
        <Link to="/about" className="text-white px-4 py-2 rounded-md hover:bg-gray-700">
          About
        </Link>
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="text-white px-4 py-2 rounded-md hover:bg-gray-700"
          >
             <Link to="/service" className="text-white px-4 py-2 rounded-md hover:bg-gray-700">
                Services
              </Link>
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-200 rounded-md shadow-lg z-10">
                <Link to="/services/staircase" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
           Staircase fitting
            </Link>
            <Link to="/services/floorinstallation" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
           Floor Installation
            </Link>
            <Link to="/services/bespokebookcases" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
           Bespoke bookcases
            </Link>
            <Link to="/services/secretrooms" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
             Secret Rooms
            </Link>
            <Link to="/services/bespokeshelving" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
             Bespoke Shelvig
            </Link>
            <Link to="/services/mediaunits" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
            Media Units
            </Link>
            <Link to="/services/builtincupboards" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
             Built-in Cuboards
            </Link>
            <Link to="/services/fittedwardrobes" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
             Fitted wardrobes
            </Link>
            <Link to="/services/homelibrary" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
            Home Libirary
            </Link>
            <Link to="/services/kitchenfitting"className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
            Kitchen Fitting 
            </Link>
            <Link to="/services/windows" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
           Windows
            </Link>
            <Link to="/services/woodenshopfronts" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
           Wooden Shop Fronts
            </Link>
            <Link to="/services/doorinstallation" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
           Door Installation
            </Link>
            <Link to="/services/partitionwalls"className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
            Partittion Walls
            </Link>
            <Link to="/service2" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
            Outdoor/Garden
            </Link>
            <Link to="/services/roofsfitting" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
          Roofs Fitting
            </Link>
            </div>
          )}
        </div>
        <Link to="/gallary" className="text-white px-4 py-2 rounded-md hover:bg-gray-700">
          Gallary
        </Link>
        <Link to="/contact" className="text-white px-4 py-2 rounded-md hover:bg-gray-700">
          Contact
        </Link>
        
      </div>
    )}
  </nav>
    </header>
  );
};

export default Header;
