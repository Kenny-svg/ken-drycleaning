"use client";

import { Button, Modal, Form, Input } from 'antd';
import { useState } from 'react';

const HeroSection = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleSubmit = (values) => {
    console.log("Form values:", values);
    setIsModalVisible(false);
  };

  return (
    <div>
   

      {/* Hero Section */}
      <div
        className="relative h-screen bg-cover bg-center flex items-center justify-center w-full"
        style={{
          backgroundImage: 'url("../assests/img/man-servant.jpg")',
          width: '100%',
        }}
        data-aos="fade-up"
      >
        <div className="absolute inset-0 bg-purple-700 opacity-50"></div> 
        <div className="relative z-10 text-center text-white">
          <h1 className="text-6xl mb-4 font-semibold" data-aos="zoom-in">
            Ken Dry Cleaning Services
          </h1>
          <p className="text-lg mb-6" data-aos="fade-up" data-aos-delay="200">
            Experience professional dry cleaning for all your clothes and fabrics.
          </p>
          <Button
          
            type="primary"
            size="large"
            className="bg-purple-500 "
            onClick={showModal}
            data-aos="fade-up"
            data-aos-delay="400"
            style={{backgroundColor: "#7E22CF", hover: "red"}}
          >
            Book Now
          </Button>
        </div>
      </div>

      {/* Modal */}
      <Modal
        title="Book a Service"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        centered
        width={400}
      >
        <Form
          className="flex flex-col"
          form={form}
          name="book-service"
          onFinish={handleSubmit}
          initialValues={{
            name: '',
            email: '',
          }}
        >
          {/* Full Name */}
          <p className='mb-2'>Full Name</p>
          <Form.Item
            name="name"
            rules={[{ required: true, message: 'Please input your name!' }]}
          >
            <Input placeholder="Enter your full name" />
          </Form.Item>

          {/* Email with custom validation */}
          <p className='mb-2'>Email</p>
          <Form.Item
            name="email"
            
            rules={[
              { required: true, message: 'Please input your email!' },
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                validator: (_, value) => {
                  if (value && !value.includes('@')) {
                    return Promise.reject('Please input a valid email address!');
                  }
                  return Promise.resolve();
                },
              },
            ]}
          >
            <Input type="email" placeholder="Enter your email" />
          </Form.Item>

          {/* Submit Button */}
          <Form.Item>
            <Button  style={{backgroundColor: "#7E22CF", hover: "red"}} type="primary" htmlType="submit" block>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default HeroSection;
