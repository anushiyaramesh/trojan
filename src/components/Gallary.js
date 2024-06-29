import React from 'react';
import { motion } from 'framer-motion';

import { useInView } from 'react-intersection-observer';

const Gallary = () => {
	const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 });
	const { ref: contactRef, inView: contactInView } = useInView({ triggerOnce: true, threshold: 0.1 });
	const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true, threshold: 0.1 });
	
	return (

<div>
<div className="home mt-10 flex flex-col items-center justify-center">
	
    <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : -50 }} transition={{ duration: 1 }} ref={heroRef}>
      <h1 className="md:text-5xl text-3xl text-center font-bold text-[#9a3412] mb-4">
        Welcome to Trojan Gallary
      </h1>
    </motion.div>
  </div>
<section className="py-6 mt-10 dark:bg-gray-100 dark:text-gray-900">
	<div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
		<img src="/4.png" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"/>
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="/1.png"/>
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="/2.png"/>
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="/3.png"/>
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="/4.png"/>
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="/5.png"/>
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="/11.png"/>
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="/10.png"/>
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="/9.png"/>
		<img src="/8.png" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-star/t-1 md:row-start-3 dark:bg-gray-500 aspect-square"/>
	</div>
  <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
		<img src="/4.png" alt="" class="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"/>
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="/21.png"/>
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="/22.png"/>
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="/23.png"/>
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="/26.png"/>
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="/29.png"/>
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="/24.png"/>
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="/25.png"/>
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="/7.png"/>
		<img src="/1.png" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-star/t-1 md:row-start-3 dark:bg-gray-500 aspect-square"/>
	</div>
	 <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
	 <img src="/4.png" alt="" class="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"/>
	 <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="/17.png"/>
	 <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="/12.png"/>
	 <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="/13.png"/>
	 <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="/16.png"/>
	 <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="/4.png"/>
	 <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="/24.png"/>
	 <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="/11.png"/>
	 <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="/7.png"/>
	 <img src="/1.png" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-star/t-1 md:row-start-3 dark:bg-gray-500 aspect-square"/>
 </div>
 <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
	 <img src="/ki1.png" alt="" class="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"/>
	 <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="/m1.png"/>
	 <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="/P1.png"/>
	 <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="/L1.png"/>
	 <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="/D1.png"/>
	 <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="/H1.png"/>
	 <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="/ki5.png"/>
	 <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="/m8.png"/>
	 <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="/p4.png"/>
	 <img src="/1.png" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-star/t-1 md:row-start-3 dark:bg-gray-500 aspect-square"/>
 </div>
</section>
<div class="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10 mb-10">
  <div>
    <a title="Buy me a pizza" href="https://www.buymeacoffee.com/Dekartmc" target="_blank" class="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
      <img class="object-cover object-center w-full h-full rounded-full" src="lg2.jpeg"/>
    </a>
  </div>
</div>

</div>
)}
export default Gallary;