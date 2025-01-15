import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const [role, setRole] = useState("Admin"); // Change this to 'Customer' for testing different roles

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? "" : menu);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Header */}
      <header className="p-4 bg-gray-800 shadow-lg">
        <h1 className="text-xl font-bold"> Menu Setting</h1>
      </header>

      {/* Sidebar */}
      <aside className="flex-grow flex flex-col md:flex-row">
        <nav className="bg-gray-800 md:w-1/4 p-4 space-y-2">
          {/* Primary Menu */}
          <ul className="space-y-2">
            <li>
              <Link
                to="#"
                className="block p-2 hover:bg-gray-700 rounded"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/home" className="block p-2 hover:bg-gray-700 rounded">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className="block p-2 hover:bg-gray-700 rounded"
              >
                Profile
              </Link>
            </li>
            <li>
              <button
                onClick={() => toggleMenu("Settings")}
                className="p-2 w-full text-left hover:bg-gray-700 rounded"
              >
                Settings
              </button>
              {activeMenu === "Settings" && (
                <ul className="ml-4 space-y-2 mt-2">
                  <li>
                    <Link
                      to="/settings/general"
                      className="block p-2 hover:bg-gray-700 rounded"
                    >
                      General Settings
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/settings/privacy"
                      className="block p-2 hover:bg-gray-700 rounded"
                    >
                      Privacy Settings
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/settings/notifications"
                      className="block p-2 hover:bg-gray-700 rounded"
                    >
                      Notification Settings
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/settings/security"
                      className="block p-2 hover:bg-gray-700 rounded"
                    >
                      Security Settings
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>

          {/* Role-Based Menus */}
          {role === "Admin" && (
            <div className="mt-4">
              <h3 className="text-sm uppercase tracking-wider">Admin Menu</h3>
              <ul className="space-y-2 mt-2">
                <li>
                  <Link
                    to="/admin/user-management"
                    className="block p-2 hover:bg-gray-700 rounded"
                  >
                    User Management
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/system-logs"
                    className="block p-2 hover:bg-gray-700 rounded"
                  >
                    System Logs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/reports"
                    className="block p-2 hover:bg-gray-700 rounded"
                  >
                    Reports
                  </Link>
                </li>
              </ul>
            </div>
          )}
          {role === "Customer" && (
            <div className="mt-4">
              <h3 className="text-sm uppercase tracking-wider">Customer Menu</h3>
              <ul className="space-y-2 mt-2">
                <li>
                  <Link
                    to="/customer/my-orders"
                    className="block p-2 hover:bg-gray-700 rounded"
                  >
                    My Orders
                  </Link>
                </li>
                <li>
                  <Link
                    to="/customer/profile-settings"
                    className="block p-2 hover:bg-gray-700 rounded"
                  >
                    Profile Settings
                  </Link>
                </li>
                <li>
                  <Link
                    to="/customer/help"
                    className="block p-2 hover:bg-gray-700 rounded"
                  >
                    Help
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </nav>

        {/* Content Area */}
        <div className="flex-grow p-4 bg-gray-100 text-gray-900">
          <h2 className="text-2xl font-bold">Content Area</h2>
          <p className="mt-2">This is where your main content will go.</p>
        </div>
      </aside>
    </div>
  );
};

export default Menu;
