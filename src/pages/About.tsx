import { useScrollAnimation } from '../hooks/useScrollAnimation.ts';

export default function About() {
  const section1 = useScrollAnimation();
  const section2 = useScrollAnimation();
  const section3 = useScrollAnimation();

  const advisoryCommittee = [
  { 
    name: "Prof. H.N. Perera", 
    title: "Head, Department of Transport Management and Logistic Engineering",
    image: "/images/oc/niles.jpg"
  },
  { 
    name: "Prof. Amal S. Kumarage", 
    title: "Emeritus Professor\nUniversity of Moratuwa",
    image: "/images/oc/ac/amal.jpg"
  },
  { 
    name: "Prof. A.A.D.A.J. Perera", 
    title: "Emeritus Professor\nUniversity of Moratuwa",
    image: "/images/oc/ac/asoka.jpg"
  },
  { 
    name: "Prof. P.T.R.S. Sugathadasa", 
    title: "Professor, University of Moratuwa",
    image: "/images/oc/ac/Sugathadasa.jpg"
  },
  { 
    name: "Eng. (Dr.) T. Sivakumar", 
    title: "Senior Lecturer, University of Moratuwa",
    image: "/images/oc/ac/sivakumar.jpg"
  },
  { 
    name: "Dr. L.C.I. Sigera", 
    title: "Senior Lecturer, University of Moratuwa",
    image: "/images/oc/ac/sigera.jpg"
  },
  { 
    name: "Dr. W.W.A.S. Fernando", 
    title: "Senior Lecturer, University of Moratuwa",
    image: "/images/oc/ac/fernando.jpg"
  },
  { 
    name: "Mrs. G.M.B.P. Abeysekara", 
    title: "Senior Lecturer, University of Moratuwa",
    image: "/images/oc/ac/abeysekara.jpg"
  },
  { 
    name: "Dr. B.D. Hettiarachchi", 
    title: "Senior Lecturer, University of Moratuwa",
    image: "/images/oc/ac/biman.jpg"
  },
  { 
    name: "Dr. J.I. Sudusinghe", 
    title: "Senior Lecturer, University of Moratuwa",
    image: "/images/oc/ac/sudusinghe.jpg"
  }
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
            <div className="bg-white/95 backdrop-blur-sm p-6 shadow-lg border-2 border-white hover:shadow-xl transition-all hover:scale-105">
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

            <div className="bg-white/95 backdrop-blur-sm p-6 shadow-lg border-2 border-white hover:shadow-xl transition-all hover:scale-105">
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

            <div className="bg-white/95 backdrop-blur-sm p-6 shadow-lg border-2 border-white hover:shadow-xl transition-all hover:scale-105">
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

            <div className="bg-white/95 backdrop-blur-sm p-6 shadow-lg border-2 border-white hover:shadow-xl transition-all hover:scale-105">
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

            <div className="bg-white/95 backdrop-blur-sm p-6 shadow-lg border-2 border-white hover:shadow-xl transition-all hover:scale-105">
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

            <div className="bg-white/95 backdrop-blur-sm p-6 shadow-lg border-2 border-white hover:shadow-xl transition-all hover:scale-105">
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
    <div className="max-w-6xl mx-auto mb-16">
      <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Conference Chair</h3>
      <div className="flex justify-center">
        <div className="group w-full max-w-md">
          <div className="bg-white overflow-hidden shadow-md">
            <div className="relative overflow-hidden">
              <img 
                src="/images/oc/amila.jpg" 
                alt="Prof. Amila Thibbotuwawa"
                className="w-full h-100 object-cover transition-all duration-500 group-hover:scale-105"
style={{ objectPosition: 'center 20%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#492B6F]/60 to-transparent pointer-events-none" />
            </div>
            <div className="p-6 text-center">
              <h4 className="font-bold text-xl text-[#492B6F] mb-1">Prof. Amila Thibbotuwawa</h4>
              <p className="text-md text-gray-600">University of Moratuwa</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Organizing Committee */}
    <div className="w-screen mb-16 ml-[calc(-50vw+50%)]">
      <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Organizing Committee</h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 w-full px-16 sm:px-20 lg:px-32 mx-auto">
        {/* Member 1 */}
        <div className="group">
          <div className="bg-white overflow-hidden shadow-md">
            <div className="relative overflow-hidden">
              <img 
                src="/images/oc/madhava.jpeg" 
                alt="Dr. Madhava Jayalath"
                className="w-full h-100 object-cover transition-all duration-500 group-hover:scale-105"
style={{ objectPosition: 'center 20%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#492B6F]/60 to-transparent pointer-events-none" />
            </div>
            <div className="p-6 text-center">
              <h5 className="font-bold text-xl text-[#492B6F] mb-2">Dr. Madhava Jayalath</h5>
              <p className="text-md text-gray-600 mb-3">Senior Lecturer, University of Moratuwa</p>
              <div className="flex justify-center gap-4 text-sm">
                <a href="mailto:madhavaj@uom.lk" className="flex items-center gap-1 text-[#492B6F] hover:underline">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                  madhavaj@uom.lk
                </a>
                <a href="tel:+94112123456" className="flex items-center gap-1 text-[#492B6F] hover:underline">
                  <svg className="w-4 h-4" stroke="currentColor" fill="none" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  Phone
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Member 2 */}
        <div className="group">
          <div className="bg-white overflow-hidden shadow-md">
            <div className="relative overflow-hidden">
              <img 
                src="/images/oc/madushan.jpeg" 
                alt="Dr. W. Madushan Fernando"
                className="w-full h-100 object-cover transition-all duration-500 group-hover:scale-105"
style={{ objectPosition: 'center 20%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#492B6F]/60 to-transparent pointer-events-none" />
            </div>
            <div className="p-6 text-center">
              <h5 className="font-bold text-xl text-[#492B6F] mb-2">Dr. W. Madushan Fernando</h5>
              <p className="text-md text-gray-600 mb-3">Senior Lecturer, University of Moratuwa</p>
              <div className="flex justify-center gap-4 text-sm">
                <a href="mailto:madushanf@uom.lk" className="flex items-center gap-1 text-[#492B6F] hover:underline">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                  madushanf@uom.lk
                </a>
                <a href="tel:+94112123456" className="flex items-center gap-1 text-[#492B6F] hover:underline">
                  <svg className="w-4 h-4" stroke="currentColor" fill="none" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  Phone
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Member 3 */}
        <div className="group">
          <div className="bg-white overflow-hidden shadow-md">
            <div className="relative overflow-hidden">
              <img 
                src="/images/oc/ac/kasuni.jpeg" 
                alt="Dr. Kasuni Weerasinghe"
                className="w-full h-100 object-cover transition-all duration-500 group-hover:scale-105"
style={{ objectPosition: 'center 20%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#492B6F]/60 to-transparent pointer-events-none" />
            </div>
            <div className="p-6 text-center">
              <h5 className="font-bold text-xl text-[#492B6F] mb-2">Dr. Kasuni Weerasinghe</h5>
              <p className="text-md text-gray-600 mb-3">Lecturer<br />University of Moratuwa<br /></p>
              <div className="flex justify-center gap-2 text-sm">
                <a href="mailto:kasuniw@uom.lk" className="flex items-center gap-1 text-[#492B6F] hover:underline">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                  kasuniw@uom.lk
                </a>
                <a href="tel:+94112123456" className="flex items-center gap-1 text-[#492B6F] hover:underline">
                  <svg className="w-4 h-4" stroke="currentColor" fill="none" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  Phone
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Member 4 */}
        <div className="group">
          <div className="bg-white overflow-hidden shadow-md">
            <div className="relative overflow-hidden">
              <img 
                src="/images/oc/ac/thiranjaya.jpeg" 
                alt="Dr. Thiranjaya Kandanaarachchi"
                className="w-full h-100 object-cover transition-all duration-500 group-hover:scale-105"
style={{ objectPosition: 'center 20%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#492B6F]/60 to-transparent pointer-events-none" />
            </div>
            <div className="p-6 text-center">
              <h5 className="font-bold text-xl text-[#492B6F] mb-2">Dr. Thiranjaya B. K</h5>
              <p className="text-md text-gray-600 mb-3">Senior Lecturer, University of Moratuwa</p>
              <div className="flex justify-center gap-4 text-sm">
                <a href="mailto:thiranjayak@uom.lk" className="flex items-center gap-1 text-[#492B6F] hover:underline">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                  thiranjayak@uom.lk
                </a>
                <a href="tel:+94112123456" className="flex items-center gap-1 text-[#492B6F] hover:underline">
                  <svg className="w-4 h-4" stroke="currentColor" fill="none" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  Phone
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Advisory Committee */}
    <div className="max-w-6xl mx-auto mb-16">
      <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Advisory Committee</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {advisoryCommittee.map((member, index) => (
          <div key={index} className="group">
            <div className="bg-white overflow-hidden shadow-md">
              <div className="relative overflow-hidden">
                <img 
                  src={member.image || `/images/advisory/member-${index + 1}.jpg`} 
                  alt={member.name}
                  className="w-full h-100 object-cover transition-all duration-500 group-hover:scale-105"
style={{ objectPosition: 'center 20%' }}
                  onError={(e) => {
                    e.currentTarget.src = `https://via.placeholder.com/400x400/4B5563/FFFFFF?text=${member.name.split(' ').pop()}`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#492B6F]/60 to-transparent pointer-events-none" />
              </div>
              <div className="p-6 text-center">
                <h5 className="font-bold text-xl text-[#492B6F] mb-2">{member.name}</h5>
                <p className="text-md text-gray-600 whitespace-pre-line leading-relaxed">
                  {member.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Technical Co-Sponsorship */}
    <div className="max-w-6xl mx-auto">
      <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Technical Co-Sponsorship</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-2 shadow-md flex items-center justify-center min-h-[220px]">
          <img src="/images/STL.png" alt="Society of Transport and Logistics" className="w-40 h-40 md:w-44 md:h-44 object-contain" />
        </div>

        <div className="bg-white shadow-md flex items-center justify-center min-h-[220px]">
          <img src="/images/ieee_tems_uom_logo.jfif" alt="IEEE TEMS" className="w-60 h-60 md:w-64 md:h-64 object-contain" />
        </div>

        <div className="bg-white shadow-md flex items-center justify-center min-h-[220px]">
          <img src="/images/scolo.png" alt="SCOLO" className="w-60 h-60 md:w-64 md:h-64 object-contain" />
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}
