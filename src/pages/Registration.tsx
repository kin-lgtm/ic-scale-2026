export default function Registration() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-[#C4B5FD]/20 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Registration
          </h1>
          <div className="w-24 h-1 bg-[#C4B5FD]"></div>
        </div>
      </section>

      {/* Registration Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-12 text-center">
              Registration details will be announced soon. Early bird discounts and student rates will be available.
            </p>

            {/* Registration Categories */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-[#C4B5FD] hover:shadow-lg transition-all">
                <div className="text-center">
                  <div className="w-20 h-20 bg-[#C4B5FD]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-[#C4B5FD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Regular Authors</h3>
                  <p className="text-gray-600 mb-4">For researchers and professionals presenting papers</p>
                  <p className="text-2xl font-bold text-[#C4B5FD]">TBA</p>
                </div>
              </div>

              <div className="bg-white border-2 border-[#C4B5FD] rounded-lg p-8 shadow-lg relative">
                <div className="absolute top-0 right-0 bg-[#C4B5FD] text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-semibold">
                  Discounted
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-[#C4B5FD]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-[#C4B5FD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Student Authors</h3>
                  <p className="text-gray-600 mb-4">For students presenting papers (with valid student ID)</p>
                  <p className="text-2xl font-bold text-[#C4B5FD]">TBA</p>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-[#C4B5FD] hover:shadow-lg transition-all">
                <div className="text-center">
                  <div className="w-20 h-20 bg-[#C4B5FD]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-[#C4B5FD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Participants</h3>
                  <p className="text-gray-600 mb-4">For attendees without paper presentations</p>
                  <p className="text-2xl font-bold text-[#C4B5FD]">TBA</p>
                </div>
              </div>
            </div>

            {/* What's Included */}
            <div className="bg-gray-50 p-8 rounded-lg mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Registration Includes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-[#C4B5FD] mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Access to all conference sessions</span>
                </div>
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-[#C4B5FD] mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Conference materials and proceedings</span>
                </div>
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-[#C4B5FD] mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Coffee breaks and networking sessions</span>
                </div>
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-[#C4B5FD] mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Lunch (both days)</span>
                </div>
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-[#C4B5FD] mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Conference kit and certificate</span>
                </div>
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-[#C4B5FD] mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Keynote presentations</span>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-gradient-to-r from-[#C4B5FD]/10 to-white p-10 rounded-lg border-2 border-[#C4B5FD]/30">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Registration Opening Soon</h3>
              <p className="text-gray-700 mb-6">
                Early bird discounts will be available. Stay tuned for registration portal announcement.
              </p>
              <button className="bg-[#C4B5FD] text-white px-10 py-4 rounded-lg hover:bg-[#B4A5ED] transition-colors font-semibold text-lg shadow-lg">
                Coming Soon
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
