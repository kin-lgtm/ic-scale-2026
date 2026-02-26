import amilaImage from '../assets/amila.jpg';

export default function About() {
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
      <section className="py-16">
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Conference Objectives
            </h2>
            <div className="w-24 h-1 bg-[#492B6F] mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-[#492B6F]">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  {/* <div className="flex items-center justify-center h-10 w-10 rounded-md bg-[#492B6F] text-white">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div> */}
                </div>
                <div className="ml-4">
                  <p className="text-gray-700">Advance supply chain and logistics engineering research</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-[#492B6F]">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  {/* <div className="flex items-center justify-center h-10 w-10 rounded-md bg-[#492B6F] text-white">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div> */}
                </div>
                <div className="ml-4">
                  <p className="text-gray-700">Promote engineering-driven and analytical approaches to logistics problems</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-[#492B6F]">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  {/* <div className="flex items-center justify-center h-10 w-10 rounded-md bg-[#492B6F] text-white">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div> */}
                </div>
                <div className="ml-4">
                  <p className="text-gray-700">Bridge academia, industry, and public policy</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-[#492B6F]">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  {/* <div className="flex items-center justify-center h-10 w-10 rounded-md bg-[#492B6F] text-white">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div> */}
                </div>
                <div className="ml-4">
                  <p className="text-gray-700">Encourage sustainable, resilient, and socially responsible supply chains</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-[#492B6F]">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  {/* <div className="flex items-center justify-center h-10 w-10 rounded-md bg-[#492B6F] text-white">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div> */}
                </div>
                <div className="ml-4">
                  <p className="text-gray-700">Foster digitalization, analytics, AI, and decision-support systems</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-[#492B6F]">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  {/* <div className="flex items-center justify-center h-10 w-10 rounded-md bg-[#492B6F] text-white">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div> */}
                </div>
                <div className="ml-4">
                  <p className="text-gray-700">Support postgraduate students, early-career researchers, and regional collaboration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Committees */}
      <section className="py-16">
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
              <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-[#492B6F] hover:shadow-xl transition-shadow max-w-md">
                <div className="flex flex-col items-center text-center">
                  <div className="w-40 h-40 rounded-full overflow-hidden mb-3 border-2 border-[#492B6F]/30">
                    <img 
                      src={amilaImage} 
                      alt="Prof. Amila Thibbotuwawa" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Prof. Amila Thibbotuwawa</h4>
                  <p className="text-gray-600">University of Moratuwa</p>
                </div>
              </div>
            </div>
          </div>

          {/* Organizing Committee */}
          <div className="max-w-6xl mx-auto mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Organizing Committee</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {/* Member 1 - H. Niles Perera */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <div className="w-40 h-40 rounded-full overflow-hidden mb-3 border-2 border-[#492B6F]/30">
                    <img 
                      src="/images/oc/niles.jpg" 
                      alt="Professor H. Niles Perera" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h5 className="font-semibold text-gray-900 mb-1">Professor H. Niles Perera</h5>
                  <p className="text-sm text-gray-600">Senior Lecturer, University of Moratuwa</p>
                </div>
              </div>

              {/* Member 2 - Jayani Ishara Sudusinghe */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <div className="w-40 h-40 rounded-full overflow-hidden mb-3 border-2 border-[#492B6F]/30">
                    <img 
                      src="/images/oc/Jayani.jpg" 
                      alt="Dr. Jayani Ishara Sudusinghe" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h5 className="font-semibold text-gray-900 mb-1">Dr. Jayani Ishara Sudusinghe</h5>
                  <p className="text-sm text-gray-600">Senior Lecturer, University of Moratuwa</p>
                </div>
              </div>

              {/* Member 3 - Biman Darshana Hettiarachchi */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <div className="w-40 h-40 rounded-full overflow-hidden mb-3 border-2 border-[#492B6F]/30">
                    <img 
                      src="/images/oc/Biman.jpg" 
                      alt="Dr. Biman Darshana Hettiarachchi" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h5 className="font-semibold text-gray-900 mb-1">Dr. Biman Darshana Hettiarachchi</h5>
                  <p className="text-sm text-gray-600">Senior Lecturer, University of Moratuwa</p>
                </div>
              </div>

              {/* Member 4 - Madushan Madhava Jayalath */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <div className="w-40 h-40 rounded-full overflow-hidden mb-3 border-2 border-[#492B6F]/30">
                    <img 
                      src="/images/oc/Madushan Jayalath.jpeg" 
                      alt="Dr. Madushan Madhava Jayalath" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h5 className="font-semibold text-gray-900 mb-1">Dr. Madushan Madhava Jayalath</h5>
                  <p className="text-sm text-gray-600">Senior Lecturer, University of Moratuwa</p>
                </div>
              </div>

              {/* Member 5 - W. Madushan Fernando */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <div className="w-40 h-40 rounded-full overflow-hidden mb-3 border-2 border-[#492B6F]/30">
                    <img 
                      src="/images/oc/Madushan Fernando.jpeg" 
                      alt="Dr. W. Madushan Fernando" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h5 className="font-semibold text-gray-900 mb-1">Dr. W. Madushan Fernando</h5>
                  <p className="text-sm text-gray-600">Senior Lecturer, University of Moratuwa</p>
                </div>
              </div>
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
