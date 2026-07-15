import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ExternalLink from '../components/ExternalLink';

interface Category {
  name: string;
  earlyBird: string;
  regular: string;
  description: string;
  icon: 'AcademicCap' | 'UserGroup' | 'Briefcase';
  save: string;
}

interface RegistrationGroup {
  title: string;
  currency: string;
  notes: string;
  categories: Category[];
}

export default function Registration() {
  const section1 = useScrollAnimation();
  const [activeTab, setActiveTab] = useState<'local-no-gala' | 'local-gala' | 'intl-gala'>('local-no-gala');

  const registrationData: Record<'local-no-gala' | 'local-gala' | 'intl-gala', RegistrationGroup> = {
    'local-no-gala': {
      title: "Local Participants (Excluding Gala Dinner)",
      currency: "LKR",
      notes: "Ideal for local researchers and students who wish to attend the scientific sessions only.",
      categories: [
        {
          name: "Undergraduate Student",
          earlyBird: "3,500",
          regular: "5,000",
          description: "Valid undergraduate student identity proof is required during registration.",
          icon: "AcademicCap",
          save: "1,500"
        },
        {
          name: "Postgraduate Student",
          earlyBird: "6,000",
          regular: "7,500",
          description: "Valid postgraduate student identity proof is required during registration.",
          icon: "UserGroup",
          save: "1,500"
        },
        {
          name: "Regular Participant",
          earlyBird: "10,000",
          regular: "12,000",
          description: "For professionals, industry experts, and academic faculty members.",
          icon: "Briefcase",
          save: "2,000"
        }
      ]
    },
    'local-gala': {
      title: "Local Participants (Including Gala Dinner)",
      currency: "LKR",
      notes: "Includes access to all conference sessions, conference materials, and the exclusive conference Gala Dinner.",
      categories: [
        {
          name: "Undergraduate Student",
          earlyBird: "8,500",
          regular: "10,000",
          description: "Valid undergraduate student identity proof is required during registration.",
          icon: "AcademicCap",
          save: "1,500"
        },
        {
          name: "Postgraduate Student",
          earlyBird: "11,000",
          regular: "12,500",
          description: "Valid postgraduate student identity proof is required during registration.",
          icon: "UserGroup",
          save: "1,500"
        },
        {
          name: "Regular Participant",
          earlyBird: "15,000",
          regular: "17,000",
          description: "For professionals, industry experts, and academic faculty members.",
          icon: "Briefcase",
          save: "2,000"
        }
      ]
    },
    'intl-gala': {
      title: "International Participants (Including Gala Dinner)",
      currency: "USD",
      notes: "Includes access to all conference sessions, conference materials, and the exclusive conference Gala Dinner.",
      categories: [
        {
          name: "Student Participant",
          earlyBird: "100",
          regular: "150",
          description: "Valid student identity proof is required during registration.",
          icon: "AcademicCap",
          save: "50"
        },
        {
          name: "Regular Participant",
          earlyBird: "150",
          regular: "200",
          description: "For professionals, researchers, industry experts, and academic faculty members.",
          icon: "Briefcase",
          save: "50"
        }
      ]
    }
  };

  const activeGroup = registrationData[activeTab];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-[#492B6F]/20 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Registration Fees
          </h1>
          <div className="w-24 h-1 bg-[#492B6F]"></div>
        </div>
      </section>

      {/* Registration Content */}
      <section ref={section1.elementRef} className={`py-16 animate-on-scroll ${section1.isVisible ? 'visible' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-12 text-center max-w-3xl mx-auto">
              Registration fee details are now available. Select your participation category below to view the corresponding early bird and regular rates.
            </p>

            {/* Tabs Navigation */}
            <div className="flex flex-col md:flex-row justify-center items-stretch md:items-center gap-2 mb-10 bg-gray-100/80 p-1.5 max-w-3xl mx-auto border border-gray-200/50">
              <button
                onClick={() => setActiveTab('local-no-gala')}
                className={`px-6 py-3 text-sm font-semibold transition-all duration-200 ${activeTab === 'local-no-gala'
                  ? 'bg-[#492B6F] text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200/50'
                  }`}
              >
                Local (Excluding Gala)
              </button>
              <button
                onClick={() => setActiveTab('local-gala')}
                className={`px-6 py-3 text-sm font-semibold transition-all duration-200 ${activeTab === 'local-gala'
                  ? 'bg-[#492B6F] text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200/50'
                  }`}
              >
                Local (Including Gala)
              </button>
              <button
                onClick={() => setActiveTab('intl-gala')}
                className={`px-6 py-3 text-sm font-semibold transition-all duration-200 ${activeTab === 'intl-gala'
                  ? 'bg-[#492B6F] text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200/50'
                  }`}
              >
                International (Including Gala)
              </button>
            </div>

            {/* Active Group Details */}
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                {activeGroup.title}
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {activeGroup.notes}
              </p>
            </div>

            {/* Pricing Cards Grid */}
            <div className={`grid grid-cols-1 ${activeGroup.categories.length === 2 ? 'md:grid-cols-2 max-w-4xl mx-auto' : 'md:grid-cols-3'} gap-8 mb-16`}>
              {activeGroup.categories.map((cat, idx) => (
                <div
                  key={idx}
                  className="bg-white border-2 border-gray-200 hover:border-[#492B6F] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden relative group"
                >
                  <div className="p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span className="p-3 bg-[#492B6F]/10 text-[#492B6F] group-hover:bg-[#492B6F] group-hover:text-white transition-colors duration-300">
                          {cat.icon === "AcademicCap" && (
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v7" />
                            </svg>
                          )}
                          {cat.icon === "UserGroup" && (
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                          )}
                          {cat.icon === "Briefcase" && (
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4.674 12h4.652a2 2 0 002-2v-4.674a2 2 0 00-2-2H3.016a2 2 0 00-2 2v4.674a2 2 0 002 2h4.652M9 20h6" />
                            </svg>
                          )}
                        </span>

                        <span className="text-xs font-bold uppercase px-3 py-1 bg-green-100 text-green-800">
                          Save {activeGroup.currency} {cat.save}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-2">{cat.name}</h3>
                      <p className="text-sm text-gray-600 mb-6 min-h-[40px]">{cat.description}</p>

                      {/* Pricing Details */}
                      <div className="grid grid-cols-2 gap-4 border-gray-100 pt-6">
                        <div className="bg-[#492B6F]/5 p-3.5 border border-[#492B6F]/10">
                          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1">Early Bird</span>
                          <span className="text-lg font-extrabold text-[#492B6F]">
                            {activeGroup.currency} {cat.earlyBird}
                          </span>
                        </div>
                        <div className="bg-gray-50 p-3.5 border border-gray-200/60">
                          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1">Regular</span>
                          <span className="text-lg font-bold text-gray-800">
                            {activeGroup.currency} {cat.regular}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary Table for current selection */}
            {/* <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden mb-16">
              <div className="px-6 py-4 bg-[#492B6F]/5 border-b border-gray-200 flex justify-between items-center">
                <h4 className="font-bold text-gray-800 text-sm md:text-base">Summary Table: {activeGroup.title}</h4>
                <span className="text-xs font-semibold text-[#492B6F] bg-[#492B6F]/10 px-2.5 py-1 rounded-md">Currency: {activeGroup.currency}</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="px-6 py-4 text-xs font-bold uppercase text-gray-500 tracking-wider">Registration Category</th>
                      <th className="px-6 py-4 text-xs font-bold uppercase text-gray-500 tracking-wider text-right">Early Bird ({activeGroup.currency})</th>
                      <th className="px-6 py-4 text-xs font-bold uppercase text-gray-500 tracking-wider text-right">Regular ({activeGroup.currency})</th>
                      <th className="px-6 py-4 text-xs font-bold uppercase text-gray-500 tracking-wider text-right">Savings</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {activeGroup.categories.map((cat, idx) => (
                      <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                        <td className="px-6 py-4 font-semibold text-gray-800 text-sm md:text-base">{cat.name}</td>
                        <td className="px-6 py-4 text-right font-bold text-[#492B6F] text-sm md:text-base">{cat.earlyBird}</td>
                        <td className="px-6 py-4 text-right font-medium text-gray-700 text-sm md:text-base">{cat.regular}</td>
                        <td className="px-6 py-4 text-right font-semibold text-green-600 text-sm md:text-base">Save {cat.save}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div> */}

            {/* What's Included */}
            <div className="bg-gray-50 p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Registration Includes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-[#492B6F] mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Access to all conference sessions</span>
                </div>
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-[#492B6F] mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Conference materials and proceedings</span>
                </div>

                <div className="flex items-start">
                  <svg className="h-6 w-6 text-[#492B6F] mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Coffee breaks and networking sessions</span>
                </div>
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-[#492B6F] mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Lunch (both days)</span>
                </div>
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-[#492B6F] mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Conference kit and certificate</span>
                </div>
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-[#492B6F] mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Keynote presentations</span>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-gradient-to-r from-[#492B6F]/10 to-white p-10 border-2 border-[#492B6F]/30">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Register?</h3>
              <p className="text-gray-700 mb-6">
                Click the button below to complete your registration through our conference management system.
              </p>
              <ExternalLink
                href="https://scale.uom.lk/conftool/"
                target="_self"
                className="inline-block bg-[#492B6F] text-white px-10 py-4 hover:bg-[#492B6F]/90 transition-colors font-semibold text-lg shadow-lg"
              >
                Register Now
              </ExternalLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
