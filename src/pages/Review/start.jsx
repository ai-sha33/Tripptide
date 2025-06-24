
import { Search } from "lucide-react";

const Start = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center bg-[#F8F9FA] mt-10 px-4 text-[#072450]">
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">
        Write a review, make someone's trip
      </h2>

      {/* Subtitle */}
      <p className="text-base sm:text-lg mb-6 max-w-xl text-[#E47C47]">
        Stories like yours are what helps travelers have better trips. <br />
        Share your experience and help out a fellow traveler!
      </p>

      {/* Search input */}
      <div className="relative w-full max-w-xl mb-5">
        <input
          type="text"
          placeholder="What would you like to review?"
          className="w-full px-5 py-3 pl-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A4BD79] text-sm sm:text-base"
        />
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
      </div>

    
    </div>
  );
};

export default Start;
