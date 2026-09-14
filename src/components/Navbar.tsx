import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-3">
              <img src="/logo.png" alt="SCaLE 2026" className="h-16" />
            </Link>
            <div className="h-10 w-px bg-gray-200 hidden sm:block"></div>
            <a href="https://uom.lk" target="_blank" rel="noopener noreferrer" className="hidden sm:block">
              <img src="/uom-logo.png" alt="University of Moratuwa" className="h-14 object-contain" />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-colors font-medium ${
                location.pathname === '/' 
                  ? 'text-[#492B6F] font-semibold border-b-2 border-[#492B6F]' 
                  : 'text-gray-700 hover:text-[#492B6F]'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors font-medium ${
                location.pathname === '/about' 
                  ? 'text-[#492B6F] font-semibold border-b-2 border-[#492B6F]' 
                  : 'text-gray-700 hover:text-[#492B6F]'
              }`}
            >
              About
            </Link>
            <div className="relative group">
              <Link
                to="/call-for-papers"
                className={`flex items-center gap-1 transition-colors font-medium ${
                  location.pathname === '/call-for-papers'
                    ? 'text-[#492B6F] font-semibold border-b-2 border-[#492B6F]'
                    : 'text-gray-700 hover:text-[#492B6F]'
                }`}
              >
                Call for Papers
              </Link>
              <div className="absolute left-0 top-full pt-2 opacity-0 invisible -translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50">
                <div className="bg-white shadow-lg border border-gray-100 min-w-[220px] py-2">
                  <Link
                    to="/call-for-papers#camera-ready"
                    className="block px-4 py-2.5 font-medium text-gray-700 hover:bg-[#492B6F]/10 transition-colors"
                  >
                    Camera Ready Submission
                  </Link>
                  <Link
                    to="/call-for-papers#important-dates"
                    className="block px-4 py-2.5 font-medium text-gray-700 hover:bg-[#492B6F]/10 transition-colors"
                  >
                    Important Dates
                  </Link>
                </div>
              </div>
            </div>
            <Link
              to="/program"
              className={`transition-colors font-medium ${
                location.pathname === '/program'
                  ? 'text-[#492B6F] font-semibold border-b-2 border-[#492B6F]'
                  : 'text-gray-700 hover:text-[#492B6F]'
              }`}
            >
              Program
            </Link>
            <div className="relative group">
              <Link
                to="/venue"
                className={`flex items-center gap-1 transition-colors font-medium ${
                  location.pathname === '/venue'
                    ? 'text-[#492B6F] font-semibold border-b-2 border-[#492B6F]'
                    : 'text-gray-700 hover:text-[#492B6F]'
                }`}
              >
                Travel
              </Link>
              <div className="absolute left-0 top-full pt-2 opacity-0 invisible -translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50">
                <div className="bg-white shadow-lg border border-gray-100 min-w-[200px] py-2">
                  <Link
                    to="/venue#accommodation"
                    className="block px-4 py-2.5 font-medium text-gray-700 hover:bg-[#492B6F]/10 transition-colors"
                  >
                    Accommodation
                  </Link>
                </div>
              </div>
            </div>
            <Link 
              to="/postgraduate-colloquium" 
              className={`transition-colors font-medium ${
                location.pathname === '/postgraduate-colloquium' 
                  ? 'text-[#492B6F] font-semibold border-b-2 border-[#492B6F]' 
                  : 'text-gray-700 hover:text-[#492B6F]'
              }`}
            >
              Postgraduate Colloquium
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors font-medium ${
                location.pathname === '/contact' 
                  ? 'text-[#492B6F] font-semibold border-b-2 border-[#492B6F]' 
                  : 'text-gray-700 hover:text-[#492B6F]'
              }`}
            >
              Contact Us
            </Link>
            <Link 
              to="/registration" 
              className={`px-6 py-2 transition-colors font-medium ${
                location.pathname === '/registration'
                  ? 'bg-[#492B6F]/90 text-white'
                  : 'bg-[#492B6F] text-white hover:bg-[#492B6F]/90'
              }`}
            >
              Register
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#492B6F] focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              to="/" 
              onClick={closeMenu}
              className={`block px-3 py-2 rounded-md font-medium ${
                location.pathname === '/'
                  ? 'bg-[#492B6F]/20 text-[#492B6F] font-semibold'
                  : 'text-gray-700 hover:bg-[#492B6F]/10 hover:text-[#492B6F]'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              onClick={closeMenu}
              className={`block px-3 py-2 rounded-md font-medium ${
                location.pathname === '/about'
                  ? 'bg-[#492B6F]/20 text-[#492B6F] font-semibold'
                  : 'text-gray-700 hover:bg-[#492B6F]/10 hover:text-[#492B6F]'
              }`}
            >
              About
            </Link>
            <Link
              to="/call-for-papers"
              onClick={closeMenu}
              className={`block px-3 py-2 rounded-md font-medium ${
                location.pathname === '/call-for-papers'
                  ? 'bg-[#492B6F]/20 text-[#492B6F] font-semibold'
                  : 'text-gray-700 hover:bg-[#492B6F]/10 hover:text-[#492B6F]'
              }`}
            >
              Call for Papers
            </Link>
            <Link
              to="/call-for-papers#camera-ready"
              onClick={closeMenu}
              className="block px-3 py-2 ml-4 rounded-md text-sm text-gray-600 hover:bg-[#492B6F]/10 hover:text-[#492B6F]"
            >
              Camera Ready Submission
            </Link>
            <Link
              to="/call-for-papers#important-dates"
              onClick={closeMenu}
              className="block px-3 py-2 ml-4 rounded-md text-sm text-gray-600 hover:bg-[#492B6F]/10 hover:text-[#492B6F]"
            >
              Important Dates
            </Link>
            <Link
              to="/program"
              onClick={closeMenu}
              className={`block px-3 py-2 rounded-md font-medium ${
                location.pathname === '/program'
                  ? 'bg-[#492B6F]/20 text-[#492B6F] font-semibold'
                  : 'text-gray-700 hover:bg-[#492B6F]/10 hover:text-[#492B6F]'
              }`}
            >
              Program
            </Link>
            <Link
              to="/venue"
              onClick={closeMenu}
              className={`block px-3 py-2 rounded-md font-medium ${
                location.pathname === '/venue'
                  ? 'bg-[#492B6F]/20 text-[#492B6F] font-semibold'
                  : 'text-gray-700 hover:bg-[#492B6F]/10 hover:text-[#492B6F]'
              }`}
            >
              Travel & Accommodation
            </Link>
            <Link
              to="/venue#accommodation"
              onClick={closeMenu}
              className="block px-3 py-2 ml-4 rounded-md text-sm text-gray-600 hover:bg-[#492B6F]/10 hover:text-[#492B6F]"
            >
              Accommodation
            </Link>
            <Link 
              to="/postgraduate-colloquium" 
              onClick={closeMenu}
              className={`block px-3 py-2 rounded-md font-medium ${
                location.pathname === '/postgraduate-colloquium'
                  ? 'bg-[#492B6F]/20 text-[#492B6F] font-semibold'
                  : 'text-gray-700 hover:bg-[#492B6F]/10 hover:text-[#492B6F]'
              }`}
            >
              Postgraduate Colloquium
            </Link>
            <Link 
              to="/contact" 
              onClick={closeMenu}
              className={`block px-3 py-2 rounded-md font-medium ${
                location.pathname === '/contact'
                  ? 'bg-[#492B6F]/20 text-[#492B6F] font-semibold'
                  : 'text-gray-700 hover:bg-[#492B6F]/10 hover:text-[#492B6F]'
              }`}
            >
              Contact Us
            </Link>
            <Link 
              to="/registration" 
              onClick={closeMenu}
              className={`block mx-3 mt-2 px-3 py-2 text-center font-medium ${
                location.pathname === '/registration'
                  ? 'bg-[#492B6F]/90 text-white'
                  : 'bg-[#492B6F] text-white hover:bg-[#492B6F]/90'
              }`}
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
