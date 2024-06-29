import React from 'react';
import { motion } from 'framer-motion';
import ImageCarousel from './ImageCarousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const About = () => {
    const images = [
        '/24.png',
        '/29.png',
        '/14.png',
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
<div className="home  hidden md:flex flex-col items-center justify-center relative overflow-hidden">
    <ImageCarousel images={images} 
    />
  </div>
  <section class="relative mx-auto w-full max-w-screen-xl px-6 sm:px-8 lg:px-12  group relative overflow-hidden mb-10  flex flex-col items-start lg:items-center pt-16 lg:pt-24">
  <div class="absolute -top-12 left-1/2 bg-indigo-400 w-1/2 h-32 blur-3xl sm:blur-4xl transition-opacity duration-500 opacity-40 group-hover:opacity-60"></div>
  <h2 class="text-[#9a3412] dark:text-white font-display font-extrabold leading-tight text-3xl sm:text-4xl lg:text-5xl dark:drop-shadow-lg lg:text-center"><span>Welcome to Trojan Carpentry!</span></h2>
  <p class="paragraph leading-relaxed text-[#9a3412]  text-base mt-7 mb-8 max-w-lg lg:text-center"><span>At Trojan Carpentry, we pride ourselves on delivering exceptional craftsmanship and unparalleled service in the UK. Our team of skilled carpenters brings decades of experience to every project, ensuring that each piece of work we produce is of the highest quality..</span></p>
  <div class="flex flex-wrap gap-2"><button class="relative h-9 flex-shrink-0 rounded-full bg-gradient-radial from-[#fef3c7] to-[#92400e] p-px shadow shadow-indigo-500/25 focus:outline-none focus:ring-1 focus:ring-white/30" type="button">
      <div class="flex h-full items-center justify-center space-x-2 rounded-full bg-[#9a3412] text-indigo-50 hover:bg-[#9a3412] font-bold  pl-4 pr-2.5"><span class="dark:drop-shadow">Get Started</span><svg height="10" viewBox="0 0 20 10" class="fill-current opacity-50 dark:drop-shadow text-white" fill="current" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 5C0.5 4.44772 0.947715 4 1.5 4L18.5 4C19.0523 4 19.5 4.44772 19.5 5C19.5 5.55229 19.0523 6 18.5 6L1.5 6C0.947715 6 0.5 5.55228 0.5 5Z" fill="current" opacity="0" transform-origin="10px 5px"></path>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M15.2071 0.292893C14.8166 -0.0976311 14.1834 -0.0976311 13.7929 0.292893C13.4024 0.683418 13.4024 1.31658 13.7929 1.70711L17.0858 5L13.793 8.29274C13.4025 8.68327 13.4025 9.31643 13.793 9.70696C14.1836 10.0975 14.8167 10.0975 15.2073 9.70696L19.2071 5.70711L19.2073 5.70696C19.5978 5.31643 19.5978 4.68327 19.2073 4.29274C19.2023 4.28781 19.1974 4.28294 19.1924 4.27814L15.2071 0.292893Z" fill="current" transform-origin="16.500100135803223px 4.99993222951889px"></path>
        </svg></div>
    </button><button class="relative h-9 flex-shrink-0 rounded-full bg-gradient-radial from-[#fef3c7] to-[#92400e] dark:from-[#393C45] dark:to-[#1A1D24] p-px shadow shadow-black/5 focus:outline-none focus:ring-1 focus:ring-white/20" type="button">
      <div class="flex h-full items-center justify-center space-x-2 rounded-full bg-[#F9FAFB] text-slate-800 hover:bg-white dark:bg-[#171C23] dark:text-slate-50 dark:hover:bg-[#1E242B] font-bold  pl-4 pr-2.5"><span class="dark:drop-shadow">Schedule a Call</span><svg height="10" viewBox="0 0 20 10" class="fill-current opacity-50 dark:drop-shadow text-slate-600 dark:text-white" fill="current" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 5C0.5 4.44772 0.947715 4 1.5 4L18.5 4C19.0523 4 19.5 4.44772 19.5 5C19.5 5.55229 19.0523 6 18.5 6L1.5 6C0.947715 6 0.5 5.55228 0.5 5Z" fill="current" opacity="0" transform-origin="10px 5px"></path>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M15.2071 0.292893C14.8166 -0.0976311 14.1834 -0.0976311 13.7929 0.292893C13.4024 0.683418 13.4024 1.31658 13.7929 1.70711L17.0858 5L13.793 8.29274C13.4025 8.68327 13.4025 9.31643 13.793 9.70696C14.1836 10.0975 14.8167 10.0975 15.2073 9.70696L19.2071 5.70711L19.2073 5.70696C19.5978 5.31643 19.5978 4.68327 19.2073 4.29274C19.2023 4.28781 19.1974 4.28294 19.1924 4.27814L15.2071 0.292893Z" fill="current" transform-origin="16.500100135803223px 4.99993222951889px"></path>
        </svg></div>
    </button></div>
</section>

<div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-[#9a3412]">About Us</h1>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <motion.div 
          className="bg-gray-800 shadow-md p-6 rounded-lg"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={cardVariants}
        >
          <h2 className="text-2xl font-bold mb-4 text-white">Welcome to Trojan Carpentry!</h2>
          <p className="text-lg text-center text-white">At Trojan Carpentry, we pride ourselves on delivering exceptional craftsmanship and unparalleled service in the UK.</p>
        </motion.div>

        <motion.div 
          className="bg-gray-800 shadow-md p-6 rounded-lg"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={cardVariants}
        >
          <h2 className="text-2xl font-bold mb-4 text-center text-white">Our Story</h2>
          <p className="text-lg text-center text-white">Founded on the principles of excellence and integrity, Trojan Carpentry has grown to become a trusted name in the carpentry industry.</p>
        </motion.div>

        <motion.div 
          className="bg-gray-800 shadow-md p-6 rounded-lg"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={cardVariants}
        >
          <h2 className="text-2xl font-bold mb-4 text-center text-white">What We Do</h2>
          <p className="text-lg text-center text-white">We specialize in custom woodwork, home renovations, cabinetry, and architectural woodwork.</p>
        </motion.div>

        <motion.div 
          className="bg-gray-800 shadow-md p-6 rounded-lg"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={cardVariants}
        >
          <h2 className="text-2xl font-bold mb-4 text-center text-white">Our Commitment</h2>
          <p className="text-lg text-center text-white">We are dedicated to quality craftsmanship, customer satisfaction, innovation, and sustainability.</p>
        </motion.div>

        <motion.div 
          className="bg-gray-800 shadow-md p-6 rounded-lg"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={cardVariants}
        >
          <h2 className="text-2xl font-bold mb-4 text-center text-white">Meet Our Team</h2>
          <p className="text-lg text-center text-white">Our team of highly skilled and experienced carpenters is the heart of Trojan Carpentry.</p>
        </motion.div>

        <motion.div 
          className="bg-gray-800 shadow-md p-6 rounded-lg"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={cardVariants}
        >
          <h2 className="text-2xl font-bold mb-4  text-center text-white">Contact Us</h2>
          <p className="text-lg text-center text-white">Phone: (123) 456-7890<br/>Email: info@trojancarpentry.co.uk<br/>Address: 123 Carpenter Street, London, UK</p>
        </motion.div>
      </div>
    </div>
  

<section class="relative mx-auto w-full max-w-screen-xl px-6 sm:px-8 lg:px-12 mb-12 pt-10 lg:pt-20 ">
  <h2 class="text-[#9a3412] dark:text-white font-display font-extrabold leading-tight text-2xl lg:text-3xl dark:drop-shadow-md undefined"><span>Our Story</span></h2>
  <p class="paragraph leading-relaxed text-[#9a3412] dark:text-slate-300 text-base mt-7 mb-12 lg:mb-16 max-w-xl"><span>Founded on the principles of excellence and integrity, Trojan Carpentry has grown to become a trusted name in the carpentry industry. From humble beginnings, we have expanded our services to cater to both residential and commercial clients across the UK. Our commitment to quality and customer satisfaction has been the cornerstone of our success..</span></p>
  <div class="grid grid-cols-1 gap-12 lg:gap-x-16 md:grid-cols-2 lg:grid-cols-3">
    <div>
      <div class="mb-4 flex flex-col gap-6 sm:flex-row sm:items-center lg:flex-col lg:items-start xl:flex-row">
        <div class="relative group w-14 h-14">
          <div class="absolute inset-x-5 h-2 bottom-0 bg-indigo-400 blur-md opacity-50"></div>
          <div class="relative overflow-hidden h-14 w-14 rounded-2xl p-px bg-gradient-radial from-[#fef3c7] to-[#92400e] to-slate-300 dark:from-slate-700 dark:to-[#171C23] shadow-lg shadow-black/5">
            <div class="absolute inset-x-4 h-4 -bottom-2 bg-indigo-400 blur-md dark:opacity-80"></div>
            <div class="relative h-full w-full rounded-[15px] bg-gradient-radial from-[#fef3c7] to-[#92400e] dark:from-[#393C45] dark:to-[#171C23] flex justify-center items-center">
              <div class="absolute inset-x-4 h-4 -bottom-2 bg-indigo-400 blur-lg dark:opacity-80"></div><svg viewBox="0 0 24 24" class="fill-current h-7 text-indigo-400 transition-transform" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M13.566 2.5895C13.1623 2.83689 12.8164 3.18282 12.1246 3.87469L6.9997 9C5.90928 10.0905 5.36407 10.6358 5.07262 11.2239C4.5181 12.343 4.51813 13.6569 5.07269 14.776C5.36416 15.3642 5.90939 15.9094 6.99985 16.9998C8.09039 18.0904 8.63566 18.6357 9.22386 18.9271C10.343 19.4817 11.657 19.4817 12.7761 18.9271C13.3643 18.6356 13.9095 18.0903 15 16.9997L20.1248 11.8745L20.1248 11.8745C20.8166 11.1827 21.1624 10.8368 21.4098 10.4331C21.6291 10.0753 21.7907 9.6851 21.8886 9.27698C21.9992 8.81665 21.9992 8.32749 21.9992 7.34918L21.9992 6.8C21.9992 5.11984 21.9992 4.27977 21.6722 3.63803C21.3846 3.07354 20.9256 2.6146 20.3611 2.32698C19.7194 2 18.8793 2 17.1992 2L16.6503 2C15.6719 2 15.1826 2 14.7223 2.11053C14.3141 2.20853 13.9239 2.37016 13.566 2.5895ZM15.0024 10.9995C16.107 10.9995 17.0024 10.1041 17.0024 8.99951C17.0024 7.89494 16.107 6.99951 15.0024 6.99951C13.8979 6.99951 13.0024 7.89494 13.0024 8.99951C13.0024 10.1041 13.8979 10.9995 15.0024 10.9995Z"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5567 1.24999L16.6503 1.25L17.1991 1.25L17.2313 1.25C18.0441 1.24999 18.6997 1.24999 19.2306 1.29337C19.7773 1.33803 20.2574 1.43239 20.7016 1.65873C21.4072 2.01825 21.9809 2.59193 22.3404 3.29754C22.5668 3.74176 22.6611 4.2219 22.7058 4.76853C22.7492 5.29944 22.7492 5.95505 22.7491 6.76788L22.7491 6.8L22.7491 7.34918L22.7492 7.44271C22.7493 8.33151 22.7494 8.90431 22.6179 9.45205C22.5016 9.9367 22.3097 10.4 22.0493 10.825C21.7549 11.3053 21.3499 11.7103 20.7213 12.3387L20.7213 12.3387L20.6552 12.4048L19.3141 13.746L19.7319 15.8334L19.7536 15.9419C19.9173 16.7581 20.0305 17.3224 19.9762 17.8786C19.9282 18.3693 19.784 18.8458 19.5517 19.2807C19.2885 19.7736 18.8814 20.1805 18.2926 20.7688L18.2143 20.8471L16.5311 22.5303C16.3752 22.6862 16.1586 22.7656 15.9389 22.7474C15.7192 22.7292 15.5186 22.6153 15.3904 22.4359L13.2936 19.5003C13.2325 19.5354 13.1711 19.5684 13.1091 19.5991C11.7801 20.2577 10.2198 20.2577 8.89085 19.5991C8.19073 19.2522 7.56398 18.6252 6.58122 17.6419L6.46952 17.5302L6.35778 17.4185C5.37461 16.4358 4.7476 15.8091 4.40067 15.109C3.74213 13.7801 3.7421 12.2199 4.40059 10.8909C4.43129 10.829 4.46417 10.7676 4.49931 10.7065L1.56455 8.61019C1.38515 8.48205 1.27122 8.28146 1.25304 8.06175C1.23486 7.84204 1.31427 7.62545 1.47017 7.46956L3.15367 5.78611L3.23193 5.70782C3.8202 5.11913 4.22699 4.71206 4.71982 4.44885C5.15467 4.2166 5.63104 4.07237 6.12169 4.02441C6.67775 3.97007 7.24201 4.08314 8.05803 4.24666L8.16657 4.2684L10.253 4.68572L11.5943 3.34438L11.6604 3.27823C12.2888 2.64955 12.6938 2.2444 13.1741 1.95003C13.5991 1.68957 14.0625 1.49763 14.5472 1.38126C15.095 1.24974 15.6678 1.24984 16.5567 1.24999ZM6.46934 8.46969L8.97836 5.96048L7.87238 5.73927C6.90562 5.5459 6.57396 5.48736 6.2676 5.5173C5.97321 5.54607 5.68739 5.63261 5.42648 5.77196C5.15495 5.91698 4.91147 6.14965 4.21432 6.84678L3.15685 7.90422L5.4194 9.52039L5.97759 8.96213C6.09786 8.84104 6.22447 8.71449 6.3576 8.5814L6.46934 8.46969ZM5.74464 11.5569C5.94487 11.1528 6.31124 10.7543 7.20413 9.8569L11.0304 6.03027C11.0361 6.02454 11.0417 6.01874 11.0472 6.01285L12.655 4.405C13.372 3.68789 13.6475 3.41918 13.9579 3.22897C14.2487 3.05076 14.5657 2.91943 14.8974 2.83981C15.2513 2.75482 15.6361 2.75 16.6503 2.75L17.1991 2.75C18.0516 2.75 18.6458 2.75059 19.1085 2.78838C19.5623 2.82547 19.8231 2.8946 20.0206 2.99524C20.444 3.21095 20.7882 3.55516 21.0039 3.97852C21.1046 4.17604 21.1737 4.43681 21.2108 4.89068C21.2486 5.35331 21.2491 5.94755 21.2491 6.8L21.2491 7.34918C21.2491 8.36319 21.2443 8.74796 21.1594 9.1019C21.0798 9.4335 20.9485 9.75051 20.7703 10.0413C20.5801 10.3516 20.3114 10.6271 19.5945 11.3442L14.4696 16.4694C13.3363 17.6028 12.8931 18.032 12.443 18.2551C11.5337 18.7057 10.4662 18.7057 9.55686 18.2551C9.1849 18.0708 8.81765 17.7457 8.06174 16.9988L9.53018 15.5303C9.82307 15.2374 9.82307 14.7626 9.53018 14.4697C9.23729 14.1768 8.76241 14.1768 8.46952 14.4697L7.00108 15.9381C6.25412 15.1822 5.92902 14.8149 5.7447 14.443C5.29412 13.5337 5.29409 12.4662 5.74464 11.5569ZM16.0964 20.8436L14.4803 18.581L18.0395 15.0212L18.261 16.1278C18.4546 17.0947 18.5132 17.4264 18.4833 17.7328C18.4545 18.0272 18.368 18.3131 18.2286 18.5741C18.0836 18.8456 17.8509 19.0892 17.1536 19.7864L16.0964 20.8436ZM13.7524 8.99951C13.7524 8.30916 14.3121 7.74951 15.0024 7.74951C15.6928 7.74951 16.2524 8.30916 16.2524 8.99951C16.2524 9.68987 15.6928 10.2495 15.0024 10.2495C14.3121 10.2495 13.7524 9.68987 13.7524 8.99951ZM15.0024 6.24951C13.4837 6.24951 12.2524 7.48073 12.2524 8.99951C12.2524 10.5183 13.4837 11.7495 15.0024 11.7495C16.5212 11.7495 17.7524 10.5183 17.7524 8.99951C17.7524 7.48073 16.5212 6.24951 15.0024 6.24951Z"></path>
              </svg>
            </div>
          </div>
        </div>
        <h3 class="text-[#9a3412] dark:text-white font-display font-extrabold leading-tight text-lg lg:text-xl dark:drop-shadow-sm undefined"><span>
        At Trojan Carpentry, we are dedicated to: </span></h3>
      </div>
      <p class="paragraph leading-relaxed text-[#9a3412] dark:text-slate-300 text-base max-w-md"><span>Quality Craftsmanship: Using the finest materials and techniques to create durable and beautiful woodwork.<b>Custom Woodwork</b>.</span></p>
    </div>
    <div>
      <div class="mb-4 flex flex-col gap-6 sm:flex-row sm:items-center lg:flex-col lg:items-start xl:flex-row">
        <div class="relative group w-14 h-14">
          <div class="absolute inset-x-5 h-2 bottom-0 bg-indigo-400 blur-md opacity-50"></div>
          <div class="relative overflow-hidden h-14 w-14 rounded-2xl p-px bg-gradient-radial from-[#fef3c7] to-[#92400e] to-slate-300 dark:from-slate-700 dark:to-[#171C23] shadow-lg shadow-black/5">
            <div class="absolute inset-x-4 h-4 -bottom-2 bg-indigo-400 blur-md dark:opacity-80"></div>
            <div class="relative h-full w-full rounded-[15px] bg-gradient-radial from-[#fef3c7] to-[#92400e] dark:from-[#393C45] dark:to-[#171C23] flex justify-center items-center">
              <div class="absolute inset-x-4 h-4 -bottom-2 bg-indigo-400 blur-lg dark:opacity-80"></div><svg viewBox="0 0 24 24" class="fill-current h-7 text-indigo-400 transition-transform" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.25" d="M7.75739 16.2426C9.12175 17.607 10.5719 18.7351 12.0001 19.5911C13.4282 18.7351 14.8784 17.607 16.2427 16.2426C17.607 14.8783 18.7352 13.4282 19.5912 12C18.7352 10.5718 17.607 9.12167 16.2427 7.75732C14.8783 6.39299 13.4282 5.26486 12.0001 4.40886C10.5719 5.26487 9.12176 6.39301 7.7574 7.75737C6.39306 9.12171 5.26493 10.5718 4.40892 12C5.26493 13.4281 6.39305 14.8783 7.75739 16.2426Z"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.71156 8.76278C3.90231 9.33503 4.15211 9.9301 4.4583 10.5379C5.2343 9.40983 6.16351 8.29061 7.22709 7.22704C8.29068 6.16344 9.40992 5.23422 10.538 4.45822C9.93019 4.15202 9.33512 3.90222 8.76287 3.71147C6.54414 2.97189 4.90757 3.18252 4.04509 4.045C3.18261 4.90748 2.97198 6.54405 3.71156 8.76278ZM2.28853 9.23713C2.58692 10.1323 3.00789 11.0622 3.54057 12C3.0079 12.9377 2.58694 13.8677 2.28855 14.7628C1.49259 17.1507 1.50379 19.535 2.98445 21.0156C4.46511 22.4963 6.84937 22.5075 9.23723 21.7115C10.1324 21.4131 11.0623 20.9922 12.0001 20.4595C12.9378 20.9921 13.8677 21.4131 14.7629 21.7115C17.1507 22.5074 19.535 22.4962 21.0157 21.0156C22.4963 19.5349 22.5075 17.1506 21.7116 14.7628C21.4132 13.8676 20.9922 12.9377 20.4596 12C20.9922 11.0623 21.4132 10.1323 21.7116 9.23718C22.5075 6.84931 22.4963 4.46506 21.0157 2.98439C19.535 1.50373 17.1508 1.49254 14.7629 2.28849C13.8677 2.58688 12.9378 3.00783 12.0001 3.54049C11.0623 3.00781 10.1324 2.58684 9.23721 2.28844C6.84935 1.49249 4.4651 1.50368 2.98443 2.98434C1.50377 4.46501 1.49258 6.84926 2.28853 9.23713ZM8.76289 20.2885C9.33513 20.0977 9.9302 19.8479 10.538 19.5418C9.40991 18.7658 8.29067 17.8365 7.22707 16.7729C6.1635 15.7094 5.2343 14.5902 4.45831 13.4621C4.15212 14.0699 3.90232 14.6649 3.71157 15.2372C2.972 17.4559 3.18263 19.0925 4.04511 19.955C4.90759 20.8174 6.54415 21.0281 8.76289 20.2885ZM8.28773 15.7123C9.49055 16.9151 10.7549 17.9215 12.0001 18.7101C13.2452 17.9215 14.5096 16.9151 15.7124 15.7123C16.9152 14.5095 17.9216 13.2451 18.7102 12C17.9216 10.7548 16.9152 9.49046 15.7124 8.28764C14.5096 7.08486 13.2452 6.07847 12.0001 5.28982C10.755 6.07848 9.49056 7.08488 8.28775 8.2877C7.08495 9.49049 6.07855 10.7549 5.28991 12C6.07855 13.2451 7.08495 14.5095 8.28773 15.7123ZM15.2372 20.2884C14.665 20.0977 14.07 19.8479 13.4622 19.5417C14.5903 18.7658 15.7095 17.8365 16.773 16.773C17.8366 15.7094 18.7658 14.5902 19.5418 13.4621C19.848 14.0699 20.0978 14.6649 20.2885 15.2371C21.0281 17.4559 20.8175 19.0924 19.955 19.9549C19.0925 20.8174 17.456 21.028 15.2372 20.2884ZM20.2886 8.76284C20.0978 9.33506 19.848 9.93011 19.5418 10.5379C18.7658 9.40981 17.8366 8.29057 16.773 7.22698C15.7095 6.16342 14.5903 5.23421 13.4622 4.45823C14.07 4.15205 14.665 3.90226 15.2372 3.71152C17.456 2.97194 19.0925 3.18257 19.955 4.04505C20.8175 4.90754 21.0281 6.5441 20.2886 8.76284ZM12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"></path>
              </svg>
            </div>
          </div>
        </div>
        <h3 class="text-[#9a3412] dark:text-white font-display font-extrabold leading-tight text-lg lg:text-xl dark:drop-shadow-sm undefined"><span> At Trojan Carpentry, we are dedicated to:</span></h3>
      </div>
      <p class="paragraph leading-relaxed text-[#9a3412] dark:text-slate-300 text-base max-w-md"><span><b>Innovation: .</b>: Continuously improving our methods and staying up-to-date with the latest trends in carpentry.</span></p>
    </div>
    <div>
      <div class="mb-4 flex flex-col gap-6 sm:flex-row sm:items-center lg:flex-col lg:items-start xl:flex-row">
        <div class="relative group w-14 h-14">
          <div class="absolute inset-x-5 h-2 bottom-0 bg-indigo-400 blur-md opacity-50"></div>
          <div class="relative overflow-hidden h-14 w-14 rounded-2xl p-px bg-gradient-radial from-[#fef3c7] to-[#92400e] dark:from-slate-700 dark:to-[#171C23] shadow-lg shadow-black/5">
            <div class="absolute inset-x-4 h-4 -bottom-2 bg-indigo-400 blur-md dark:opacity-80"></div>
            <div class="relative h-full w-full rounded-[15px] bg-gradient-radial from-[#fef3c7] to-[#92400e] dark:from-[#393C45] dark:to-[#171C23] flex justify-center items-center">
              <div class="absolute inset-x-4 h-4 -bottom-2 bg-indigo-400 blur-lg dark:opacity-80"></div><svg viewBox="0 0 24 24" class="fill-current h-7 text-indigo-400 transition-transform" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.25" d="M7.3314 14.0109L5.99988 22H16.9337C18.3783 22 19.1006 22 19.6864 21.7372C20.2028 21.5055 20.6432 21.1325 20.9566 20.6612C21.3121 20.1265 21.4309 19.4141 21.6684 17.9891L22.3789 13.7261C22.5925 12.4441 22.6994 11.8032 22.5138 11.3036C22.351 10.8653 22.0397 10.4978 21.6341 10.2651C21.1718 10 20.522 10 19.2224 10H12.0661C10.6215 10 9.89917 10 9.31334 10.2628C8.79693 10.4945 8.35659 10.8675 8.04318 11.3388C7.68764 11.8735 7.56889 12.5859 7.3314 14.0109Z"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.76381 2.74976C8.1508 2.74976 8.8437 2.75093 8.40182 2.76438C9.06758 2.84064 9.66471 3.20968 10.0307 3.77106C10.0952 3.87009 10.156 3.98904 10.3291 4.33517L10.3487 4.37448C10.4947 4.66662 10.5952 4.86767 10.7125 5.0476C11.3224 5.98323 12.3176 6.59831 13.4272 6.7254C13.6406 6.74985 13.8654 6.74981 14.192 6.74977L14.2359 6.74976H15.9996C16.9781 6.74976 17.3202 6.75621 17.5824 6.82647C18.3587 7.03454 18.9651 7.64094 19.1732 8.41728C19.2214 8.59721 19.2396 8.81481 19.2462 9.25001H19.2224H12.0661H12.037H12.037C11.3394 9.25 10.7739 9.25 10.3111 9.285C9.83252 9.32119 9.40962 9.39762 9.00636 9.57852C8.36085 9.8681 7.81042 10.3344 7.41866 10.9235C7.17392 11.2915 7.02901 11.6961 6.91463 12.1623C6.80403 12.613 6.71107 13.1708 6.59638 13.8589L6.59638 13.8589L6.5916 13.8876L5.3667 21.237C5.19256 21.2314 5.03513 21.2232 4.89056 21.2114C4.43668 21.1743 4.17592 21.1052 3.9784 21.0045C3.55504 20.7888 3.21083 20.4446 2.99511 20.0212C2.89447 19.8237 2.82534 19.563 2.78826 19.1091C2.75046 18.6465 2.74988 18.0522 2.74988 17.1998V6.79976C2.74988 5.94731 2.75046 5.35308 2.78826 4.89044C2.82534 4.43657 2.89447 4.1758 2.99511 3.97829C3.21083 3.55492 3.55504 3.21071 3.9784 2.995C4.17592 2.89436 4.43668 2.82523 4.89056 2.78815C5.35319 2.75035 5.94742 2.74976 6.79988 2.74976H7.76381ZM15.0192 21.25C15.0128 21.2498 15.0063 21.2498 14.9999 21.2498H6.88526L8.07119 14.1342C8.19179 13.4106 8.27591 12.9089 8.37141 12.5197C8.46466 12.1397 8.55689 11.9207 8.6677 11.7541C8.90276 11.4006 9.23301 11.1209 9.62032 10.9471C9.8029 10.8652 10.0341 10.8102 10.4242 10.7807C10.8238 10.7505 11.3325 10.75 12.0661 10.75H19.2224C19.8856 10.75 20.3348 10.7507 20.6775 10.7804C21.0133 10.8094 21.1664 10.8615 21.2609 10.9157C21.5144 11.0611 21.709 11.2908 21.8107 11.5648C21.8487 11.6669 21.8749 11.8265 21.8484 12.1625C21.8213 12.5054 21.7481 12.9486 21.6391 13.6028L20.9286 17.8658C20.808 18.5894 20.7238 19.0911 20.6283 19.4803C20.5351 19.8603 20.4429 20.0793 20.3321 20.2459C20.097 20.5994 19.7667 20.8792 19.3794 21.0529C19.1969 21.1348 18.9657 21.1898 18.5755 21.2193C18.176 21.2495 17.6673 21.25 16.9337 21.25H15.0192ZM5.94075 22.7477C5.49398 22.744 5.10599 22.734 4.76841 22.7064C4.22177 22.6617 3.74163 22.5674 3.29741 22.341C2.59181 21.9815 2.01813 21.4078 1.6586 20.7022C1.43226 20.258 1.3379 19.7779 1.29324 19.2312C1.24987 18.7003 1.24987 18.0447 1.24988 17.2319V17.2319V17.1998V6.79976V6.76766V6.76761C1.24987 5.9548 1.24987 5.2992 1.29324 4.7683C1.3379 4.22166 1.43226 3.74152 1.6586 3.2973C2.01813 2.59169 2.59181 2.01801 3.29741 1.65849C3.74163 1.43215 4.22177 1.33779 4.76841 1.29313C5.29932 1.24975 5.95494 1.24976 6.76777 1.24976L6.79988 1.24976H7.76381L7.80773 1.24976C8.13434 1.24971 8.35912 1.24968 8.57251 1.27412C9.68212 1.40122 10.6773 2.0163 11.2872 2.95192C11.4045 3.13185 11.505 3.33291 11.651 3.62504L11.6707 3.66435C11.8438 4.01049 11.9045 4.12944 11.9691 4.22847C12.335 4.78985 12.9322 5.15889 13.5979 5.23515C13.7154 5.2486 13.849 5.24976 14.2359 5.24976H15.9996L16.1155 5.24974C16.9336 5.24947 17.4919 5.24928 17.9707 5.3776C19.2646 5.72439 20.2752 6.73505 20.622 8.02896C20.7161 8.37993 20.7411 8.77363 20.7477 9.2811C20.7677 9.28264 20.7874 9.28426 20.807 9.28595C21.2366 9.32315 21.6395 9.40365 22.0072 9.61458C22.565 9.9345 22.993 10.4397 23.2169 11.0425C23.3645 11.4399 23.3776 11.8506 23.3437 12.2805C23.3109 12.696 23.2263 13.2035 23.1241 13.8166L23.1187 13.8494L22.4082 18.1124L22.4034 18.1411C22.2887 18.8293 22.1957 19.387 22.0851 19.8378C21.9707 20.3039 21.8258 20.7085 21.5811 21.0765C21.1893 21.6656 20.6389 22.1319 19.9934 22.4215C19.5901 22.6024 19.1672 22.6788 18.6886 22.715C18.2259 22.75 17.6604 22.75 16.9627 22.75H16.9337H5.99988C5.98007 22.75 5.96034 22.7492 5.94075 22.7477Z"></path>
              </svg>
            </div>
          </div>
        </div>
        <h3 class="text-[#9a3412] dark:text-white font-display font-extrabold leading-tight text-lg lg:text-xl dark:drop-shadow-sm undefined"><span>At Trojan Carpentry, we are dedicated to:</span></h3>
      </div>
      <p class="paragraph leading-relaxed text-[#9a3412] dark:text-slate-300 text-base max-w-md"><span>Sustainability: <b> Practicing environmentally responsible carpentry by sourcing sustainable materials and minimizing waste.</b>.</span></p>
    </div>
  </div>
</section> 

<div className="min-h-screen bg-gray-100 p-8">
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <motion.div 
          className="bg-white shadow-md rounded-lg"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={cardVariants}
        >
          <img src="/25.png" alt="Welcome to Trojan Carpentry" className="w-full h-48 object-cover rounded-lg"/>
        </motion.div>

        <motion.div 
          className="bg-white shadow-md rounded-lg"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={cardVariants}
        >
          <img src="/1.jpeg" alt="Our Story" className="w-full h-48 object-cover rounded-lg"/>
        </motion.div>

        <motion.div 
          className="bg-white shadow-md rounded-lg"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={cardVariants}
        >
          <img src="/6.png" alt="What We Do" className="w-full h-48 object-cover rounded-lg"/>
        </motion.div>

        <motion.div 
          className="bg-white shadow-md rounded-lg"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={cardVariants}
        >
          <img src="/22.png" alt="Our Commitment" className="w-full h-48 object-cover rounded-lg"/>
        </motion.div>

        <motion.div 
          className="bg-white shadow-md rounded-lg"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={cardVariants}
        >
          <img src="/17.png" alt="Meet Our Team" className="w-full h-48 object-cover rounded-lg"/>
        </motion.div>

        <motion.div 
          className="bg-white shadow-md rounded-lg"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={cardVariants}
        >
          <img src="/27.png" alt="Contact Us" className="w-full h-48 object-cover rounded-lg"/>
        </motion.div>
      </div>
    </div>


</div>
)}
export default About;