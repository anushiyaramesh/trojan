// components/Services/SecretRooms.js

import React from 'react';

const SecretRooms = () => {
  return (
    <div className="md:p-28 p-10 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-[#9a3412] mb-4">Secret Rooms</h1>
      <p className="text-lg text-gray-700 mb-6">
        Discover our bespoke secret rooms, crafted with precision and designed to blend seamlessly into your home.
      </p>
      
      {/* Hero Image */}
      <div className="mb-8">
        <img src="/r1.png" alt="Secret Rooms" className="w-full h-64 object-cover rounded-lg shadow-md" />
      </div>

      {/* Design Features */}
      <div className="mt-8 grid gap-8 grid-cols-1 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold text-[#9a3412] mb-2">Design Features</h2>
          <ul className="list-disc pl-5 text-lg text-gray-700">
            <li>Custom hidden entrances</li>
            <li>Secure and discreet</li>
            <li>Integrated with existing architecture</li>
            <li>Advanced security options</li>
            <li>Personalized design elements</li>
          </ul>
        </div>
        <img src="/r2.png" alt="Secret Room Design" className="w-full h-64 object-cover rounded-lg shadow-md" />
      </div>

      {/* Benefits Section */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-[#9a3412] mb-2">Benefits of Secret Rooms</h2>
        <p className="text-lg text-gray-700 mb-4">
          Our secret rooms offer more than just hidden spaces:
        </p>
        <ul className="list-disc pl-5 text-lg text-gray-700">
          <li>Enhanced security and privacy</li>
          <li>Unique addition to your home</li>
          <li>Customizable features</li>
          <li>Perfect for valuables, collections, or personal space</li>
        </ul>
      </div>

      {/* Gallery Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-[#9a3412] mb-2">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <img src="/r2.png" alt="Custom Secret Room" className="object-cover rounded-lg shadow-md" />
          <img src="/r3.png" alt="Hidden Entrance" className="object-cover rounded-lg shadow-md" />
          <img src="/r4.png" alt="Secure Room Design" className="object-cover rounded-lg shadow-md" />
          <img src="/r6.png" alt="Personal Space" className="object-cover rounded-lg shadow-md" />
          <img src="/r1.png" alt="Discreet Design" className="object-cover rounded-lg shadow-md" />
          <img src="/r4.png" alt="Luxury Secret Room" className="object-cover rounded-lg shadow-md" />
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-semibold text-[#9a3412] mb-2">Explore Your Secret Room</h2>
        <p className="text-lg text-gray-700 mb-4">
          Interested in creating a secret room in your home? Contact us today to discuss your project.
        </p>
        <a href="/contact" className="inline-block bg-[#9a3412] text-white px-6 py-2 rounded-lg shadow hover:bg-[#7f2a0d] transition duration-300">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default SecretRooms;
