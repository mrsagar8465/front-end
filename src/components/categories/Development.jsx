import React from 'react';

const DevelopmentPage = () => {
  // Sample development categories
  const categories = [
    { id: 1, name: 'Web Development', description: 'Learn about building websites and web apps.' },
    { id: 2, name: 'Mobile Development', description: 'Create amazing mobile applications.' },
    { id: 3, name: 'Data Science', description: 'Dive into data analysis and machine learning.' },
    { id: 4, name: 'Hosting', description: 'Build interactive and immersive .' },
    { id: 5, name: 'admin handling', description: 'Explore artificial intelligence .' },
    { id: 6, name: 'Cloud Computing', description: 'Master cloud infrastructure and services.' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6 ">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 mt-10">
        Services
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="group relative p-6 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            <h2 className="text-2xl font-semibold text-white mb-2 group-hover:text-gray-200">
              {category.name}
            </h2>
            <p className="text-gray-100 group-hover:text-gray-300">
              {category.description}
            </p>
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition duration-300 rounded-lg"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DevelopmentPage;
