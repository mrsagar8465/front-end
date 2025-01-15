import React, { useState } from "react";
import { Link } from "react-router-dom";

function AdminPanel() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  // Toggle dropdown visibility
  const handleDropdownToggle = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  // Toggle profile dropdown visibility
  const handleProfileDropdownToggle = () => {
    setIsProfileDropdownOpen((prevState) => !prevState);
  };

  // Unified color classes
  const unifiedGradient =
    "bg-gradient-to-br from-teal-500 via-blue-500 to-purple-500 text-white";
  const hoverClasses = "hover:bg-teal-600 hover:from-blue-600 hover:to-purple-600";
  const listItemClasses =
    `py-2 px-4 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 no-underline ${unifiedGradient} ${hoverClasses}`;

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`w-64 ${unifiedGradient} shadow-md`}>
        <div className="p-4 border-b border-purple-400">
          <h1 className="text-2xl font-bold">Admin Panel</h1>
        </div>
        <nav className="mt-4">
          <ul>
            <li className={`${listItemClasses}`}>
              <Link to="/admin" className="text-white no-underline">
                Dashboard
              </Link>
            </li>
            <li className={`${listItemClasses}`}>
              <Link to="/pagesetting" className="text-white no-underline">
                Settings
              </Link>
            </li>

            {/* Categories Dropdown */}
            <li
              onClick={handleDropdownToggle}
              className={`${listItemClasses} flex justify-between items-center`}
              aria-expanded={isDropdownOpen}
              role="button"
            >
              Menu setting
              <span>{isDropdownOpen ? "▲" : "▼"}</span>
            </li>

            {isDropdownOpen && (
              <ul className="pl-4 space-y-2">
                <li className={listItemClasses}>
                  <Link to="/category1" className="text-white no-underline">
                   Category 
                  </Link>
                </li>
                <li className={listItemClasses}>
                  <Link to="/subcategory2" className="text-white no-underline">
                    Sub Category 
                  </Link>
                </li>
                <li className={listItemClasses}>
                  <Link to="/subcategory2" className="text-white no-underline">
                    child Category 
                  </Link>
                </li>
              </ul>
            )}

            <li className={listItemClasses}>
              <Link to="/page1" className="text-white no-underline">
                Pages
              </Link>
            </li>
            <li className={listItemClasses}>
              <Link to="/listemployee">Account Settings</Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header
          className={`flex items-center justify-between ${unifiedGradient} shadow-md px-6 py-4`}
        >
          <div>
            <span className="text-xl font-semibold">Welcome to Admin Panel</span>
          </div>
          {/* Admin Profile Section */}
          <div className="relative">
            <button
              onClick={handleProfileDropdownToggle}
              className="flex items-center space-x-2 focus:outline-none"
            >
              <img
                src="https://plus.unsplash.com/premium_photo-1669075651553-e0e55739bd18?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with actual admin profile image URL
                alt="Admin"
                className="w-10 h-10 rounded-full"
              />
              <span className="font-medium">Admin</span>
            </button>
            {/* Profile Dropdown */}
            {isProfileDropdownOpen && (
              <ul className="absolute right-0 mt-2 w-48 bg-white text-gray-800 shadow-lg rounded-lg z-50">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link to="/admin">My Profile</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <button onClick={() => alert(" Are you sure you want to logout?")}><Link to="/">Logout</Link></button>
                </li>
              </ul>
            )}
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* First Row */}
          <Link to="/development">
            <div
              className={` p-8 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${unifiedGradient} ${hoverClasses}`}
            >
              <h3 className="text-2xl font-bold">Development</h3>
            </div>
          </Link>
          <Link to="/subcategory2">
            <div
              className={` p-8 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${unifiedGradient} ${hoverClasses}`}
            >
              <h3 className="text-2xl font-bold">Category</h3>
            </div>
          </Link>

          {/* Second Row */}
          <Link to="/sidebar">
            <div
              className={`  p-8 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${unifiedGradient} ${hoverClasses}`}
            >
              <h3 className="text-2xl font-bold">Hiring</h3>
            </div>
          </Link>
          <div
            className={` p-8 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${unifiedGradient} ${hoverClasses}`}
          >
            <h3 className="text-2xl font-bold">Design</h3>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AdminPanel;
