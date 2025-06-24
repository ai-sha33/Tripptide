import React from "react";

const destinations = [
  {
    id: 1,
    title: "Scottsdale",
    description:
      "Scottsdale has more spas per capita than any other city in the U.S.—so whether you’re looking for the latest medi-spa technology or a bohemian vibe, there’s something for you.",
    image: "./photos/saph.png",
  },
  {
    id: 2,
    title: "Bali",
    description:"Bali is a tropical paradise known for its lush rice terraces, sacred temples, and vibrant beach culture.",
      
    image: "./photos/bali.png",
  },
  {
    id: 3,
    title: "Paris",
    description:
      "Paris, known as the City of Light, enchants visitors with its romance, art, iconic landmarks like the Eiffel Tower, world-class museums, and exquisite cuisine—offering timeless charm and magic with every visit.",
      image: "./photos/paris.png",
  },
  {
    id: 4,
    title: "Miami",
    description:
      "Miami is hot hot hot! The nightlife is scorching, thanks to a strong Latin influence and spicy salsa culture. Dance the noche away.",
    image: "./photos/miami.png",
  },
];

export default function Destination() {
  return (
    <div className="p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-[#485361]">Hotels in top destinations</h2>
        
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {destinations.map((dest) => (
          <div key={dest.id} className="bg-[#A6BD79] text-[#D16F4C] rounded-lg overflow-hidden shadow hover:shadow-md transition">
            <img
              src={dest.image}
              alt={dest.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1">{dest.title}</h3>
              <p className="text-sm text-gray-600">{dest.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
