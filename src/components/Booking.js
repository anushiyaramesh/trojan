import React from 'react';


const Booking = () => {
return (
<div>
    <h1 className='text-4xl mt-12 text-bold text-[#92400e] text-center mb-10'>Welcome to Trojan Carpentry Booking </h1>
<section class="text-gray-700 bg-[#fef3c7] body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#92400e]">Before they sold out
      </h1>
      <p class="mb-8 leading-relaxed text-[#92400e]">We're thrilled that you're considering Trojan Carpentry for your next project! Booking our services is straightforward and hassle-free. Just complete the form below to get started, and we'll take care of the rest.</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-[#92400e] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Call</button>
        <button class="ml-4 inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">Contact Us</button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="/7.png"/>
    </div>
  </div>
</section>

<div class="max-w-md mx-auto mt-10 bg-[#fef3c7] shadow-lg rounded-lg overflow-hidden">
    <div class="text-2xl py-4 px-6 bg-[#92400e] text-white text-center font-bold uppercase">
        Book an Appointment
    </div>
    <form class="py-4 px-6 " action="" method="POST">
        <div class="mb-4">
            <label class="block text-[#92400e]  font-bold mb-2" for="name">
                Name
            </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-[#92400e]  leading-tight focus:outline-none focus:shadow-outline"
                id="name" type="text" placeholder="Enter your name"/>
        </div>
        <div class="mb-4">
            <label class="block text-[#92400e]  font-bold mb-2" for="email">
                Email
            </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-[#92400e]  leading-tight focus:outline-none focus:shadow-outline"
                id="email" type="email" placeholder="Enter your email"/>
        </div>
        <div class="mb-4">
            <label class="block text-[#92400e] font-bold mb-2" for="phone">
                Phone Number
            </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone" type="tel" placeholder="Enter your phone number"/>
        </div>
        <div class="mb-4">
            <label class="block text-[#92400e]  font-bold mb-2" for="date">
                Date
            </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-[#92400e]  leading-tight focus:outline-none focus:shadow-outline"
                id="date" type="date" placeholder="Select a date"/>
        </div>
        <div class="mb-4">
            <label class="block text-[#92400e]  font-bold mb-2" for="time">
                Time
            </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-[#92400e]  leading-tight focus:outline-none focus:shadow-outline"
                id="time" type="time" placeholder="Select a time"/>
        </div>
        <div class="mb-4">
            <label class="block text-[#92400e]  font-bold mb-2" for="service">
                Service
            </label>
            <select
                class="shadow appearance-none border rounded w-full py-2 px-3 text-[#92400e]  leading-tight focus:outline-none focus:shadow-outline"
                id="service" name="service">
                <option value="">Select a service</option>
                <option value="haircut">Haircut</option>
                <option value="coloring">Coloring</option>
                <option value="styling">Styling</option>
                <option value="facial">Facial</option>
            </select>
        </div>
        <div class="mb-4">
            <label class="block text-[#92400e]  font-bold mb-2" for="message">
                Message
            </label>
            <textarea
                class="shadow appearance-none border rounded w-full py-2 px-3 text-[#92400e]  leading-tight focus:outline-none focus:shadow-outline"
                id="message" rows="4" placeholder="Enter any additional information"></textarea>
        </div>
        <div class="flex items-center justify-center mb-4">
            <button
                class="bg-[#92400e]  text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                type="submit">
                Book Appointment
            </button>
        </div>

    </form>
</div>

<div class="bg-[#fef3c7] mt-10 mb-10 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
      <div class="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt class="text-base leading-7 text-gray-600">Projects every 24 hours</dt>
        <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">44 million</dd>
      </div>
      <div class="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt class="text-base leading-7 text-gray-600">Assets under holding</dt>
        <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">$119 trillion</dd>
      </div>
      <div class="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt class="text-base leading-7 text-gray-600">New customer annually</dt>
        <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">46,000</dd>
      </div>
    </dl>
  </div>
</div>

<main class="w-screen h-screen flex justify-center items-center dark:bg-gray-900">
  <div class="max-w-7xl bg-[#fef3c7] dark:text-white">
    <form class=" w-full p-4 rounded shadow-md" action="/submit-comment" method="post">
      <h2 class="text-xl mb-4 tracking-wider font-lighter text-gray-900 dark:text-gray-200">Leave a Comment</h2>
      <p class="text-gray-600 mb-4">Your email address will not be published. Required fields are marked *</p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div class="mb-4 col-span-1 md:col-span-3">
          <textarea
        id="comment"
        name="comment"
        class="w-full px-3 py-2 dark:bg-gray-900 rounded-sm border dark:border-none border-gray-300 focus:outline-none border-solid focus:border-dashed resize-none"
        placeholder="Type Comment...*"
        rows="5"

        required
      ></textarea>
        </div>

        <div class="mb-4">
          <input
        type="text"
        id="name"
        name="name"
        class="w-full px-3 py-2 dark:bg-gray-900 rounded-sm border dark:border-none border-gray-300 focus:outline-none border-solid focus:border-dashed"
        placeholder="Name*"
        required
      />
        </div>
        <div class="mb-4">
          <input
        type="email"
        id="email"
        name="email"
        class="w-full px-3 py-2 dark:bg-gray-900 rounded-sm border dark:border-none border-gray-300 focus:outline-none border-solid focus:border-dashed"
        placeholder="Email*"
        required
      />
        </div>
        <div class="mb-4">
          <input
        type="text"
        id="website"
        name="website"
        class="w-full px-3 py-2 dark:bg-gray-900 rounded-sm border dark:border-none border-gray-300 focus:outline-none border-solid focus:border-dashed"
        placeholder="Website"
      />
        </div>
      </div>
      <div class="flex justify-end">
        <button
        type="submit"
        class="py-4 px-6 bg-[#92400e] text-white rounded-sm hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800"
      >
        Post Comment →
      </button>
      </div>
    </form>
  </div>
</main>


<div class="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10 ">
  <div>
    <a title="Buy me a pizza" href="https://www.buymeacoffee.com/Dekartmc" target="_blank" class="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
      <img class="object-cover object-center w-full h-full rounded-full " src="lg2.jpeg"/>
    </a>
  </div>
</div>
</div>
)}

export default Booking;