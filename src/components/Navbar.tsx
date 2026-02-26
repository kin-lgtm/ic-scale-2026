import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img src="/logo.png" alt="SCaLE 2026" className="h-16" />
            </Link>
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
            <Link 
              to="/call-for-papers" 
              className={`transition-colors font-medium ${
                location.pathname === '/call-for-papers' 
                  ? 'text-[#492B6F] font-semibold border-b-2 border-[#492B6F]' 
                  : 'text-gray-700 hover:text-[#492B6F]'
              }`}
            >
              Call for Papers
            </Link>
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
            <Link 
              to="/important-dates" 
              className={`transition-colors font-medium ${
                location.pathname === '/important-dates' 
                  ? 'text-[#492B6F] font-semibold border-b-2 border-[#492B6F]' 
                  : 'text-gray-700 hover:text-[#492B6F]'
              }`}
            >
              Dates
            </Link>
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
              className={`px-6 py-2 rounded-lg transition-colors font-medium ${
                location.pathname === '/registration'
                  ? 'bg-[#B4A5ED] text-white'
                  : 'bg-[#492B6F] text-white hover:bg-[#B4A5ED]'
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
              className={`block px-3 py-2 rounded-md font-medium ${
                location.pathname === '/call-for-papers'
                  ? 'bg-[#492B6F]/20 text-[#492B6F] font-semibold'
                  : 'text-gray-700 hover:bg-[#492B6F]/10 hover:text-[#492B6F]'
              }`}
            >
              Call for Papers
            </Link>
            <Link 
              to="/program" 
              className={`block px-3 py-2 rounded-md font-medium ${
                location.pathname === '/program'
                  ? 'bg-[#492B6F]/20 text-[#492B6F] font-semibold'
                  : 'text-gray-700 hover:bg-[#492B6F]/10 hover:text-[#492B6F]'
              }`}
            >
              Program
            </Link>
            <Link 
              to="/important-dates" 
              className={`block px-3 py-2 rounded-md font-medium ${
                location.pathname === '/important-dates'
                  ? 'bg-[#492B6F]/20 text-[#492B6F] font-semibold'
                  : 'text-gray-700 hover:bg-[#492B6F]/10 hover:text-[#492B6F]'
              }`}
            >
              Important Dates
            </Link>
            <Link 
              to="/postgraduate-colloquium" 
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
              className={`block mx-3 mt-2 px-3 py-2 text-center rounded-lg font-medium ${
                location.pathname === '/registration'
                  ? 'bg-[#B4A5ED] text-white'
                  : 'bg-[#492B6F] text-white hover:bg-[#B4A5ED]'
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
