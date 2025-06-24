import React from "react";
import { Users, BedDouble, Tag, Heart, ArrowRight } from "lucide-react";

const hotels = [
  {
    id: 1,
    image: "./photos/saph.png",
    title: "The Grand Sapphire Resort",
    badge: "2025",
  },
  {
    id: 2,
    image: "./photos/ocean.png",
    title: "Oceanview Paradise Hotel",
    badge: "2025",
  },
  {
    id: 3,
    image: "./photos/mountain.png",
    title: "Mountain Retreat Lodge",
    badge: "2025",
  },
  {
    id: 4,
    image: "./photos/historical.png",
    title: "Historic Charm Hotel",
    badge: "2025",
  },
];

export default function TopHotels() {
  return (
    <div className="p-6 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 text-center">
        <div className="flex flex-col items-center">
          <Users className="mb-2 text-[#072450]" />
          <p className="font-bold text-lg text-[#eca35f]">Backed by travelers</p>
          <p className="text-sm text-[#072450]">
            Book confidently thanks to reviews from travelers who have been there.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <BedDouble className="mb-2 text-[#072450]" />
          <p className="font-bold text-lg text-[#eca35f]">Stays for every style</p>
          <p className="text-sm text-[#072450]">
            Choose from more than two million hotels with filters to find your perfect fit.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Tag className="mb-2 text-[#072450]" />
          <p className="font-bold text-lg text-[#eca35f]">Best rates around</p>
          <p className="text-sm text-[#072450]">
            Compare prices from 200+ booking sites to book with the best deal.
          </p>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-[#485361]">Travelers’ Choice: Top hotels</h2>
          
        </div>
        <p className="text-gray-500 text-sm mb-4">
          Among our top 1% of hotels - decided by travelers.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {hotels.map((hotel) => (
            <div
              key={hotel.id}
              className="relative overflow-hidden rounded-xl shadow-lg border bg-[#e47c47] text-[#072450] group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={hotel.image}
                  alt={hotel.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-2 left-2 bg-yellow-400 text-xs px-2 py-1 rounded-full font-semibold">
                  {hotel.badge}
                </div>
                <div className="absolute top-2 right-2 bg-white p-1 rounded-full shadow">
                  <Heart size={16} className="text-gray-600" />
                </div>
              </div>
              <div className="text-center p-2 font-bold text-lg">{hotel.title}</div>
            </div>
          ))}
         
        </div>
      </div>
    </div>
  );
}
