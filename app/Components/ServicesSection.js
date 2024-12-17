"use client";
import { Card } from 'antd';

const ServicesSection = () => {
  const services = [
    { 
      title: "Laundry Services", 
      description: "Wash and fold services for your everyday wear.",
      imageUrl: "../assests/img/ironing2.jpg", // Image path for laundry
    },
    { 
      title: "Dry Cleaning", 
      description: "Professional cleaning for delicate fabrics and garments.",
      imageUrl: "../assests/img/ironing3.jpg", // Image path for dry cleaning
    },
    { 
      title: "Ironing", 
      description: "Expert ironing to keep your clothes crisp and wrinkle-free.",
      imageUrl: "../assests/img/ironing.jpg", // Image path for ironing
    },
  ];

  return (
    <div id="services" className="py-12 bg-white">
      <h2
        className="text-3xl font-bold text-center text-gray-800 mb-8"
        data-aos="fade-up"
      >
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        {services.map((service, index) => (
          <Card
            key={index}
            title={service.title}
            bordered={false}
            className="shadow-lg"
            data-aos="flip-left"
            data-aos-delay={index * 200}
          >
            {/* Image */}
            <div className="mb-4">
              <img
                src={service.imageUrl}
                alt={service.title}
                className="w-full h-40 object-cover rounded-lg"
              />
            </div>
            <p>{service.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
