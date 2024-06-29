import React from 'react';
// import { CiFacebook,CiInstagram ,CiTwitter,CiLinkedin } from "react-icons/ci";
// import { MdCall } from "react-icons/md";
// import { FaAddressBook } from "react-icons/fa";
// import { FaBuildingColumns } from "react-icons/fa6";
// import { MdOutlineEmail } from "react-icons/md";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {

const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 });
const { ref: contactRef, inView: contactInView } = useInView({ triggerOnce: true, threshold: 0.1 });
const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true, threshold: 0.1 });


return (

<section>
<div className="min-h-screen bg-gray-100">
      {/* Section 1: Company Intro */}
      <motion.section 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
        className="text-center p-8 bg-white shadow-md"
      >
        <h1 className="text-4xl font-bold mb-4 text-[#9a3412]">Welcome to Trojan Carpentry</h1>
        <p className="text-xl text-[#9a3412]">Quality craftsmanship for all your carpentry needs.</p>
      </motion.section>

      {/* Section 2: Contact Form with Background Image */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="relative bg-cover bg-center h-screen flex items-center justify-center" 
        style={{ backgroundImage: "url('/21.png')" }} // Replace with your image path
      >
        <div className="bg-white bg-opacity-75 p-8 rounded-md shadow-md w-full max-w-md">
          <h2 className="text-3xl font-bold mb-4 text-center text-[#9a3412]">Contact Us</h2>
          <form className="space-y-4 text-[#9a3412]">
            <div>
              <label className="block text-lg">Name</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />
            </div>
            <div>
              <label className="block text-lg">Email</label>
              <input type="email" className="w-full p-2 border border-gray-300 rounded-md" />
            </div>
            <div>
              <label className="block text-lg">Message</label>
              <textarea className="w-full p-2 border border-gray-300 rounded-md" rows="5"></textarea>
            </div>
            <button type="submit" className="px-4 py-2 bg-[#9a3412]text-white rounded-md w-full">Send</button>
          </form>
        </div>
      </motion.section>

      {/* Section 3: Address Information */}
   
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
      {/* Section 4: Image and Text */}
      <div className='md:flex mx-auto flex-row items-center justify-center p-14 space-x-6 '> 
      <motion.section 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="p-8 md:w-[80%] justify-center space-x-6 "
      >
        <div className="flex flex-col md:flex-row">
          <img src="/27.png" alt="Trojan Carpentry" className=" space-x-6  w-full h-60 md:w-[50%] rounded-md shadow-md mb-4 md:mb-0 md:mr-4" />
          <div className="md:w-1/2">
            <p className="text-lg mt-12 ml-12 text-[#a16207]">Welcome to Trojan Carpentry, your trusted partner for all your carpentry needs in the UK. With years of experience in the industry, our team of skilled craftsmen provide high-quality carpentry services to residential and commercial clients across the country.</p>
          </div>
        </div>
      </motion.section>
      </div>
     
    </div>
  
    <section class="relative mx-auto w-full max-w-screen-xl px-6 sm:px-8 lg:px-12 mb-12 pt-16 lg:pt-24 text-[#a16207]">
  <div class="grid grid-cols-1 gap-12 lg:gap-x-16 md:grid-cols-2 lg:grid-cols-3">
    <div>
      <div class="mb-4 flex flex-col gap-6 sm:flex-row sm:items-center lg:flex-col lg:items-start xl:flex-row">
        <div class="relative group w-14 h-14">
          <div class="absolute inset-x-5 h-2 bottom-0 bg-rose-400 blur-md opacity-50"></div>
          <div class="relative overflow-hidden h-14 w-14 rounded-2xl p-px bg-gradient-to-b from-slate-200 to-slate-300 dark:from-slate-700 dark:to-[#171C23] shadow-lg shadow-black/5">
            <div class="absolute inset-x-4 h-4 -bottom-2 bg-rose-400 blur-md dark:opacity-80"></div>
            <div class="relative h-full w-full rounded-[15px] bg-gradient-radial from-white to-slate-100 dark:from-[#393C45] dark:to-[#171C23] flex justify-center items-center">
              <div class="absolute inset-x-4 h-4 -bottom-2 bg-rose-400 blur-lg dark:opacity-80"></div><svg viewBox="0 0 24 24" class="fill-current h-7 text-rose-400 transition-transform" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect opacity="0.25" x="3" y="4" width="18" height="18" rx="9"></rect>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.25 1C9.25 0.585789 9.58578 0.250001 10 0.250002L14 0.250002C14.4142 0.250002 14.75 0.585789 14.75 1C14.75 1.41422 14.4142 1.75 14 1.75L10 1.75C9.58578 1.75 9.25 1.41422 9.25 1ZM3.75 13C3.75 8.44365 7.44365 4.75 12 4.75C16.5563 4.75 20.25 8.44365 20.25 13C20.25 17.5564 16.5563 21.25 12 21.25L7 21.25C6.58578 21.25 6.25 21.5858 6.25 22C6.25 22.4142 6.58578 22.75 7 22.75L12 22.75C17.3848 22.75 21.75 18.3848 21.75 13C21.75 7.61523 17.3848 3.25 12 3.25C6.61522 3.25 2.25 7.61523 2.25 13C2.25 13.4142 2.58578 13.75 3 13.75C3.41421 13.75 3.75 13.4142 3.75 13ZM1.25 16C1.25 15.5858 1.58578 15.25 2 15.25L7 15.25C7.41421 15.25 7.75 15.5858 7.75 16C7.75 16.4142 7.41421 16.75 7 16.75L2 16.75C1.58578 16.75 1.25 16.4142 1.25 16ZM3.25 19C3.25 18.5858 3.58578 18.25 4 18.25L10 18.25C10.4142 18.25 10.75 18.5858 10.75 19C10.75 19.4142 10.4142 19.75 10 19.75L4 19.75C3.58578 19.75 3.25 19.4142 3.25 19ZM12.75 10C12.75 9.58579 12.4142 9.25 12 9.25C11.5858 9.25 11.25 9.58579 11.25 10L11.25 14C11.25 14.4142 11.5858 14.75 12 14.75C12.4142 14.75 12.75 14.4142 12.75 14L12.75 10Z"></path>
              </svg>
            </div>
          </div>
        </div>
        <h3 class="text-[#a16207] dark:text-white font-display font-extrabold leading-tight text-lg lg:text-xl dark:drop-shadow-sm undefined"><span> How long has Trojan Carpentry been in business?</span></h3>
      </div>
      <p class="paragraph leading-relaxed text-[#a16207] dark:text-slate-300 text-base max-w-md"><span>We have been providing top-notch carpentry services for over 20 years, with a tradition of superior craftsmanship passed down through generations..</span></p>
    </div>
    <div>
      <div class="mb-4 flex flex-col gap-6 sm:flex-row sm:items-center lg:flex-col lg:items-start xl:flex-row">
        <div class="relative group w-14 h-14">
          <div class="absolute inset-x-5 h-2 bottom-0 bg-rose-400 blur-md opacity-50"></div>
          <div class="relative overflow-hidden h-14 w-14 rounded-2xl p-px bg-gradient-to-b from-slate-200 to-slate-300 dark:from-slate-700 dark:to-[#171C23] shadow-lg shadow-black/5">
            <div class="absolute inset-x-4 h-4 -bottom-2 bg-rose-400 blur-md dark:opacity-80"></div>
            <div class="relative h-full w-full rounded-[15px] bg-gradient-radial from-white to-slate-100 dark:from-[#393C45] dark:to-[#171C23] flex justify-center items-center">
              <div class="absolute inset-x-4 h-4 -bottom-2 bg-rose-400 blur-lg dark:opacity-80"></div><svg viewBox="0 0 24 24" class="fill-current h-7 text-rose-400 transition-transform" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.25" d="M2 9.00001C2 16 11 21 12 21C12.5092 21 15.093 19.7034 17.5064 17.5064L4.3116 4.31161C2.94824 5.38063 2 7.03228 2 9.00001Z"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.46967 1.46967C1.76256 1.17678 2.23744 1.17678 2.53033 1.46967L4.84193 3.78127L18.0367 16.9761L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L17.4737 18.5343C16.3981 19.4503 15.321 20.1897 14.4213 20.7224C13.8965 21.0331 13.424 21.2783 13.0398 21.4487C12.8484 21.5336 12.6701 21.6038 12.5126 21.6542C12.3746 21.6984 12.186 21.75 12 21.75C11.8167 21.75 11.6316 21.7 11.4962 21.657C11.3419 21.6081 11.1677 21.54 10.9812 21.4579C10.6068 21.2932 10.1469 21.0562 9.63581 20.7561C8.61307 20.1554 7.35322 19.2829 6.12491 18.1839C3.69522 16.01 1.25 12.8218 1.25 8.99999C1.25 7.09851 2.03635 5.46156 3.21886 4.27952L1.46967 2.53033C1.17678 2.23744 1.17678 1.76256 1.46967 1.46967ZM4.27939 5.34005C3.35245 6.26583 2.75 7.53372 2.75 8.99999C2.75 12.1782 4.80479 14.99 7.1251 17.0661C8.27179 18.092 9.44944 18.9071 10.3954 19.4626C10.8687 19.7406 11.276 19.9489 11.5853 20.085C11.7405 20.1533 11.8622 20.1995 11.9496 20.2272C11.9702 20.2337 11.9869 20.2386 12 20.2422C12.0141 20.2383 12.0323 20.233 12.0551 20.2257C12.1457 20.1967 12.2717 20.1484 12.4318 20.0774C12.7508 19.936 13.1705 19.7198 13.657 19.4317C14.4654 18.9531 15.4359 18.2893 16.4094 17.47L4.27939 5.34005ZM15.9891 3.74993C14.6789 3.73097 13.4503 4.17673 12.624 5.41605C12.4849 5.62469 12.2508 5.75002 12 5.75002C11.7492 5.75002 11.5151 5.62469 11.376 5.41605C10.5543 4.18355 9.30338 3.75001 8 3.75001C7.85633 3.75001 7.71228 3.75667 7.56828 3.76983C7.15579 3.80754 6.79083 3.50372 6.75311 3.09123C6.7154 2.67874 7.01922 2.31377 7.43172 2.27606C7.62037 2.25881 7.80999 2.25001 8 2.25001C9.37536 2.25001 10.86 2.64616 11.9984 3.80946C13.1283 2.64408 14.5981 2.22964 16.0109 2.25008C19.3659 2.29863 22.75 5.03724 22.75 8.99999C22.75 11.3172 21.8486 13.4002 20.6129 15.1525C20.5431 15.2516 20.4721 15.3497 20.4001 15.4467C20.1534 15.7795 19.6836 15.8492 19.3509 15.6024C19.0182 15.3557 18.9485 14.886 19.1952 14.5533C19.2603 14.4656 19.3242 14.3772 19.3871 14.2881C20.5044 12.7036 21.25 10.9177 21.25 8.99999C21.25 5.96278 18.6341 3.7882 15.9891 3.74993Z"></path>
              </svg>
            </div>
          </div>
        </div>
        <h3 class="text-[#a16207] dark:text-white font-display font-extrabold leading-tight text-lg lg:text-xl dark:drop-shadow-sm undefined"><span>How can I contact Trojan Carpentry for a quote?</span></h3>
      </div>
      <p class="paragraph leading-relaxed text-[#a16207] dark:text-slate-300 text-base max-w-md"><span>You can contact us by phone at +07869514083, email us at info@trojancarpentry.com, or use the contact form on our website.</span></p>
    </div>
    <div>
      <div class="mb-4 flex flex-col gap-6 sm:flex-row sm:items-center lg:flex-col lg:items-start xl:flex-row">
        <div class="relative group w-14 h-14">
          <div class="absolute inset-x-5 h-2 bottom-0 bg-rose-400 blur-md opacity-50"></div>
          <div class="relative overflow-hidden h-14 w-14 rounded-2xl p-px bg-gradient-to-b from-slate-200 to-slate-300 dark:from-slate-700 dark:to-[#171C23] shadow-lg shadow-black/5">
            <div class="absolute inset-x-4 h-4 -bottom-2 bg-rose-400 blur-md dark:opacity-80"></div>
            <div class="relative h-full w-full rounded-[15px] bg-gradient-radial from-white to-slate-100 dark:from-[#393C45] dark:to-[#171C23] flex justify-center items-center">
              <div class="absolute inset-x-4 h-4 -bottom-2 bg-rose-400 blur-lg dark:opacity-80"></div><svg viewBox="0 0 24 24" class="fill-current h-7 text-rose-400 transition-transform" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M15.6 6H2V15.6C2 17.8402 2 18.9603 2.43597 19.816C2.81947 20.5686 3.43139 21.1805 4.18404 21.564C5.03969 22 6.15979 22 8.4 22H15.6C17.8402 22 18.9603 22 19.816 21.564C20.5686 21.1805 21.1805 20.5686 21.564 19.816C21.8979 19.1606 21.9761 18.3501 21.9944 17H21C19.3431 17 18 15.6569 18 14C18 12.3431 19.3431 11 21 11H21.9944C21.9761 9.6499 21.8979 8.8394 21.564 8.18404C21.1805 7.43139 20.5686 6.81947 19.816 6.43597C18.9603 6 17.8402 6 15.6 6Z"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.8925 2.87498C12.4787 2.75681 12.0168 2.75003 10.8 2.75003H4C3.30964 2.75003 2.75 3.30967 2.75 4.00003C2.75 4.69039 3.30964 5.25003 4 5.25003L12 5.25003L15.5 5.25003L15.32 5.01003C14.5899 4.03659 14.3073 3.67112 13.9645 3.411C13.6435 3.16741 13.28 2.98564 12.8925 2.87498ZM4 1.25003C2.48122 1.25003 1.25 2.48125 1.25 4.00003V6.00003V15.6V15.633C1.24999 16.7252 1.24999 17.5907 1.30699 18.2883C1.36527 19.0017 1.48688 19.6053 1.76772 20.1565C2.22312 21.0503 2.94978 21.7769 3.84355 22.2323C4.39472 22.5131 4.99834 22.6348 5.71173 22.693C6.40935 22.75 7.27485 22.75 8.36698 22.75H8.4H15.6H15.633C16.7252 22.75 17.5906 22.75 18.2883 22.693C19.0017 22.6348 19.6053 22.5131 20.1565 22.2323C21.0502 21.7769 21.7769 21.0503 22.2323 20.1565C22.5131 19.6053 22.6347 19.0017 22.693 18.2883C22.75 17.5907 22.75 16.7252 22.75 15.6331V15.6V12.4V12.367C22.75 11.2749 22.75 10.4094 22.693 9.71176C22.6347 8.99837 22.5131 8.39475 22.2323 7.84358C21.7769 6.94981 21.0502 6.22315 20.1565 5.76775C19.6053 5.48691 19.0017 5.3653 18.2883 5.30702C18.0141 5.28462 17.7141 5.27103 17.3846 5.26277L16.52 4.11003L16.4521 4.0195L16.4521 4.01949C15.8134 3.16757 15.4021 2.61886 14.8713 2.21607C14.4021 1.86004 13.8708 1.59439 13.3044 1.43265C12.6637 1.24966 11.9779 1.2498 10.9131 1.25001L10.8 1.25003H4ZM12 6.75003H15.6C16.7325 6.75003 17.5367 6.75061 18.1661 6.80204C18.7867 6.85274 19.171 6.94912 19.4755 7.10426C20.087 7.41585 20.5842 7.91303 20.8958 8.52456C21.0509 8.82903 21.1473 9.21328 21.198 9.83391C21.2087 9.96462 21.2172 10.1029 21.2239 10.25H21C18.9289 10.25 17.25 11.929 17.25 14C17.25 16.0711 18.9289 17.75 21 17.75H21.2239C21.2172 17.8972 21.2087 18.0354 21.198 18.1661C21.1473 18.7868 21.0509 19.171 20.8958 19.4755C20.5842 20.087 20.087 20.5842 19.4755 20.8958C19.171 21.0509 18.7867 21.1473 18.1661 21.198C17.5367 21.2494 16.7325 21.25 15.6 21.25H8.4C7.26752 21.25 6.46327 21.2494 5.83388 21.198C5.21325 21.1473 4.829 21.0509 4.52453 20.8958C3.913 20.5842 3.41582 20.087 3.10423 19.4755C2.94909 19.171 2.85271 18.7868 2.80201 18.1661C2.75058 17.5368 2.75 16.7325 2.75 15.6V6.75003L4 6.75003L12 6.75003ZM21.2495 16.25C21.25 16.046 21.25 15.8298 21.25 15.6V12.4C21.25 12.1703 21.25 11.954 21.2495 11.75H21C19.7574 11.75 18.75 12.7574 18.75 14C18.75 15.2427 19.7574 16.25 21 16.25H21.2495Z"></path>
              </svg>
            </div>
          </div>
        </div>
        <h3 class="text-[#a16207] dark:text-white font-display font-extrabold leading-tight text-lg lg:text-xl dark:drop-shadow-sm undefined"><span>Can you customize furniture to match my existing decor?</span></h3>
      </div>
      <p class="paragraph leading-relaxed text-[#a16207] dark:text-slate-300 text-base max-w-md"><span>Absolutely! We specialize in custom woodwork and can design and build furniture to match your specific style and existing decor.</span></p>
    </div>
  </div>
</section>

</section>
)}
export default Contact;