import React, { useState } from "react";
import {
  MapPin,
  Calendar,
  Plane,
  User,
  ChevronDown
} from "lucide-react";

export default function FlightSearch() {
  const [activeTab, setActiveTab] = useState("One-way");
  const tabs = ["Round Trip", "One-way", "Multi-city"];

  return (
    <div
      className="bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "url('https://static.tacdn.com/img2/branding/homepage/cheapflights-home-hero-image-1367x520.png')",
      }}
    >
      <div className="bg-black/40 p-6 min-h-[500px] flex items-center">
        <div className="w-full max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Find the best flight for the right price
          </h1>

          {/* Tabs */}
          <div className="flex justify-center space-x-6 text-sm font-medium mb-6">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-1 ${
                  activeTab === tab
                    ? "border-b-2 border-white text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Dynamic Search Form */}
          <div className="bg-white rounded-full p-4 shadow-md flex flex-col md:flex-row items-center gap-3 text-black flex-wrap justify-center">
            {/* From */}
            <div className="flex items-center border rounded-full px-4 py-2 space-x-2">
              <MapPin className="w-4 h-4 text-green-600" />
              <span className="text-sm">From: <strong>Kathmandu (KTM)</strong></span>
            </div>

            {/* To */}
            <div className="flex items-center border rounded-full px-4 py-2 space-x-2">
              <Plane className="w-4 h-4 text-green-600" />
              <span className="text-sm">To: <strong>Lukla (LUA)</strong></span>
            </div>

            {/* Dates */}
            {activeTab === "Round Trip" && (
              <>
                <div className="flex items-center border rounded-full px-4 py-2 space-x-2">
                  <Calendar className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Depart: Jun 29</span>
                </div>
                <div className="flex items-center border rounded-full px-4 py-2 space-x-2">
                  <Calendar className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Return: Jul 6</span>
                </div>
              </>
            )}

            {activeTab === "One-way" && (
              <div className="flex items-center border rounded-full px-4 py-2 space-x-2">
                <Calendar className="w-4 h-4 text-green-600" />
                <span className="text-sm">Date: Jun 30</span>
              </div>
            )}

            {activeTab === "Multi-city" && (
              <>
                <div className="flex items-center border rounded-full px-4 py-2 space-x-2">
                  <Plane className="w-4 h-4 text-green-600" />
                  <span className="text-sm">From: KTM → LUA (Jun 30)</span>
                </div>
                <div className="flex items-center border rounded-full px-4 py-2 space-x-2">
                  <Plane className="w-4 h-4 text-green-600" />
                  <span className="text-sm">From: LUA → PKR (Jul 5)</span>
                </div>
              </>
            )}

            {/* Passenger/Class */}
            <div className="flex items-center border rounded-full px-4 py-2 space-x-2 cursor-pointer">
              <User className="w-4 h-4 text-green-600" />
              <span className="text-sm">1 Person, Economy</span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </div>

            {/* Search Button */}
            <button className="bg-[#0d3a63] hover:bg-[#15406d] text-white rounded-full px-6 py-2 font-semibold">
              Find flights
            </button>
          </div>

          {/* Checkboxes */}
          <div className="mt-4 flex flex-col sm:flex-row justify-center gap-4 bg-white p-4 rounded-full shadow text-black text-sm">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Prefer nonstop</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Include nearby airports</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
