// components/Services/HomeLibrary.js

import React from 'react';

const HomeLibrary = () => {
  return (
    <div className="md:p-28 p-10 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-[#9a3412] mb-4">Home Library</h1>
      <p className="text-lg text-gray-700 mb-6">
        Create your dream reading space with our bespoke home library designs.
      </p>

      {/* Hero Image */}
      <div className="mb-8">
        <img src="/L1.png" alt="Home Library" className="w-full h-64 object-cover rounded-lg shadow-md" />
      </div>

      {/* Custom Design Section */}
      <div className="mt-8 grid gap-8 grid-cols-1 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold text-[#9a3412] mb-2">Custom Designs</h2>
          <ul className="list-disc pl-5 text-lg text-gray-700">
            <li>Personalized shelving solutions</li>
            <li>Variety of materials and finishes</li>
            <li>Integrated lighting options</li>
            <li>Comfortable reading nooks</li>
            <li>Space-efficient layouts</li>
          </ul>
        </div>
        <img src="/h7.png" alt="Library Designs" className="w-full h-64 object-cover rounded-lg shadow-md" />
      </div>

      {/* Benefits Section */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-[#9a3412] mb-2">Benefits of a Home Library</h2>
        <p className="text-lg text-gray-700 mb-4">
          Our home libraries offer:
        </p>
        <ul className="list-disc pl-5 text-lg text-gray-700">
          <li>A dedicated space for reading and relaxation</li>
          <li>Improved organization of books and media</li>
          <li>Enhanced home aesthetics</li>
          <li>Increased property value</li>
          <li>A personalized reading experience</li>
        </ul>
      </div>

      {/* Gallery Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-[#9a3412] mb-2">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <img src="/h2.png" alt="Modern Library" className="object-cover rounded-lg shadow-md" />
          <img src="/h3.png" alt="Cozy Reading Nook" className="object-cover rounded-lg shadow-md" />
          <img src="/h4.png" alt="Classic Library Style" className="object-cover rounded-lg shadow-md" />
          <img src="/h5.png" alt="Contemporary Designs" className="object-cover rounded-lg shadow-md" />
          <img src="/h6.png" alt="Elegant Shelving" className="object-cover rounded-lg shadow-md" />
          <img src="/h7.png" alt="Bespoke Library" className="object-cover rounded-lg shadow-md" />
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-semibold text-[#9a3412] mb-2">Create Your Perfect Reading Space</h2>
        <p className="text-lg text-gray-700 mb-4">
          Ready to transform your space with a custom home library? Contact us today.
        </p>
        <a href="/contact" className="inline-block bg-[#9a3412] text-white px-6 py-2 rounded-lg shadow hover:bg-[#7f2a0d] transition duration-300">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default HomeLibrary;
