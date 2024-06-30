// components/Services/BespokeShelving.js

import React from 'react';

const BespokeShelving = () => {
  return (
    <div className="md:p-28 p-10 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-[#9a3412] mb-4">Bespoke Shelving</h1>
      <p className="text-lg text-gray-700 mb-6">
        Explore our custom shelving solutions, tailored to fit your space and style.
      </p>
      
      {/* Hero Image */}
      <div className="mb-8">
        <img src="/bs.png" alt="Bespoke Shelving" className="w-full h-64 object-cover rounded-lg shadow-md" />
      </div>

      {/* Design Features */}
      <div className="mt-8 grid gap-8 grid-cols-1 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold text-[#9a3412] mb-2">Design Features</h2>
          <ul className="list-disc pl-5 text-lg text-gray-700">
            <li>Customized to your specifications</li>
            <li>High-quality materials</li>
            <li>Maximize storage and display space</li>
            <li>Integrated with existing decor</li>
            <li>Functional and aesthetic</li>
          </ul>
        </div>
        <img src="/bs1.png" alt="Bespoke Shelving Design" className="w-full h-64 object-cover rounded-lg shadow-md" />
      </div>

      {/* Benefits Section */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-[#9a3412] mb-2">Benefits of Bespoke Shelving</h2>
        <p className="text-lg text-gray-700 mb-4">
          Our bespoke shelving solutions offer:
        </p>
        <ul className="list-disc pl-5 text-lg text-gray-700">
          <li>Customization for any space</li>
          <li>Optimized storage solutions</li>
          <li>Elegant and functional designs</li>
          <li>Enhanced organization and display options</li>
          <li>Quality craftsmanship and durability</li>
        </ul>
      </div>

      {/* Gallery Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-[#9a3412] mb-2">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <img src="/bs1.png" alt="Custom Shelving Unit" className="object-cover rounded-lg shadow-md" />
          <img src="/bs2.png" alt="Wooden Shelving" className="object-cover rounded-lg shadow-md" />
          <img src="/bs3.png" alt="Modern Shelving Design" className="object-cover rounded-lg shadow-md" />
          <img src="/bs4.png" alt="Shelving Ideas" className="object-cover rounded-lg shadow-md" />
          <img src="/bs5.png" alt="Custom Shelving Solutions" className="object-cover rounded-lg shadow-md" />
          <img src="/bs6.png" alt="Shelving Inspiration" className="object-cover rounded-lg shadow-md" />
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-semibold text-[#9a3412] mb-2">Get Custom Shelving Today</h2>
        <p className="text-lg text-gray-700 mb-4">
          Ready to enhance your space with bespoke shelving? Contact us now to discuss your project.
        </p>
        <a href="/contact" className="inline-block bg-[#9a3412] text-white px-6 py-2 rounded-lg shadow hover:bg-[#7f2a0d] transition duration-300">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default BespokeShelving;
