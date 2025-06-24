import React from 'react';

const ExperienceCard = ({ image, title, price }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow text-[#072450] text-lg bg-white">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
        />
      </div>
      <div className="p-4">
        <p className="font-semibold mb-2">{title}</p>
        <p className="text-sm text-gray-600">from Rs{price}</p>
      </div>
    </div>
  );
};

const Second = () => {
  const experiences = [
    {
      image: 'https://images.unsplash.com/photo-1558638871-7487185910a7?q=80&w=1568&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Chicago Architecture River Cruise',
      price: 3999,
    },
    {
      image: 'https://images.pexels.com/photos/6220448/pexels-photo-6220448.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Vatican Museums Tour and Basilica',
      price: 4499,
    },
    {
      image: 'https://images.unsplash.com/photo-1733389638101-8f96fad23454?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Acropolis Guided Walking Tour',
      price: 2999,
    },
    {
      image: 'https://images.unsplash.com/photo-1612966874574-e0a92ad2bc43?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Florence Pasta Cooking Class',
      price: 6499,
    },
  ];

  return (
    <div className="p-6  bg-gray-50">
      <h1 className="text-2xl font-bold mb-6 text-[#485361]">Can’t-miss experiences</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </div>
  );
};

export default Second;
