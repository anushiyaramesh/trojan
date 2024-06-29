// components/Services/FittedWardrobes.js

import React from 'react';

const FittedWardrobes = () => {
  return (
    <div className="p-28 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-[#9a3412] mb-4">Fitted Wardrobes</h1>
      <p className="text-lg text-gray-700 mb-6">
        Transform your space with our bespoke fitted wardrobes, tailored to fit any room and style.
      </p>

      {/* Hero Image */}
      <div className="mb-8">
        <img src="/H1.png" alt="Fitted Wardrobes" className="w-full h-64 object-cover rounded-lg shadow-md" />
      </div>

      {/* Design Features */}
      <div className="mt-8 grid gap-8 grid-cols-1 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold text-[#9a3412] mb-2">Design Features</h2>
          <ul className="list-disc pl-5 text-lg text-gray-700">
            <li>Custom sizes and configurations</li>
            <li>Wide range of finishes and materials</li>
            <li>Space-saving solutions</li>
            <li>Integrated lighting options</li>
            <li>High-quality craftsmanship</li>
          </ul>
        </div>
        <img src="/images/fitted-wardrobes-design.jpg" alt="Wardrobe Designs" className="w-full h-64 object-cover rounded-lg shadow-md" />
      </div>

      {/* Benefits Section */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-[#9a3412] mb-2">Benefits of Fitted Wardrobes</h2>
        <p className="text-lg text-gray-700 mb-4">
          Our fitted wardrobes offer:
        </p>
        <ul className="list-disc pl-5 text-lg text-gray-700">
          <li>Maximized storage space</li>
          <li>Personalized design to suit your taste</li>
          <li>Enhanced room aesthetics</li>
          <li>Increased property value</li>
          <li>Optimal organization</li>
        </ul>
      </div>

      {/* Gallery Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-[#9a3412] mb-2">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <img src="/h2.png" alt="Modern Wardrobes" className="object-cover rounded-lg shadow-md" />
          <img src="/h3.png" alt="Custom Wardrobe Solutions" className="object-cover rounded-lg shadow-md" />
          <img src="/h4.png" alt="Stylish Wardrobes" className="object-cover rounded-lg shadow-md" />
          <img src="/h5.png" alt="Integrated Wardrobe Designs" className="object-cover rounded-lg shadow-md" />
          <img src="/h6.png" alt="Elegant Storage" className="object-cover rounded-lg shadow-md" />
          <img src="/h7.png" alt="Bespoke Wardrobes" className="object-cover rounded-lg shadow-md" />
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-semibold text-[#9a3412] mb-2">Start Your Wardrobe Transformation</h2>
        <p className="text-lg text-gray-700 mb-4">
          Ready to enhance your home with our custom-fitted wardrobes? Contact us today.
        </p>
        <a href="/contact" className="inline-block bg-[#9a3412] text-white px-6 py-2 rounded-lg shadow hover:bg-[#7f2a0d] transition duration-300">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default FittedWardrobes;
