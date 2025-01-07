import React, { useState } from "react";

const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`bg-purple-700 text-white transition-all duration-300 ease-in-out transform 
          ${isSidebarOpen ? "w-64" : "w-16"} flex flex-col shadow-lg`}
      >
        <div className="p-4 flex items-center justify-between">
          <h1
            className={`font-bold text-xl transition-opacity duration-300 
              ${isSidebarOpen ? "opacity-100" : "opacity-0"}`}
          >
            Admin Panel
          </h1>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-xl focus:outline-none"
          >
            {isSidebarOpen ? "«" : "»"}
          </button>
        </div>
        <nav className="flex flex-col mt-6 space-y-4">
          <a
            href="#"
            className="flex items-center px-4 py-2 text-sm font-medium hover:bg-purple-600 rounded-lg"
          >
            <span className="material-icons">dashboard</span>
            <span className={`ml-3 ${!isSidebarOpen && "hidden"}`}>Dashboard</span>
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 text-sm font-medium hover:bg-purple-600 rounded-lg"
          >
            <span className="material-icons">settings</span>
            <span className={`ml-3 ${!isSidebarOpen && "hidden"}`}>Settings</span>
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 text-sm font-medium hover:bg-purple-600 rounded-lg"
          >
            <span className="material-icons">analytics</span>
            <span className={`ml-3 ${!isSidebarOpen && "hidden"}`}>Analytics</span>
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-700">Dashboard</h2>
          <div className="flex items-center space-x-4">
            <span className="material-icons cursor-pointer">notifications</span>
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="w-10 h-10 rounded-full border-2 border-purple-700"
            />
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-grow p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="bg-white p-4 shadow rounded-lg transform hover:scale-105 transition-transform duration-300 ease-out"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Card {index + 1}</h3>
              <p className="text-gray-600">This is some content for the card.</p>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
