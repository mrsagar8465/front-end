import React, { useState } from "react";
import { Link } from "react-router-dom";

function AdminPanel() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle dropdown visibility
  const handleDropdownToggle = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  // Unified color classes
  const unifiedGradient =
    "bg-gradient-to-br from-teal-500 via-blue-500 to-purple-500 text-white";
  const hoverClasses = "hover:bg-teal-600 hover:from-blue-600 hover:to-purple-600";
  const listItemClasses =
    `py-2 px-4 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 no-underline ${unifiedGradient} ${hoverClasses}`;

  return (
    <div className="flex h-screen bg-gray-100 mt-14">
      {/* Sidebar */}
      <aside className={`w-64 ${unifiedGradient} shadow-md`}>
        <div className="p-4 border-b border-purple-400">
          <h1 className="text-2xl font-bold">Admin Panel</h1>
        </div>
        <nav className="mt-4">
          <ul>
            <li className={`${listItemClasses}`}>
              <Link to="/" className="text-white no-underline">
                Dashboard
              </Link>
            </li>
            <li className={`${listItemClasses}`}>
              <Link to="/pagesetting" className="text-white no-underline">
                Menu Settings
              </Link>
            </li>

            {/* Categories Dropdown */}
            <li
              onClick={handleDropdownToggle}
              className={`${listItemClasses} flex justify-between items-center`}
              aria-expanded={isDropdownOpen}
              role="button"
            >
              Categories
              <span>{isDropdownOpen ? "▲" : "▼"}</span>
            </li>

            {isDropdownOpen && (
              <ul className="pl-4 space-y-2">
                <li className={listItemClasses}>
                  <Link to="/category1" className="text-white no-underline">
                    Sub Category 1
                  </Link>
                </li>
                <li className={listItemClasses}>
                  <Link to="/subcategory2" className="text-white no-underline">
                    Sub Category 2
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
                <Link to="/listemployee" >Account Settings </Link></li>
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
        </header>

        {/* Dashboard Content */}
        <main className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* First Row */}
          <Link to="/development">
            <div
              className={`p-8 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${unifiedGradient} ${hoverClasses}`}
            >
              <h3 className="text-2xl font-bold">Development</h3>
            </div>
          </Link>
          <Link to="/subcategory2">
            <div
              className={`p-8 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${unifiedGradient} ${hoverClasses}`}
            >
              <h3 className="text-2xl font-bold">Category</h3>
            </div>
          </Link>

          {/* Second Row */}
          <Link to="/hiring">
            <div
              className={`p-8 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${unifiedGradient} ${hoverClasses}`}
            >
              <h3 className="text-2xl font-bold">Hiring</h3>
            </div>
          </Link>
          <div
            className={`p-8 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${unifiedGradient} ${hoverClasses}`}
          >
            <h3 className="text-2xl font-bold">Design</h3>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AdminPanel;
