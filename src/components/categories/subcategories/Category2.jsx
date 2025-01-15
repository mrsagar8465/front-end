import React, { useState,useEffect } from "react";

const DynamicCategoryTable = () => {
  const [categories, setCategories] = useState([ ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add"); // 'add' or 'edit'
  const [currentCategory, setCurrentCategory] = useState({
    id: null,
    name: "",
    description: "",
  });

   // Fetch categories from backend
   useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("/api/categories"); // Replace with your API endpoint
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);


  const openAddModal = () => {
    setModalMode("add");
    setCurrentCategory({ id: null, name: "", description: "" });
    setIsModalOpen(true);
  };

  const openEditModal = (category) => {
    setModalMode("edit");
    setCurrentCategory({ ...category });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentCategory({ id: null, name: "", description: "" });
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      try {
        await axios.delete(`/api/categories/${id}`); // Replace with your API endpoint
        setCategories(categories.filter((category) => category.id !== id));
      } catch (error) {
        console.error("Error deleting category:", error);
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentCategory((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      if (modalMode === "add") {
        const response = await axios.post("/api/categories", {
          name: currentCategory.name,
          description: currentCategory.description,
        });
        setCategories([...categories, response.data]);
      } else if (modalMode === "edit") {
        const response = await axios.put(`/api/categories/${currentCategory.id}`, {
          name: currentCategory.name,
          description: currentCategory.description,
        });
        setCategories(
          categories.map((category) =>
            category.id === currentCategory.id ? response.data : category
          )
        );
      }
      closeModal();
    } catch (error) {
      console.error("Error saving category:", error);
    }
  };


  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar (Optional) */}
      {/* <div className="w-64 bg-white shadow-md">Sidebar content here</div> */}

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">Dynamic Category Table</h1>
        <div className="flex justify-end mb-4 pr-28">
        <button
          className="mb-4 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded "
          onClick={openAddModal}
        >
          Add Category
        </button>
        </div>

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
                      onClick={() => openEditModal(category)}
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

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-4">
                {modalMode === "add" ? "Add New Category" : "Edit Category"}
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={currentCategory.name}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 border border-gray-300 rounded"
                    placeholder="Enter category name"
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
                    placeholder="Enter category description"
                  />
                </div>
                <div className="flex justify-end space-x-2">
                  <button
                    className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
                    onClick={handleSave}
                  >
                    {modalMode === "add" ? "Add" : "Save"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DynamicCategoryTable;
