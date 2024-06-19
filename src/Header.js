import { MdCall } from "react-icons/md";
import { CiFacebook,CiInstagram ,CiTwitter,CiLinkedin } from "react-icons/ci";
import { FaAddressBook } from "react-icons/fa";
import { FaBuildingColumns } from "react-icons/fa6";
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from 'react-icons/fa'



const Header = () => {

  // nav is starting off false
  const [nav, setNav] = useState(false)
  // so when user clicks the hamburger button, it goes from false(!nav) to true(nav)
  const handleClick = () => setNav(!nav)

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
  </div>      <ul className='hidden  md:flex gap-6 text-white mr-8'>
  <Link to='/'><li className='hover:text-[#fef3c7]'>Home</li></Link>
        <Link to='/about'><li className='hover:text-[#fef3c7]'>About</li></Link>
        <Link to='/service'><li className='hover:text-[#fef3c7]'>Services</li></Link>
        <Link to='/gallary'><li className='hover:text-[#fef3c7]-700'>Gallary</li></Link>
        <Link to='/booking'><li className='hover:text-[#fef3c7]'>Booking</li></Link>
        <Link to='/contact'><li className='hover:text-[#fef3c7]'>Contact Us</li></Link>

      </ul>
      {/* Hamburger or Close Icon */}
      <div className=' md:hidden z-10' onClick={handleClick}>
        {nav ? <FaTimes size={25} color='white' /> : <RxHamburgerMenu size={28} color='white'/>}
      </div>
      {/* Mobile Menu */}
      <ul
        className={`${
          nav
            ? 'text-white opacity-100 transform translate-x-0'
            : 'opacity-0 transform -translate-y-full'
        } transition-transform absolute top-0 left-0 gap-6 w-full h-screen bg-zinc-800/80 flex flex-col justify-center items-center text-2xl`}
        onClick={() => setNav(false)}
      >
  <Link to='/'><li className='hover:text-[#fef3c7]'>Home</li></Link>
        <Link to='/features'><li className='hover:text-[#fef3c7]'>Features</li></Link>
        <Link to='/products'><li className='hover:text-[#fef3c7]'>Products</li></Link>
        <Link to='/about'><li className='hover:text-[#fef3c7]-700'>About</li></Link>
        <Link to='/booking '><li className='hover:text-[#fef3c7]'>Booking</li></Link>
        <Link to='/contact'><li className='hover:text-[#fef3c7]'>Contact Us</li></Link>
      </ul>
    </nav>
    {/* <header class="p-4 bg-[#92400e] dark:text-gray-800">
	<div class="container flex justify-between h-16 mx-auto md:justify-center md:space-x-8">
		<ul class="items-stretch hidden space-x-3 md:flex">
			<li class="flex">
				<a rel="noopener noreferrer" href="#" class="flex items-center px-4 -mb-1 border-b-2 dark:border-">Link</a>
			</li>
			<li class="flex">
				<a rel="noopener noreferrer" href="#" class="flex items-center px-4 -mb-1 border-b-2 dark:border-">Link</a>
			</li>
			<li class="flex">
				<a rel="noopener noreferrer" href="#" class="flex items-center px-4 -mb-1 border-b-2 dark:border- dark:text-violet-600 dark:border-violet-600">Home</a>
			</li>
		</ul>
		<img className="h-16 w-auto ml-8" src="/lg2.jpeg" alt="" />
		<ul class="items-stretch hidden space-x-3 md:flex">
			<li class="flex">
				<a rel="noopener noreferrer" href="#" class="flex items-center px-4 -mb-1 border-b-2 dark:border-">Home</a>
			</li>
			<li class="flex">
				<a rel="noopener noreferrer" href="#" class="flex items-center px-4 -mb-1 border-b-2 dark:border-">About</a>
			</li>
			<li class="flex">
				<a rel="noopener noreferrer" href="#" class="flex items-center px-4 -mb-1 border-b-2 dark:border-">Contact</a>
			</li>
		</ul>
		<button title="Button" type="button" class="p-4 md:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6 dark:text-gray-800">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div>
</header> */}

</header>

);
};

export default Header;