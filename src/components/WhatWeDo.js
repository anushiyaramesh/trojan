import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const WhatWeDo = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center my-20 px-6 md:px-20">
      <div className="w-full md:w-1/2 p-8">
        <motion.img
          src="/3.png" // Replace with your image path
          alt="Woodwork example 1"
          className="w-full h-auto"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          
        />
        
      </div>
      <div className="w-full md:w-1/2 p-4 text-center md:text-left space-x-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4 text-[#9a3412] ml-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          WHAT WE DO
        </motion.h2>
        <motion.p
          className="text-lg text-[#a16207] mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          We provide our clients with years of experience of work with hardwoods, traditional plywood and the most exotic wood veneers which set the standard for a superior craftsmanship and an exceptional finish. Our finishing team is capable of matching any existing finish or creates the desirable client's expectation.
        </motion.p>
        <ul className="list-disc list-inside md:text-left text-[#a16207]">
          {[
            'LUXURY RESIDENCES',
            'CONDOMINIUM LOBBY',
            'RESTAURANT',
            'COMMERCIAL',
            'HANDCRAFTED FURNITURE',
            'CUSTOM SOLID SURFACING MANUFACTURING',
          ].map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              {item}
            </motion.li>
          ))}
        </ul>
        <motion.button
          className="mt-8 px-6 py-3 bg-[#9a3412] text-white rounded-lg shadow-lg hover:bg-[#9a3412] transition duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
<Link to='/services'>Go to Services</Link>        </motion.button>
      </div>
    </section>
  );
};

export default WhatWeDo;
