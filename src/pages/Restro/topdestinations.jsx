// TopDestinations.jsx
import React, { useState } from "react";
import { Globe } from "lucide-react";

const destinations = [
  { name: "Dubai", image: "https://images.pexels.com/photos/325193/pexels-photo-325193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { name: "Istanbul", image: "https://images.pexels.com/photos/1549326/pexels-photo-1549326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { name: "Paris", image: "https://images.pexels.com/photos/1308940/pexels-photo-1308940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { name: "New York City", image: "https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
];

export default function TopDestinations() {
  const [clicked, setClicked] = useState(null);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-[#E47C47] font-serif mb-4">Restaurants in top destinations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {destinations.map((dest, index) => (
          <div
            key={index}
            onClick={() => setClicked(index)}
            className={`relative cursor-pointer transform transition-all duration-300 rounded-lg overflow-hidden shadow-md ${
              clicked === index ? "scale-95" : "hover:scale-105"
            }`}
          >
            {dest.image ? (
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-48 object-cover"
              />
            ) : (
              <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
                <Globe className="w-12 h-12 text-gray-400" />
              </div>
            )}
            <div className="absolute bottom-0 w-full p-4 text-white text-lg font-medium bg-gradient-to-t from-black/70 via-black/30 to-transparent">
              {dest.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
