import React from 'react';

const Staircase = () => {
  return (
    <div>
 <div className="p-28 bg-gray-100 ">
      <h1 className="text-4xl font-bold text-[#9a3412] mb-4">Staircase Fitting</h1>
      <p className="text-lg text-gray-700 mb-6">
        At Trojan Carpentry, we specialize in custom staircase fitting that enhances the beauty and functionality of your home. Our skilled craftsmen ensure that each staircase is tailored to your specific needs and preferences.
      </p>
      
      {/* Image Gallery */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
        <img src="/s1.png" alt="Staircase Design 1" className="w-full h-64 object-cover rounded-lg shadow-md" />
        <img src="/s2.png" alt="Staircase Design 2" className="w-full h-64 object-cover rounded-lg shadow-md" />
        <img src="/s3.png" alt="Staircase Design 3" className="w-full h-64 object-cover rounded-lg shadow-md" />
        <img src="/s4.png" alt="Staircase Design 4" className="w-full h-64 object-cover rounded-lg shadow-md" />

        <img src="/s5.png" alt="Staircase Design 4" className="w-full h-64 object-cover rounded-lg shadow-md" />

        <img src="/s6.png" alt="Staircase Design 4" className="w-full h-64 object-cover rounded-lg shadow-md" />
      </div>

      {/* Benefits Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-[#9a3412] mb-2">Why Choose Our Staircase Services?</h2>
        <ul className="list-disc pl-5 text-lg text-gray-700">
          <li>Custom designs tailored to your home’s aesthetics.</li>
          <li>High-quality materials and craftsmanship.</li>
          <li>Expert installation by experienced professionals.</li>
          <li>Wide range of styles and finishes.</li>
        </ul>
      </div>

      {/* Process Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-[#9a3412] mb-2">Our Process</h2>
        <p className="text-lg text-gray-700 mb-4">
          We work closely with you from consultation to installation, ensuring that every detail meets your expectations. Our team is dedicated to delivering exceptional results that enhance your home’s value and appeal.
        </p>
        <ol className="list-decimal pl-5 text-lg text-gray-700">
          <li>Initial consultation to discuss your needs and preferences.</li>
          <li>Design and material selection tailored to your style.</li>
          <li>Precise measurement and planning.</li>
          <li>Expert installation with attention to detail.</li>
          <li>Final inspection and client approval.</li>
        </ol>
      </div>

      {/* Testimonials Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-[#9a3412] mb-2">Client Testimonials</h2>
        <div className="space-y-4">
          <blockquote className="p-4 bg-white rounded-lg shadow-md">
            <p className="text-gray-700 italic">"Trojan Carpentry transformed our staircase into a stunning focal point of our home. Their attention to detail and craftsmanship are unmatched!"</p>
            <footer className="mt-2 text-gray-600">— Jane Doe</footer>
          </blockquote>
          <blockquote className="p-4 bg-white rounded-lg shadow-md">
            <p className="text-gray-700 italic">"Professional, timely, and top-notch quality. We couldn't be happier with our new staircase."</p>
            <footer className="mt-2 text-gray-600">— John Smith</footer>
          </blockquote>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-[#9a3412] mb-2">Ready to Transform Your Home?</h2>
        <p className="text-lg text-gray-700 mb-4">
          Contact us today to schedule a consultation and bring your staircase vision to life.
        </p>
        <a href="/contact" className="inline-block bg-[#9a3412] text-white px-6 py-2 rounded-lg shadow hover:bg-[#7f2a0d] transition duration-300">
          Contact Us
        </a>
      </div>
    </div>     {/* Add more details or content specific to this service */}
    </div>
  );
};

export default Staircase;