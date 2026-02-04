import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="text-2xl font-bold text-gray-900">
                IC-SCALE <span className="text-[#C4B5FD]">2026</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-[#C4B5FD] transition-colors font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-[#C4B5FD] transition-colors font-medium">
              About
            </Link>
            <Link to="/call-for-papers" className="text-gray-700 hover:text-[#C4B5FD] transition-colors font-medium">
              Call for Papers
            </Link>
            <Link to="/program" className="text-gray-700 hover:text-[#C4B5FD] transition-colors font-medium">
              Program
            </Link>
            <Link to="/important-dates" className="text-gray-700 hover:text-[#C4B5FD] transition-colors font-medium">
              Dates
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-[#C4B5FD] transition-colors font-medium">
              Contact Us
            </Link>
            <Link to="/registration" className="bg-[#C4B5FD] text-white px-6 py-2 rounded-lg hover:bg-[#B4A5ED] transition-colors font-medium">
              Register
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#C4B5FD] focus:outline-none"
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
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:bg-[#C4B5FD]/10 hover:text-[#C4B5FD] rounded-md font-medium">
              Home
            </Link>
            <Link to="/about" className="block px-3 py-2 text-gray-700 hover:bg-[#C4B5FD]/10 hover:text-[#C4B5FD] rounded-md font-medium">
              About
            </Link>
            <Link to="/call-for-papers" className="block px-3 py-2 text-gray-700 hover:bg-[#C4B5FD]/10 hover:text-[#C4B5FD] rounded-md font-medium">
              Call for Papers
            </Link>
            <Link to="/program" className="block px-3 py-2 text-gray-700 hover:bg-[#C4B5FD]/10 hover:text-[#C4B5FD] rounded-md font-medium">
              Program
            </Link>
            <Link to="/important-dates" className="block px-3 py-2 text-gray-700 hover:bg-[#C4B5FD]/10 hover:text-[#C4B5FD] rounded-md font-medium">
              Important Dates
            </Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:bg-[#C4B5FD]/10 hover:text-[#C4B5FD] rounded-md font-medium">
              Contact Us
            </Link>
            <Link to="/registration" className="block mx-3 mt-2 px-3 py-2 bg-[#C4B5FD] text-white text-center rounded-lg hover:bg-[#B4A5ED] font-medium">
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
