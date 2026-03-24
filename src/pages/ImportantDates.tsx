import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function ImportantDates() {
  const section1 = useScrollAnimation();
  const section2 = useScrollAnimation();

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-[#492B6F]/20 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Important Dates
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            Mark your calendar for these key milestones
          </p>
          <div className="w-24 h-1 bg-[#492B6F]"></div>
        </div>
      </section>

      {/* Timeline Grid Section */}
      <section ref={section1.elementRef} className={`py-16 animate-on-scroll ${section1.isVisible ? 'visible' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Submission Period */}
            <div className="bg-gradient-to-br from-[#492B6F]/10 to-white p-8 rounded-xl shadow-lg border-2 border-[#492B6F]/30 hover:shadow-2xl transition-all hover:scale-105">
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 bg-[#492B6F] rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Paper Submission</h3>
                <p className="text-gray-600 mb-4">Full Research Papers</p>
                <div className="bg-white p-4 rounded-lg border border-[#492B6F]">
                  <p className="text-3xl font-bold text-[#492B6F]">June 1</p>
                  <p className="text-gray-600">2026</p>
                </div>
              </div>
            </div>

            {/* Abstract Submission */}
            <div className="bg-gradient-to-br from-[#492B6F]/10 to-white p-8 rounded-xl shadow-lg border-2 border-[#492B6F]/30 hover:shadow-2xl transition-all hover:scale-105">
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 bg-[#492B6F] rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Abstract Submission</h3>
                <p className="text-gray-600 mb-4">Extended Abstracts</p>
                <div className="bg-white p-4 rounded-lg border border-[#492B6F]">
                  <p className="text-3xl font-bold text-[#492B6F]">June 30</p>
                  <p className="text-gray-600">2026</p>
                </div>
              </div>
            </div>

            {/* Notification */}
            <div className="bg-gradient-to-br from-[#492B6F]/10 to-white p-8 rounded-xl shadow-lg border-2 border-[#492B6F]/30 hover:shadow-2xl transition-all hover:scale-105">
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 bg-[#492B6F] rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Acceptance Notice</h3>
                <p className="text-gray-600 mb-4">Review Results</p>
                <div className="bg-white p-4 rounded-lg border border-[#492B6F]">
                  <p className="text-3xl font-bold text-[#492B6F]">August 10</p>
                  <p className="text-gray-600">2026</p>
                </div>
              </div>
            </div>

            {/* Camera Ready */}
            <div className="bg-gradient-to-br from-[#492B6F]/10 to-white p-8 rounded-xl shadow-lg border-2 border-[#492B6F]/30 hover:shadow-2xl transition-all hover:scale-105">
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 bg-[#492B6F] rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Camera-Ready</h3>
                <p className="text-gray-600 mb-4">Final Paper Submission</p>
                <div className="bg-white p-4 rounded-lg border border-[#492B6F]">
                  <p className="text-3xl font-bold text-[#492B6F]">August 30</p>
                  <p className="text-gray-600">2026</p>
                </div>
              </div>
            </div>

            {/* Registration Opens */}
            <div className="bg-gradient-to-br from-[#492B6F]/10 to-white p-8 rounded-xl shadow-lg border-2 border-[#492B6F]/30 hover:shadow-2xl transition-all hover:scale-105">
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 bg-[#492B6F] rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                  </svg>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Registration Opens</h3>
                <p className="text-gray-600 mb-4">Early Bird Rates</p>
                <div className="bg-white p-4 rounded-lg border border-[#492B6F]">
                  <p className="text-3xl font-bold text-[#492B6F]">September 1</p>
                  <p className="text-gray-600">2026</p>
                </div>
              </div>
            </div>

            {/* Conference - Highlighted */}
            <div className="bg-gradient-to-br from-[#492B6F] to-[#B4A5ED] p-8 rounded-xl shadow-2xl border-2 border-[#492B6F] hover:shadow-3xl transition-all hover:scale-105">
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-[#492B6F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Conference Dates</h3>
                <p className="text-white/90 mb-4">Main Event</p>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-3xl font-bold text-[#492B6F]">November 16-17</p>
                  <p className="text-gray-600">2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Reference Table */}
      <section ref={section2.elementRef} className={`py-16 bg-gray-50 animate-on-scroll ${section2.isVisible ? 'visible' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quick Reference
            </h2>
            <div className="w-24 h-1 bg-[#492B6F] mx-auto"></div>
          </div>

          <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#492B6F] text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">Event</th>
                    <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-gray-900 font-medium">Full Paper Submission Deadline</td>
                    <td className="px-6 py-4 text-gray-700">June 1, 2026</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-gray-900 font-medium">Extended Abstract Submission Deadline</td>
                    <td className="px-6 py-4 text-gray-700">June 30, 2026</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-gray-900 font-medium">Notification of Acceptance</td>
                    <td className="px-6 py-4 text-gray-700">August 10, 2026</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-gray-900 font-medium">Camera-Ready Submission Deadline</td>
                    <td className="px-6 py-4 text-gray-700">August 30, 2026</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-gray-900 font-medium">Registration Opens</td>
                    <td className="px-6 py-4 text-gray-700">September 1, 2026</td>
                  </tr>
                  <tr className="bg-[#492B6F]/10 hover:bg-[#492B6F]/20 transition-colors">
                    <td className="px-6 py-4 text-gray-900 font-bold">Conference Dates</td>
                    <td className="px-6 py-4 text-[#492B6F] font-bold">November 16-17, 2026</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 max-w-3xl mx-auto text-center">
            <div className="bg-gradient-to-r from-[#492B6F]/10 to-white p-8 rounded-xl border-2 border-[#492B6F]">
              <svg className="w-12 h-12 text-[#492B6F] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Important Note</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                All dates and times are subject to change. Please check this page regularly for updates. 
                Subscribe to our mailing list to receive notifications about important deadlines and conference updates.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
