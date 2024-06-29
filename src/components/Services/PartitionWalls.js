// components/Services/PartitionWalls.js

import React from 'react';

const PartitionWalls = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-[#9a3412] mb-4">Partition Walls</h1>
      <p className="text-lg text-gray-700 mb-6">
        Transform your space with our custom partition wall solutions, perfect for both residential and commercial settings.
      </p>

      {/* Hero Image */}
      <div className="mb-8">
        <img src="/P1.png" alt="Partition Walls" className="w-full h-64 object-cover rounded-lg shadow-md" />
      </div>

      {/* Services Offered Section */}
      <div className="mt-8 grid gap-8 grid-cols-1 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold text-[#9a3412] mb-2">Our Services</h2>
          <ul className="list-disc pl-5 text-lg text-gray-700">
            <li>Custom partition wall design</li>
            <li>Installation of movable walls</li>
            <li>Soundproof partition solutions</li>
            <li>Glass partitions</li>
            <li>Office and residential partitions</li>
          </ul>
        </div>
        <img src="/images/partition-installation.jpg" alt="Partition Wall Installation" className="w-full h-64 object-cover rounded-lg shadow-md" />
      </div>

      {/* Benefits Section */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-[#9a3412] mb-2">Benefits of Partition Walls</h2>
        <p className="text-lg text-gray-700 mb-4">
          Discover the advantages of our partition wall installations:
        </p>
        <ul className="list-disc pl-5 text-lg text-gray-700">
          <li>Improved space utilization</li>
          <li>Enhanced privacy</li>
          <li>Flexible room configurations</li>
          <li>Modern aesthetic appeal</li>
          <li>Noise reduction</li>
        </ul>
      </div>

      {/* Gallery Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-[#9a3412] mb-2">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <img src="/P1.png" alt="Modern Partition" className="object-cover rounded-lg shadow-md" />
          <img src="/P2.png" alt="Office Partition" className="object-cover rounded-lg shadow-md" />
          <img src="/P3.png" alt="Glass Partition" className="object-cover rounded-lg shadow-md" />
          <img src="/P5.png" alt="Residential Partition" className="object-cover rounded-lg shadow-md" />
          <img src="/P3.png" alt="Soundproof Partition" className="object-cover rounded-lg shadow-md" />
          <img src="/P4.png" alt="Custom Partition" className="object-cover rounded-lg shadow-md" />
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-semibold text-[#9a3412] mb-2">Get Custom Partition Walls</h2>
        <p className="text-lg text-gray-700 mb-4">
          Interested in partitioning your space? Contact us for bespoke solutions.
        </p>
        <a href="/contact" className="inline-block bg-[#9a3412] text-white px-6 py-2 rounded-lg shadow hover:bg-[#7f2a0d] transition duration-300">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default PartitionWalls;
