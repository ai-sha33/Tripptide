import React from "react";
import { motion } from "framer-motion";

const End = () => {
  const features = [
    {
      title: "Best Flight Deals",
      description:
        "No need to shop multiple sites anymore. We’ve already done that by searching hundreds of cheap flights for you—scouring premium airlines, low-cost carriers, and the biggest online travel agencies. We’ll even check alternate dates and nearby airports to help you save money, time, even sanity on airline tickets.",
    },
    {
      title: "Flight Search Filters",
      description:
        "Our filters make it a snap to easily find the cheap flight that's right for you. Find direct flights that are nonstop, avoid early departure times—or try our Best Value filter, which sorts based on price, duration, and additional factors.",
    },
    {
      title: "In-Flight Experience",
      description:
        "Want Wi-Fi? More legroom? Or even a seat that allows you to sleep perfectly flat? Tripadvisor Flights now makes it easier to find the amenities that can make or break your flight. Find which flights include Wi-Fi, live TV, power outlets, free baggage, and more.",
    },
    {
      title: "Airplane Photos",
      description:
        "Thousands of photos from real travelers let you peek inside the plane before you buy your ticket. Our airline reviews provide unbiased opinions to help you select the right airline and flight for your trip.",
    },
  ];

  return (
    <div className="min-h-screen py-12 px-6 sm:px-12">
      <h2 className="text-3xl font-bold text-center text-[#072450] font-serif mb-10">
        Why Book With Us?
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            className="bg-[#ECA35F] rounded-xl sm:rounded-md p-4 sm:p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
          >
            <h3 className="text-xl font-semibold text-[#2294A5] font-serif mb-2 break-words">
              {feature.title}
            </h3>
            <p className="italic text-sm text-[#072450] break-words text-wrap">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default End;
