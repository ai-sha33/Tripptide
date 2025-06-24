// src/components/Navbar.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, UserCircle, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  const handleLogout = () => {
    setShowModal(true);
    setIsDropdownOpen(false);
  };

  const confirmLogout = () => {
    setShowModal(false);
    navigate('/');
  };

  return (
    <>
      <nav className="bg-[#C7D9D5] shadow-md fixed top-0 left-0 right-0 z-50 h-20">
        <div className="px-5 md:px-10 py-3 flex justify-between items-center h-full">
          {/* Logo */}
          <div className="h-16 flex items-center overflow-hidden">
            <img
              src="/photos/logo.png"
              alt="logo"
              className="h-full w-auto object-contain rounded-full"
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            <ul className="flex space-x-6 text-gray-700 font-medium">
              <li><a href="/hotels" className="hover:text-blue-500">Home</a></li>
              <li><a href="/aboutus" className="hover:text-blue-500">About Us</a></li>
            </ul>
            <div className="flex items-center bg-white px-4 py-2 rounded-full border border-gray-300 shadow-sm ml-4">
              <Search className="text-gray-500 w-5 h-5 mr-2" />
              <input
                type="text"
                placeholder="Search..."
                className="outline-none w-64 bg-transparent text-gray-700"
              />
            </div>
          </div>

          {/* Profile & Hamburger */}
          <div className="flex items-center space-x-4">
            {/* Desktop Profile Icon */}
            <div className="relative hidden md:block">
              <button onClick={toggleDropdown}>
                <UserCircle className="text-gray-700 w-8 h-8 hover:text-blue-500 transition" />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                  <a href="/bookings" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Bookings</a>
                  <a href="/review" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Write a Review</a>
                  <a href="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</a>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Hamburger Menu */}
            <button onClick={toggleMobileMenu} className="md:hidden text-gray-700">
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white px-6 pb-4 shadow-md">
            <ul className="flex flex-col space-y-3 text-gray-700 font-medium py-2">
              <li><a href="/hotels" className="hover:text-blue-500">Home</a></li>
              <li><a href="/aboutus" className="hover:text-blue-500">About Us</a></li>
            </ul>
            <div className="flex items-center bg-gray-100 px-3 py-2 rounded-full mt-3">
              <Search className="text-gray-500 w-5 h-5 mr-2" />
              <input
                type="text"
                placeholder="Search..."
                className="outline-none w-full bg-transparent text-gray-700"
              />
            </div>
            <div className="mt-4 space-y-2">
              <a href="/bookings" className="block text-gray-700 hover:text-blue-500">Bookings</a>
              <a href="/review" className="block text-gray-700 hover:text-blue-500">Write a Review</a>
              <a href="/profile" className="block text-gray-700 hover:text-blue-500">Profile</a>
              <button
                onClick={handleLogout}
                className="w-full text-left text-red-600 hover:text-red-700 mt-2"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Logout Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 shadow-lg w-80 text-center">
            <p className="text-lg font-semibold mb-4">Are you sure you want to logout?</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={confirmLogout}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Yes
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
