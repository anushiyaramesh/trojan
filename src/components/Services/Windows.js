// components/Services/Windows.js

import React from 'react';

const Windows = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-[#9a3412] mb-4">Window Installation</h1>
      <p className="text-lg text-gray-700 mb-6">
        Enhance your home with our expert window installation and replacement services.
      </p>

      {/* Hero Image */}
      <div className="mb-8">
        <img src="/w1.png" alt="Windows" className="w-full h-64 object-cover rounded-lg shadow-md" />
      </div>

      {/* Services Offered Section */}
      <div className="mt-8 grid gap-8 grid-cols-1 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold text-[#9a3412] mb-2">Our Window Services</h2>
          <ul className="list-disc pl-5 text-lg text-gray-700">
            <li>New window installations</li>
            <li>Window replacement</li>
            <li>Energy-efficient windows</li>
            <li>Custom window designs</li>
            <li>Weatherproofing and sealing</li>
          </ul>
        </div>
        <img src="/w2.png" alt="Window Installation" className="w-full h-64 object-cover rounded-lg shadow-md" />
      </div>

      {/* Benefits Section */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-[#9a3412] mb-2">Benefits of New Windows</h2>
        <p className="text-lg text-gray-700 mb-4">
          Installing new windows offers:
        </p>
        <ul className="list-disc pl-5 text-lg text-gray-700">
          <li>Improved energy efficiency</li>
          <li>Enhanced curb appeal</li>
          <li>Better natural lighting</li>
          <li>Reduced noise pollution</li>
          <li>Increased home value</li>
        </ul>
      </div>

      {/* Gallery Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-[#9a3412] mb-2">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <img src="/w2.png" alt="Modern Windows" className="object-cover rounded-lg shadow-md" />
          <img src="/w3.png" alt="Classic Window Styles" className="object-cover rounded-lg shadow-md" />
          <img src="/w4.png" alt="Energy-efficient Windows" className="object-cover rounded-lg shadow-md" />
          <img src="/w5.png" alt="Custom Designs" className="object-cover rounded-lg shadow-md" />
          <img src="/w1.png" alt="Stylish Window Installations" className="object-cover rounded-lg shadow-md" />
          <img src="/w6.png" alt="Durable and Weatherproof" className="object-cover rounded-lg shadow-md" />
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-semibold text-[#9a3412] mb-2">Upgrade Your Windows Today</h2>
        <p className="text-lg text-gray-700 mb-4">
          Ready to enhance your home with new windows? Contact us for a consultation.
        </p>
        <a href="/contact" className="inline-block bg-[#9a3412] text-white px-6 py-2 rounded-lg shadow hover:bg-[#7f2a0d] transition duration-300">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Windows;
