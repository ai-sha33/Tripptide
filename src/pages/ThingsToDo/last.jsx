import React from 'react';
import { Heart } from 'lucide-react';

const PlaceCard = ({ image, city, activities }) => (
  <div className="flex bg-[#ECA35F] rounded-xl shadow p-4 gap-4 items-start max-w-3xl w-full">
    <div className="relative w-40 h-40 min-w-40 overflow-hidden rounded-lg">
      <img src={image} alt={city} className="w-full h-full object-cover rounded-lg" />
      <button className="absolute top-2 right-2 bg-white p-1 rounded-full shadow">
        <Heart size={16} className="text-[#072450]" />
      </button>
    </div>
    <div className="flex flex-col justify-start gap-2">
      <h3 className="text-xl font-bold text-[#072450]">{city}</h3>
      <div className="flex flex-wrap gap-2">
        {activities.map((act, idx) => (
          <span key={idx} className="px-3 py-1 border border-gray-300 rounded-full text-sm font-medium text-gray-700">
            {act}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Last = () => {
  const data = [
    {
      city: 'Rome',
      image: 'https://images.unsplash.com/photo-1548585742-1df49e753a83?q=80&w=1477&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      activities: ['Rome\'s secret catacombs', 'Pizza making classes', 'Explore Rome by night'],
    },
    {
      city: 'Oahu',
      image: 'https://images.unsplash.com/photo-1633511090164-910b108d3442?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      activities: ['Marine wildlife adventures', 'A taste of Oahu food & culture', 'Surf Hawaii’s iconic waves'],
    },
    {
      city: 'New York City',
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      activities: ['NYC art & museums', 'Broadway shows & NYC stages', 'NY pizza crawls'],
    },
    {
      city: 'Las Vegas',
      image: 'https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      activities: ['Emerald cave by kayak', 'Magical Vegas entertainment', 'Red Rock adventures'],
    },
  ];

  return (
    <div className="py-10 px-6 bg-gray-50">
      <h2 className="text-2xl font-bold mb-8 text-[#485361]">Must-dos in trending places</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        {data.map((place, index) => (
          <PlaceCard key={index} {...place} />
        ))}
      </div>
    </div>
  );
};

export default Last;
