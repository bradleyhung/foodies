"use client";

import Image from "next/image";
import { useState } from "react";

export default function () {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-amber-50 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between px-4 md:px-6 py-4">
        <div className="flex items-center gap-2">
          <Image
            src="/FoodiesImage.jpg"
            alt="Foodies Logo"
            width={40}
            height={40}
          />
          <div className="font-bold text-xl text-orange-600">FoodieBot</div>
        </div>

        <div className="hidden md:flex gap-8 text-gray-700">
          <div className="cursor-pointer hover:text-orange-600 transition-colors">
            Search
          </div>
          <div className="cursor-pointer hover:text-orange-600 transition-colors">
            Find Restaurants
          </div>
          <div className="cursor-pointer hover:text-orange-600 transition-colors">
            Cook at Home
          </div>
          <div className="cursor-pointer hover:text-orange-600 transition-colors">
            AI Assistant
          </div>
        </div>

        <button className="hidden md:flex items-center gap-2 bg-linear-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-6 py-2.5 rounded-lg transition-all shadow-md hover:shadow-lg">
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

      {isMenuOpen && (
        <div className="md:hidden px-4 py-3 border-t border-gray-200 bg-amber-50">
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
