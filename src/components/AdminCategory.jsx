import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import Header from "./common/Header";
import Commonsidebar from "./common/Commonsidebar";
import AdminFooter from "./common/AdminFotter";

const AdminCategory = () => {
  const [categories, setCategories] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryData, setCategoryData] = useState({ name: "", ordernumber: "", description: "" });

  // Fetch categories from the backend
  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:8080/category/view"); // Adjust API URL
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // Handle form submission for adding/editing category
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (modalType === "add") {
        await axios.post("http://localhost:8080/category/add", categoryData);
      } else if (modalType === "edit" && selectedCategory) {
        await axios.put(`http://localhost:8080/category/update/${selectedCategory.id}`, categoryData);
      }
      setShowModal(false);
      fetchCategories();
    } catch (error) {
      console.error("Error saving category:", error);
    }
  };

  // Handle delete category
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      try {
        await axios.delete(`http://localhost:8080/category/delete/${id}`);
        fetchCategories();
      } catch (error) {
        console.error("Error deleting category:", error);
      }
    }
  };

  return (
    <div className="h-screen d-flex flex-column">
      <Header title="Admin Category" />
      <div className="d-flex">
        <Commonsidebar />
        <main className="flex-grow-1 p-4">
          <div className="card shadow-lg">
            <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Category Management</h5>
              <button
                className="btn btn-light btn-sm"
                onClick={() => {
                  setShowModal(true);
                  setModalType("add");
                  setCategoryData({ name: "", ordernumber: "", description: "" });
                  setSelectedCategory(null);
                }}
              >
                + Add Category
              </button>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered table-striped">
                  <thead className="table-dark">
                    <tr>
                      <th>ID</th>
                      <th>Category Name</th>
                      <th>Order Number</th>
                      <th>Description</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categories.length > 0 ? (
                      categories.map((category) => (
                        <tr key={category.id}>
                          <td>{category.id}</td>
                          <td>{category.name}</td>
                          <td>{category.ordernumber}</td>
                          <td>{category.description}</td>
                          <td>
                            <button
                              className="btn btn-info btn-sm me-2"
                              onClick={() => {
                                setShowModal(true);
                                setModalType("view");
                                setSelectedCategory(category);
                                setCategoryData(category);
                              }}
                            >
                              <FaEye />
                            </button>
                            <button
                              className="btn btn-warning btn-sm me-2"
                              onClick={() => {
                                setShowModal(true);
                                setModalType("edit");
                                setSelectedCategory(category);
                                setCategoryData(category);
                              }}
                            >
                              <FaEdit />
                            </button>
                            <button
                              className="btn btn-danger btn-sm"
                              onClick={() => handleDelete(category.id)}
                            >
                              <FaTrash />
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="5" className="text-center">No Categories Found</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
      <AdminFooter />

      {showModal && (
        <div className="modal fade show d-block" style={{ background: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {modalType === "add" ? "Add Category" : modalType === "edit" ? "Edit Category" : "View Category"}
                </h5>
                <button className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Category Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      value={categoryData.name}
                      onChange={(e) => setCategoryData({ ...categoryData, name: e.target.value })}
                      readOnly={modalType === "view"}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Order Number:</label>
                    <input
                      type="number"
                      className="form-control"
                      value={categoryData.ordernumber}
                      onChange={(e) => setCategoryData({ ...categoryData, ordernumber: e.target.value })}
                      readOnly={modalType === "view"}
                      required
                      min="1"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Description:</label>
                    <textarea
                      className="form-control"
                      value={categoryData.description}
                      onChange={(e) => setCategoryData({ ...categoryData, description: e.target.value })}
                      readOnly={modalType === "view"}
                      required
                      rows="3"
                    ></textarea>
                  </div>
                  {modalType !== "view" && (
                    <div className="d-flex justify-content-end">
                      <button type="button" className="btn btn-secondary me-2" onClick={() => setShowModal(false)}>
                        Cancel
                      </button>
                      <button type="submit" className="btn btn-primary">
                        Save
                      </button>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminCategory;
