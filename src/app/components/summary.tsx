export default function () {
  return (
    <div className="bg-linear-to-b from-orange-50 to-amber-50 px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl md:text-5xl mb-4 text-gray-900">
            Everything You Need to Decide
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Powerful features designed to help you find exactly what you're
            craving
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-linear-to-b from-orange-50 to-amber-50 rounded-2xl border-2 border-green-200 p-8 hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-7 h-7 text-green-700"
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
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Restaurant Discovery
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Find nearby restaurants with Google Maps integration. Filter by
              cuisine, price, and ratings to discover your perfect dining spot.
            </p>
          </div>

          <div className="bg-linear-to-b from-orange-50 to-amber-50 rounded-2xl border-2 border-green-200 p-8 hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-7 h-7 text-green-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Recipe Recommendations
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Get personalized recipe suggestions based on your available
              ingredients, skill level, and dietary preferences.
            </p>
          </div>

          <div className="bg-linear-to-b from-orange-50 to-amber-50 rounded-2xl border-2 border-green-200 p-8 hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-7 h-7 text-green-700"
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
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              AI Chat Assistant
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Have a conversation with our AI to explore options, ask questions,
              and get instant recommendations tailored to you.
            </p>
          </div>

          <div className="bg-linear-to-b from-orange-50 to-amber-50 rounded-2xl border-2 border-green-200 p-8 hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-7 h-7 text-green-700"
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
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Smart Filters
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Customize your search with advanced filters for cuisine type,
              dietary restrictions, cooking time, and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
