import React from 'react';

function Header({ title }) {
  return (
    <div>
    <header className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg border-b border-gray-700  mx-auto">
      <div className="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-0 ">
        <h1 className="text-2xl font-semibold text-gray-100">{title}</h1>
      </div>
    </header>
    </div>
  );
}

export default Header;
