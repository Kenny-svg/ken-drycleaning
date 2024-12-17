// app/components/About.tsx

import React from 'react';

const About = () => {
  return (
    <div id="about" className="h-[50%] py-8 bg-gray-100 text-center text-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image column */}
          <div className="flex justify-center">
            <img
              src="../assests/img/side-view.jpg" // Adjust this path to your image
              alt="About us"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
          
          {/* Text column */}
          <div className="text-left">
            <h2 className="text-3xl font-bold text-purple-700 mb-6">About Us</h2>
            <p className="text-lg text-gray-600 mb-4">
              We are a premium dry cleaning service dedicated to offering the best care for your clothes and fabrics.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              With years of experience in the industry, we use the latest technology and eco-friendly products to ensure that your clothes are always handled with the utmost care.
            </p>
            <p className="text-lg text-gray-600">
              Our mission is to provide convenience and quality service, so you can always look your best.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
