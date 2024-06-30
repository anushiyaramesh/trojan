// components/Services/DoorInstallation.js

import React from 'react';

const DoorInstallation = () => {
  return (
    <div className="md:p-28 p-10 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-[#9a3412] mb-4">Door Installation</h1>
      <p className="text-lg text-gray-700 mb-6">
        Expert door installation services to enhance your home's security and style.
      </p>

      {/* Hero Image */}
      <div className="mb-8">
        <img src="/images/door-installation-hero.jpg" alt="Door Installation" className="w-full h-64 object-cover rounded-lg shadow-md" />
      </div>

      {/* Services Offered Section */}
      <div className="mt-8 grid gap-8 grid-cols-1 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold text-[#9a3412] mb-2">Our Services</h2>
          <ul className="list-disc pl-5 text-lg text-gray-700">
            <li>Interior and exterior door installation</li>
            <li>Custom door fitting</li>
            <li>Door repair and replacement</li>
            <li>Security door installation</li>
            <li>Weatherproofing and sealing</li>
          </ul>
        </div>
        <img src="/images/door-installation.jpg" alt="Door Installation Process" className="w-full h-64 object-cover rounded-lg shadow-md" />
      </div>

      {/* Benefits Section */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-[#9a3412] mb-2">Benefits of Professional Installation</h2>
        <p className="text-lg text-gray-700 mb-4">
          Enjoy the following benefits with our professional door installation services:
        </p>
        <ul className="list-disc pl-5 text-lg text-gray-700">
          <li>Improved home security</li>
          <li>Enhanced energy efficiency</li>
          <li>Increased property value</li>
          <li>Custom fit for perfect alignment</li>
          <li>Reduced noise and drafts</li>
        </ul>
      </div>

      {/* Gallery Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-[#9a3412] mb-2">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <img src="/images/door1.jpg" alt="Modern Door" className="object-cover rounded-lg shadow-md" />
          <img src="/images/door2.jpg" alt="Classic Door" className="object-cover rounded-lg shadow-md" />
          <img src="/images/door3.jpg" alt="Custom Door Design" className="object-cover rounded-lg shadow-md" />
          <img src="/images/door4.jpg" alt="Wooden Door" className="object-cover rounded-lg shadow-md" />
          <img src="/images/door5.jpg" alt="Secure Door" className="object-cover rounded-lg shadow-md" />
          <img src="/images/door6.jpg" alt="Elegant Door" className="object-cover rounded-lg shadow-md" />
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-semibold text-[#9a3412] mb-2">Get Your Doors Installed</h2>
        <p className="text-lg text-gray-700 mb-4">
          Ready to upgrade your doors? Contact us today for professional installation.
        </p>
        <a href="/contact" className="inline-block bg-[#9a3412] text-white px-6 py-2 rounded-lg shadow hover:bg-[#7f2a0d] transition duration-300">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default DoorInstallation;
