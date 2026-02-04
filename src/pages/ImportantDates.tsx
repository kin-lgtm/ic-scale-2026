export default function ImportantDates() {
  const dates = [
    {
      event: "Extended Abstract Submission Deadline",
      date: "To be announced",
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      event: "Full Paper Submission Deadline",
      date: "To be announced",
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      event: "Notification of Acceptance",
      date: "To be announced",
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      event: "Camera-Ready Submission Deadline",
      date: "To be announced",
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
        </svg>
      )
    },
    {
      event: "Conference Dates",
      date: "16–17 November 2026",
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      highlight: true
    }
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-[#C4B5FD]/20 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Important Dates
          </h1>
          <div className="w-24 h-1 bg-[#C4B5FD]"></div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#C4B5FD]/30 hidden md:block"></div>

            <div className="space-y-8">
              {dates.map((item, index) => (
                <div key={index} className={`relative flex items-start ${item.highlight ? 'bg-[#C4B5FD]/10 p-6 rounded-lg -ml-6 -mr-6' : ''}`}>
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center ${item.highlight ? 'bg-[#C4B5FD] text-white' : 'bg-gray-200 text-[#C4B5FD]'} relative z-10`}>
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div className="ml-6 flex-grow">
                    <h3 className={`text-xl font-bold mb-2 ${item.highlight ? 'text-gray-900' : 'text-gray-800'}`}>
                      {item.event}
                    </h3>
                    <p className={`text-lg ${item.highlight ? 'text-[#C4B5FD] font-semibold' : 'text-gray-600'}`}>
                      {item.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Note */}
          <div className="mt-12 bg-gray-50 p-6 rounded-lg border-l-4 border-[#C4B5FD]">
            <p className="text-gray-700">
              <strong>Note:</strong> Specific dates for abstract and paper submissions will be announced soon. Please check back regularly for updates or subscribe to our mailing list for notifications.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
