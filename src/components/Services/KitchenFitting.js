import React from 'react';

const KitchenFitting = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Kitchen Fitting</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <img
            src="/ki1.png"
            alt="Custom Kitchen"
            className="w-full h-auto rounded-lg shadow-md"
          />
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Expert Kitchen Installation</h2>
            <p className="text-gray-700 mb-4">
              At Trojan Carpentry, we specialize in bespoke kitchen fittings that transform your cooking space into the heart of your home. Our expert team works with you to design and install kitchens that are both functional and beautiful.
            </p>
            <p className="text-gray-700 mb-4">
              From cabinets to countertops, we ensure high-quality craftsmanship in every detail. Whether you're looking for a modern or traditional style, we've got you covered.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <img
            src="/ki2.png"
            alt="Kitchen Design"
            className="w-full h-auto rounded-lg shadow-md"
          />
          <img
            src="/ki3.png"
            alt="Kitchen Cabinets"
            className="w-full h-auto rounded-lg shadow-md"
          />
          <img
            src="/ki4.png"
            alt="Modern Kitchen"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Custom kitchen designs tailored to your preferences.</li>
            <li>High-quality materials and expert craftsmanship.</li>
            <li>Complete project management from start to finish.</li>
            <li>Efficient installation with minimal disruption.</li>
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-700">
            Ready to upgrade your kitchen? Contact us today for a consultation and let us help you create your dream kitchen.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KitchenFitting;
