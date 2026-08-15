import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Home() {
  const section1 = useScrollAnimation();
  // const section2 = useScrollAnimation();
  const section3 = useScrollAnimation();
  const sectionSpringer = useScrollAnimation();

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
            <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-4xl mx-auto">
              Advancing Engineering Solutions for Sustainable, Resilient, and Digital Supply Chains
            </p>
            <div className="w-80 h-1 bg-[#492B6F] mx-auto mb-4"></div>

            {/* <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
              <div className="flex items-center gap-2 text-gray-700">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">26-27 November 2026</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">University of Moratuwa, Sri Lanka</span>
              </div>
            </div> */}

            <p className="text-gray-600 max-w-4xl mx-auto mb-10 text-lg leading-relaxed">
              SCaLE 2026 is an international forum dedicated to advancing research and practice in supply chain and logistics engineering, with a strong emphasis on emerging economies and South Asian contexts.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/call-for-papers"
                className="bg-[#492B6F] text-white px-8 py-4 hover:bg-[#492B6F]/90 transition-all transform hover:scale-105 font-semibold text-lg shadow-lg"
              >
                Call for Papers
              </Link>
              <Link
                to="/important-dates"
                className="bg-gray-800 text-white px-8 py-4 hover:bg-gray-700 transition-all transform hover:scale-105 font-semibold text-lg shadow-lg"
              >
                Important Dates
              </Link>
              <Link
                to="/registration"
                className="border-2 border-[#492B6F] text-[#492B6F] px-8 py-4 hover:bg-[#492B6F] hover:text-white transition-all transform hover:scale-105 font-semibold text-lg"
              >
                Registration
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section ref={section1.elementRef} className={`py-16 bg-gray-50 animate-on-scroll ${section1.isVisible ? 'visible' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* About Text Column */}
            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About SCaLE 2026
              </h2>
              <div className="w-24 h-1 bg-[#492B6F] mb-6"></div>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                The International Conference on Supply Chain and Logistics Engineering (SCaLE 2026) is a newly established international conference hosted by the University of Moratuwa, Sri Lanka. The conference aims to promote rigorous, engineering-oriented research that addresses structural, operational, and technological challenges in modern supply chains and logistics systems.
              </p>
              <Link
                to="/about"
                className="inline-block bg-[#492B6F] text-white px-8 py-3.5 hover:bg-[#492B6F]/90 transition-all font-semibold shadow-md"
              >
                Read More
              </Link>
            </div>

            {/* Highlight Box Column */}
            <div className="lg:col-span-5">
              <div className="bg-white p-8 border-4 border-[#492B6F] shadow-lg">
                <h3 className="text-2xl md:text-3xl font-bold text-[#492B6F] mb-4 leading-tight">
                  For the First Time in Asia
                </h3>
                <p className="text-gray-700 font-normal text-md mb-4 leading-relaxed">
                  A Springer Nature-backed conference with accepted papers published in the prestigious <span className="font-semibold text-red-800">Springer Lecture Notes in Logistics (LNL)</span> series, indexed in Scopus.
                </p>
                <p className="bg-[#492B6F] p-4 text-white text-sm leading-relaxed justify-center text-center">
                  Ensuring exceptional international visibility and scholarly recognition through SCaLE 2026.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Springer Publication Highlight Section */}
      <section ref={sectionSpringer.elementRef} className={`py-16 bg-[#492B6F] border-y border-gray-100 animate-on-scroll ${sectionSpringer.isVisible ? 'visible' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 md:p-12 shadow-md flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-shrink-0 bg-white p-6 rounded-lg shadow-md border border-gray-100 flex items-center justify-center">
              <img
                src="/springer-logo.png"
                alt="Springer Logo"
                className="h-40 object-contain"
              />
            </div>
            <div className="flex-1">
              <span className="bg-[#492B6F] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 mb-3 inline-block">
                Prestigious Publication Partner
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Springer Lecture Notes in Logistics
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                We are proud to highlight that accepted and presented full research papers at SCaLE 2026 will be published by <span className="font-semibold text-[#492B6F]">Springer</span> as part of the prestigious <span className="font-semibold text-[#492B6F]">"Lecture Notes in Logistics (LNL)"</span>.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                This partnership reflects the rigorous academic standards of the conference. Volumes published in this series are indexed by major citation databases, including <span className="font-semibold text-gray-900">Scopus</span>, ensuring excellent visibility for your research.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2 bg-white px-4 h-12 border border-gray-200 shadow-sm text-sm font-medium text-gray-800">
                  <img src="/scopus-logo.png" alt="Scopus Logo" className="h-8 w-auto object-contain" />
                  <span className="bg-blue-900 text-white px-2 py-0.5 text-md font-semibold">Indexed</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 h-12 border border-gray-200 shadow-sm text-sm font-medium text-gray-800">
                  <span className="w-2.5 h-2.5 bg-[#492B6F]"></span>
                  Peer Reviewed
                </div>
                <Link
                  to="/call-for-papers"
                  className="bg-[#492B6F] text-white px-4 h-12 font-bold inline-flex items-center gap-1 text-sm ml-auto md:ml-0"
                >
                  View Submission Guidelines
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Highlights */}
      {/* <section ref={section2.elementRef} className={`py-16 animate-on-scroll ${section2.isVisible ? 'visible' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white shadow-md border-2 border-[#492B6F] flex flex-col hover:shadow-lg transition-all duration-300 h-full">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#492B6F]/10 shadow-sm flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=200&q=80"
                  alt="Research Papers"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Research Papers</h3>
              <p className="text-gray-600">Submit Extended Abstracts or full research papers across 8 specialized tracks</p>
            </div>

            <div className="text-center p-6 bg-white shadow-md border-2 border-[#492B6F] flex flex-col hover:shadow-lg transition-all duration-300 h-full">
              <div className="h-20 flex items-center justify-center mx-auto mb-4 flex-shrink-0">
                <img
                  src="/springer-logo.png"
                  alt="Springer Logo"
                  className="h-30 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Publication</h3>
              <p className="text-gray-600">Extended Abstracts will be published with an ISSN and selected Full Papers will be published in Springer's <span className="font-semibold text-[#492B6F]">"Lecture Notes in Logistics"</span> book chapter series.</p>
            </div>

            <div className="text-center p-6 bg-white shadow-md border-2 border-[#492B6F] flex flex-col hover:shadow-lg transition-all duration-300 h-full">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#492B6F]/10 shadow-sm flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=200&q=80"
                  alt="International Forum"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">International Forum</h3>
              <p className="text-gray-600">Connect with global researchers, industry leaders, and policymakers</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Sponsors Section */}
      <section ref={section3.elementRef} className={`py-16 bg-gray-50 animate-on-scroll ${section3.isVisible ? 'visible' : ''}`}>
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

          {/* Confirmed Sponsors */}
          <div className="flex flex-wrap justify-center items-center gap-12 py-8">
            <div className="flex items-center gap-4 bg-white px-8 py-6 shadow-md border border-gray-100">
              <img
                src="/uom-logo.png"
                alt="University of Moratuwa"
                className="h-20 w-20 object-contain flex-shrink-0"
              />
              <div className="text-left">
                <div className="text-2xl font-bold text-[#8B1A2B] leading-tight">
                  University of Moratuwa
                </div>
                <div className="text-base text-gray-700">
                  Faculty of Graduate Studies
                </div>
              </div>
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