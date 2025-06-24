import React from "react";
import { Star, Search, Quote } from "lucide-react";

const reviews = [
  {
    airline: "SkyConnect",
    rating: 4.5,
    votes: 45230,
    topRated: "Comfort & Cleanliness",
    review:
      "Super smooth experience with clean cabins and helpful staff throughout the journey.",
    reviewer: "— Ayesha R.",
  },
  {
    airline: "AeroFly",
    rating: 3.8,
    votes: 31245,
    topRated: "On-time performance",
    review:
      "All my flights were on time, no delays. Check-in and boarding were super fast.",
    reviewer: "— Ravi T.",
  },
  {
    airline: "CloudJet",
    rating: 4.2,
    votes: 38720,
    topRated: "In-flight Meals",
    review:
      "The food was surprisingly good, and they offered a variety of choices for vegetarians.",
    reviewer: "— Mia L.",
  },
  {
    airline: "FlyNova",
    rating: 3.6,
    votes: 19580,
    topRated: "Cabin Crew",
    review:
      "Very polite and attentive staff made the long-haul flight feel comfortable.",
    reviewer: "— Leo D.",
  },
];

export default function Reviews() {
  return (
    <section className="bg-[#f8f9fa] py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-3">
            <Quote className="w-6 h-6 text-green-600" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-[#8ED119]">
            Hear From Our Travelers
          </h2>
          <p className="text-[#485361] text-sm mt-1">
            Real experiences. Real voices. Find out what travelers love most.
          </p>
        </div>

        {/* Search bar */}
        <div className="mb-10 flex justify-center">
          <div className="flex items-center w-full max-w-md border rounded-full px-4 py-2 bg-white shadow">
            <Search className="w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search airlines..."
              className="ml-2 w-full text-sm outline-none"
            />
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-[#A4BD79] rounded-xl shadow p-5 text-left text-[#072450] flex flex-col justify-between h-full border"
            >
              <div>
                <h3 className="text-lg font-semibold mb-1">{review.airline}</h3>
                <div className="flex items-center text-sm text-yellow-600 font-medium mb-2">
                  <Star className="w-4 h-4 mr-1" fill="currentColor" />
                  {review.rating} ({review.votes.toLocaleString()})
                </div>
                <p className="text-xs text-gray-500 mb-2">
                  Top rated in <strong>{review.topRated}</strong>
                </p>
                <p className="text-sm italic text-gray-700">"{review.review}"</p>
              </div>
              <p className="text-xs mt-3 text-right text-gray-500">
                {review.reviewer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
