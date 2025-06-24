import { useEffect, useState } from 'react';
import { Search } from 'lucide-react'; // import the icon

const images = [
  '/photos/food.jpg',
  '/photos/food2.jpg',
  '/photos/food3.jpg',
];

const Firstt = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[700px]  overflow-hidden">
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={src}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          {index === current && (
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
              <h1 className="text-3xl md:text-5xl font-serif font-bold text-center mb-6">
                Find your perfect restaurant
              </h1>

              <div className="flex items-center bg-white px-4 py-3 w-11/12 max-w-xl rounded-full shadow-lg">
                <Search className="w-5 h-5 text-gray-500 mr-2" />
                <input
                  type="text"
                  placeholder="City or restaurant name"
                  className="w-full bg-transparent text-gray-700 focus:outline-none"
                />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Firstt;
