"use client";
const Footer = () => {
  return (
    <footer className="bg-purple-700 text-white py-6">
      <div className="container mx-auto text-center">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Footer Links */}
          <div className="mb-4 md:mb-0">
            <a href="#services" className="text-white hover:text-gray-200 mx-4">Services</a>
            <a href="#about" className="text-white hover:text-gray-200 mx-4">About</a>
            <a href="#contact" className="text-white hover:text-gray-200 mx-4">Contact</a>
          </div>

         
        </div>

        {/* Footer Text */}
        <div className="text-sm mt-4">
          <p>&copy; 2024 Premium Dry Cleaning Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
