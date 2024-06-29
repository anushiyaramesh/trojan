// components/Services/WoodenShopFronts.js

import React from 'react';

const WoodenShopFronts = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-[#9a3412] mb-4">Wooden Shop Fronts</h1>
      <p className="text-lg text-gray-700 mb-6">
        Make a statement with our custom wooden shop fronts, designed to enhance your business's curb appeal.
      </p>

      {/* Hero Image */}
      <div className="mb-8">
        <img src="/shop1.png" alt="Wooden Shop Fronts" className="w-full h-64 object-cover rounded-lg shadow-md" />
      </div>

      {/* Services Offered Section */}
      <div className="mt-8 grid gap-8 grid-cols-1 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold text-[#9a3412] mb-2">Our Services</h2>
          <ul className="list-disc pl-5 text-lg text-gray-700">
            <li>Custom wooden shop front designs</li>
            <li>Installation and maintenance</li>
            <li>Restoration of existing fronts</li>
            <li>Weatherproofing and sealing</li>
            <li>Consultations and design planning</li>
          </ul>
        </div>
        <img src="/shop.png" alt="Shop Front Installation" className="w-full h-64 object-cover rounded-lg shadow-md" />
      </div>

      {/* Benefits Section */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-[#9a3412] mb-2">Benefits of Wooden Shop Fronts</h2>
        <p className="text-lg text-gray-700 mb-4">
          Installing a wooden shop front offers:
        </p>
        <ul className="list-disc pl-5 text-lg text-gray-700">
          <li>Unique, eye-catching designs</li>
          <li>Durability and strength</li>
          <li>Improved insulation</li>
          <li>Eco-friendly materials</li>
          <li>Increased foot traffic</li>
        </ul>
      </div>

      {/* Gallery Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-[#9a3412] mb-2">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <img src="/shop.png" alt="Classic Shop Front" className="object-cover rounded-lg shadow-md" />
          <img src="/shop1.png" alt="Modern Wooden Shop Front" className="object-cover rounded-lg shadow-md" />
          <img src="/shop2.png" alt="Rustic Design" className="object-cover rounded-lg shadow-md" />
          <img src="/shop3.png" alt="Customized Wooden Front" className="object-cover rounded-lg shadow-md" />
          <img src="/shop1.png" alt="Weatherproof Shop Front" className="object-cover rounded-lg shadow-md" />
          <img src="/shop2.png" alt="Elegant Wooden Designs" className="object-cover rounded-lg shadow-md" />
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-semibold text-[#9a3412] mb-2">Upgrade Your Shop Front</h2>
        <p className="text-lg text-gray-700 mb-4">
          Ready to transform your business with a stunning wooden shop front? Contact us today.
        </p>
        <a href="/contact" className="inline-block bg-[#9a3412] text-white px-6 py-2 rounded-lg shadow hover:bg-[#7f2a0d] transition duration-300">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default WoodenShopFronts;
