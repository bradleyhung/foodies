"use client";

export default function () {
  return (
    <div className="bg-linear-to-b from-orange-50 to-amber-50 flex items-center justify-center px-4 py-36 pt-36 md:pt-48">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl mb-6 text-gray-900 leading-tight">
          Never Wonder
          <br />
          What to Eat Again
        </h1>

        <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
          Whether you want to dine out or cook at home, our AI assistant helps
          you discover the perfect meal based on your preferences, mood, and
          dietary needs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="flex items-center gap-2 bg-linear-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-4 rounded-xl font-medium transition-all shadow-lg hover:shadow-xl">
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
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            Find Restaurants
          </button>
          <button className="flex items-center gap-2 bg-amber-50 hover:bg-orange-100 text-gray-900 px-8 py-4 rounded-xl font-medium border-2 border-orange-300 hover:border-orange-400 transition-all shadow-md hover:shadow-lg">
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
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
            Cook at Home
          </button>
        </div>
      </div>
    </div>
  );
}
