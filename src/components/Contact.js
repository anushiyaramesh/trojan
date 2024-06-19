import React from 'react';
import { CiFacebook,CiInstagram ,CiTwitter,CiLinkedin } from "react-icons/ci";
import { MdCall } from "react-icons/md";
import { FaAddressBook } from "react-icons/fa";
import { FaBuildingColumns } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";


const Contact = () => {
return (

<div>
  <section>

    <div className="relative  w-full h-96">
      <img className="absolute h-full w-full object-cover object-center" src="/11.png" />
      <div className="absolute inset-0 h-full w-full bg-black/50"></div>
      <div className="relative pt-28 text-center">
        <h2 className="block antialiased tracking-normal font-sans font-semibold leading-[1.3] text-white mb-4 text-3xl lg:text-4xl">Contact Information</h2>
        <p className="block antialiased font-sans text-xl font-normal mt-6 ml-12 mr-12 text-white ">At Trojan Carpentry, we take pride in our craftsmanship and are dedicated to providing you with the highest quality carpentry services. Whether you have a question about our services, need a quote for a project, or just want to discuss your ideas, our team is here to help.</p>
      </div>
    </div>

<header class="bg-white dark:bg-gray-800">

    <div class="container flex flex-col px-6 py-4 mx-auto space-y-6 md:h-128 md:py-16 md:flex-row md:items-center md:space-x-6">
        <div class="flex flex-col items-center w-full md:flex-row md:w-1/2">
            <div class="flex justify-center order-2 mt-6 md:mt-0 md:space-y-3 md:flex-col">
                <button class="w-3 h-3 mx-2 bg-[#92400e] rounded-full md:mx-0 focus:outline-none"></button>
                <button class="w-3 h-3 mx-2 bg-[#92400e] rounded-full md:mx-0 focus:outline-none hover:bg-blue-500"></button>
                <button class="w-3 h-3 mx-2 bg-[#92400e] rounded-full md:mx-0 focus:outline-none hover:bg-blue-500"></button>
                <button class="w-3 h-3 mx-2 bg-[#92400e] rounded-full md:mx-0 focus:outline-none hover:bg-blue-500"></button>
            </div>

            <div class="max-w-lg md:mx-12 md:order-2">
                <h1 class="text-3xl font-medium tracking-wide text-[#92400e] md:text-4xl">Let's Build Something Great Together!</h1>
                <p class="mt-4 text-[#92400e]">
                At Trojan Carpentry, we believe that every project is a collaboration. Your ideas, combined with our expertise, can create something truly special. Whether you're planning a custom furniture piece, a remodel, or any other carpentry project, we're here to help. Reach out to us today and let's start building your dream project together..</p>
                <div class="mt-6">
                    <a href="#" class="block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-[#92400e] rounded-md md:inline hover:bg-blue-400">Call Now ! </a>
                </div>
            </div>
        </div>

        <div class="flex items-center justify-center w-full h-96 md:w-1/2">
            <img class="object-cover w-full h-full max-w-2xl rounded-md" src="7.png" />
        </div>
    </div>
</header>

     
     
       
<div class="flex justify-center mt-12 items-center w-screen h-screen bg-white">
	<div class="container mx-auto my-4 px-4 lg:px-20">

		<div class="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
			<div class="flex">
				<h1 class="font-bold text-[#92400e]  uppercase text-5xl">Send us a  message</h1>
			</div>
			<div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
				<input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text" placeholder="First Name*" />
				<input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text" placeholder="Last Name*" />
				<input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="email" placeholder="Email*" />
				<input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="number" placeholder="Phone*" />
        </div>
				<div class="my-4">
					<textarea placeholder="Message*" class="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
				</div>
				<div class="my-2 w-1/2 lg:w-1/4">
					<button class="uppercase text-sm font-bold tracking-wide bg-[#92400e] text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline">
            Send Message
          </button>
				</div>
			</div>

			<div
				class="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-[#fef3c7] mb-24 rounded-2xl">
				<div class="flex flex-col text-[#92400e] ">
					<h1 class="font-bold uppercase text-4xl my-4">Why Choose Trojan Carpentry?</h1>
        <div className='text-xl text-semibold text-left  '>      
        <p className='mt-2'>* Quality craftsmanship</p>
        <p className='mt-2'>* Experienced and skilled team</p>
        <p className='mt-2'>* Personalized service</p>
        <p className='mt-2'>* Competitive pricing</p>
        <p className='mt-2'>* Commitment to customer satisfaction</p>

</div>

        </div>
      </div>
    </div>
</div>

<div class="container flex flex-col mx-auto bg-white">
            <div class="w-full draggable">
                <div class="container flex flex-col items-center gap-16 mx-auto mb-16">
                    <div class="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                        <div class="flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl shadow-main">
                        <MdOutlineEmail size='1.5rem'/>

                        <p class="text-2xl font-extrabold text-[#92400e]">Email</p>
                        <p class="text-base leading-7 text-[#92400e]">Contact us at</p>
                        <a class="text-lg font-bold text-[#92400e]" href = "mailto: hello@loopple.com">Refurbishmyhouseltd@gmail.com</a>
                        </div>
                        <div class="flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl shadow-main">
                        <MdCall size='1.5rem' />

                        <p class="text-2xl font-extrabold text-[#92400e]">Phone</p>
                        <p class="text-base leading-7 text-[#92400e]">Reach out to us by phone</p>
                        <a class="text-lg font-bold text-[#92400e]" href="tel:+516-486-5135">+07869514083</a>
                        </div>
                        <div class="flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl shadow-main">
                        <FaAddressBook size='1.5rem'/>

                        <p class="text-2xl font-extrabold text-[#92400e]">Location</p>
                        <p class="text-base leading-7 text-[#92400e]">Find us at our office</p>
                        <a class="text-lg font-bold text-[#92400e]" target="_blank" href="https://goo.gl/maps/QcWzYETAh4FS3KTD7">13, Dean Road Sittingborn Kent</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>



<div class="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10 ">
  <div>
    <a title="Buy me a pizza" href="https://www.buymeacoffee.com/Dekartmc" target="_blank" class="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
      <img class="object-cover object-center w-full h-full rounded-full " src="lg2.jpeg"/>
    </a>
  </div>
</div>


  </section>

</div>
)}
export default Contact;