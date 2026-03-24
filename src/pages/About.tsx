import { useScrollAnimation } from '../hooks/useScrollAnimation.ts';

export default function About() {
  const section1 = useScrollAnimation();
  const section2 = useScrollAnimation();
  const section3 = useScrollAnimation();

  const advisoryCommittee = [
    { name: "Prof. H.N. Perera", title: "Head, Department of Transport Management and Logistic Engineering" },
    { name: "Prof. Amal S. Kumarage", title: "Emeritus Professor\nUniversity of Moratuwa" },
    { name: "Prof. A.A.D.A.J. Perera", title: "Professor \nUniversity of Moratuwa" },
    { name: "Prof. P.T.R.S. Sugathadasa", title: "Professor, University of Moratuwa" },
    { name: "Eng. (Dr.) T. Sivakumar", title: "Senior Lecturer, University of Moratuwa" },
    { name: "Dr. L.C.I. Sigera", title: "Senior Lecturer, University of Moratuwa" },
    { name: "Dr. W.W.A.S. Fernando", title: "Senior Lecturer, University of Moratuwa" },
    { name: "Mrs. G.M.B.P. Abeysekara", title: "Senior Lecturer, University of Moratuwa" },
    { name: "Dr. B.D. Hettiarachchi", title: "Senior Lecturer, University of Moratuwa" },
    { name: "Dr. J.I. Sudusinghe", title: "Senior Lecturer, University of Moratuwa" }
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-[#492B6F]/20 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About SCaLE 2026
          </h1>
          <div className="w-24 h-1 bg-[#492B6F]"></div>
        </div>
      </section>

      {/* Full Description */}
      <section ref={section1.elementRef} className={`py-16 animate-on-scroll ${section1.isVisible ? 'visible' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8">
            {/* Logo */}
            <div className="flex-shrink-0 mr-24">
              <img 
                src="/scale-logo-dark.png" 
                alt="SCaLE 2026 Logo" 
                className="w-90 h-auto"
              />
            </div>
            
            {/* Text Content */}
            <div className="flex-1">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The International Conference on Supply Chain and Logistics Engineering (SCaLE 2026) is an international academic forum organized by the University of Moratuwa, Sri Lanka. SCaLE is designed to bring together researchers, industry practitioners, and policymakers to exchange knowledge, present cutting-edge research, and discuss future directions in supply chain and logistics engineering.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                The conference places particular emphasis on contextualizing global theories, models, and technological solutions to the unique economic, infrastructural, and institutional realities of South Asia and other developing and emerging economies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Objectives */}
      <section ref={section2.elementRef} className={`relative py-16 animate-on-scroll ${section2.isVisible ? 'visible' : ''}`}>
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&h=1080&fit=crop" 
            alt="Supply Chain Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-[#492B6F]/90 to-white/95"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Conference Objectives
            </h2>
            <div className="w-24 h-1 bg-[#492B6F] mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-lg border-2 border-white hover:shadow-xl transition-all hover:scale-105">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#492B6F] text-white">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-gray-800 font-medium">Advance supply chain and logistics engineering research</p>
                </div>
              </div>
            </div>

            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-lg border-2 border-white hover:shadow-xl transition-all hover:scale-105">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#492B6F] text-white">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-gray-800 font-medium">Promote engineering-driven and analytical approaches to logistics problems</p>
                </div>
              </div>
            </div>

            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-lg border-2 border-white hover:shadow-xl transition-all hover:scale-105">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#492B6F] text-white">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-gray-800 font-medium">Bridge academia, industry, and public policy</p>
                </div>
              </div>
            </div>

            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-lg border-2 border-white hover:shadow-xl transition-all hover:scale-105">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#492B6F] text-white">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-gray-800 font-medium">Encourage sustainable, resilient, and socially responsible supply chains</p>
                </div>
              </div>
            </div>

            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-lg border-2 border-white hover:shadow-xl transition-all hover:scale-105">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#492B6F] text-white">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-gray-800 font-medium">Foster digitalization, analytics, AI, and decision-support systems</p>
                </div>
              </div>
            </div>

            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-lg border-2 border-white hover:shadow-xl transition-all hover:scale-105">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#492B6F] text-white">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-gray-800 font-medium">Support postgraduate students, early-career researchers, and regional collaboration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Committees */}
      <section ref={section3.elementRef} className={`py-16 animate-on-scroll ${section3.isVisible ? 'visible' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Conference Committees
            </h2>
            <div className="w-24 h-1 bg-[#492B6F] mx-auto"></div>
          </div>

          {/* Conference Chair */}
          <div className="max-w-6xl mx-auto mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Conference Chair</h3>
            <div className="flex justify-center">
              <div className="bg-gradient-to-br from-[#492B6F]/20 to-white p-8 rounded-xl shadow-lg border-2 border-[#492B6F] hover:shadow-xl transition-shadow max-w-md">
                <div className="flex flex-col items-center text-center">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Prof. Amila Thibbotuwawa</h4>
                  <p className="text-gray-600">University of Moratuwa</p>
                </div>
              </div>
            </div>
          </div>

          {/* Organizing Committee */}
          <div className="max-w-6xl mx-auto mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Organizing Committee</h3>
            <div className="flex justify-center gap-6">
              {/* Member 1 - Madushan Madhava Jayalath */}
              <div className="bg-gradient-to-br from-[#492B6F]/20 to-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <h5 className="font-semibold text-gray-900 mb-2">Dr. Madhava Jayalath</h5>
                  <p className="text-sm text-gray-600">Senior Lecturer, University of Moratuwa</p>
                </div>
              </div>

              {/* Member 2 - W. Madushan Fernando */}
              <div className="bg-gradient-to-br from-[#492B6F]/20 to-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <h5 className="font-semibold text-gray-900 mb-2">Dr. W. Madushan Fernando</h5>
                  <p className="text-sm text-gray-600">Senior Lecturer, University of Moratuwa</p>
                </div>
              </div>
            </div>
          </div>

          {/* Advisory Committee */}
          <div className="max-w-6xl mx-auto mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Advisory Committee</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advisoryCommittee.map((member, index) => (
                <div key={index} className="bg-gradient-to-br from-[#492B6F]/20 to-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex flex-col items-center text-center">
                    <h5 className="font-semibold text-gray-900 mb-2">{member.name}</h5>
                    <p className="text-sm text-gray-600 whitespace-pre-line">{member.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Co-Sponsorship */}
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Technical Co-Sponsorship</h3>
            <div className="bg-gradient-to-r from-[#492B6F]/10 to-white p-8 rounded-lg border-2 border-[#492B6F]">
              <div className="flex items-center justify-center md:justify-start">
                <div className="flex-shrink-0">
                  <img src="/images/STL.png" alt="Society of Transport and Logistics" className="w-32 h-32 object-contain" />
                </div>
                <div className="ml-6 text-center md:text-left">
                  <h4 className="text-xl font-bold text-gray-900">Society of Transport and Logistics</h4>
                  <p className="text-gray-600 mt-1">Student Body – Department of Transport Management and Logistics Engineering</p>
                  <p className="text-gray-600">University of Moratuwa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
