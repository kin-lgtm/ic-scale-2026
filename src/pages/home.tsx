import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        {/* Background Image - Left Half */}
        <div className="absolute inset-y-0 left-0 w-1/2 hidden md:block">
          <img 
            src="/images/TMLE.jpg" 
            alt="Conference Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-white via-white/50 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              International Conference on<br />
              <span className="text-[#492B6F]">Supply Chain and Logistics Engineering</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Advancing Engineering Solutions for Sustainable, Resilient, and Digital Supply Chains
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
              <div className="flex items-center gap-2 text-gray-700">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="font-semibold">16-17 November 2026</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-semibold">University of Moratuwa, Sri Lanka</span>
              </div>
            </div>

            <p className="text-gray-600 max-w-4xl mx-auto mb-10 text-lg leading-relaxed">
              SCaLE 2026 is an international forum dedicated to advancing research and practice in supply chain and logistics engineering, with a strong emphasis on emerging economies and South Asian contexts.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/call-for-papers" 
                className="bg-[#492B6F] text-white px-8 py-4 rounded-lg hover:bg-[#B4A5ED] transition-all transform hover:scale-105 font-semibold text-lg shadow-lg"
              >
                Call for Papers
              </Link>
              <Link 
                to="/important-dates" 
                className="bg-gray-800 text-white px-8 py-4 rounded-lg hover:bg-gray-700 transition-all transform hover:scale-105 font-semibold text-lg shadow-lg"
              >
                Important Dates
              </Link>
              <Link 
                to="/registration" 
                className="border-2 border-[#492B6F] text-[#492B6F] px-8 py-4 rounded-lg hover:bg-[#492B6F] hover:text-white transition-all transform hover:scale-105 font-semibold text-lg"
              >
                Registration
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About SCaLE 2026
            </h2>
            <div className="w-24 h-1 bg-[#492B6F] mx-auto mb-6"></div>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              The International Conference on Supply Chain and Logistics Engineering (SCaLE 2026) is a newly established international conference hosted by the University of Moratuwa, Sri Lanka. The conference aims to promote rigorous, engineering-oriented research that addresses structural, operational, and technological challenges in modern supply chains and logistics systems.
            </p>
            <Link 
              to="/about" 
              className="inline-block bg-[#492B6F] text-white px-8 py-3 rounded-lg hover:bg-[#B4A5ED] transition-colors font-semibold"
            >
              Read More
            </Link>
          </div>
        </div>
      </section>

      {/* Conference Highlights */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md border-2 border-[#492B6F]">
              <div className="w-16 h-16 bg-[#492B6F]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#492B6F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Research Papers</h3>
              <p className="text-gray-600">Submit extended abstracts or full research papers across 8 specialized tracks</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md border-2 border-[#492B6F]">
              <div className="w-16 h-16 bg-[#492B6F]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#492B6F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Publication</h3>
              <p className="text-gray-600">Conference proceedings with ISBN and selected papers for Springer book</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md border-2 border-[#492B6F]">
              <div className="w-16 h-16 bg-[#492B6F]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#492B6F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">International Forum</h3>
              <p className="text-gray-600">Connect with global researchers, industry leaders, and policymakers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Sponsors
            </h2>
            <div className="w-24 h-1 bg-[#492B6F] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are grateful to our sponsors for their generous support in making SCaLE 2026 possible
            </p>
          </div>

          {/* Coming Soon Animation */}
          <div className="flex flex-col items-center justify-center py-12">
            <div className="relative">
              <div className="text-4xl md:text-5xl font-bold text-[#492B6F] animate-pulse">
                Coming Soon
              </div>
              <div className="absolute -inset-2 bg-[#492B6F]/10 rounded-lg blur-xl animate-pulse"></div>
            </div>
            <p className="mt-6 text-gray-600 text-lg">
              We're excited to announce our sponsors soon!
            </p>
            <div className="flex gap-2 mt-6">
              <div className="w-3 h-3 bg-[#492B6F] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-3 h-3 bg-[#492B6F] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-3 h-3 bg-[#492B6F] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
          </div>

          {/* Commented out sponsors - will be activated later */}
          {/* <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16"> */}
            {/* Gold Partner */}
            {/* <div className="text-center">
              <img src="/images/One-JKH.png" alt="John Keells Holdings" className="h-32 w-auto mx-auto mb-3 object-contain" />
              <div className="text-yellow-600 text-sm font-semibold">
                Gold Partner
              </div>
            </div> */}

            {/* Silver Partner 1 */}
            {/* <div className="text-center">
              <img src="/images/MAS.jpeg" alt="MAS Holdings" className="h-32 w-auto mx-auto mb-3 object-contain" />
              <div className="text-gray-500 text-xs font-semibold">
                Silver Partner
              </div>
            </div> */}

            {/* Silver Partner 2 */}
            {/* <div className="text-center">
              <img src="/images/Haleys.png" alt="Hayleys Group" className="h-32 w-auto mx-auto mb-3 object-contain" />
              <div className="text-gray-500 text-xs font-semibold">
                Silver Partner
              </div>
            </div> */}

            {/* Bronze Partner */}
            {/* <div className="text-center">
              <div className="h-32 flex items-center justify-center mb-3">
                <div className="text-xl font-bold text-gray-700">Brandix Lanka Limited</div>
              </div>
              <div className="text-orange-700 text-xs font-semibold">
                Bronze Partner
              </div>
            </div> */}
          {/* </div> */}
        </div>
      </section>
    </div>
  );
}