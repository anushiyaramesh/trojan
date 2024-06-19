import { MdCall } from "react-icons/md";
import { CiFacebook,CiInstagram ,CiTwitter,CiLinkedin } from "react-icons/ci";
import { FaAddressBook } from "react-icons/fa";
import { FaBuildingColumns } from "react-icons/fa6";
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from 'react-icons/fa'
import { NavLink } from 'react-router-dom';

const Header = () => {

// nav is starting off false
const [nav, setNav] = useState(false)
// so when user clicks the hamburger button, it goes from false(!nav) to true(nav)
const handleClick = () => setNav(!nav)
const [openAvatarDropdown, setOpenAvatarDropdown] = useState(false);

const toggleAvatarDropdown = () => {
setOpenAvatarDropdown(!openAvatarDropdown);
};

return (
<header className="shadow">

  <div class="bg-[#fef3c7] py-4 hidden md:flex ">
    <div class="container mx-auto flex justify-between items-center text-sm text-[#451a03]">
      <div class="flex space-x-4">
        <div class="flex items-center space-x-1">
          <FaAddressBook />
          <span>13, Dean Road Sittingborn Kent Me102DG</span>
        </div>
        <div class="flex items-center space-x-1">
          <FaBuildingColumns />
          <span>TrOjAn CaRpEnTaRy</span>
        </div>
      </div>
      <div class="flex space-x-4 items-center">
        <div class="flex items-center space-x-1">
          <MdCall />
          <span>+07869514083</span>
        </div>
        <div class="flex space-x-2">
          <CiFacebook />
          <CiInstagram />
          <CiTwitter />
          <CiLinkedin />
        </div>
      </div>
    </div>
  </div>

  <nav className='flex justify-between p-3 items-center border-b bg-[#92400e]  nav'>
    <div class="mr="> <img className="h-16 w-auto ml-8" src="/lg2.jpeg" alt="" />
    </div>
    <ul className='hidden  md:flex gap-6 text-white mr-8'>
      <Link to='/'>
      <li className='hover:text-[#fef3c7]'>Home</li>
      </Link>
      <Link to='/about'>
      <li className='hover:text-[#fef3c7]'>About</li>
      </Link>

      <div onClick={toggleAvatarDropdown} className="relative transition-all duration-500">
        <div className="flex gap-1">
          <Link to='/service'>
          <li className='  cursor-pointer hover:text-[#fef3c7] '>Services</li>
          </Link>

        </div>

        <div className={`absolute ${openAvatarDropdown ? 'block' : 'hidden' } bg-[#fef3c7] text-[#92400e] rounded shadow-md mt-2 space-y-2`}>
          <div className='py-6 p-4 m-4 flex flex-col   '>
          <NavLink className= "mt-4" to="/profile">CustomFurniture</NavLink>
          <NavLink className= "mt-4" to="/profile">Kitchen&Bedrooms</NavLink>
          <NavLink className= "mt-4" to="/profile">Home&Renovations</NavLink>
          <NavLink className= "mt-4" to="/dashboard">Desks&outdoor</NavLink>
          <NavLink className= "mt-4" to="/dashboard">BespokeFurniture</NavLink>

<NavLink className= "mt-2" to="/dashboard">CommercialProjects</NavLink>

          </div>
         
        </div>
      </div>
      <Link to='/gallary'>
      <li className='hover:text-[#fef3c7]-700'>Gallary</li>
      </Link>
      <Link to='/booking'>
      <li className='hover:text-[#fef3c7]'>Booking</li>
      </Link>
      <Link to='/contact'>
      <li className='hover:text-[#fef3c7]'>Contact Us</li>
      </Link>

    </ul>
    {/* Hamburger or Close Icon */}
    <div className=' md:hidden z-10' onClick={handleClick}>
      {nav ?
      <FaTimes size={25} color='white' /> :
      <RxHamburgerMenu size={28} color='white' />}
    </div>
    {/* Mobile Menu */}
    <ul className={`${ nav ? 'text-white opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-y-full' } transition-transform absolute top-0 left-0 gap-6 w-full h-screen bg-zinc-800/80 flex flex-col justify-center items-center text-2xl`} onClick={()=> setNav(false)}
      >
      <Link to='/'>
      <li className='hover:text-[#fef3c7]'>Home</li>
      </Link>
      <Link to='/features'>
      <li className='hover:text-[#fef3c7]'>Features</li>
      </Link>
      <Link to='/products'>
      <li className='hover:text-[#fef3c7]'>Products</li>
      </Link>
      <Link to='/about'>
      <li className='hover:text-[#fef3c7]-700'>About</li>
      </Link>
      <Link to='/booking '>
      <li className='hover:text-[#fef3c7]'>Booking</li>
      </Link>
      <Link to='/contact'>
      <li className='hover:text-[#fef3c7]'>Contact Us</li>
      </Link>
    </ul>
  </nav>
  

</header>

);
};

export default Header;