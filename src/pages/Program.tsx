import amilaImage from '../assets/amila.jpg';
import nilesImage from '../assets/niles.jpg';

export default function Program() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-[#492B6F]/20 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Keynote Speakers
          </h1>
          <div className="w-24 h-1 bg-[#492B6F]"></div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-lg text-gray-700 leading-relaxed">
              SCaLE 2026 will feature distinguished keynote speakers from academia, industry, and policy-making bodies.
            </p>
          </div>

          {/* Proposed Keynote Themes */}
          <div className="max-w-5xl mx-auto">
            
            {/* Keynote Speakers */}
            <div className="space-y-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Keynote Speakers</h2>
              
              {/* Speaker 1 - Amila */}
              <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-1 bg-gradient-to-br from-[#492B6F]/20 to-white p-8 flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-[#492B6F]/30 rounded-full blur-2xl"></div>
                      <img 
                        src={amilaImage} 
                        alt="Prof. Amila Thibbotuwawa" 
                        className="relative w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-2 p-8">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Prof. Amila Thibbotuwawa</h3>
                      <p className="text-lg text-[#492B6F] font-semibold mb-1">Conference Chair</p>
                      <p className="text-gray-600">University of Moratuwa, Sri Lanka</p>
                    </div>
                    <div className="prose prose-gray max-w-none">
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Professor Amila Thibbotuwawa serves as the Conference Chair for SCaLE 2026. With extensive expertise in supply chain and logistics engineering, Prof. Thibbotuwawa has been instrumental in advancing research and education in the field, particularly in the context of emerging economies.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <span className="px-3 py-1 bg-[#492B6F]/10 text-[#492B6F] rounded-full text-sm font-medium">Supply Chain Engineering</span>
                        <span className="px-3 py-1 bg-[#492B6F]/10 text-[#492B6F] rounded-full text-sm font-medium">Logistics Systems</span>
                        <span className="px-3 py-1 bg-[#492B6F]/10 text-[#492B6F] rounded-full text-sm font-medium">Operations Research</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Speaker 2 - Niles */}
              <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-1 bg-gradient-to-br from-[#492B6F]/20 to-white p-8 flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-[#492B6F]/30 rounded-full blur-2xl"></div>
                      <img 
                        src={nilesImage} 
                        alt="Prof. Niles" 
                        className="relative w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-2 p-8">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Prof. Niles</h3>
                      <p className="text-lg text-[#492B6F] font-semibold mb-1">Keynote Speaker</p>
                      <p className="text-gray-600">Distinguished Researcher</p>
                    </div>
                    <div className="prose prose-gray max-w-none">
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Professor Niles is a distinguished researcher and thought leader in the field of supply chain management and logistics. With a proven track record of groundbreaking research and industry collaboration, Prof. Niles brings valuable insights into modern supply chain challenges and innovative solutions.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <span className="px-3 py-1 bg-[#492B6F]/10 text-[#492B6F] rounded-full text-sm font-medium">Smart Logistics</span>
                        <span className="px-3 py-1 bg-[#492B6F]/10 text-[#492B6F] rounded-full text-sm font-medium">Digital Transformation</span>
                        <span className="px-3 py-1 bg-[#492B6F]/10 text-[#492B6F] rounded-full text-sm font-medium">Industry 4.0</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proposed Keynote Themes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Proposed Keynote Themes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-8 rounded-lg border-2 border-[#492B6F] shadow-md">
                <div className="w-16 h-16 bg-[#492B6F] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 text-center mb-3">Resilient Supply Chains</h3>
                <p className="text-gray-600 text-center text-sm">
                  Engineering resilient supply chains in developing and emerging economies
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg border-2 border-[#492B6F] shadow-md">
                <div className="w-16 h-16 bg-[#492B6F] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 text-center mb-3">Digital Transformation</h3>
                <p className="text-gray-600 text-center text-sm">
                  Digital transformation and smart logistics systems
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg border-2 border-[#492B6F] shadow-md">
                <div className="w-16 h-16 bg-[#492B6F] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 text-center mb-3">Future Skills</h3>
                <p className="text-gray-600 text-center text-sm">
                  Future skills and human capital for supply chain engineering
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
