import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white text-xl font-bold mb-4">
              IC-SCALE <span className="text-[#C4B5FD]">2026</span>
            </h3>
            <p className="text-sm leading-relaxed mb-4">
              International Conference on Supply Chain and Logistics Engineering
            </p>
            <p className="text-sm">
              <strong className="text-white">16-17 November 2026</strong><br />
              University of Moratuwa, Sri Lanka
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-[#C4B5FD] transition-colors">
                  About Conference
                </Link>
              </li>
              <li>
                <Link to="/themes" className="hover:text-[#C4B5FD] transition-colors">
                  Conference Themes
                </Link>
              </li>
              <li>
                <Link to="/important-dates" className="hover:text-[#C4B5FD] transition-colors">
                  Important Dates
                </Link>
              </li>
            </ul>
          </div>

          {/* Additional Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">More Information</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/venue" className="hover:text-[#C4B5FD] transition-colors">
                  Venue & Travel
                </Link>
              </li>
              <li>
                <Link to="/registration" className="hover:text-[#C4B5FD] transition-colors">
                  Registration
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#C4B5FD] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>
            © 2026 International Conference on Supply Chain and Logistics Engineering (IC-SCALE)
          </p>
          <p className="mt-2">
            Hosted by the University of Moratuwa, Sri Lanka
          </p>
          <p className="mt-4 text-xs text-gray-500">
            Technical Co-Sponsorship: Society of Transport and Logistics
          </p>
        </div>
      </div>
    </footer>
  );
}
