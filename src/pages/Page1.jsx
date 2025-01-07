import React, { useState } from 'react';

const Page1 = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const pages = [
    {
      id: 1,
      title: "Page 1",
      description: "This is the description of page 1."
    },
    {
      id: 2,
      title: "Page 2",
      description: "This is the description of page 2."
    },
    {
      id: 3,
      title: "Page 3",
      description: "This is the description of page 3."
    }
  ];

  const handleNext = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className=" py-8 min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4 px-6 text-lg font-bold">
        <h1>Pages</h1>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="bg-gray-200 w-1/4 p-4">
          <h2 className="text-xl font-semibold mb-4">Page List</h2>
          <ul className="space-y-2">
            {pages.map((page) => (
              <li key={page.id}>
                <a
                  href="#"
                  className={`text-blue-600 hover:underline ${currentPage === page.id ? 'font-bold' : ''}`}
                  onClick={() => setCurrentPage(page.id)}
                >
                  {page.title}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">{pages[currentPage - 1].title}</h2>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add New</button>
          </div>

          {/* Table */}
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="border-b px-4 py-2 text-left text-gray-700 font-medium">Title</th>
                <th className="border-b px-4 py-2 text-left text-gray-700 font-medium">Description</th>
                <th className="border-b px-4 py-2 text-left text-gray-700 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b px-4 py-2">{pages[currentPage - 1].title}</td>
                <td className="border-b px-4 py-2">{pages[currentPage - 1].description}</td>
                <td className="border-b px-4 py-2">
                  <button className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600 mr-2">Edit</button>
                  <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 mr-2">Delete</button>
                  <button className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600">Add</button>
                </td>
              </tr>
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded disabled:opacity-50"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={currentPage === pages.length}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Page1;
