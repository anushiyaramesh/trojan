// components/Services/MediaUnits.js

import React from 'react';

const MediaUnits = () => {
  return (
    <div className="p-28 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-[#9a3412] mb-4">Media Units</h1>
      <p className="text-lg text-gray-700 mb-6">
        Discover our custom media units designed to elevate your home entertainment experience.
      </p>
      
      {/* Hero Image */}
      <div className="mb-8">
        <img src="/m10.png" alt="Media Units" className="w-full h-64 object-cover rounded-lg shadow-md" />
      </div>

      {/* Design Features */}
      <div className="mt-8 grid gap-8 grid-cols-1 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold text-[#9a3412] mb-2">Design Features</h2>
          <ul className="list-disc pl-5 text-lg text-gray-700">
            <li>Customized to fit any space</li>
            <li>Integration of storage and display solutions</li>
            <li>Modern and sleek designs</li>
            <li>Enhanced cable management options</li>
            <li>Quality materials and craftsmanship</li>
          </ul>
        </div>
        <img src="/m8.png" alt="Media Units Design" className="w-full h-64 object-cover rounded-lg shadow-md" />
      </div>

      {/* Benefits Section */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-[#9a3412] mb-2">Benefits of Media Units</h2>
        <p className="text-lg text-gray-700 mb-4">
          Our custom media units offer:
        </p>
        <ul className="list-disc pl-5 text-lg text-gray-700">
          <li>Optimized storage and organization</li>
          <li>Seamless integration with your entertainment systems</li>
          <li>Elegant and functional design solutions</li>
          <li>Enhanced viewing and gaming experience</li>
          <li>Personalized configurations to suit your needs</li>
        </ul>
      </div>

      {/* Gallery Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-[#9a3412] mb-2">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <img src="/m2.png" alt="Modern Media Units" className="object-cover rounded-lg shadow-md" />
          <img src="/m3.png" alt="Custom Media Storage" className="object-cover rounded-lg shadow-md" />
          <img src="/m4.png" alt="Media Wall Units" className="object-cover rounded-lg shadow-md" />
          <img src="/m6.png" alt="Home Entertainment Center" className="object-cover rounded-lg shadow-md" />
          <img src="/m5.png" alt="Floating Media Console" className="object-cover rounded-lg shadow-md" />
          <img src="/m8.png" alt="TV Unit Designs" className="object-cover rounded-lg shadow-md" />
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-semibold text-[#9a3412] mb-2">Enhance Your Entertainment Space</h2>
        <p className="text-lg text-gray-700 mb-4">
          Ready to upgrade your home entertainment setup with custom media units? Contact us today.
        </p>
        <a href="/contact" className="inline-block bg-[#9a3412] text-white px-6 py-2 rounded-lg shadow hover:bg-[#7f2a0d] transition duration-300">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default MediaUnits;
