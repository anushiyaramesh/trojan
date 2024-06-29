import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ImageCarousel from './ImageCarousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import WhatWeDo from './WhatWeDo';

const Home = () => {

  const services = [
    { title: 'Staircase', image: '/s6.png', description: 'Custom staircase fitting for your home.' },
    { title: 'FloorInstallation', image: '/f2.png', description: 'Professional floor installation services.' },
    { title: 'BespokeBookcases', image: '22.png', description: 'Custom bookcases tailored to your needs.' },
    { title: 'SecretRooms', image: '/r5.png', description: 'Design and construction of secret rooms.' },
    { title: 'BespokeShelving', image: '/bs.png', description: 'Custom shelving solutions.' },
    { title: 'MediaUnits', image: '/m10.png', description: 'Custom media units for your home.' },
    { title: 'BuiltinCupboards', image: '/C8.png', description: 'Built-in cupboards for optimal storage.' },
    { title: 'FittedWardrobes', image: '/H1.png', description: 'Custom fitted wardrobes.' },
    { title: 'HomeLibrary', image: '/L1.png', description: 'Design and installation of home libraries.' },
    { title: 'KitchenFitting', image: '/ki3.png', description: 'Professional kitchen fitting services.' },
    { title: 'Windows', image: '/w1.png', description: 'Window installation and replacement.' },
    { title: 'WoodenShopFronts', image: '/shop2.png', description: 'Custom wooden shop fronts.' },
    { title: 'DoorInstallation', image: '/D1.png', description: 'Professional door installation services.' },
    { title: 'PartitionWalls', image: '/P1.png', description: 'Construction of partition walls.' },
    { title: 'Outdoor/Garden', image: '/g2.png', description: 'Outdoor and garden carpentry services.' },
    { title: 'RoofsFitting', image: '/roof.png', description: 'Professional roofs fitting services.' }
  ];

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.3,
        duration: 0.5,
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };





const images = [
'/ki4.png',
'/L1.png',
'/P1.png',
];

const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 });
const { ref: contactRef, inView: contactInView } = useInView({ triggerOnce: true, threshold: 0.1 });
const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true, threshold: 0.1 });

return (
<section className="font-Merriweather">
  <div className="home mt-10 flex flex-col items-center justify-center">
    <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : -50 }} transition={{ duration: 1 }} ref={heroRef}>
      <h1 className="md:text-5xl text-3xl text-center font-bold text-[#9a3412] mb-4">
        Welcome To Trojan Carpentry
      </h1>
    </motion.div>
  </div>

  <div className="home min-h-screen hidden md:flex flex-col items-center justify-center relative overflow-hidden">
    <ImageCarousel images={images} />
  </div>
  <div className='md:hidden flex'>
    <img src="/16.png" className="h-80 mt-4 w-[100%]" />
  </div>

  <div className='md:flex mx-auto flex-row items-center justify-center p-14 md:px-20'>
    <div className="flex flex-col items-left justify-left md:text-left text-center mr-10" ref={textRef}>
      <motion.h2 className="text-4xl font-bold text-[#9a3412] mb-4" initial={{ opacity: 0, y: -50 }} animate={{ opacity: textInView ? 1 : 0, y: textInView ? 0 : -50 }} transition={{ duration: 1 }}>
        TROJAN CARPENTRY
      </motion.h2>
      <motion.p className=" text-lg sm:text-xl md:text-xl lg:text-xl xl:text-xl text-[#a16207]" initial={{ opacity: 0, x: -50 }} animate={{ opacity: textInView ? 1 : 0, x: textInView ? 0 : -50 }} transition={{ duration: 1, delay: 0.5 }}>
        Our Architectural Woodwork redefines interiors with bespoke craftsmanship and enduring quality. </motion.p>
      <motion.p className="mt-4 text-lg sm:text-xl md:text-xl lg:text-xl xl:text-xl text-[#a16207]" initial={{ opacity: 0, x: -50 }} animate={{ opacity: textInView ? 1 : 0, x: textInView ? 0 : -50 }} transition={{ duration: 1, delay: 0.5 }}>
        As a family-owned and operated custom woodwork corporation located in Miami, Florida, our tradition of superior craftsmanship has been passed down through generations.</motion.p>
      <motion.button className="mt-8 md:w-[20%] py-3 bg-[#9a3412] text-white  text-center rounded-lg shadow-lg hover:bg-blue-700 transition duration-300" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <p className='ml-4'>Learn More</p>
      </motion.button>
    </div>
    <div className=' md:mt-0 md:text-left text-center mt-6 md:mt-0 ' ref={contactRef}>
      <motion.h2 className="text-4xl font-bold text-[#9a3412] " initial={{ opacity: 0, y: -50 }} animate={{ opacity: contactInView ? 1 : 0, y: contactInView ? 0 : -50 }} transition={{ duration: 1 }}>
        CONTACT US
      </motion.h2>
      <motion.p className="text-lg text-[#a16207] mt-6" initial={{ opacity: 0, x: 50 }} animate={{ opacity: contactInView ? 1 : 0, x: contactInView ? 0 : 50 }} transition={{ duration: 1, delay: 0.5 }}>
        Phone: (123) 456-7890
      </motion.p>
      <motion.p className="text-lg text-[#a16207] mb-2" initial={{ opacity: 0, x: 50 }} animate={{ opacity: contactInView ? 1 : 0, x: contactInView ? 0 : 50 }} transition={{ duration: 1, delay: 1 }}>
        Email: info@trojancarpentry.com
      </motion.p>
      <motion.p className="text-lg text-[#a16207] mb-2" initial={{ opacity: 0, x: 50 }} animate={{ opacity: contactInView ? 1 : 0, x: contactInView ? 0 : 50 }} transition={{ duration: 1, delay: 1.5 }}>
        Address: 123 Carpenter Street, Woodsville, WS 12345
      </motion.p>
    </div>
  </div>

  <WhatWeDo />
  {/* Include the new section here */}

  <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-[#9a3412]">Our Services</h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {services.map((service, index) => (
          <motion.div
            className="bg-white rounded-lg overflow-hidden shadow-md"
            key={index}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <p className="text-lg font-semibold text-[#9a3412]">{service.title}</p>
              <div className="h-16 bg-gradient-to-b from-transparent to-gray-200 mt-2" />
              <p className="text-sm text-gray-600 mt-2">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    <section className="bg-gray-100 py-12 mb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial Card 1 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="px-6 py-4">
              <p className="text-gray-700 text-base">"Trojan Carpentry did an amazing job with our staircase renovation. Professional and reliable!"</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <p className="text-gray-600 text-xs">- John Doe, Homeowner</p>
            </div>
          </div>

          {/* Testimonial Card 2 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="px-6 py-4">
              <p className="text-gray-700 text-base">"We are thrilled with our new bespoke bookcases. Excellent craftsmanship!"</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <p className="text-gray-600 text-xs">- Jane Smith, Interior Designer</p>
            </div>
          </div>

          {/* Testimonial Card 3 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="px-6 py-4">
              <p className="text-gray-700 text-base">"Their secret rooms are truly impressive. Perfect blend of creativity and functionality."</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <p className="text-gray-600 text-xs">- Michael Johnson, Architect</p>
            </div>
          </div>
        </div>
      </div>
    </section>
</section>
);
};

export default Home;