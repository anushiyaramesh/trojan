// components/Services/FloorInstallation.js

import React from 'react';

const FloorInstallation = () => {
  return (
    <div className="p-28 jpg bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-[#9a3412] mb-4">Floor Installation</h1>
      <p className="text-lg text-gray-700 mb-6">
        Trojan Carpentry offers expert floor installation services to elevate the beauty and durability of your home. Our team ensures precision and quality in every project.
      </p>
      
      {/* Hero Image */}
      <div className="mb-8">
        <img src="/f2.png" alt="Floor Installation" className="w-full h-64 object-cover rounded-lg shadow-md" />
      </div>

      {/* Services Overview */}
      <div className="mt-8 grid gap-8 grid-cols-1 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold text-[#9a3412] mb-2">Our Services Include:</h2>
          <ul className="list-disc pl-5 text-lg text-gray-700">
            <li>Hardwood floor installation</li>
            <li>Laminate flooring</li>
            <li>Vinyl and tile installation</li>
            <li>Carpet fitting</li>
            <li>Subfloor preparation and repair</li>
          </ul>
        </div>
        <img src="/f7.png" alt="Flooring Options" className="w-full h-64 object-cover rounded-lg shadow-md" />
      </div>

      {/* Why Choose Us Section */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-[#9a3412] mb-2">Why Choose Us?</h2>
        <p className="text-lg text-gray-700 mb-4">
          With years of experience in the industry, we provide top-notch floor installation services with a focus on:
        </p>
        <ul className="list-disc pl-5 text-lg text-gray-700">
          <li>Expert craftsmanship</li>
          <li>High-quality materials</li>
          <li>Attention to detail</li>
          <li>Customer satisfaction</li>
        </ul>
      </div>

      {/* Customer Reviews */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-[#9a3412] mb-2">Customer Reviews</h2>
        <div className="space-y-4">
          <blockquote className="p-4 bg-white rounded-lg shadow-md">
            <p className="text-gray-700 italic">"The floor installation was seamless and exceeded our expectations. Highly recommend Trojan Carpentry!"</p>
            <footer className="mt-2 text-gray-600">— Sarah Thompson</footer>
          </blockquote>
          <blockquote className="p-4 bg-white rounded-lg shadow-md">
            <p className="text-gray-700 italic">"Professional service with outstanding results. Our new floors look amazing!"</p>
            <footer className="mt-2 text-gray-600">— Mike Johnson</footer>
          </blockquote>
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-semibold text-[#9a3412] mb-2">Get a Free Quote</h2>
        <p className="text-lg text-gray-700 mb-4">
          Contact us today for a free consultation and quote for your flooring project.
        </p>
        <a href="/contact" className="inline-block bg-[#9a3412] text-white px-6 py-2 rounded-lg shadow hover:bg-[#7f2a0d] transition duration-300">
          Contact Us
        </a>
      </div>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 mt-12">
        <img src="/f1.png" alt="Staircase Design 1" className="w-full h-64 object-cover rounded-lg shadow-md" />
        <img src="/f2.png" alt="Staircase Design 2" className="w-full h-64 object-cover rounded-lg shadow-md" />
        <img src="/f3.png" alt="Staircase Design 3" className="w-full h-64 object-cover rounded-lg shadow-md" />
        <img src="/f4.png" alt="Staircase Design 4" className="w-full h-64 object-cover rounded-lg shadow-md" />

        <img src="/f6.png" alt="Staircase Design 4" className="w-full h-64 object-cover rounded-lg shadow-md" />

        <img src="/f8.png" alt="Staircase Design 4" className="w-full h-64 object-cover rounded-lg shadow-md" />
      </div>
    </div>
  );
};

export default FloorInstallation;
