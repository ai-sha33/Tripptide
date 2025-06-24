import React from "react";

const destinations = [
  {
    city: "Sydney",
    image: "https://images.pexels.com/photos/995765/pexels-photo-995765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    city: "Lukla",
    image: "https://images.pexels.com/photos/28509465/pexels-photo-28509465/free-photo-of-small-aircraft-on-mountain-airstrip-at-sunrise.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    city: "Toronto",
    image: "https://images.pexels.com/photos/1750754/pexels-photo-1750754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    city: "Pokhara",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/d6/96/36/photo4jpg.jpg?w=300&h=-1&s=1",
  },
  {
    city: "New Delhi",
    image: "https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export default function PopularDestinations() {
  return (
    <section className="px-4 py-10 max-w-7xl mx-auto">
      <h2 className="text-xl md:text-2xl font-semibold mb-1 text-[#E47C47] font-serif">Popular destinations</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {destinations.map((dest, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden bg-[#A4BD79] mt-5 shadow-sm transition transform hover:scale-105 hover:shadow-lg duration-300"
          >
            <img
              src={dest.image}
              alt={dest.city}
              className="w-full h-52 object-cover transition-transform duration-300"
            />
            <div className="p-3">
              <h3 className="font-medium text-sm">{dest.city}</h3>
              {dest.price && (
                <p className="text-xs text-gray-600">from {dest.price}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
