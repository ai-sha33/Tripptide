// FineDining.jsx

import { Star, Heart } from "lucide-react";

const restaurants = [
  {
    name: "Martin Berasategui",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/15/c6/b3/martin-berasategui.jpg?w=900&h=500&s=1",
    reviews: "1000",
    location: "Lasarte-Oria, Spain",
  },
  {
    name: "Maison Lameloise",
    image: "https://images.pexels.com/photos/3735564/pexels-photo-3735564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    reviews: "1,792",
    location: "Chagny, France",
  },
  {
    name: "Lavie",
    image: "https://media-cdn.tripadvisor.com/media/photo-p/1d/b4/0f/bf/crema-de-queso.jpg",
    reviews: "2,089",
    location: "Lasarte-Oria, Spain",
  },
  {
    name: "Sidreria Iguarte",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/f0/6b/4e/caption.jpg?w=900&h=500&s=1",
    reviews: "2,778",
    location: "Usurbil, Spain"
  },
];

export default function FineDining() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4 text-[#E47C47] font-serif">Travelers’ Choice: Fine dining</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {restaurants.map((restaurant, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 relative"
          >
            <div className="relative">
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-sm">
                <Heart className="w-5 h-5 text-gray-600" />
              </div>
            </div>
            <div className="p-3">
              <h3 className="font-medium text-lg text-[#072450]">{restaurant.name}</h3>
              <div className="flex items-center space-x-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-green-600 fill-green-600" />
                ))}
                <span className="text-sm text-gray-700 ml-2">{restaurant.reviews} Reviews</span>
              </div>
              <p className="text-sm text-[#A4BD79] mt-1">{restaurant.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
