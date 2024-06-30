import React from 'react';
import { Link } from 'react-router-dom'
import { CiFacebook,CiInstagram ,CiTwitter,CiLinkedin } from "react-icons/ci";


const Footer = () => {
  return (

  <footer class="bg-gray-800 text-white">
	<div class="container flex flex-col p-4 mx-auto md:p-8 lg:flex-row dark:divide-gray-600">
		<ul class="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
		<Link to='/'><li className='hover:text-[#fef3c7]'>Home</li></Link>
        <Link to='/about'><li className='hover:text-[#fef3c7]'>About</li></Link>
        <Link to='/service'><li className='hover:text-[#fef3c7]'>Services</li></Link>
        <Link to='/gallary'><li className='hover:text-[#fef3c7]-700'>Gallary</li></Link>
        <Link to='/contact'><li className='hover:text-[#fef3c7]'>Contact Us</li></Link>

		</ul>
		<div class="flex flex-col justify-center pt-6 lg:pt-0">
			<div class="flex justify-center space-x-4">
			<CiFacebook size='1.5rem'/>
          <CiInstagram size='1.5rem'/>
          <CiTwitter size='1.5rem'/>
          <CiLinkedin size='1.5rem'/>

			</div>
		</div>
	</div>
  <div class="bg-[#9a3412]">
    <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p class="text-white text-sm text-center sm:text-left">
      @trojan carpentary
      </p>
      <span class="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-white text-sm">Refurbishmyhouseltd@gmail.com</span>
    </div>
  </div>
</footer>
  );


};

export default Footer;
