"use client";
import 'antd/dist/reset.css';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';
import './globals.css';
import Footer from './Components/Footer';

export default function Layout({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  

  return (
    <html lang="en">
      <div className="fixed top-0 left-0 w-full h-20 p-4 bg-transparent backdrop-blur-md z-20">
      <div className="flex justify-center items-center space-x-8">
  {/* Links for Services and About */}
  <button
    onClick={() => handleScroll('services')}
    className="text-gray-900 font-semibold hover:text-purple-500 transition shadow-lg"
  >
    Services
  </button>
  <button
    onClick={() => handleScroll('about')}
    className="text-gray-900 font-semibold hover:text-purple-500 transition shadow-lg"
  >
    About
  </button>
  <button
    onClick={() => handleScroll('contact')}
    className="text-gray-900 font-semibold hover:text-purple-500 transition shadow-lg"
  >
    Contact
  </button>
</div>

      </div>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </head>

      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
