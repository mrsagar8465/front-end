import React from "react";
import { useNavigate } from "react-router-dom";

const CategoryTable = () => {
  const navigate = useNavigate();

  const categories = [
    { id: 1, name: "Electronics", description: "Devices and gadgets" },
    { id: 2, name: "Furniture", description: "Home and office furniture" },
    { id: 3, name: "Clothing", description: "Apparel and accessories" },
  ];

  const handleAddClick = (id) => {
    alert(`Add button clicked for category ID: ${id}`);
  };

  const handleNextClick = () => {
    navigate("/subcategory2"); // Adjust the path to your desired route
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Category List</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">ID</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Name</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Description</th>
              <th className="py-3 px-4 text-center text-sm font-semibold text-gray-600">Action</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id} className="border-t">
                <td className="py-3 px-4 text-sm text-gray-700">{category.id}</td>
                <td className="py-3 px-4 text-sm text-gray-700">{category.name}</td>
                <td className="py-3 px-4 text-sm text-gray-700">{category.description}</td>
                <td className="py-3 px-4 text-center">
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded"
                    onClick={() => handleAddClick(category.id)}
                  >
                    Add
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6 text-right">
        <button
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
          onClick={handleNextClick}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CategoryTable;
