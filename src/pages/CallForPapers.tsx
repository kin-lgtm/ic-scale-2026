export default function CallForPapers() {
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
      title: "Systems Engineering & Decision Methods in Logistics",
      topics: [
        "Operations research, modeling and optimization",
        "Simulation and system dynamics",
        "Decision support systems and multi criteria analysis",
        "Performance analysis and optimization"
      ]
    },
    {
      number: 3,
      title: "Smart & Automated Logistics Systems",
      topics: [
        "Artificial intelligence and predictive logistics",
        "Autonomous vehicles, drones, and robotics",
        "Internet of Things (IoT) in logistics",
        "Human–machine interaction"
      ]
    },
    {
      number: 4,
      title: "Smart Mobility & Transport Planning",
      topics: [
        "Intelligent transport systems",
        "Urban freight and transport networks",
        "Multimodal transport systems",
        "Sustainable transport planning"
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
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tracks.map((track) => (
              <div key={track.number} className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#492B6F] text-white font-bold text-xl">
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

      {/* Call for Papers Section */}
      <section className="py-16 bg-gray-50">
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
              <div className="bg-white p-8 rounded-lg border-2 border-[#492B6F] shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Extended Abstracts</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Length:</strong> 2–4 pages</p>
                  <p><strong>Suitable for:</strong> Early-stage research, industry case studies, and conceptual frameworks</p>
                  <p><strong>Presentation:</strong> Accepted abstracts will be presented at the conference</p>
                  <p><strong>Publication:</strong> Published in the SCaLE 2026 Abstract Book (ISBN)</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg border-2 border-[#492B6F] shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Full Research Papers</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Length:</strong> 8–12 pages</p>
                  <p><strong>Suitable for:</strong> Completed research with strong methodological rigor</p>
                  <p><strong>Publication:</strong> Accepted papers will be published in the SCaLE 2026 Conference Proceedings (ISBN)</p>
                  <p><strong>Special Opportunity:</strong> Selected papers will be invited for Springer-edited book chapters (subject to additional review)</p>
                </div>
              </div>
            </div>

            {/* Peer Review Policy */}
            <div className="bg-white p-8 rounded-lg border-2 border-gray-200 shadow-md mb-12">
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
                    <p className="text-gray-700">Extended abstracts are reviewed for relevance, originality, and clarity</p>
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
                    <p className="text-gray-700">Full papers are reviewed by at least two independent reviewers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publication Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Publication and Indexing
            </h2>
            <div className="w-24 h-1 bg-[#492B6F] mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Extended Abstracts */}
            <div className="bg-gradient-to-r from-[#492B6F]/10 to-white p-8 rounded-lg border-2 border-[#492B6F] shadow-md">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-[#492B6F] rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Abstract Book</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Extended abstracts will be published in the official <strong>SCaLE 2026 Abstract Book</strong> with ISBN. This publication provides a platform for early-stage research, industry case studies, and conceptual frameworks.
                  </p>
                </div>
              </div>
            </div>

            {/* Conference Proceedings */}
            <div className="bg-gradient-to-r from-[#492B6F]/10 to-white p-8 rounded-lg border-2 border-[#492B6F] shadow-md">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-[#492B6F] rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Conference Proceedings</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Full papers will be published in the <strong>SCaLE 2026 Conference Proceedings</strong> with ISBN. These proceedings will feature completed research papers with strong methodological rigor and significant contributions to the field.
                  </p>
                </div>
              </div>
            </div>

            {/* Springer Book Chapter */}
            <div className="bg-gradient-to-r from-[#492B6F]/10 to-white p-8 rounded-lg border-2 border-[#492B6F] shadow-md">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-[#492B6F] rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Springer Book Chapter</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Selected high-quality papers will be invited for publication as chapters in a <strong>Springer-edited book volume</strong>. These papers will undergo additional review to ensure the highest academic standards.
                  </p>
                  <div className="mt-4 bg-white p-4 rounded-md border border-[#492B6F]/30">
                    <p className="text-sm text-gray-600">
                      <strong>Note:</strong> Invitation will be based on review scores, research quality, and relevance to the book theme.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Indexing Status */}
            <div className="bg-white p-8 rounded-lg shadow-md border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Indexing Status</h3>
              <p className="text-gray-700 leading-relaxed text-center text-lg">
                SCaLE is a newly established conference working towards indexing eligibility. We are committed to maintaining high academic standards and pursuing recognition from major indexing databases in future editions.
              </p>
            </div>
            {/* Call to Action */}
            <div className="text-center bg-gradient-to-r from-[#492B6F]/10 to-white p-8 rounded-lg border-2 border-[#492B6F]">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Submit?</h3>
              <p className="text-gray-700 mb-6">Submit your paper through our conference management system</p>
              <a 
                href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#492B6F] text-white px-8 py-3 rounded-lg hover:bg-[#B4A5ED] transition-colors font-semibold"
              >
                Submit Paper
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
