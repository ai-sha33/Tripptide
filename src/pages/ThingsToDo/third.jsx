import React from 'react';
import { Undo2, Users2, ArrowDownWideNarrow } from 'lucide-react';

const Feature = ({ Icon, title, description }) => (
  <div className="flex flex-col items-center text-center px-4 max-w-xs">
    <Icon className="w-6 h-6 mb-2 text-[#072450]" />
    <h3 className="font-semibold text-lg text-[#E47C47]">{title}</h3>
    <p className="text-sm text-[#072450]">{description}</p>
  </div>
);

const Third = () => {
  const features = [
    {
      Icon: Undo2,
      title: 'Free cancellation',
      description: 'Stay flexible with free cancellation on most experiences, up to 24 hours before.',
    },
    {
      Icon: Users2,
      title: 'Backed by travelers',
      description: 'Do it or skip it? Check out reviews to help you decide.',
    },
    {
      Icon: ArrowDownWideNarrow,
      title: 'Lowest price guarantee',
      description: 'If you find the same thing for less, we’ll refund the difference. Learn more.',
    },
  ];

  return (
    <div className="bg-[#c4df96] py-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
        {features.map((feat, idx) => (
          <Feature key={idx} {...feat} />
        ))}
      </div>
    </div>
  );
};

export default Third;
