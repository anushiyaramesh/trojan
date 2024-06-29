// components/Services/RoofsFitting.js

import React from 'react';

const RoofsFitting = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-[#9a3412] mb-6">Roofs Fitting Services</h1>

      {/* Hero Image */}
      <div className="mb-8">
        <img
          src="/images/roofs-fitting-hero.jpg"
          alt="Roofs Fitting"
          className="w-full h-64 object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Services Overview */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-[#9a3412] mb-4">Our Expertise</h2>
        <p className="text-lg text-gray-700 mb-6">
          We provide top-quality roof fitting services, ensuring durability and style for your home.
        </p>
        <ul className="list-disc pl-5 text-lg text-gray-700 mb-8">
          <li>New roof installations</li>
          <li>Roof repairs and maintenance</li>
          <li>Flat and pitched roofing solutions</li>
          <li>Custom roof designs</li>
          <li>Gutter and downspout installation</li>
        </ul>
      </div>

      {/* Gallery Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-[#9a3412] mb-4">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <img
            src="/images/roof1.jpg"
            alt="New Roof Installation"
            className="object-cover rounded-lg shadow-md"
          />
          <img
            src="/images/roof2.jpg"
            alt="Roof Repair"
            className="object-cover rounded-lg shadow-md"
          />
          <img
            src="/images/roof3.jpg"
            alt="Custom Roof Design"
            className="object-cover rounded-lg shadow-md"
          />
          <img
            src="/images/roof4.jpg"
            alt="Flat Roofing"
            className="object-cover rounded-lg shadow-md"
          />
          <img
            src="/images/roof5.jpg"
            alt="Pitched Roofing"
            className="object-cover rounded-lg shadow-md"
          />
          <img
            src="/images/roof6.jpg"
            alt="Gutter Installation"
            className="object-cover rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-semibold text-[#9a3412] mb-4">Get Your Roof Fitted Today</h2>
        <p className="text-lg text-gray-700 mb-6">
          Contact us to discuss your roofing needs and get a personalized quote.
        </p>
        <a
          href="/contact"
          className="inline-block bg-[#9a3412] text-white px-6 py-2 rounded-lg shadow hover:bg-[#7f2a0d] transition duration-300"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default RoofsFitting;
