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
                <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Abstracts</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Length:</strong> 1 page</p>
                  <p><strong>Suitable for:</strong> Early-stage research, industry case studies, and conceptual frameworks</p>
                  <p><strong>Presentation and publication:</strong> Accepted abstracts will be published in the conference proceedings after acceptance (subject to review)</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg border-2 border-[#492B6F] shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Full Research Papers</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Length:</strong> 12–15 pages (As per the Springer Guidelines)</p>
                  <p><strong>Suitable for:</strong> Completed research with strong methodological rigor</p>
                  <p><strong>Publication:</strong> Accepted papers will be published in the Springer-edited book chapters (subject to review)</p>
                  <p><strong>Presentation:</strong> Accepted papers will be presented at the conference</p>
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
            {/* Abstracts */}
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Abstracts</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Accepted abstracts will be published in a conference proceedings with ISBN after acceptance. This publication provides a platform for early-stage research, industry case studies, and conceptual frameworks.
                  </p>
                </div>
              </div>
            </div>

            {/* Conference Proceedings as Springer Book Chapter Series */}
            <div className="bg-gradient-to-r from-[#492B6F]/10 to-white p-8 rounded-lg border-2 border-[#492B6F] shadow-md">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center p-2">
                    <img src="/springer-logo.png" alt="Springer" className="w-full h-full object-contain" />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Conference Proceedings as Springer Book Chapter Series</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Accepted full papers will be published as chapters in a <strong>Springer-edited book volume</strong>. These proceedings will feature completed research papers with strong methodological rigour and significant contributions to the field.
                  </p>
                </div>
              </div>
            </div>

            {/* Indexing Status */}
            <div className="bg-white p-8 rounded-lg shadow-md border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Indexing Status</h3>
              <p className="text-gray-700 leading-relaxed text-center text-lg">
                We are committed to maintaining high academic standards and pursuing recognition from major indexing databases, including Scopus.
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
