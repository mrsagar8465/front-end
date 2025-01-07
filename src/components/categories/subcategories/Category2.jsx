import React, { useState } from "react";

const DynamicCategoryTable = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: "Electronics", description: "Devices and gadgets" },
    { id: 2, name: "Furniture", description: "Home and office furniture" },
    { id: 3, name: "Clothing", description: "Apparel and accessories" },
  ]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);

  const handleEdit = (category) => {
    setIsEditing(true);
    setCurrentCategory({ ...category });
  };

  const handleDelete = (id) => {
    setCategories(categories.filter((category) => category.id !== id));
  };

  const handleAdd = () => {
    const newCategory = {
      id: categories.length + 1,
      name: "New Category",
      description: "Description of new category",
    };
    setCategories([...categories, newCategory]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentCategory({ ...currentCategory, [name]: value });
  };

  const handleSave = () => {
    setCategories(
      categories.map((category) =>
        category.id === currentCategory.id ? currentCategory : category
      )
    );
    setIsEditing(false);
    setCurrentCategory(null);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
     

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">Dynamic Category Table</h1>
        <button
          className="mb-4 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
          onClick={handleAdd}
        >
          Add Category
        </button>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">ID</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Name</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Description</th>
                <th className="py-3 px-4 text-center text-sm font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <tr key={category.id} className="border-t">
                  <td className="py-3 px-4 text-sm text-gray-700">{category.id}</td>
                  <td className="py-3 px-4 text-sm text-gray-700">{category.name}</td>
                  <td className="py-3 px-4 text-sm text-gray-700">{category.description}</td>
                  <td className="py-3 px-4 text-center space-x-2">
                    <button
                      className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-3 rounded"
                      onClick={() => handleEdit(category)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
                      onClick={() => handleDelete(category.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {isEditing && (
          <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Edit Category</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={currentCategory.name}
                  onChange={handleInputChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <input
                  type="text"
                  name="description"
                  value={currentCategory.description}
                  onChange={handleInputChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded"
                />
              </div>
              <button
                className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DynamicCategoryTable;
