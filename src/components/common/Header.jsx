import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header({ title, username, Logout }) {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle dropdown on click
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Logout Confirmation Function
  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      Logout();
      // Call Logout function
    }
  };

  return (
    <header className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg border-b border-gray-700">
      <div className="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-0 flex justify-between items-center">
        
        {/* Left Side: Title */}
        <h1 className="text-lg font-semibold text-gray-100">{title}</h1>

        {/* Right Side: Profile Dropdown with Username */}
        <div className="relative">
          <button 
            onClick={toggleDropdown}
            className="flex items-center text-white px-4 py-1 text-xs bg-gray-700 hover:bg-gray-600 rounded focus:outline-none"
          >
            <span className="hidden sm:inline">{username}</span>
            <span className="ml-1 text-xs">▼</span>
          </button>

          {/* Dropdown Menu (Toggle on Click) */}
          {isOpen && (
            <div className="absolute right-0 mt-1 w-32 bg-gray-900 border border-gray-700 rounded shadow-lg text-xs">
              <Link to="/admin" className="block px-2 py-1 text-xs text-white hover:bg-gray-700">
                🧑 Profile
              </Link>
              <Link to="/change-password" className="block px-2 py-1 text-xs text-white hover:bg-gray-700">
                🔒 Change Password
              </Link>
              <div className="border-t border-gray-600"></div>
              
              {/* Logout with Link */}
              <button 
                onClick={handleLogout}
                className="block w-full text-left px-2 py-1 text-xs text-red-500 hover:bg-red-700 hover:text-white"
              >
                🚪 Logout
              </button>
            </div>
          )}
        </div>

      </div>
    </header>
  );
}

export default Header;
