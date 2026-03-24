import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Venue() {
  const section1 = useScrollAnimation();
  const section2 = useScrollAnimation();

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
      <section ref={section1.elementRef} className={`py-16 animate-on-scroll ${section1.isVisible ? 'visible' : ''}`}>
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

            {/* Right Column - Map */}
            <div>
              <div className="rounded-lg h-96 overflow-hidden relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.3545789392186!2d79.89707207499658!3d6.8447743931073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25a51d07d56f9%3A0xcb89ef498871ebcf!2sUniversity%20of%20Moratuwa!5e0!3m2!1sen!2slk!4v1709016000000!5m2!1sen!2slk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="University of Moratuwa Location"
                ></iframe>
              </div>
              <a
                href="https://maps.app.goo.gl/zrzR2g8wFY2bgZfZ9"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#492B6F] hover:bg-[#B4A5ED] transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Travel & Accommodation */}
      <section ref={section2.elementRef} className={`py-16 bg-gray-50 animate-on-scroll ${section2.isVisible ? 'visible' : ''}`}>
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
              <h3 className="text-xl font-bold text-gray-900 text-center mb-3">Getting to Sri Lanka</h3>
              <p className="text-gray-600 text-center mb-4">
                <strong>Bandaranaike International Airport (CMB)</strong> is the main gateway to Sri Lanka, located approximately 45 km from the conference venue.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#492B6F] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Direct flights from major Asian, Middle Eastern, and European cities</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#492B6F] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Airport taxis and ride-sharing services available 24/7</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#492B6F] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Travel time to venue: ~1 hour</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#492B6F]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#492B6F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-3">Visa Information</h3>
              <p className="text-gray-600 text-center mb-4">
                Most visitors can obtain an Electronic Travel Authorization (ETA) online before arrival.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#492B6F] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Apply at: <a href="https://www.eta.gov.lk" target="_blank" rel="noopener noreferrer" className="text-[#492B6F] hover:underline">www.eta.gov.lk</a></span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#492B6F] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Processing time: 24-48 hours</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#492B6F] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Visa-on-arrival also available for most nationalities</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Recommended Hotels Section */}
          <div className="mt-16 max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Recommended Accommodation</h3>
            <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              We recommend the following hotels near the conference venue for your convenience. All hotels are within easy reach of the University of Moratuwa.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Mount Lavinia Hotel - Featured */}
              <div className="bg-white rounded-lg shadow-xl overflow-hidden border-2 border-[#492B6F] lg:col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="bg-gradient-to-r from-[#492B6F] to-[#B4A5ED] text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">
                        Featured
                      </div>
                      <div className="flex text-yellow-400">
                        {'★'.repeat(5)}
                      </div>
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-3">Mount Lavinia Hotel</h4>
                    <p className="text-gray-600 mb-4">
                      A historic colonial-era hotel with stunning ocean views, Mount Lavinia Hotel offers luxury accommodation just 6 km from the conference venue. Perfect blend of heritage charm and modern amenities.
                    </p>
                    <div className="space-y-2 text-sm text-gray-700 mb-4">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-[#492B6F] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>100 Hotel Road, Mount Lavinia</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-[#492B6F] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span>6 km from venue (~15 min drive)</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-[#492B6F] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                        </svg>
                        <span>Pool, spa, beachfront, restaurants</span>
                      </div>
                    </div>
                    <a 
                      href="https://www.mountlaviniahotel.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block bg-[#492B6F] text-white px-6 py-2 rounded-lg hover:bg-[#B4A5ED] transition-colors font-medium"
                    >
                      Visit Website
                    </a>
                  </div>
                  <div className="h-64 md:h-auto">
                    <img 
                      src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80" 
                      alt="Mount Lavinia Hotel"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Other Hotels */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80" 
                    alt="Trillium Residence"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex text-yellow-400 mb-2">
                    {'★'.repeat(4)}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Trillium Residence</h4>
                  <p className="text-gray-600 mb-4 text-sm">
                    Modern serviced apartments with excellent facilities, located in Mount Lavinia area with easy access to the conference venue.
                  </p>
                  <div className="space-y-2 text-sm text-gray-700 mb-4">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-[#492B6F] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      <span>Mount Lavinia</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-[#492B6F] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span>7 km from venue</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80" 
                    alt="Berjaya Hotel Colombo"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex text-yellow-400 mb-2">
                    {'★'.repeat(4)}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Berjaya Hotel Colombo</h4>
                  <p className="text-gray-600 mb-4 text-sm">
                    Comfortable city hotel with modern amenities, located in Colombo with convenient access to Moratuwa via the expressway.
                  </p>
                  <div className="space-y-2 text-sm text-gray-700 mb-4">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-[#492B6F] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      <span>Colombo</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-[#492B6F] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span>20 km from venue</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&q=80" 
                    alt="Hotel J Moratuwa"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex text-yellow-400 mb-2">
                    {'★'.repeat(3)}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Hotel J Moratuwa</h4>
                  <p className="text-gray-600 mb-4 text-sm">
                    Budget-friendly option very close to the conference venue, offering clean and comfortable rooms with essential amenities.
                  </p>
                  <div className="space-y-2 text-sm text-gray-700 mb-4">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-[#492B6F] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      <span>Moratuwa</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-[#492B6F] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span>2 km from venue</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80" 
                    alt="Mount Royal Beach Hotel"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex text-yellow-400 mb-2">
                    {'★'.repeat(3)}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Mount Royal Beach Hotel</h4>
                  <p className="text-gray-600 mb-4 text-sm">
                    Beachfront property in Mount Lavinia offering comfortable stays with ocean views and local dining options nearby.
                  </p>
                  <div className="space-y-2 text-sm text-gray-700 mb-4">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-[#492B6F] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      <span>Mount Lavinia</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-[#492B6F] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span>5 km from venue</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Note */}
            <div className="mt-8 bg-[#492B6F]/10 p-6 rounded-lg border-2 border-[#492B6F]">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-[#492B6F] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Booking Information</h4>
                  <p className="text-gray-700 text-sm">
                    We recommend booking your accommodation early, especially during the conference period in November. For special conference rates or assistance with bookings, please contact us at <a href="mailto:scale@uom.lk" className="text-[#492B6F] font-semibold hover:underline">scale@uom.lk</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md border-2 border-[#492B6F]">
              <h3 className="text-xl font-bold text-gray-900 mb-4">About University of Moratuwa</h3>
              <p className="text-gray-700 leading-relaxed">
                The University of Moratuwa is one of Sri Lanka's leading technological universities, located approximately 18 km south of Colombo. The university provides state-of-the-art facilities and is easily accessible from Bandaranaike International Airport and central Colombo.
              </p>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
}
