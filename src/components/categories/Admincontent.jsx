import React from "react";

const Admincontent = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 to-blue-300 p-8">
      <div className="bg-white shadow-lg rounded-lg p-6 space-y-8 mt-10">
        {/* Category Section */}
        <div>
          <h2 className="text-xl font-bold text-gray-700 mb-4">Categories</h2>
          <div className="space-y-2">
            {["Category1", "Category2", "Category3"].map((category, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-blue-100 p-4 rounded-lg hover:bg-blue-200 transition transform hover:scale-105"
              >
                <span>{category}</span>
                <div className="space-x-2">
                  <button className="text-sm bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
                    Edit
                  </button>
                  <button className="text-sm bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">
                    Disable
                  </button>
                  <button className="text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sub-Category Section */}
        <div>
          <h2 className="text-xl font-bold text-gray-700 mb-4">Sub-Categories</h2>
          <div className="space-y-2">
            {["Sub Category1", "Sub Category2", "Sub Category3"].map(
              (subcategory, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-purple-100 p-4 rounded-lg hover:bg-purple-200 transition transform hover:scale-105"
                >
                  <span>{subcategory}</span>
                  <div className="space-x-2">
                    <button className="text-sm bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
                      Edit
                    </button>
                    <button className="text-sm bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">
                      Disable
                    </button>
                    <button className="text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                      Delete
                    </button>
                  </div>
                </div>
              )
            )}
          </div>
          <button className="mt-4 text-sm bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Add Sub Category
          </button>
        </div>

        {/* Page Section */}
        <div>
          <h2 className="text-xl font-bold text-gray-700 mb-4">Pages</h2>
          <table className="w-full table-auto border-collapse bg-gray-100 rounded-lg shadow-md">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-4 py-2 text-left">Page Category</th>
                <th className="border px-4 py-2 text-left">Sub Category</th>
                <th className="border px-4 py-2 text-left">Page Title</th>
                <th className="border px-4 py-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {[
                { category: "Category1", subCategory: "Sub1", title: "Title1" },
                { category: "Category2", subCategory: "Sub2", title: "Title2" },
                { category: "Category3", subCategory: "Sub3", title: "Title3" },
              ].map((page, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-200 transition transform hover:scale-105"
                >
                  <td className="border px-4 py-2">{page.category}</td>
                  <td className="border px-4 py-2">{page.subCategory}</td>
                  <td className="border px-4 py-2">{page.title}</td>
                  <td className="border px-4 py-2 space-x-2">
                    <button className="text-sm bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
                      Edit
                    </button>
                    <button className="text-sm bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">
                      Disable
                    </button>
                    <button className="text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="mt-4 text-sm bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Add New Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admincontent;
