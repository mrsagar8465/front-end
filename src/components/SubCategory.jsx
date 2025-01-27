import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./common/Header";
import AdminFooter from "./common/AdminFotter";
import Commonsidebar from "./common/Commonsidebar";

const SubCategory = () => {
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [category, setCategory] = useState("");
  const [subcategoryname, setsubcategoryname] = useState("");
  const [subcategorydescription, setsubcategorydescription] = useState("");
  const [ordernumber, setordernumber] = useState("");
  const [subCategories, setSubCategories] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [categories, setCategories] = useState([]); // Store categories

  // Fetch categories from the backend
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:8080/subcategory/view"); // Replace with actual API endpoint
        setCategories(response.data); // Store fetched categories
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  // Handle form submission for adding or editing subcategories
  const handleSubmit = async (e) => {
    e.preventDefault();

    const subCategoryData = {
      category,
      subcategoryname,
      subcategorydescription,
      ordernumber,
      status: "Active", // Default status
    };

    try {
      if (isEditing) {
        // Update existing subcategory
        const response = await axios.put(
          `http://localhost:8080/subcategory/update/${selectedSubCategory.id}`,
          subCategoryData,
          { headers: { "Content-Type": "application/json" } }
        );
        setSubCategories(
          subCategories.map((subCategory) =>
            subCategory.id === selectedSubCategory.id ? response.data : subCategory
          )
        );
      } else {
        // Add new subcategory
        const response = await axios.post(
          "http://localhost:8080/subcategory/add",
          subCategoryData,
          { headers: { "Content-Type": "application/json" } }
        );
        setSubCategories([...subCategories, response.data]);
      }

      setShowModal(false);
      resetForm();
    } catch (error) {
      console.error("Error saving or updating subcategory:", error);
    }
  };

  // Handle category change
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  // Reset form fields
  const resetForm = () => {
    setCategory("");
    setsubcategoryname("");
    setsubcategorydescription("");
    setordernumber("");
    setIsEditing(false);
    setSelectedSubCategory(null);
  };

  return (
    <div className="h-screen d-flex flex-column">
      <Header title="SubCategory" />
      <div className="d-flex">
        <Commonsidebar />
        <main className="flex-grow-1 p-4">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="card-title">Subcategories</h5>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    setShowModal(true);
                    resetForm();
                  }}
                >
                  + Add Subcategory
                </button>
              </div>

              <div className="table-responsive">
                <table className="table table-bordered table-striped">
                  <thead className="table-dark">
                    <tr>
                      <th>ID</th>
                      <th>Category</th>
                      <th>Subcategory Name</th>
                      <th>Subcategory Description</th>
                      <th>Order Number</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subCategories.length > 0 ? (
                      subCategories.map((subCategory) => (
                        <tr key={subCategory.id}>
                          <td>{subCategory.id}</td>
                          <td>{subCategory.category}</td>
                          <td>{subCategory.subcategoryname}</td>
                          <td>{subCategory.subcategorydescription}</td>
                          <td>{subCategory.ordernumber}</td>
                          <td>{subCategory.status}</td>
                          <td>
                            <button className="btn btn-info btn-sm me-2">Edit</button>
                            <button className="btn btn-danger btn-sm">Delete</button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="7" className="text-center">
                          No subcategories available. Please add one.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {showModal && (
            <div className="modal fade show d-block" tabIndex="-1">
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">{isEditing ? "Edit Subcategory" : "Add Subcategory"}</h5>
                    <button className="btn-close" onClick={() => setShowModal(false)}></button>
                  </div>
                  <div className="modal-body">
                    <form onSubmit={handleSubmit}>
                      <div className="row mb-3">
                        <div className="col-md-6">
                          <label className="form-label">Select Category:</label>
                          <select
                            className="form-control"
                            value={category}
                            onChange={handleCategoryChange}
                            required
                          >
                            <option value="">Choose Category...</option>
                            {categories.map((cat) => (
                      <tr key={cat.id}>
                        <td>{cat.name}</td>
                        <td>
                          <ul>
                            {subCategories
                              .filter((sub) => sub.categoryId === cat.id) // Map subcategories to their category
                              .map((sub) => (
                                <li key={sub.id}>{sub.subcategoryname}</li>
                              ))}
                          </ul>
                        </td>
                      </tr>
                    ))}
                          </select>
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Subcategory Name:</label>
                          <input
                            type="text"
                            className="form-control"
                            value={subcategoryname}
                            onChange={(e) => setsubcategoryname(e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="row mb-3">
                        <div className="col-md-6">
                          <label className="form-label">Order Number:</label>
                          <input
                            type="number"
                            className="form-control"
                            value={ordernumber}
                            onChange={(e) => setordernumber(e.target.value)}
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Subcategory Description:</label>
                          <textarea
                            className="form-control"
                            value={subcategorydescription}
                            onChange={(e) => setsubcategorydescription(e.target.value)}
                            required
                          ></textarea>
                        </div>
                      </div>

                      <div className="d-flex justify-content-end">
                        <button type="button" className="btn btn-secondary me-2" onClick={() => setShowModal(false)}>
                          Cancel
                        </button>
                        <button type="submit" className="btn btn-primary">
                          {isEditing ? "Update" : "Save"}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}

          {showModal && <div className="modal-backdrop fade show"></div>}
        </main>
      </div>
      <AdminFooter />
    </div>
  );
};

export default SubCategory;
