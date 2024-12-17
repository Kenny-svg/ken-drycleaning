"use client";
import { Carousel, Card, Avatar } from 'antd';
import { StarOutlined } from '@ant-design/icons';

const feedbacks = [
  {
    name: "John Doe",
    message: "Excellent service! My clothes were cleaned and delivered on time. Will definitely use again.",
    rating: 5,
    avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Jane Smith",
    message: "The quality of dry cleaning is outstanding. I am highly satisfied with the service.",
    rating: 4,
    avatarUrl: "https://randomuser.me/api/portraits/women/40.jpg",
  },
  {
    name: "Michael Johnson",
    message: "Great experience overall, but I think delivery time could be a bit faster. Highly recommend!",
    rating: 4,
    avatarUrl: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

const FeedbackSection = () => {
  return (
    <div id="feedback" className="py-12 bg-gray-50 px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
       We Value Feedback
      </h2>
      <div className="max-w-3xl mx-auto">
        <Carousel autoplay className="rounded-lg shadow-lg">
          {feedbacks.map((feedback, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center mb-4">
                <Avatar src={feedback.avatarUrl} size={64} className="mr-4" />
                <div>
                  <h3 className="font-bold text-lg">{feedback.name}</h3>
                  <div className="flex text-yellow-500">
                    {[...Array(feedback.rating)].map((_, i) => (
                      <StarOutlined key={i} />
                    ))}
                  </div>
                </div>
              </div>
              <p>{feedback.message}</p>
            </Card>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default FeedbackSection;
