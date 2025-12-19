export default function () {
  return (
    <div className="bg-linear-to-b from-orange-50 to-amber-50 px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl md:text-5xl mb-4 text-gray-900">
            How It Works
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Three simple steps to your perfect meal
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div className="text-center">
            <div className="relative inline-block mb-6">
              <div className="w-20 h-20 bg-green-700 rounded-full flex items-center justify-center">
                <span className="text-white text-3xl font-bold">1</span>
              </div>
              <div className="absolute -top-1 -right-1 w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Tell Us What You Want
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Share your preferences, dietary needs, or simply chat with our AI
              about what sounds good.
            </p>
          </div>

          <div className="text-center">
            <div className="relative inline-block mb-6">
              <div className="w-20 h-20 bg-green-700 rounded-full flex items-center justify-center">
                <span className="text-white text-3xl font-bold">2</span>
              </div>
              <div className="absolute -top-1 -right-1 w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Get Smart Recommendations
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our AI analyzes your preferences and suggests perfect restaurants
              or recipes tailored for you.
            </p>
          </div>

          <div className="text-center">
            <div className="relative inline-block mb-6">
              <div className="w-20 h-20 bg-green-700 rounded-full flex items-center justify-center">
                <span className="text-white text-3xl font-bold">3</span>
              </div>
              <div className="absolute -top-1 -right-1 w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.1 13.34l2.83-2.83L3.91 3.5a4.008 4.008 0 000 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41-6.88-6.88 1.47-1.47z" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Enjoy Your Meal
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Navigate to your chosen restaurant or follow step-by-step cooking
              instructions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
