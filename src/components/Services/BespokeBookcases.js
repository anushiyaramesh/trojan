// components/Services/BespokeBookcases.js

import React from 'react';

const BespokeBookcases = () => {
  return (
    <div className="md:p-28 p-10 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-[#9a3412] mb-4">Bespoke Bookcases</h1>
      <p className="text-lg text-gray-700 mb-6">
        At Trojan Carpentry, we specialize in crafting custom bookcases tailored to your space and style. Enhance your home with beautifully designed, functional storage.
      </p>
      
      {/* Hero Image */}
      <div className="mb-8">
        <img src="/28.png" alt="Bespoke Bookcases" className="w-full h-64 object-cover rounded-lg shadow-md" />
      </div>

      {/* Design Options */}
      <div className="mt-8 grid gap-8 grid-cols-1 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold text-[#9a3412] mb-2">Design Options</h2>
          <ul className="list-disc pl-5 text-lg text-gray-700">
            <li>Custom sizes to fit any space</li>
            <li>Variety of wood finishes</li>
            <li>Integrated lighting options</li>
            <li>Adjustable shelving</li>
            <li>Built-in or freestanding designs</li>
          </ul>
        </div>
        <img src="/30.png" alt="Bookcase Designs" className="w-full h-64 object-cover rounded-lg shadow-md" />
      </div>

      {/* Why Choose Us Section */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-[#9a3412] mb-2">Why Choose Our Bookcases?</h2>
        <p className="text-lg text-gray-700 mb-4">
          Our bespoke bookcases offer unmatched quality and personalized design to suit your home and lifestyle:
        </p>
        <ul className="list-disc pl-5 text-lg text-gray-700">
          <li>Handcrafted with precision</li>
          <li>Durable materials for longevity</li>
          <li>Unique designs tailored to you</li>
          <li>Seamless integration into your space</li>
        </ul>
      </div>

      {/* Gallery Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-[#9a3412] mb-2">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <img src="/25.png" alt="Custom Bookcase" className="object-cover rounded-lg shadow-md" />
          <img src="/30.png" alt="Modern Bookcase" className="object-cover rounded-lg shadow-md" />
          <img src="/22.png" alt="Classic Bookcase" className="object-cover rounded-lg shadow-md" />
          <img src="/23.png" alt="Built-in Bookcase" className="object-cover rounded-lg shadow-md" />
          <img src="/32.png" alt="Custom Design" className="object-cover rounded-lg shadow-md" />
          <img src="/33.png" alt="Stylish Bookcase" className="object-cover rounded-lg shadow-md" />
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-semibold text-[#9a3412] mb-2">Start Your Project</h2>
        <p className="text-lg text-gray-700 mb-4">
          Ready to create your dream bookcase? Contact us today for a consultation and quote.
        </p>
        <a href="/contact" className="inline-block bg-[#9a3412] text-white px-6 py-2 rounded-lg shadow hover:bg-[#7f2a0d] transition duration-300">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default BespokeBookcases;
