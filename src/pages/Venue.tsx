export default function Venue() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-[#492B6F]/20 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Venue and Travel
          </h1>
          <div className="w-24 h-1 bg-[#492B6F]"></div>
        </div>
      </section>

      {/* Venue Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Venue Details */}
            <div>
              <div className="bg-gradient-to-br from-[#492B6F]/10 to-white p-8 rounded-lg border-2 border-[#492B6F] mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Conference Venue</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-[#492B6F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-lg font-semibold text-gray-900">University of Moratuwa</p>
                      <p className="text-gray-600">Katubedda, Moratuwa, Sri Lanka</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-[#492B6F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-lg font-semibold text-gray-900">Conference Dates</p>
                      <p className="text-gray-600">16–17 November 2026</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="prose text-gray-700">
                <p className="text-lg leading-relaxed">
                  The conference will be held within the premises of the University of Moratuwa, offering modern conference facilities and easy access from Colombo.
                </p>
              </div>
            </div>

            {/* Right Column - Map Placeholder */}
            <div>
              <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center border-2 border-gray-300">
                <div className="text-center">
                  <svg className="h-24 w-24 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-gray-500 text-lg font-medium">Map Location</p>
                  <p className="text-gray-400 text-sm mt-2">University of Moratuwa, Sri Lanka</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Travel & Accommodation */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Travel & Accommodation
            </h2>
            <div className="w-24 h-1 bg-[#492B6F] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#492B6F]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#492B6F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-3">Travel Information</h3>
              <p className="text-gray-600 text-center">
                Travel and visa information will be provided for international participants
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#492B6F]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#492B6F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-3">Accommodation</h3>
              <p className="text-gray-600 text-center">
                Accommodation details and recommendations will be announced
              </p>
            </div>
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md border-2 border-[#492B6F]">
              <h3 className="text-xl font-bold text-gray-900 mb-4">About University of Moratuwa</h3>
              <p className="text-gray-700 leading-relaxed">
                The University of Moratuwa is one of Sri Lanka's leading technological universities, located approximately 18 km south of Colombo. The university provides state-of-the-art facilities and is easily accessible from Bandaranaike International Airport and central Colombo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
