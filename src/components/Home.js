import React from 'react';

const Home = () => {
return (

<div>

  <section class="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat">
    <div class="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

    <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
      <div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
        <h1 class="text-3xl font-extrabold sm:text-5xl">
          Let us find your

          <strong class="block font-extrabold text-white
          
           "> Forever Home. </strong>
        </h1>

        <p class="mt-4 max-w-lg sm:text-xl/relaxed">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
          numquam ea!
        </p>

        <div class="mt-8 flex flex-wrap gap-4 text-center">
          <a href="#" class="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">
            Get Started
          </a>

          <a href="#" class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto">
            Learn More
          </a>
        </div>
      </div>
    </div>
  </section>

  <section class="p-4 lg:p-8 dark:bg-gray-100 dark:text-gray-800">
    <div class="container mx-auto space-y-12">
      <div class="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
        <img src="/10.png" alt="" class="h-80 dark:bg-gray-500 aspect-video" />
        <div class="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
          <span class="text-xs uppercase dark:text-gray-600">Join, it's free</span>
          <h3 class="text-3xl font-bold">We're not reinventing the wheel</h3>
          <p class="my-6 dark:text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
          <button type="button" class="self-start">Action</button>
        </div>
      </div>
      <div class="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
        <img src="/11.png" alt="" class="h-80 dark:bg-gray-500 aspect-video" />
        <div class="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
          <span class="text-xs uppercase dark:text-gray-600">Join, it's free</span>
          <h3 class="text-3xl font-bold">We're not reinventing the wheel</h3>
          <p class="my-6 dark:text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
          <button type="button" class="self-start">Action</button>
        </div>
      </div>
      <div class="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
        <img src="/8.png" alt="" class="h-80 dark:bg-gray-500 aspect-video" />
        <div class="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
          <span class="text-xs uppercase dark:text-gray-600">Join, it's free</span>
          <h3 class="text-3xl font-bold">We're not reinventing the wheel</h3>
          <p class="my-6 dark:text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
          <button type="button" class="self-start">Action</button>
        </div>
      </div>
    </div>
  </section>

  <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 dark:bg-gray-100 dark:text-gray-800">
    <h2 class="mb-8 text-4xl font-bold leading-none text-center">What do we have to offer?</h2>
    <ul class="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
      <li class="flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current dark:text-violet-600">
          <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
          <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
        </svg>
        <span>Ea et neque distinctio</span>
      </li>
      <li class="flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current dark:text-violet-600">
          <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
          <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
        </svg>
        <span>Quaerat obcaecati voluptatem </span>
      </li>
      <li class="flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current dark:text-violet-600">
          <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
          <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
        </svg>
        <span>Quas eius repudianda</span>
      </li>
      <li class="flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current dark:text-violet-600">
          <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
          <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
        </svg>
        <span>Free and MIT licensed</span>
      </li>
      <li class="flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current dark:text-violet-600">
          <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
          <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
        </svg>
        <span>Praesentium ea et neque distinctio</span>
      </li>
      <li class="flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current dark:text-violet-600">
          <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
          <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
        </svg>
        <span>Architecto beatae esse ab amet </span>
      </li>
    </ul>
  </div>
  <section class="dark:bg-gray-100 dark:text-gray-800">
    <div class="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
      <a rel="noopener noreferrer" href="#" class="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
        <img src="/14.png" alt="" class="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
        <div class="p-6 space-y-2 lg:col-span-5">
          <h3 class="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Noster tincidunt reprimique ad pro</h3>
          <span class="text-xs dark:text-gray-600">February 19, 2021</span>
          <p>Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.</p>
        </div>
      </a>
      <div class="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <a rel="noopener noreferrer" href="#" class="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
          <img role="presentation" class="object-cover w-full rounded h-44 dark:bg-gray-500" src="/16.png" />
          <div class="p-6 space-y-2">
            <h3 class="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
            <span class="text-xs dark:text-gray-600">January 21, 2021</span>
            <p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
          </div>
        </a>
        <a rel="noopener noreferrer" href="#" class="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
          <img role="presentation" class="object-cover w-full rounded h-44 dark:bg-gray-500" src="/6.png" />
          <div class="p-6 space-y-2">
            <h3 class="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
            <span class="text-xs dark:text-gray-600">January 22, 2021</span>
            <p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
          </div>
        </a>
        <a rel="noopener noreferrer" href="#" class="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
          <img role="presentation" class="object-cover w-full rounded h-44 dark:bg-gray-500" src="/15.png" />
          <div class="p-6 space-y-2">
            <h3 class="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
            <span class="text-xs dark:text-gray-600">January 23, 2021</span>
            <p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
          </div>
        </a>
        <a rel="noopener noreferrer" href="#" class="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block">
          <img role="presentation" class="object-cover w-full rounded h-44 dark:bg-gray-500" src="/13.png" />
          <div class="p-6 space-y-2">
            <h3 class="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
            <span class="text-xs dark:text-gray-600">January 24, 2021</span>
            <p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
          </div>
        </a>
        <a rel="noopener noreferrer" href="#" class="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block">
          <img role="presentation" class="object-cover w-full rounded h-44 dark:bg-gray-500" src="/12.png" />
          <div class="p-6 space-y-2">
            <h3 class="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
            <span class="text-xs dark:text-gray-600">January 25, 2021</span>
            <p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
          </div>
        </a>
        <a rel="noopener noreferrer" href="#" class="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block">
          <img role="presentation" class="object-cover w-full rounded h-44 dark:bg-gray-500" src="/15.png" />
          <div class="p-6 space-y-2">
            <h3 class="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
            <span class="text-xs dark:text-gray-600">January 26, 2021</span>
            <p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
          </div>
        </a>
      </div>
      <div class="flex justify-center">
        <button type="button" class="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-50 dark:text-gray-600">Load more posts...</button>
      </div>
    </div>
  </section>
 
  <section class="bg-white py-16">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-semibold text-gray-800">Few Reasons Why People Choosing Us!</h2>
        <p class="mt-4 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt arcu diam, eu feugiat felis fermentum id.</p>
      </div>
      <div class="flex flex-wrap -mx-4">
        <div class="w-full md:w-1/3 px-4 mb-8 md:mb-0">
          <div class="flex items-center">
            <div class="bg-orange-500 text-white rounded-full p-4 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm0-6C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z" />
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-gray-800">Trusted Service Center</h3>
              <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt arcu diam.</p>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/3 px-4 mb-8 md:mb-0">
          <div class="flex items-center">
            <div class="bg-orange-500 text-white rounded-full p-4 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3v2h2V3H3zm0 4v2h2V7H3zm0 4v2h2v-2H3zm0 4v2h2v-2H3zm4-12v2h2V3H7zm0 4v2h2V7H7zm0 4v2h2v-2H7zm0 4v2h2v-2H7zm4-12v2h2V3h-2zm0 4v2h2V7h-2zm0 4v2h2v-2h-2zm0 4v2h2v-2h-2zm4-12v2h2V3h-2zm0 4v2h2V7h-2zm0 4v2h2v-2h-2zm0 4v2h2v-2h-2zm4-12v2h2V3h-2zm0 4v2h2V7h-2zm0 4v2h2v-2h-2zm0 4v2h2v-2h-2z" />
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-gray-800">Reasonable Price</h3>
              <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt arcu diam.</p>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/3 px-4 mb-8 md:mb-0">
          <div class="flex items-center">
            <div class="bg-orange-500 text-white rounded-full p-4 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m1-9H5a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V7l-5-5z" />
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-gray-800">24/7 Support</h3>
              <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt arcu diam.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</div>
)}
export default Home;