export default function () {
  return (
    <div>
      <div className="bg-linear-to-r from-red-500 to-orange-500 px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-bold text-4xl md:text-5xl mb-6 text-white">
            Ready to Find Your Next Meal?
          </h2>
          <p className="text-lg md:text-xl text-white mb-10">
            Start chatting with our AI assistant now and discover amazing food
            options tailored just for you.
          </p>
          <button className="flex items-center gap-2 bg-amber-50 hover:bg-amber-100 text-gray-900 px-8 py-4 rounded-lg font-medium transition-colors shadow-lg mx-auto border-2 border-amber-300">
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
            Start Chatting
          </button>
        </div>
      </div>

      <footer className="bg-linear-to-b from-orange-50 to-amber-50 px-4 py-6 text-center">
        <p className="text-gray-600">
          © 2025 FoodieBot. Powered by AI to help you discover your next meal.
        </p>
      </footer>
    </div>
  );
}
