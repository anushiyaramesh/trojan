// components/Services/BuiltInCupboards.js

import React from 'react';

const BuiltInCupboards = () => {
  return (
    <div className="p-28 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-[#9a3412] mb-4">Built-in Cupboards</h1>
      <p className="text-lg text-gray-700 mb-6">
        Maximize your space with our custom-built cupboards, designed for style and functionality.
      </p>

      {/* Hero Image */}
      <div className="mb-8">
        <img src="/C7.png" alt="Built-in Cupboards" className="w-full h-64 object-cover rounded-lg shadow-md" />
      </div>

      {/* Design Features */}
      <div className="mt-8 grid gap-8 grid-cols-1 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold text-[#9a3412] mb-2">Design Features</h2>
          <ul className="list-disc pl-5 text-lg text-gray-700">
            <li>Custom designs to fit any space</li>
            <li>Elegant finishes and materials</li>
            <li>Optimized storage solutions</li>
            <li>Seamless integration with existing decor</li>
            <li>Durable construction for long-lasting use</li>
          </ul>
        </div>
        <img src="/C8.png" alt="Cupboard Designs" className="w-full h-64 object-cover rounded-lg shadow-md" />
      </div>

      {/* Benefits Section */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-[#9a3412] mb-2">Benefits of Built-in Cupboards</h2>
        <p className="text-lg text-gray-700 mb-4">
          Our custom-built cupboards offer:
        </p>
        <ul className="list-disc pl-5 text-lg text-gray-700">
          <li>Enhanced storage capacity</li>
          <li>Improved organization and accessibility</li>
          <li>Space-saving designs</li>
          <li>Personalized styles to match your taste</li>
          <li>Increased property value</li>
        </ul>
      </div>

      {/* Gallery Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-[#9a3412] mb-2">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <img src="/C1.png" alt="Modern Cupboards" className="object-cover rounded-lg shadow-md" />
          <img src="/C2.png" alt="Custom Storage Solutions" className="object-cover rounded-lg shadow-md" />
          <img src="/C3.png" alt="Stylish Cupboards" className="object-cover rounded-lg shadow-md" />
          <img src="/C4.png" alt="Integrated Designs" className="object-cover rounded-lg shadow-md" />
          <img src="/C5.png" alt="Elegant Storage" className="object-cover rounded-lg shadow-md" />
          <img src="/C6.png" alt="Bespoke Cupboards" className="object-cover rounded-lg shadow-md" />
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-semibold text-[#9a3412] mb-2">Transform Your Space</h2>
        <p className="text-lg text-gray-700 mb-4">
          Ready to enhance your home with custom-built cupboards? Contact us today.
        </p>
        <a href="/contact" className="inline-block bg-[#9a3412] text-white px-6 py-2 rounded-lg shadow hover:bg-[#7f2a0d] transition duration-300">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default BuiltInCupboards;
