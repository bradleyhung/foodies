"use client";

import Image from "next/image";
import { useState } from "react";

export default function () {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-xl">
      <div className="flex items-center justify-between px-4 md:px-6 py-4">
        <div className="flex items-center gap-2">
          <Image
            src="/FoodiesImage.jpg"
            alt="Foodies Logo"
            width={40}
            height={40}
          />
          <div className="font-bold text-xl text-orange-500">FoodieBot</div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-8 text-gray-600">
          <div className="cursor-pointer hover:text-gray-900">Search</div>
          <div className="cursor-pointer hover:text-gray-900">
            Find Restaurants
          </div>
          <div className="cursor-pointer hover:text-gray-900">Cook at Home</div>
          <div className="cursor-pointer hover:text-gray-900">AI Assistant</div>
        </div>

        {/* Desktop Chat Button */}
        <button className="hidden md:flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-6 py-2.5 rounded-lg transition-colors">
          {/* Create Bubble Message */}
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          Chat Now
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-gray-600 hover:text-gray-900"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 py-3 border-t border-gray-200 bg-white">
          <div className="flex flex-col gap-4 text-gray-600 text-center">
            <div className="cursor-pointer hover:text-gray-900 py-2">
              Search
            </div>
            <div className="cursor-pointer hover:text-gray-900 py-2">
              Find Restaurants
            </div>
            <div className="cursor-pointer hover:text-gray-900 py-2">
              Cook at Home
            </div>
            <div className="cursor-pointer hover:text-gray-900 py-2">
              AI Assistant
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
