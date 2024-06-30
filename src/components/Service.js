import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const Service = () => {

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
    { title: 'KitchenFitting', image: '/images/kitchen-fitting.jpg', description: 'Professional kitchen fitting services.' },
    { title: 'Windows', image: '/w1.png', description: 'Window installation and replacement.' },
    { title: 'WoodenShopFronts', image: '/shop2.png', description: 'Custom wooden shop fronts.' },
    { title: 'DoorInstallation', image: '/D1.png', description: 'Professional door installation services.' },
    { title: 'PartitionWalls', image: '/P1.png', description: 'Construction of partition walls.' },
    { title: 'Outdoor/Garden', image: '/g2.png', description: 'Outdoor and garden carpentry services.' },
    { title: 'RoofsFitting', image: '/roof.png', description: 'Professional roofs fitting services.' }
  ];
  
 
    const cardVariants = {
      offscreen: {
        y: 300,
        opacity: 0
      },
      onscreen: {
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          bounce: 0.4,
          duration: 0.8
        }
      }
    };
    return (

<div>

    
<div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-[#9a3412]">Our Services</h1>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div 
            className="bg-white shadow-md rounded-lg"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={cardVariants}
            key={index}
          >
            <Link to={`/services/${service.title.toLowerCase().replace(/ /g, '-')}`}>
              <div className="relative">
                <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h2 className="text-2xl font-bold mb-2 text-[#9a3412]">{service.title}</h2>
                  <p className="text-lg text-gray-700">{service.description}</p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
    
</div>


)}
export default Service;