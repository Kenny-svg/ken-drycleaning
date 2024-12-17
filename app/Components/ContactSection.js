"use client";
import { Form, Input, Button } from 'antd';

const ContactSection = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  return (
    <div
      className="py-12 bg-gray-50 px-6"
      data-aos="fade-up"
    >
      <h2 id='contact' className="text-3xl font-bold text-center text-purple-700 mb-8">
        Contact Us
      </h2>
      <div
        className="max-w-3xl mx-auto bg-white p-6 rounded shadow-lg"
        data-aos="zoom-in"
        data-aos-delay="300"
      >
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item 
            label="Name" 
            name="name" 
            rules={[{ required: true, message: 'Please enter your name' }]}>
            <Input placeholder="Enter your name" />
          </Form.Item>
          <Form.Item 
            label="Email" 
            name="email" 
            rules={[
              { required: true, message: 'Please enter your email' },
              { type: 'email', message: 'Please enter a valid email address' }
            ]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>
          <Form.Item label="Message" name="message">
            <Input.TextArea rows={4} placeholder="Write your message" />
          </Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="bg-purple-500 hover:bg-purple-700"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Send Message
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ContactSection;
