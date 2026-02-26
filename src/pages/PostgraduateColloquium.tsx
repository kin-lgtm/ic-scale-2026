export default function PostgraduateColloquium() {
  return (
    <div className="bg-white">
      {/* Hero Section / Banner */}
      <section className="relative bg-gradient-to-r from-[#492B6F]/30 via-[#492B6F]/20 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Postgraduate Colloquium 2026
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Submit your research abstract and get mentorship from experts
            </p>
            
          </div>
        </div>
      </section>

      {/* Event Overview Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Event Overview
            </h2>
            <div className="w-24 h-1 bg-[#492B6F] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Column - Description */}
            <div className="space-y-8">
              {/* Objective */}
              <div className="bg-gradient-to-r from-[#492B6F]/10 to-white p-6 rounded-lg border-2 border-[#492B6F]">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Objective</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#492B6F] mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Provide a platform for postgraduate students to submit research abstracts</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#492B6F] mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Offer guidance and mentorship from experienced researchers</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#492B6F] mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Encourage networking and academic discussions in a supportive environment</span>
                  </li>
                </ul>
              </div>

              {/* Who Should Apply */}
              <div className="bg-white p-6 rounded-lg border-2 border-gray-200 shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Who Should Apply</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#492B6F] mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span>Postgraduate students from all disciplines, both local and international universities</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Key Details */}
            <div className="space-y-8">
              {/* Key Details Card */}
              <div className="bg-gradient-to-br from-[#492B6F] to-[#B4A5ED] p-8 rounded-lg shadow-xl text-white">
                <h3 className="text-2xl font-bold mb-6">Key Details</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="h-6 w-6 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold">Location:</p>
                      <p>Department of Transport and Logistics Engineering, University of Moratuwa</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-6 w-6 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-semibold">Dates:</p>
                      <p>April 29 – May 2, 2026</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-6 w-6 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold">Application Deadline:</p>
                      <p>April 1, 2026</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-6 w-6 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold">Notification of Acceptance:</p>
                      <p>April 10, 2026</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Submission Guidelines Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Submission Guidelines
            </h2>
            <div className="w-24 h-1 bg-[#492B6F] mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#492B6F]">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#492B6F] text-white font-bold text-xl">
                    1
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-gray-700">
                    Submit a research abstract <strong>(max 500 words)</strong> including objectives, methodology, and expected outcomes
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#492B6F]">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#492B6F] text-white font-bold text-xl">
                    2
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-gray-700">
                    Abstracts must be <strong>original and unpublished</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#492B6F]">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#492B6F] text-white font-bold text-xl">
                    3
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-gray-700">
                    Selected participants will be <strong>assigned a mentor</strong> from the organizing committee
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#492B6F]">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#492B6F] text-white font-bold text-xl">
                    4
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-gray-700">
                    Presentations will include <strong>interactive discussions and feedback sessions</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Evaluation Process Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Evaluation Process
            </h2>
            <div className="w-24 h-1 bg-[#492B6F] mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#492B6F] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Review</h3>
                <p className="text-gray-700">
                  Abstracts reviewed by a panel of academic experts
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#492B6F] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Discussion Sessions</h3>
                <p className="text-gray-700">
                  Discussant-led sessions for in-depth discussions of accepted abstracts
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#492B6F] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Mentorship</h3>
                <p className="text-gray-700">
                  Receive constructive feedback and guidance from mentors and attendees
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action / Submission Section */}
      <section id="submission" className="py-16 bg-gradient-to-r from-[#492B6F]/20 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Present Your Research?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Submit your abstract today and join a community of emerging researchers. Get expert feedback and advance your academic career.
            </p>
            <div className="bg-white p-8 rounded-lg shadow-xl border-2 border-[#492B6F]">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Submit Your Abstract Now</h3>
              <p className="text-gray-700 mb-6">
                Click the button below to access our submission portal
              </p>
              <a 
                href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#492B6F] text-white px-10 py-4 rounded-lg hover:bg-[#B4A5ED] transition-colors font-semibold text-lg shadow-lg"
              >
                Submit Abstract
              </a>
              <p className="text-sm text-gray-500 mt-4">
                Deadline: April 1, 2026
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
