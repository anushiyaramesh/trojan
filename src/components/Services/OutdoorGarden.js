// components/Services/OutdoorGarden.js

import React from 'react';

const OutdoorGarden = () => {
  return (
    <div className="md:p-28 p-10 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-[#9a3412] mb-6">Outdoor & Garden Carpentry</h1>

      {/* Hero Image */}
      <div className="mb-8">
        <img
          src="/g1.png"
          alt="Outdoor and Garden"
          className="w-full h-64 object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Services Offered Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-[#9a3412] mb-4">Our Services</h2>
        <p className="text-lg text-gray-700 mb-6">
          Enhance your outdoor space with our bespoke garden carpentry services, tailored to fit your style and needs.
        </p>
        <ul className="list-disc pl-5 text-lg text-gray-700 mb-8">
          <li>Custom garden decking</li>
          <li>Pergola and gazebo construction</li>
          <li>Outdoor furniture design</li>
          <li>Fence and gate installation</li>
          <li>Sheds and outdoor storage solutions</li>
        </ul>
      </div>

      {/* Gallery Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-[#9a3412] mb-4">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <img
            src="/g2.png"
            alt="Custom Decking"
            className="object-cover rounded-lg shadow-md"
          />
          <img
            src="/g3.png"
            alt="Pergola"
            className="object-cover rounded-lg shadow-md"
          />
          <img
            src="/g4.png"
            alt="Garden Furniture"
            className="object-cover rounded-lg shadow-md"
          />
          <img
            src="/g1.png"
            alt="Fence Installation"
            className="object-cover rounded-lg shadow-md"
          />
          <img
            src="/g2.png"
            alt="Gazebo"
            className="object-cover rounded-lg shadow-md"
          />
          <img
            src="/g5.png"
            alt="Garden Shed"
            className="object-cover rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-semibold text-[#9a3412] mb-4">Transform Your Outdoor Space</h2>
        <p className="text-lg text-gray-700 mb-6">
          Ready to enhance your garden? Contact us for personalized outdoor carpentry solutions.
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

export default OutdoorGarden;
