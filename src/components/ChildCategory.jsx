import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./common/Header";
import AdminFooter from "./common/AdminFotter";
import Commonsidebar from "./common/Commonsidebar";

const ChildCategory = () => {
  const [showModal, setShowModal] = useState(false);
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [childCategoryName, setChildCategoryName] = useState("");
  const [description, setDescription] = useState("");
  const [orderNumber, setOrderNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Category:", category);
    console.log("Subcategory:", subCategory);
    console.log("ChildCategory Name:", childCategoryName);
    console.log("Description:", description);
    console.log("Order Number:", orderNumber);

    // Close Modal After Submission
    setShowModal(false);

    // Reset Fields
    setCategory("");
    setSubCategory("");
    setChildCategoryName("");
    setDescription("");
    setOrderNumber("");
  };

  return (
    <div className="h-screen d-flex flex-column">
      <Header title="ChildCategory" />

      <div className="d-flex">
        <Commonsidebar />

        {/* Main Content Area */}
        <main className="flex-grow-1 p-4">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="card-title">Child Categories</h5>
                <button className="btn btn-primary" onClick={() => setShowModal(true)}>
                  + Add ChildCategory
                </button>
              </div>

              {/* Static Table */}
              <div className="table-responsive">
                <table className="table table-bordered table-striped">
                  <thead className="table-dark">
                    <tr>
                      <th>ID</th>
                      <th>Category</th>
                      <th>Subcategory</th>
                      <th>ChildCategory Name</th>
                      <th>Description</th>
                      <th>Order Number</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Electronics</td>
                      <td>Mobile Phones</td>
                      <td>Smartphones</td>
                      <td>Latest mobile devices</td>
                      <td>1</td>
                      <td>
                        <button className="btn btn-info btn-sm me-2">View</button>
                        <button className="btn btn-warning btn-sm me-2">Edit</button>
                        <button className="btn btn-danger btn-sm">Delete</button>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Fashion</td>
                      <td>Men's Wear</td>
                      <td>Formal Shirts</td>
                      <td>Premium quality shirts</td>
                      <td>2</td>
                      <td>
                        <button className="btn btn-info btn-sm me-2">View</button>
                        <button className="btn btn-warning btn-sm me-2">Edit</button>
                        <button className="btn btn-danger btn-sm">Delete</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Modal Form */}
          {showModal && (
            <div className="modal fade show d-block" tabIndex="-1">
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Add ChildCategory</h5>
                    <button className="btn-close" onClick={() => setShowModal(false)}></button>
                  </div>
                  <div className="modal-body">
                    <form onSubmit={handleSubmit}>
                      <div className="row mb-3">
                        <div className="col-md-6">
                          <label className="form-label">Select Category:</label>
                          <select className="form-control" value={category} onChange={(e) => setCategory(e.target.value)} required>
                            <option value="">Choose...</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Fashion">Fashion</option>
                            <option value="Home & Living">Home & Living</option>
                          </select>
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Select Subcategory:</label>
                          <select className="form-control" value={subCategory} onChange={(e) => setSubCategory(e.target.value)} required>
                            <option value="">Choose...</option>
                            <option value="Mobile Phones">Mobile Phones</option>
                            <option value="Men's Wear">Men's Wear</option>
                            <option value="Kitchen Appliances">Kitchen Appliances</option>
                          </select>
                        </div>
                      </div>

                      <div className="row mb-3">
                        <div className="col-md-4">
                          <label className="form-label">ChildCategory Name:</label>
                          <input
                            type="text"
                            className="form-control"
                            value={childCategoryName}
                            onChange={(e) => setChildCategoryName(e.target.value)}
                            required
                          />
                        </div>
                        <div className="col-md-4">
                          <label className="form-label">Description:</label>
                          <textarea
                            className="form-control"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                          ></textarea>
                        </div>
                        <div className="col-md-4">
                          <label className="form-label">Order Number:</label>
                          <input
                            type="number"
                            className="form-control"
                            value={orderNumber}
                            onChange={(e) => setOrderNumber(e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="d-flex justify-content-end">
                        <button type="button" className="btn btn-secondary me-2" onClick={() => setShowModal(false)}>
                          Cancel
                        </button>
                        <button type="submit" className="btn btn-primary">
                          Save
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
      <AdminFooter />
    </div>
  );
};

export default ChildCategory;
