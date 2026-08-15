import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ExternalLink from '../components/ExternalLink';

export default function CallForPapers() {
  const section1 = useScrollAnimation();
  const section2 = useScrollAnimation();
  const section3 = useScrollAnimation();

  const tracks = [
    {
      number: 1,
      title: "Sustainable & Circular Supply Chains",
      topics: [
        "Circular and closed-loop supply chains",
        "Sustainable sourcing and life-cycle analysis",
        "Environmental, Social, and Governance (ESG) and compliance in supply chains",
        "Climate impact and carbon management"
      ]
    },
    {
      number: 2,
      title: "Data Science, AI & Decision Analytics for Supply Chains and Mobility Systems",
      topics: [
        "Artificial intelligence and predictive analytics",
        "Operations research and optimization",
        "Simulation and digital twins",
        "Decision analytics and statistical modeling"
      ]
    },
    {
      number: 3,
      title: "Smart & Automated Logistics Systems",
      topics: [
        "Manufacturing Systems and Predictive Logistics",
        "Autonomous vehicles, drones, and robotics",
        "Internet of Things (IoT) in logistics",
        "Human–machine interaction"
      ]
    },
    {
      number: 4,
      title: "Transportation Systems & Mobility",
      topics: [
        "Transportation planning, modelling, and traffic engineering",
        "Intelligent Transport Systems (ITS) and smart mobility",
        "Public, freight, and multimodal transportation systems",
        "Sustainable, resilient, and low-carbon transportation"
      ]
    },
    {
      number: 5,
      title: "Maritime Logistics",
      topics: [
        "Port operations and optimization",
        "Maritime supply chains",
        "Port digital systems",
        "Sustainable shipping"
      ]
    },
    {
      number: 6,
      title: "Aviation Logistics",
      topics: [
        "Air cargo and airport logistics",
        "Aviation supply chains",
        "Safety and regulatory systems"
      ]
    },
    {
      number: 7,
      title: "Healthcare, Humanitarian & Food Logistics",
      topics: [
        "Disaster response and relief logistics",
        "Healthcare and pharmaceutical supply chains",
        "Cold chain and food logistics",
        "Logistics in developing economies"
      ]
    },
    {
      number: 8,
      title: "Policy & Future Supply Chains",
      topics: [
        "Supply chain policy and regulation",
        "Trade and logistics governance",
        "Ethics and transparency in supply chains",
        "Future trends and innovations"
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-[#492B6F]/20 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Conference Themes and Tracks
          </h1>
          <div className="w-24 h-1 bg-[#492B6F]"></div>
        </div>
      </section>



      {/* Tracks Section */}
      <section ref={section1.elementRef} className={`py-16 animate-on-scroll ${section1.isVisible ? 'visible' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tracks.map((track) => (
              <div key={track.number} className="bg-white border border-gray-200 shadow-md hover:shadow-lg transition-shadow p-6">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 bg-[#492B6F] text-white font-bold text-xl">
                      {track.number}
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900">{track.title}</h3>
                  </div>
                </div>
                <ul className="space-y-2 ml-16">
                  {track.topics.map((topic, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-[#492B6F] mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates Section - Top Priority */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Important Dates
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
                    <td className="px-6 py-4 text-gray-700">
                      <span className="line-through text-red-600 mr-2">July 15, 2026</span>
                      <span className="line-through text-red-600 mr-2">July 31, 2026</span>
                      August 07, 2026
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-gray-900 font-medium">Extended Abstract Submission Deadline</td>
                    <td className="px-6 py-4 text-gray-700">
                      <span className="line-through text-red-600 mr-2">July 15, 2026</span>
                      <span className="line-through text-red-600 mr-2">August 15, 2026</span>
                      August 31, 2026
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-gray-900 font-medium">Notification of Acceptance for Full Papers</td>
                    <td className="px-6 py-4 text-gray-700">August 31, 2026</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-gray-900 font-medium">Notification of Acceptance for Extended Abstracts</td>
                    <td className="px-6 py-4 text-gray-700">September 20, 2026</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-gray-900 font-medium">Camera-Ready Submission Deadline (Full Papers)</td>
                    <td className="px-6 py-4 text-gray-700">
                      September 7, 2026
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-gray-900 font-medium">Registration Opens</td>
                    <td className="px-6 py-4 text-gray-700">September 1, 2026</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-gray-900 font-medium">Postgraduate Colloquium Submission</td>
                    <td className="px-6 py-4 text-gray-700">September 1, 2026</td>
                  </tr>
                  <tr className="bg-[#492B6F]/10 hover:bg-[#492B6F]/20 transition-colors">
                    <td className="px-6 py-4 text-gray-900 font-bold">Conference Dates</td>
                    <td className="px-6 py-4 text-[#492B6F] font-bold">November 26-27, 2026</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Call for Papers Section */}
      <section ref={section2.elementRef} className={`py-16 bg-gray-50 animate-on-scroll ${section2.isVisible ? 'visible' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Call for Papers
            </h2>
            <div className="w-24 h-1 bg-[#492B6F] mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-12 text-center">
              SCaLE 2026 invites original and unpublished research contributions addressing theoretical, methodological, and applied issues in supply chain and logistics engineering.
            </p>

            {/* Submission Categories */}
            <div className="space-y-8 mb-12">
              <div className="bg-white p-8 border-2 border-[#492B6F] shadow-md">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900">1. Extended Abstracts</h3>
                  <a
                    href="/templates/Extended_Abstract_Template_SCaLE_2026.docx"
                    download
                    className="flex items-center gap-2 bg-[#492B6F] text-white text-sm font-semibold px-4 py-2.5 hover:bg-[#3a2158] transition-colors shadow-sm"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download Template
                  </a>
                </div>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Length:</strong> 3 pages</p>
                  <p><strong>Suitable for:</strong> Early-stage research, industry case studies, and conceptual frameworks</p>
                  <p><strong>Presentation and publication:</strong> Accepted Extended Abstracts will be published in the conference proceedings after acceptance (subject to review)</p>
                </div>
              </div>

              <div className="bg-white p-8 border-2 border-[#492B6F] shadow-md">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900">2. Full Research Papers</h3>
                  <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                    <ExternalLink
                      href="https://cms-resources.apps.public.k8s.springernature.io/springer-cms/rest/v1/content/27841328/data/v1"
                      className="flex items-center justify-center gap-2 bg-[#492B6F] text-white text-sm font-semibold px-4 py-2.5 hover:bg-[#3a2158] transition-colors shadow-sm"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download Template
                    </ExternalLink>
                    <ExternalLink
                      href="https://cms-resources.apps.public.k8s.springernature.io/springer-cms/rest/v1/content/26362278/data/v2"
                      className="flex items-center justify-center gap-2 border border-[#492B6F] text-[#492B6F] text-sm font-semibold px-4 py-2.5 hover:bg-[#492B6F]/5 transition-colors shadow-sm"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      Full Paper Instructions
                    </ExternalLink>
                  </div>
                </div>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Length:</strong> 12–15 pages</p>
                  <p><strong>Suitable for:</strong> Completed research with strong methodological rigor and significant contributions to the field</p>
                  <p>
                    <strong>Publication:</strong> Accepted papers will be published as part of the Book Chapter Series of{' '}
                    <ExternalLink
                      href="https://link.springer.com/series/11220"
                      className="text-[#492B6F] hover:underline font-semibold"
                    >
                      Lecture Notes in Logistics
                    </ExternalLink>{' '}
                    by Springer.
                  </p>
                  <p><strong>Presentation:</strong> Accepted papers will be presented at the conference</p>
                </div>
              </div>
            </div>

            {/* Note for Rejected Full Papers */}
            <div className="bg-[#492B6F]/5 border-l-4 border-[#492B6F] p-5 mb-12 text-sm text-gray-700 flex gap-3">
              <svg className="w-5 h-5 text-[#492B6F] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="leading-relaxed">
                <strong>Note:</strong> Authors of rejected full paper submissions are invited to prepare and submit an extended abstract for consideration in the conference program.
              </p>
            </div>

            {/* Peer Review Policy */}
            <div className="bg-white p-8 border-2 border-gray-200 shadow-md mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Peer Review Policy</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-[#492B6F] text-white">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-700">All submissions undergo double-blind peer review</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-[#492B6F] text-white">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-700">Full papers are reviewed by two to three independent reviewers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publication Section */}
      <section ref={section3.elementRef} className={`py-16 animate-on-scroll ${section3.isVisible ? 'visible' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Publication and Indexing
            </h2>
            <div className="w-24 h-1 bg-[#492B6F] mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Extended Abstracts */}
            <div className="bg-gradient-to-r from-[#492B6F]/10 to-white p-8 border-2 border-[#492B6F] shadow-md">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-[#492B6F] flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Extended Abstracts</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Accepted Extended Abstracts will be published in a conference proceedings with ISSN after acceptance. This publication provides a platform for early-stage research, industry case studies, and conceptual frameworks.
                  </p>
                </div>
              </div>
            </div>

            {/* Conference Proceedings as Springer Book Chapter Series */}
            <div className="bg-gradient-to-r from-[#492B6F]/10 to-white p-8 border-2 border-[#492B6F] shadow-md">
              <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
                <div className="flex items-start flex-1">
                  <div className="flex-shrink-0 hidden sm:block">
                    <div className="w-16 h-16 bg-[#492B6F] flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                  </div>
                  <div className="sm:ml-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center sm:text-left">Conference Proceedings as a Book Chapter</h3>
                    <p className="text-gray-700 leading-relaxed text-center sm:text-left">
                      The conference proceedings are published by Springer as part of the{' '}
                      <ExternalLink
                        href="https://link.springer.com/series/11220"
                        className="text-[#492B6F] hover:underline font-semibold"
                      >
                        "Lecture Notes in Logistics (LNL)"
                      </ExternalLink>{' '}
                      Book Series. These proceedings will feature completed research papers with strong methodological rigour and significant contributions to the field.
                    </p>
                  </div>
                </div>
                <div className="flex-shrink-0 bg-white p-4 border border-gray-200 shadow-sm rounded-lg flex items-center justify-center w-full md:w-auto">
                  <img src="/springer-logo.png" alt="Springer Logo" className="h-20 object-contain mx-auto" />
                </div>
              </div>
            </div>

            {/* Indexing Status */}
            <div className="bg-white p-8 shadow-md border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Indexing Status</h3>
              <p className="text-gray-700 leading-relaxed text-center text-lg">
                Volumes published as part of this series are made available through multiple indexing services, including Scopus.
              </p>
            </div>
            {/* Call to Action */}
            <div className="text-center bg-gradient-to-r from-[#492B6F]/10 to-white p-8 border-2 border-[#492B6F]">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Submit?</h3>
              <p className="text-gray-700 mb-6">Submit your paper through our conference management system</p>
              <ExternalLink
                href="https://scale.uom.lk/conftool/"
                target="_self"
                className="inline-block bg-[#492B6F] text-white px-8 py-3 hover:bg-[#492B6F]/90 transition-colors font-semibold"
              >
                Submit Paper
              </ExternalLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
