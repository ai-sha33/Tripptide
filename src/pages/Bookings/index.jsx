import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Bookings = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 px-4 bg-[#F8F9FA] text-[#072450]">
      {/* Illustration */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src="/photos/suitcase.jpg"
          alt="No bookings"
          className="w-40 h-40 mb-6 object-contain"
        />
      </motion.div>

      {/* Title */}
      <h2 className="text-2xl sm:text-3xl font-bold font-serif mb-2">
        No bookings yet — let&apos;s change that
      </h2>

      {/* Subtitle */}
      <p className=" sm:text-lg text-[#E47C47] mb-6 max-w-md">
        Book things before you go, and get right to the good stuff when you&apos;re there.
      </p>

      {/* Button with Link */}
      <Link to="/hotels">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#A4BD79] hover:bg-[#8aa75c] text-white font-semibold px-6 py-3 rounded-full shadow-md transition"
        >
          Start planning
        </motion.button>
      </Link>
    </div>
  );
};

export default Bookings;
